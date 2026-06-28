import { Search, Bell, Download, Github, ExternalLink } from 'lucide-react';
import type { ModuleId } from '../App';

const moduleTitles: Record<ModuleId, { title: string; subtitle: string }> = {
  'dashboard': { title: 'Dashboard', subtitle: 'Overview of your creative workspace' },
  'image-gen': { title: 'AI Image Generator', subtitle: 'Generate stunning images with local AI models' },
  'influencers': { title: 'AI Influencers', subtitle: 'Create and manage virtual influencers' },
  'photodump': { title: 'Photodump', subtitle: 'Bulk process and enhance your images' },
  'upscale': { title: '4K Image Upscale', subtitle: 'Upscale images to 4K resolution' },
  'faceswap': { title: 'Face Swap', subtitle: 'Advanced face swapping with AI' },
  'cinematic': { title: 'Cinematic Cameras', subtitle: 'Professional camera simulation and controls' },
  'canvas': { title: 'AI Canvas', subtitle: 'Creative canvas with AI-powered tools' },
  'fashion': { title: 'Fashion Factory', subtitle: 'AI fashion design and lookbook generation' },
  'model-hub': { title: 'Model Hub', subtitle: 'Manage local HuggingFace AI models' },
  'settings': { title: 'Settings', subtitle: 'Configure IND FIELD GEN' },
};

interface TopBarProps {
  activeModule: ModuleId;
}

export default function TopBar({ activeModule }: TopBarProps) {
  const { title, subtitle } = moduleTitles[activeModule];

  return (
    <header className="h-16 border-b border-[#1a1a1a] bg-[#0d0d0d]/80 backdrop-blur-md flex items-center justify-between px-6">
      <div>
        <h2 className="text-lg font-semibold text-white">{title}</h2>
        <p className="text-xs text-[#666] -mt-0.5">{subtitle}</p>
      </div>
      
      <div className="flex items-center gap-4">
        {/* Search */}
        <div className="relative">
          <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-[#666]" />
          <input 
            type="text" 
            placeholder="Search..."
            className="w-64 bg-[#1a1a1a] border border-[#333] rounded-lg pl-9 pr-4 py-2 text-sm text-white placeholder:text-[#555] focus:outline-none focus:border-[#ccff00]/50 transition-all"
          />
        </div>

        {/* Actions */}
        <div className="flex items-center gap-2">
          <button className="p-2 rounded-lg text-[#888] hover:text-white hover:bg-[#1a1a1a] transition-all relative">
            <Bell size={18} />
            <span className="absolute top-1 right-1 w-2 h-2 rounded-full bg-[#ccff00]" />
          </button>
          <button className="p-2 rounded-lg text-[#888] hover:text-white hover:bg-[#1a1a1a] transition-all">
            <Download size={18} />
          </button>
          <a 
            href="https://github.com/aryanisproinroblox-source/ind-field-gen" 
            target="_blank" 
            rel="noopener noreferrer"
            className="p-2 rounded-lg text-[#888] hover:text-white hover:bg-[#1a1a1a] transition-all flex items-center gap-2 text-sm"
          >
            <Github size={18} />
            <span className="hidden sm:inline">Star on GitHub</span>
            <ExternalLink size={12} className="hidden sm:inline" />
          </a>
        </div>

        {/* User Avatar */}
        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#ccff00] to-[#00ff88] flex items-center justify-center">
          <span className="text-black text-xs font-bold">U</span>
        </div>
      </div>
    </header>
  );
}
