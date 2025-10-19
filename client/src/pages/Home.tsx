import { useState, useEffect } from "react";
import { Moon, Sun, Leaf } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTheme } from "@/lib/ThemeProvider";
import { useCamera } from "@/hooks/useCamera";
import { useTensorFlowModel } from "@/hooks/useTensorFlowModel";
import { CameraView } from "@/components/CameraView";
import { ResultDisplay } from "@/components/ResultDisplay";
import { ModelStatus } from "@/components/ModelStatus";
import { useToast } from "@/hooks/use-toast";
import { CLASS_NAMES, type PredictionResult } from "@shared/schema";

export default function Home() {
  const { theme, toggleTheme } = useTheme();
  const { toast } = useToast();
  const { videoRef, state: cameraState, captureImage, startCamera } = useCamera();
  const { progress: modelProgress, predict } = useTensorFlowModel("/plant_model_js/model.json");
  
  const [result, setResult] = useState<PredictionResult | null>(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const [modelError, setModelError] = useState<string | null>(null);

  useEffect(() => {
    if (modelProgress.error) {
      setModelError(modelProgress.error);
      toast({
        title: "Lỗi tải model",
        description: "Model AI chưa được cài đặt đúng. Vui lòng xem hướng dẫn trong README.md",
        variant: "destructive",
      });
    }
  }, [modelProgress.error, toast]);

  const handleCapture = async () => {
    try {
      setIsProcessing(true);
      
      const canvas = captureImage();
      if (!canvas) {
        throw new Error("Không thể chụp ảnh");
      }

      if (!modelProgress.loaded || modelError) {
        toast({
          title: "Demo Mode",
          description: "Model chưa được cài đặt. Hiển thị kết quả demo. Vui lòng xem README.md để cài đặt model thực.",
        });
        
        const demoIndex = Math.floor(Math.random() * CLASS_NAMES.length);
        const demoConfidence = 75 + Math.random() * 20;
        
        setResult({
          className: CLASS_NAMES[demoIndex],
          confidence: demoConfidence,
          timestamp: new Date().toISOString(),
        });
        return;
      }

      const predictions = await predict(canvas);
      const maxIndex = predictions.indexOf(Math.max(...predictions));
      const className = CLASS_NAMES[maxIndex];
      const confidence = predictions[maxIndex] * 100;

      setResult({
        className,
        confidence,
        timestamp: new Date().toISOString(),
      });

      toast({
        title: "Phân tích thành công",
        description: "Kết quả đã sẵn sàng",
      });
    } catch (error) {
      console.error("Prediction error:", error);
      toast({
        title: "Lỗi phân tích",
        description: error instanceof Error ? error.message : "Không thể phân tích ảnh",
        variant: "destructive",
      });
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-50 backdrop-blur-md bg-background/80 border-b border-border">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
                <Leaf className="w-6 h-6 text-primary-foreground" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-foreground" data-testid="text-app-title">
                  Nhận diện bệnh cây
                </h1>
                <p className="text-sm text-muted-foreground">
                  AI Plant Disease Detection
                </p>
              </div>
            </div>
            
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleTheme}
              className="rounded-full"
              data-testid="button-theme-toggle"
            >
              {theme === "light" ? (
                <Moon className="w-5 h-5" />
              ) : (
                <Sun className="w-5 h-5" />
              )}
            </Button>
          </div>
          
          <div className="mt-4">
            <ModelStatus progress={modelProgress} />
          </div>
        </div>
      </header>

      <main className="py-8">
        <CameraView
          videoRef={videoRef}
          state={cameraState}
          onCapture={handleCapture}
          onRetry={startCamera}
          disabled={isProcessing}
        />

        <div className="mt-8">
          <ResultDisplay result={result} />
        </div>
      </main>

      <footer className="py-8 text-center text-sm text-muted-foreground border-t border-border mt-12">
        <p>Hệ thống sử dụng AI để nhận diện bệnh trên lá cây</p>
        <p className="mt-1">Powered by TensorFlow.js • MobileNetV2</p>
      </footer>
    </div>
  );
}
