import { 
  Image, Users, Images, Maximize2, UserCog, 
  Camera, Palette, Shirt, Cpu, ArrowRight, Sparkles, TrendingUp, Zap
} from 'lucide-react';
import type { ModuleId } from '../App';

interface DashboardProps {
  onNavigate: (moduleId: ModuleId) => void;
}

const features = [
  { id: 'image-gen' as ModuleId, label: 'AI Image Gen', desc: 'Text-to-image with local SDXL, FLUX', icon: <Image size={24} />, color: 'from-[#ccff00] to-[#99cc00]', new: true },
  { id: 'influencers' as ModuleId, label: 'AI Influencers', desc: 'Create virtual influencers', icon: <Users size={24} />, color: 'from-[#ff0066] to-[#cc0052]' },
  { id: 'photodump' as ModuleId, label: 'Photodump', desc: 'Bulk enhance & organize', icon: <Images size={24} />, color: 'from-[#0066ff] to-[#0044cc]' },
  { id: 'upscale' as ModuleId, label: '4K Upscale', desc: 'Real-ESRGAN upscaling', icon: <Maximize2 size={24} />, color: 'from-[#00ff88] to-[#00cc6a]' },
  { id: 'faceswap' as ModuleId, label: 'Face Swap', desc: 'Advanced face swapping', icon: <UserCog size={24} />, color: 'from-[#ff6600] to-[#cc5200]' },
  { id: 'cinematic' as ModuleId, label: 'Cinematic Cam', desc: 'Pro camera simulation', icon: <Camera size={24} />, color: 'from-[#cc00ff] to-[#9900cc]', pro: true },
  { id: 'canvas' as ModuleId, label: 'AI Canvas', desc: 'Infinite creative canvas', icon: <Palette size={24} />, color: 'from-[#00ccff] to-[#0099cc]' },
  { id: 'fashion' as ModuleId, label: 'Fashion Factory', desc: 'AI fashion design', icon: <Shirt size={24} />, color: 'from-[#ffcc00] to-[#cc9900]', new: true },
];

const stats = [
  { label: 'Models Available', value: '15+', icon: <Cpu size={16} />, trend: '+3 this week' },
  { label: 'Images Generated', value: '1.2M', icon: <Image size={16} />, trend: '+24% today' },
  { label: 'GPU Memory', value: '12GB', icon: <Zap size={16} />, trend: 'CUDA Ready' },
  { label: 'Active Jobs', value: '3', icon: <TrendingUp size={16} />, trend: 'Running' },
];

const recentActivity = [
  { action: 'Generated 4 images', model: 'SDXL 1.0', time: '2 min ago', type: 'image' },
  { action: 'Upscaled to 4K', model: 'Real-ESRGAN', time: '15 min ago', type: 'upscale' },
  { action: 'Face swap complete', model: 'InsightFace', time: '1 hr ago', type: 'faceswap' },
  { action: 'Downloaded model', model: 'FLUX.1-dev', time: '2 hrs ago', type: 'download' },
  { action: 'Created influencer', model: 'Soul ID', time: '3 hrs ago', type: 'influencer' },
];

export default function Dashboard({ onNavigate }: DashboardProps) {
  return (
    <div className="space-y-8 animate-fade-in">
      {/* Hero */}
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-[#111] via-[#0a0a0a] to-[#111] border border-[#222] p-8">
        <div className="absolute inset-0 grid-pattern opacity-50" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#ccff00]/5 rounded-full blur-[100px]" />
        
        <div className="relative z-10 flex items-center justify-between">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <span className="px-3 py-1 rounded-full bg-[#ccff00]/10 text-[#ccff00] text-xs font-semibold border border-[#ccff00]/20">
                OPEN SOURCE
              </span>
              <span className="px-3 py-1 rounded-full bg-[#00ff88]/10 text-[#00ff88] text-xs font-semibold border border-[#00ff88]/20">
                v1.0.0
              </span>
            </div>
            <h1 className="text-4xl font-bold">
              Welcome to <span className="text-gradient">IND FIELD GEN</span>
            </h1>
            <p className="text-[#888] max-w-xl text-lg leading-relaxed">
              The open-source AI creative studio. Generate images, create virtual influencers, 
              upscale to 4K, swap faces, and more — all running locally with HuggingFace models.
            </p>
            <div className="flex items-center gap-3 pt-2">
              <button 
                onClick={() => onNavigate('image-gen')}
                className="btn-primary flex items-center gap-2"
              >
                <Sparkles size={18} />
                Start Creating
              </button>
              <button 
                onClick={() => onNavigate('model-hub')}
                className="btn-secondary flex items-center gap-2"
              >
                <Cpu size={18} />
                Setup Models
              </button>
            </div>
          </div>
          
          <div className="hidden lg:block relative">
            <div className="w-64 h-64 rounded-2xl bg-gradient-to-br from-[#ccff00]/20 to-[#00ff88]/10 border border-[#ccff00]/20 flex items-center justify-center animate-float">
              <div className="text-center space-y-3">
                <Sparkles size={48} className="text-[#ccff00] mx-auto" />
                <p className="text-sm text-[#888]">AI-Powered</p>
                <p className="text-2xl font-bold text-white">Creative Studio</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat, i) => (
          <div key={i} className="card-dark p-4 card-hover">
            <div className="flex items-center justify-between mb-3">
              <div className="p-2 rounded-lg bg-[#1a1a1a] text-[#ccff00]">
                {stat.icon}
              </div>
              <span className="text-[10px] text-[#00ff88] bg-[#00ff88]/10 px-2 py-0.5 rounded-full">
                {stat.trend}
              </span>
            </div>
            <p className="text-2xl font-bold text-white">{stat.value}</p>
            <p className="text-xs text-[#666] mt-1">{stat.label}</p>
          </div>
        ))}
      </div>

      {/* Feature Grid */}
      <div>
        <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
          <Zap size={18} className="text-[#ccff00]" />
          Creative Tools
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {features.map((feature) => (
            <button
              key={feature.id}
              onClick={() => onNavigate(feature.id)}
              className="group card-dark p-5 text-left card-hover relative overflow-hidden"
            >
              <div className={`absolute top-0 right-0 w-24 h-24 bg-gradient-to-br ${feature.color} opacity-5 rounded-full blur-2xl group-hover:opacity-10 transition-opacity`} />
              
              <div className="relative z-10">
                <div className="flex items-center justify-between mb-4">
                  <div className={`p-3 rounded-xl bg-gradient-to-br ${feature.color} text-white`}>
                    {feature.icon}
                  </div>
                  <ArrowRight size={16} className="text-[#555] group-hover:text-[#ccff00] group-hover:translate-x-1 transition-all" />
                </div>
                
                <div className="flex items-center gap-2 mb-2">
                  <h4 className="font-semibold text-white">{feature.label}</h4>
                  {feature.new && (
                    <span className="px-1.5 py-0.5 rounded bg-[#ccff00]/20 text-[#ccff00] text-[9px] font-bold">NEW</span>
                  )}
                  {feature.pro && (
                    <span className="px-1.5 py-0.5 rounded bg-[#ff0066]/20 text-[#ff0066] text-[9px] font-bold">PRO</span>
                  )}
                </div>
                <p className="text-sm text-[#666]">{feature.desc}</p>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Recent Activity + Quick Tips */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Activity Feed */}
        <div className="lg:col-span-2 card-dark p-6">
          <h3 className="text-lg font-semibold mb-4">Recent Activity</h3>
          <div className="space-y-3">
            {recentActivity.map((activity, i) => (
              <div key={i} className="flex items-center gap-4 p-3 rounded-lg bg-[#1a1a1a]/50 hover:bg-[#1a1a1a] transition-colors">
                <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                  activity.type === 'image' ? 'bg-[#ccff00]/10 text-[#ccff00]' :
                  activity.type === 'upscale' ? 'bg-[#00ff88]/10 text-[#00ff88]' :
                  activity.type === 'faceswap' ? 'bg-[#ff6600]/10 text-[#ff6600]' :
                  activity.type === 'download' ? 'bg-[#0066ff]/10 text-[#0066ff]' :
                  'bg-[#ff0066]/10 text-[#ff0066]'
                }`}>
                  {activity.type === 'image' && <Image size={18} />}
                  {activity.type === 'upscale' && <Maximize2 size={18} />}
                  {activity.type === 'faceswap' && <UserCog size={18} />}
                  {activity.type === 'download' && <Cpu size={18} />}
                  {activity.type === 'influencer' && <Users size={18} />}
                </div>
                <div className="flex-1">
                  <p className="text-sm font-medium text-white">{activity.action}</p>
                  <p className="text-xs text-[#666]">{activity.model}</p>
                </div>
                <span className="text-xs text-[#555]">{activity.time}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Quick Tips */}
        <div className="card-dark p-6">
          <h3 className="text-lg font-semibold mb-4">Quick Tips</h3>
          <div className="space-y-4">
            {[
              { tip: 'Install SDXL from Model Hub for fastest image generation', action: 'Go to Model Hub', module: 'model-hub' as ModuleId },
              { tip: 'Use 4K Upscale before printing any generated images', action: 'Try Upscale', module: 'upscale' as ModuleId },
              { tip: 'Create consistent characters with AI Influencers', action: 'Create Influencer', module: 'influencers' as ModuleId },
              { tip: 'Face Swap works best with well-lit frontal photos', action: 'Try Face Swap', module: 'faceswap' as ModuleId },
            ].map((item, i) => (
              <div key={i} className="p-3 rounded-lg bg-[#1a1a1a]/50 border border-[#222]">
                <p className="text-sm text-[#aaa] mb-2">{item.tip}</p>
                <button 
                  onClick={() => onNavigate(item.module)}
                  className="text-xs text-[#ccff00] hover:underline flex items-center gap-1"
                >
                  {item.action} <ArrowRight size={10} />
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
