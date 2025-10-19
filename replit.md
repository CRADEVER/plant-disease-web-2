# Plant Disease Detection App 🌿

A modern web application that uses TensorFlow.js and computer vision to identify plant diseases from camera images in real-time.

## Overview

This is a full-stack JavaScript application that allows users to:
- Capture images using their device camera
- Analyze plant leaves using a pre-trained MobileNetV2 AI model
- Get instant disease diagnosis with confidence scores
- View results in a beautiful, responsive interface

## Tech Stack

### Frontend
- **React** with TypeScript
- **TensorFlow.js** for in-browser AI inference
- **Tailwind CSS** for styling
- **Shadcn UI** components
- **Wouter** for routing
- **WebRTC** for camera access

### Backend
- **Express.js** server
- Static file serving for model files
- CORS and security headers configured

### AI Model
- **MobileNetV2** architecture
- 12 plant disease classes
- Input: 224x224 RGB images
- Output: Disease classification with confidence

## Project Structure

```
├── client/
│   ├── public/
│   │   └── plant_model_js/      # TensorFlow.js model files
│   │       ├── model.json        # Model architecture
│   │       └── *.bin             # Weight shards
│   ├── src/
│   │   ├── components/           # React components
│   │   │   ├── CameraView.tsx    # Camera capture UI
│   │   │   ├── ResultDisplay.tsx # Disease results display
│   │   │   └── ModelStatus.tsx   # Model loading status
│   │   ├── hooks/                # Custom React hooks
│   │   │   ├── useCamera.ts      # Camera management
│   │   │   └── useTensorFlowModel.ts # Model loading/prediction
│   │   ├── pages/
│   │   │   └── Home.tsx          # Main application page
│   │   └── lib/
│   │       └── ThemeProvider.tsx # Dark mode support
├── server/
│   └── routes.ts                 # API endpoints
└── shared/
    └── schema.ts                 # TypeScript types & schemas
```

## Features

### Current Implementation
- ✅ Live camera preview with WebRTC
- ✅ TensorFlow.js model loading with progress indicator
- ✅ Real-time image capture and prediction
- ✅ Confidence score visualization
- ✅ Disease-specific recommendations
- ✅ Dark/light mode toggle
- ✅ Fully responsive mobile-first design
- ✅ Vietnamese language support
- ✅ Error handling and retry mechanisms
- ✅ Loading states with smooth animations

### Supported Plant Diseases
1. Apple - Apple scab
2. Apple - Black rot
3. Apple - Cedar apple rust
4. Apple - Healthy
5. Blueberry - Healthy
6. Corn - Cercospora leaf spot
7. Corn - Common rust
8. Corn - Northern Leaf Blight
9. Corn - Healthy
10. Grape - Black rot
11. Grape - Esca (Black Measles)
12. Grape - Healthy

## Important Notes

### Model Files
⚠️ **Action Required**: The `model.json` file needs to be properly converted from your Keras model. See `client/public/plant_model_js/README.md` for conversion instructions.

The current model.json is a placeholder. You need to:
1. Use `tensorflowjs_converter` to convert your .keras model
2. Or copy your complete converted model.json from Google Colab
3. Ensure weight files match the model architecture

### Camera Access
- Requires HTTPS or localhost
- User must grant camera permissions
- Optimized for mobile device cameras
- Falls back gracefully if camera unavailable

## Development

```bash
# Install dependencies (done automatically on Replit)
npm install

# Start development server
npm run dev
```

The app runs on port 5000 by default.

## Deployment

### Prerequisites
1. Valid TensorFlow.js model files in `client/public/plant_model_js/`
2. HTTPS domain (for camera access)

### Build for Production
```bash
npm run build
```

### Deploy to GitHub
1. Push to GitHub repository
2. Enable GitHub Pages or deploy to Vercel/Netlify
3. Ensure HTTPS is enabled for camera access
4. Model files will be served statically

## Recent Changes

**2025-10-19**: Initial implementation
- Created complete frontend with camera integration
- Implemented TensorFlow.js model loading system
- Built responsive UI with dark mode
- Added Vietnamese language support
- Set up Express server for static file serving

## User Preferences
- Language: Vietnamese (primary), English (secondary)
- Theme: Supports both light and dark modes
- Design: Material Design approach with plant-themed colors
- Mobile-first responsive design

## Architecture Decisions

### Why TensorFlow.js?
- Client-side inference (no server costs)
- Real-time predictions
- Works offline after model loads
- Privacy-friendly (images never leave device)

### Why MobileNetV2?
- Lightweight model (< 15MB)
- Fast inference on mobile devices
- Good accuracy for plant disease detection
- Well-supported by TensorFlow.js

### Design System
- Green color palette (plant-themed)
- High contrast for accessibility
- Smooth animations for confidence
- Clear visual feedback for states
