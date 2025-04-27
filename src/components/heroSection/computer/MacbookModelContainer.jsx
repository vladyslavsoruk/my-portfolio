import { OrbitControls, PerspectiveCamera, Stage } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense, useContext } from "react";
import { MacbookModel } from "./MacbookModel";
import { LinearProgress } from "@mui/material";
import { LanguageContext } from "../../../providers/LanguageProvider";

const LoadingSkeleton = () => {
  const { t } = useContext(LanguageContext);
  return (
    <div className="computer-model-fallback">
      <p>{t("loadingText")}</p>
      <LinearProgress />
    </div>
  );
};

function MacbookModelContainer() {
  return (
    <Suspense fallback={<LoadingSkeleton></LoadingSkeleton>}>
      <Canvas className="computer-model">
        <Stage environment="studio" intensity={0.5}>
          <MacbookModel />
        </Stage>
        <OrbitControls enableZoom={false} autoRotate />
        <PerspectiveCamera position={[-1, 1, 1]} zoom={0.7} makeDefault />
      </Canvas>
    </Suspense>
  );
}

export default MacbookModelContainer;
