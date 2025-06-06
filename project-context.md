# Radiation Safety Training App - Project Context

## Quick Context for AI Assistant
This document provides context for continuing development across chat sessions. Read this first to understand project state and goals.

## Project Overview
- **What**: Web-based radiation safety training course with textbook, simulations, quizzes, and virtual labs
- **For**: University students and professionals working with radioactive materials
- **Tech Stack**: React, Firebase (Hosting, Auth, Firestore, Functions), Google Cloud
- **Status**: Initial setup phase, moving from prototype to production

## Key Stakeholders
- **Content Owner**: John J. Pickering (retired, author of textbook)
- **Developer**: Lori Pickering (Python/ML background, learning React/frontend)
- **End Users**: Small specialized population requiring radiation safety certification

## Project Goals

### Business Goals
1. Preserve John's 40+ years of radiation safety expertise
2. Monetize the course (subscription model) OR offer free with donations
3. Provide certification/completion tracking for institutions
4. Low maintenance after initial setup (retired owner)

### Technical Goals (Lori's Learning Objectives)
1. Gain frontend development experience (React)
2. Learn Google Cloud Platform for ML Engineer certification
3. Build production-ready application with real users
4. Implement AI features for enhanced learning

## Current Architecture Decisions

### Content Structure
```
- 25 Chapters from text.pdf
- Quizzes: AI-generated, expert-reviewed
- Simulations: Interactive JavaScript modules
- Virtual Labs: Scenario-based exercises
```

### Data Storage Strategy
- **Phase 1**: JSON files for content (quizzes, chapters)
- **Phase 2**: Firestore for user data, progress, analytics
- **Rationale**: Start simple, migrate as needed

### Technology Choices
- **Frontend**: React (Create React App)
- **Hosting**: Firebase Hosting (moving from GitHub Pages)
- **Database**: Firestore
- **Backend**: Cloud Functions
- **Auth**: Firebase Auth
- **AI**: Vertex AI or OpenAI API for feedback
- **Payments**: Stripe (future)

## Implementation Plan

### Phase 1: Foundation (Weeks 1-2) ✓ CURRENT
- [x] Basic React app structure
- [x] Component organization
- [x] Global styles setup
- [x] Config for paywall/features
- [ ] Firebase project setup
- [ ] Deploy to Firebase Hosting
- [ ] Basic authentication

### Phase 2: Content System (Weeks 3-4)
- [ ] Firestore schema implementation
- [ ] Quiz creation/editing tools
- [ ] Quiz taking interface
- [ ] Basic progress tracking
- [ ] Chapter content loading

### Phase 3: Advanced Features (Weeks 5-6)
- [ ] AI feedback for scenario questions
- [ ] Complex question types (calculations, multiple select)
- [ ] Student analytics dashboard
- [ ] PDF viewer integration
- [ ] Simulation improvements

### Phase 4: Monetization (Weeks 7-8)
- [ ] Stripe integration
- [ ] Subscription management
- [ ] Free trial / preview logic
- [ ] Institution bulk licensing

## Database Schema (Firestore)

```javascript
users/{userId}/
  - profile: { email, name, subscription, enrollmentDate }
  - progress/{quizId}/
    - attempts: [{ timestamp, score, answers, timeSpent }]

quizzes/{quizId}/
  - metadata: { title, chapter, difficulty, passingScore }
  - questions: [ /* array of question objects */ ]

content/chapters/{chapterId}/
  - { title, sections, pdfPage, freePreview }

analytics/
  - aggregated metrics
  - cost tracking
```

## Question Types Supported
1. **Multiple Choice**: Standard single answer
2. **Multiple Select**: Multiple correct answers
3. **True/False**: Binary choice
4. **Scenario**: Text response with AI evaluation
5. **Calculation**: Numerical answer with tolerance

## Cost Considerations
- **Budget**: ~$50-100/month acceptable for learning
- **Revenue Model**: $10-20/month subscription
- **Break-even**: ~10 subscribers
- **Cost Controls**: AI usage limits, caching, efficient queries

## Current File Structure
```
radiation_safety/
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   ├── pages/
│   │   │   ├── simulations/
│   │   │   └── quizzes/
│   │   ├── config/
│   │   │   └── appConfig.js (paywall settings)
│   │   ├── data/ (future: JSON content)
│   │   └── styles/
│   │       └── globals.css
│   └── package.json
├── functions/ (future: Cloud Functions)
└── firebase.json
```

## Key Technical Decisions Made
1. **No TypeScript** initially (learn React first)
2. **JSON before Database** (simpler deployment)
3. **Paywall Optional** (config flag)
4. **AI as Enhancement** (not required feature)
5. **Progressive Enhancement** (start simple, add features)

## Open Questions/Decisions
1. Certification/completion certificates?
2. Institutional admin dashboard?
3. Video content integration?
4. Mobile app needed?
5. Offline support requirements?

## Next Immediate Steps
1. Complete Firebase setup and deployment
2. Create Firestore database schema
3. Build quiz submission system
4. Implement user progress tracking

## Useful Commands
```bash
# Development
cd frontend && npm start

# Build
cd frontend && npm run build

# Deploy
firebase deploy

# Firebase emulators (local testing)
firebase emulators:start
```

## Resources
- Textbook: `/documents/Text.pdf`
- Original prototype: `frontend/src/App.js.backup`
- Firebase Console: [to be added after setup]
- Figma/Design: [none yet]

## Session Recovery Checklist
When starting new session:
1. Check current implementation phase
2. Review recent code changes
3. Verify Firebase/Cloud setup status
4. Check for any blocking issues
5. Continue with next immediate steps

---
Last Updated: Session where we decided on full cloud architecture
Current Focus: Setting up Firebase and moving beyond prototype