import { CurtainSection } from "./services/curtain-section";
import { DynocSection } from "./services/dynoc-section";
import { FlooringSection } from "./services/flooring-section";
import { WallpaperSection } from "./services/wallpaper-section";

export default function ServicePage() {
  return (
    <div className="py-20 container mx-auto px-4">
      <WallpaperSection />
      <FlooringSection />
      <CurtainSection />
      <DynocSection />
    </div>
  );
}
