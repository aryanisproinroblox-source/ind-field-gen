import { 
  LayoutDashboard, Image, Users, Images, Maximize2, 
  UserCog, Camera, Palette, Shirt, Cpu, Settings, 
  ChevronLeft, ChevronRight, Sparkles, Zap
} from 'lucide-react';
import type { ModuleId } from '../App';

interface SidebarProps {
  activeModule: ModuleId;
  onModuleChange: (moduleId: ModuleId) => void;
  collapsed: boolean;
  onToggleCollapse: () => void;
}

const navItems: { id: ModuleId; label: string; icon: React.ReactNode; badge?: string }[] = [
  { id: 'dashboard', label: 'Dashboard', icon: <LayoutDashboard size={20} /> },
  { id: 'image-gen', label: 'AI Image Gen', icon: <Image size={20} />, badge: 'NEW' },
  { id: 'influencers', label: 'AI Influencers', icon: <Users size={20} /> },
  { id: 'photodump', label: 'Photodump', icon: <Images size={20} /> },
  { id: 'upscale', label: '4K Upscale', icon: <Maximize2 size={20} /> },
  { id: 'faceswap', label: 'Face Swap', icon: <UserCog size={20} /> },
  { id: 'cinematic', label: 'Cinematic Cam', icon: <Camera size={20} />, badge: 'PRO' },
  { id: 'canvas', label: 'AI Canvas', icon: <Palette size={20} /> },
  { id: 'fashion', label: 'Fashion Factory', icon: <Shirt size={20} />, badge: 'NEW' },
  { id: 'model-hub', label: 'Model Hub', icon: <Cpu size={20} /> },
  { id: 'settings', label: 'Settings', icon: <Settings size={20} /> },
];

export default function Sidebar({ activeModule, onModuleChange, collapsed, onToggleCollapse }: SidebarProps) {
  return (
    <aside 
      className={`relative bg-[#0d0d0d] border-r border-[#1a1a1a] flex flex-col transition-all duration-300 ${
        collapsed ? 'w-[72px]' : 'w-[260px]'
      }`}
    >
      {/* Logo */}
      <div className="flex items-center gap-3 px-4 h-16 border-b border-[#1a1a1a]">
        <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-[#ccff00] to-[#00ff88] flex items-center justify-center flex-shrink-0">
          <Sparkles size={20} className="text-black" />
        </div>
        {!collapsed && (
          <div className="overflow-hidden">
            <h1 className="font-bold text-lg tracking-tight whitespace-nowrap">
              <span className="text-[#ccff00]">IND</span> FIELD
            </h1>
            <p className="text-[10px] text-[#666] -mt-1 tracking-widest uppercase">GEN</p>
          </div>
        )}
      </div>

      {/* Status Indicator */}
      {!collapsed && (
        <div className="px-4 py-3 border-b border-[#1a1a1a]">
          <div className="flex items-center gap-2 text-xs text-[#888]">
            <Zap size={12} className="text-[#ccff00]" />
            <span>GPU Ready</span>
            <span className="ml-auto w-2 h-2 rounded-full bg-[#00ff88] animate-pulse" />
          </div>
        </div>
      )}

      {/* Navigation */}
      <nav className="flex-1 py-3 px-2 space-y-1 overflow-y-auto scrollbar-thin">
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => onModuleChange(item.id)}
            className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-all duration-200 group relative ${
              activeModule === item.id
                ? 'bg-[#ccff00]/10 text-[#ccff00] border border-[#ccff00]/20'
                : 'text-[#888] hover:text-white hover:bg-[#1a1a1a]'
            }`}
          >
            <span className={activeModule === item.id ? 'text-[#ccff00]' : 'group-hover:text-white'}>
              {item.icon}
            </span>
            {!collapsed && <span className="truncate">{item.label}</span>}
            {!collapsed && item.badge && (
              <span className={`ml-auto text-[9px] font-bold px-1.5 py-0.5 rounded ${
                item.badge === 'NEW' ? 'bg-[#ccff00]/20 text-[#ccff00]' : 
                item.badge === 'PRO' ? 'bg-[#ff0066]/20 text-[#ff0066]' :
                'bg-[#0066ff]/20 text-[#0066ff]'
              }`}>
                {item.badge}
              </span>
            )}
            {collapsed && item.badge && (
              <span className="absolute -top-0.5 -right-0.5 w-2.5 h-2.5 rounded-full bg-[#ccff00]" />
            )}
          </button>
        ))}
      </nav>

      {/* Footer */}
      {!collapsed && (
        <div className="p-4 border-t border-[#1a1a1a]">
          <div className="card-dark p-3">
            <div className="flex items-center gap-2 mb-2">
              <div className="w-6 h-6 rounded bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center">
                <Zap size={12} className="text-white" />
              </div>
              <span className="text-xs font-semibold">Open Source</span>
            </div>
            <p className="text-[10px] text-[#666] leading-relaxed">
              IND FIELD GEN is fully open-source. Connect local HuggingFace models for complete privacy.
            </p>
          </div>
        </div>
      )}

      {/* Collapse Toggle */}
      <button
        onClick={onToggleCollapse}
        className="absolute -right-3 top-20 w-6 h-6 bg-[#1a1a1a] border border-[#333] rounded-full flex items-center justify-center text-[#888] hover:text-white hover:border-[#ccff00] transition-all z-10"
      >
        {collapsed ? <ChevronRight size={12} /> : <ChevronLeft size={12} />}
      </button>
    </aside>
  );
}
