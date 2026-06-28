import { useState, useCallback } from 'react';
import Sidebar from './components/Sidebar';
import TopBar from './components/TopBar';
import Dashboard from './modules/Dashboard';
import ImageGenerator from './modules/ImageGenerator';
import AIInfluencers from './modules/AIInfluencers';
import Photodump from './modules/Photodump';
import ImageUpscale from './modules/ImageUpscale';
import FaceSwap from './modules/FaceSwap';
import CinematicCameras from './modules/CinematicCameras';
import Canvas from './modules/Canvas';
import FashionFactory from './modules/FashionFactory';
import ModelHub from './modules/ModelHub';
import Settings from './modules/Settings';

export type ModuleId = 
  | 'dashboard'
  | 'image-gen'
  | 'influencers'
  | 'photodump'
  | 'upscale'
  | 'faceswap'
  | 'cinematic'
  | 'canvas'
  | 'fashion'
  | 'model-hub'
  | 'settings';

export default function App() {
  const [activeModule, setActiveModule] = useState<ModuleId>('dashboard');
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

  const handleModuleChange = useCallback((moduleId: ModuleId) => {
    setActiveModule(moduleId);
  }, []);

  const renderModule = () => {
    switch (activeModule) {
      case 'dashboard': return <Dashboard onNavigate={handleModuleChange} />;
      case 'image-gen': return <ImageGenerator />;
      case 'influencers': return <AIInfluencers />;
      case 'photodump': return <Photodump />;
      case 'upscale': return <ImageUpscale />;
      case 'faceswap': return <FaceSwap />;
      case 'cinematic': return <CinematicCameras />;
      case 'canvas': return <Canvas />;
      case 'fashion': return <FashionFactory />;
      case 'model-hub': return <ModelHub />;
      case 'settings': return <Settings />;
      default: return <Dashboard onNavigate={handleModuleChange} />;
    }
  };

  return (
    <div className="flex h-screen w-screen bg-[#0a0a0a] text-white overflow-hidden">
      <Sidebar 
        activeModule={activeModule} 
        onModuleChange={handleModuleChange}
        collapsed={sidebarCollapsed}
        onToggleCollapse={() => setSidebarCollapsed(!sidebarCollapsed)}
      />
      <div className="flex-1 flex flex-col min-w-0">
        <TopBar activeModule={activeModule} />
        <main className="flex-1 overflow-y-auto scrollbar-thin p-6">
          <div className="max-w-[1600px] mx-auto">
            {renderModule()}
          </div>
        </main>
      </div>
    </div>
  );
}
