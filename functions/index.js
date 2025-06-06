// functions/index.js
const functions = require('firebase-functions');
const admin = require('firebase-admin');
admin.initializeApp();

// 1. Submit Quiz Attempt
exports.submitQuiz = functions.https.onCall(async (data, context) => {
  const { quizId, answers, timeSpent } = data;
  const userId = context.auth.uid;
  
  // Get quiz questions
  const quiz = await admin.firestore()
    .collection('quizzes')
    .doc(quizId)
    .get();
    
  // Calculate score
  const { score, feedback } = gradeQuiz(quiz.data(), answers);
  
  // Store attempt
  await admin.firestore()
    .collection('users')
    .doc(userId)
    .collection('progress')
    .doc(quizId)
    .collection('attempts')
    .add({
      timestamp: admin.firestore.FieldValue.serverTimestamp(),
      score,
      answers,
      timeSpent,
      feedback
    });
    
  // Update analytics
  await updateAnalytics(quizId, score);
  
  return { score, feedback, passed: score >= quiz.data().passingScore };
});

// 2. Get AI Feedback (for scenario questions)
exports.getAIFeedback = functions.https.onCall(async (data, context) => {
  const { questionId, answer } = data;
  
  // Rate limiting to control costs
  const userCalls = await checkUserCallRate(context.auth.uid);
  if (userCalls > 10) {
    throw new functions.https.HttpsError(
      'resource-exhausted',
      'AI feedback limit reached for today'
    );
  }
  
  // Call Vertex AI or OpenAI
  const feedback = await generateFeedback(questionId, answer);
  
  // Log usage for cost tracking
  await logAIUsage(context.auth.uid, questionId);
  
  return { feedback };
});

