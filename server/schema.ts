import { z } from "zod";

export const CLASS_NAMES = [
  "Apple___Apple_scab",
  "Apple___Black_rot",
  "Apple___Cedar_apple_rust",
  "Apple___healthy",
  "Blueberry___healthy",
  "Corn_(maize)___Cercospora_leaf_spot Gray_leaf_spot",
  "Corn_(maize)___Common_rust_",
  "Corn_(maize)___Northern_Leaf_Blight",
  "Corn_(maize)___healthy",
  "Grape___Black_rot",
  "Grape___Esca_(Black_Measles)",
  "Grape___healthy",
] as const;

export const predictionResultSchema = z.object({
  className: z.string(),
  confidence: z.number().min(0).max(100),
  timestamp: z.string(),
});

export type PredictionResult = z.infer<typeof predictionResultSchema>;

export interface ModelLoadProgress {
  loaded: boolean;
  progress: number;
  error?: string;
}

export interface CameraState {
  active: boolean;
  loading: boolean;
  error?: string;
  hasPermission?: boolean;
}
