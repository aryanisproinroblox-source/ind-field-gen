import { useState, useRef } from 'react';
import { 
  Sparkles, Download, RefreshCw, Copy, Check, ImagePlus, 
  Sliders, Layers, Wand2, ZoomIn, ZoomOut, Grid3X3, List
} from 'lucide-react';

const models = [
  { id: 'sdxl', name: 'SDXL 1.0', tag: 'FAST', desc: 'Best balance of speed & quality' },
  { id: 'flux', name: 'FLUX.1 [dev]', tag: 'QUALITY', desc: 'Highest fidelity output' },
  { id: 'sd3', name: 'Stable Diffusion 3', tag: 'POPULAR', desc: 'Great for artistic styles' },
  { id: 'soul', name: 'Soul 2.0', tag: 'PHOTO', desc: 'Photorealistic portraits' },
  { id: 'kandinsky', name: 'Kandinsky 3', tag: 'ART', desc: 'Abstract & artistic' },
  { id: 'playground', name: 'Playground v2.5', tag: 'CREATIVE', desc: 'Creative compositions' },
];

const aspectRatios = [
  { label: '1:1', value: '1:1', w: 1024, h: 1024 },
  { label: '16:9', value: '16:9', w: 1024, h: 576 },
  { label: '9:16', value: '9:16', w: 576, h: 1024 },
  { label: '4:3', value: '4:3', w: 1024, h: 768 },
  { label: '3:4', value: '3:4', w: 768, h: 1024 },
  { label: '21:9', value: '21:9', w: 1024, h: 440 },
];

const stylePresets = [
  'Photorealistic', 'Anime', 'Digital Art', 'Oil Painting', 'Watercolor',
  'Cinematic', 'Neon Punk', 'Line Art', '3D Render', 'Pixel Art',
  'Fantasy', 'Cyberpunk', 'Vintage', 'Minimalist', 'Abstract'
];

const samplePrompts = [
  'A futuristic cityscape at sunset with flying vehicles and neon lights reflecting on wet streets',
  'Portrait of a cyberpunk warrior with glowing implants, cinematic lighting, 8k detail',
  'A serene Japanese garden with cherry blossoms, soft morning light, photorealistic',
  'An astronaut floating in a nebula with vibrant colors and cosmic dust particles',
];

export default function ImageGenerator() {
  const [prompt, setPrompt] = useState('');
  const [negativePrompt, setNegativePrompt] = useState('');
  const [selectedModel, setSelectedModel] = useState('sdxl');
  const [selectedRatio, setSelectedRatio] = useState('1:1');
  const [selectedStyle, setSelectedStyle] = useState('Photorealistic');
  const [cfgScale, setCfgScale] = useState(7);
  const [steps, setSteps] = useState(30);
  const [seed, setSeed] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedImages, setGeneratedImages] = useState<string[]>([]);
  const [showAdvanced, setShowAdvanced] = useState(false);
  const [batchSize, setBatchSize] = useState(1);
  const [copied, setCopied] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleGenerate = () => {
    if (!prompt.trim()) return;
    setIsGenerating(true);
    setTimeout(() => {
      const newImages = Array.from({ length: batchSize }, (_, i) => 
        `https://picsum.photos/seed/${Date.now() + i}/1024/1024`
      );
      setGeneratedImages(prev => [...newImages, ...prev]);
      setIsGenerating(false);
    }, 2500);
  };

  const handleUseSample = (sample: string) => {
    setPrompt(sample);
  };

  const handleCopyPrompt = () => {
    navigator.clipboard.writeText(prompt);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleImageUpload = () => {
    fileInputRef.current?.click();
  };

  return (
    <div className="space-y-6 animate-fade-in">
      <div className="grid grid-cols-1 xl:grid-cols-12 gap-6">
        {/* Left Panel - Controls */}
        <div className="xl:col-span-4 space-y-4">
          {/* Prompt Card */}
          <div className="card-dark p-5 space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="font-semibold flex items-center gap-2">
                <Wand2 size={18} className="text-[#ccff00]" />
                Prompt
              </h3>
              <button 
                onClick={() => setShowAdvanced(!showAdvanced)}
                className="text-xs text-[#888] hover:text-[#ccff00] flex items-center gap-1 transition-colors"
              >
                <Sliders size={12} />
                {showAdvanced ? 'Hide' : 'Advanced'}
              </button>
            </div>
            
            <textarea
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              placeholder="Describe the image you want to generate..."
              className="w-full h-32 input-dark resize-none text-sm"
            />
            
            <div className="flex items-center gap-2">
              <button onClick={handleImageUpload} className="btn-secondary text-xs py-2 px-3">
                <ImagePlus size={14} className="inline mr-1" />
                Upload Reference
              </button>
              <input ref={fileInputRef} type="file" accept="image/*" className="hidden" />
              
              {prompt && (
                <button onClick={handleCopyPrompt} className="btn-secondary text-xs py-2 px-3">
                  {copied ? <Check size={14} className="inline mr-1 text-[#00ff88]" /> : <Copy size={14} className="inline mr-1" />}
                  {copied ? 'Copied' : 'Copy'}
                </button>
              )}
            </div>

            {showAdvanced && (
              <div className="space-y-3 pt-2 border-t border-[#222]">
                <div>
                  <label className="text-xs text-[#888] mb-1 block">Negative Prompt</label>
                  <textarea
                    value={negativePrompt}
                    onChange={(e) => setNegativePrompt(e.target.value)}
                    placeholder="What to avoid..."
                    className="w-full h-20 input-dark resize-none text-xs"
                  />
                </div>
                
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="text-xs text-[#888] mb-1 block">CFG Scale: {cfgScale}</label>
                    <input
                      type="range" min={1} max={20} value={cfgScale}
                      onChange={(e) => setCfgScale(Number(e.target.value))}
                      className="w-full accent-[#ccff00]"
                    />
                  </div>
                  <div>
                    <label className="text-xs text-[#888] mb-1 block">Steps: {steps}</label>
                    <input
                      type="range" min={10} max={50} value={steps}
                      onChange={(e) => setSteps(Number(e.target.value))}
                      className="w-full accent-[#ccff00]"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="text-xs text-[#888] mb-1 block">Seed (optional)</label>
                  <input
                    type="text" value={seed}
                    onChange={(e) => setSeed(e.target.value)}
                    placeholder="Random"
                    className="w-full input-dark text-sm py-2"
                  />
                </div>
              </div>
            )}
          </div>

          {/* Model Selection */}
          <div className="card-dark p-5 space-y-3">
            <h3 className="font-semibold flex items-center gap-2">
              <Layers size={18} className="text-[#ccff00]" />
              Model
            </h3>
            <div className="space-y-2 max-h-64 overflow-y-auto scrollbar-thin">
              {models.map((model) => (
                <button
                  key={model.id}
                  onClick={() => setSelectedModel(model.id)}
                  className={`w-full flex items-center gap-3 p-3 rounded-lg text-left transition-all ${
                    selectedModel === model.id
                      ? 'bg-[#ccff00]/10 border border-[#ccff00]/30'
                      : 'bg-[#1a1a1a] border border-transparent hover:border-[#333]'
                  }`}
                >
                  <div className={`w-10 h-10 rounded-lg flex items-center justify-center text-sm font-bold ${
                    selectedModel === model.id ? 'bg-[#ccff00] text-black' : 'bg-[#222] text-[#888]'
                  }`}>
                    {model.name.charAt(0)}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-medium truncate">{model.name}</span>
                      <span className={`text-[9px] font-bold px-1.5 py-0.5 rounded ${
                        model.tag === 'FAST' ? 'bg-[#00ff88]/20 text-[#00ff88]' :
                        model.tag === 'QUALITY' ? 'bg-[#ccff00]/20 text-[#ccff00]' :
                        'bg-[#0066ff]/20 text-[#0066ff]'
                      }`}>
                        {model.tag}
                      </span>
                    </div>
                    <p className="text-xs text-[#666] truncate">{model.desc}</p>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Aspect Ratio */}
          <div className="card-dark p-5 space-y-3">
            <h3 className="font-semibold text-sm">Aspect Ratio</h3>
            <div className="grid grid-cols-3 gap-2">
              {aspectRatios.map((ratio) => (
                <button
                  key={ratio.value}
                  onClick={() => setSelectedRatio(ratio.value)}
                  className={`p-2 rounded-lg text-xs font-medium transition-all ${
                    selectedRatio === ratio.value
                      ? 'bg-[#ccff00] text-black'
                      : 'bg-[#1a1a1a] text-[#888] hover:text-white'
                  }`}
                >
                  {ratio.label}
                </button>
              ))}
            </div>
          </div>

          {/* Style Presets */}
          <div className="card-dark p-5 space-y-3">
            <h3 className="font-semibold text-sm">Style Preset</h3>
            <div className="flex flex-wrap gap-2">
              {stylePresets.map((style) => (
                <button
                  key={style}
                  onClick={() => setSelectedStyle(style)}
                  className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all ${
                    selectedStyle === style
                      ? 'bg-[#ccff00] text-black'
                      : 'bg-[#1a1a1a] text-[#888] hover:text-white border border-[#333]'
                  }`}
                >
                  {style}
                </button>
              ))}
            </div>
          </div>

          {/* Batch Size */}
          <div className="card-dark p-5 space-y-3">
            <div className="flex items-center justify-between">
              <h3 className="font-semibold text-sm">Batch Size: {batchSize}</h3>
              <span className="text-xs text-[#666]">1-8 images</span>
            </div>
            <input
              type="range" min={1} max={8} value={batchSize}
              onChange={(e) => setBatchSize(Number(e.target.value))}
              className="w-full accent-[#ccff00]"
            />
          </div>

          {/* Generate Button */}
          <button
            onClick={handleGenerate}
            disabled={!prompt.trim() || isGenerating}
            className={`w-full btn-primary flex items-center justify-center gap-2 py-4 text-lg ${
              !prompt.trim() || isGenerating ? 'opacity-50 cursor-not-allowed' : ''
            }`}
          >
            {isGenerating ? (
              <>
                <RefreshCw size={20} className="animate-spin" />
                Generating...
              </>
            ) : (
              <>
                <Sparkles size={20} />
                Generate {batchSize > 1 ? `${batchSize} Images` : 'Image'}
              </>
            )}
          </button>
        </div>

        {/* Right Panel - Output */}
        <div className="xl:col-span-8 space-y-4">
          {/* Sample Prompts */}
          {generatedImages.length === 0 && (
            <div className="card-dark p-5">
              <h3 className="text-sm font-semibold text-[#888] mb-3">Try these prompts</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {samplePrompts.map((sample, i) => (
                  <button
                    key={i}
                    onClick={() => handleUseSample(sample)}
                    className="p-3 rounded-lg bg-[#1a1a1a] text-left text-sm text-[#aaa] hover:text-white hover:border-[#ccff00]/30 border border-transparent transition-all"
                  >
                    {sample}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Generated Images Grid */}
          {generatedImages.length > 0 && (
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="font-semibold flex items-center gap-2">
                  <Grid3X3 size={18} className="text-[#ccff00]" />
                  Generated Images ({generatedImages.length})
                </h3>
                <div className="flex items-center gap-2">
                  <button className="p-2 rounded-lg bg-[#1a1a1a] text-[#888] hover:text-white transition-colors">
                    <ZoomIn size={16} />
                  </button>
                  <button className="p-2 rounded-lg bg-[#1a1a1a] text-[#888] hover:text-white transition-colors">
                    <ZoomOut size={16} />
                  </button>
                  <button className="p-2 rounded-lg bg-[#1a1a1a] text-[#888] hover:text-white transition-colors">
                    <List size={16} />
                  </button>
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                {generatedImages.map((img, i) => (
                  <div key={i} className="group relative card-dark overflow-hidden">
                    <img 
                      src={img} 
                      alt={`Generated ${i + 1}`}
                      className="w-full aspect-square object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                    <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform">
                      <div className="flex items-center gap-2">
                        <button className="flex-1 btn-primary text-xs py-2 flex items-center justify-center gap-1">
                          <Download size={14} /> Download
                        </button>
                        <button className="btn-secondary text-xs py-2 px-3">
                          <RefreshCw size={14} />
                        </button>
                      </div>
                    </div>
                    <div className="absolute top-3 right-3 px-2 py-1 rounded bg-black/60 text-[10px] text-[#ccff00] font-medium">
                      {selectedModel.toUpperCase()}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Empty State */}
          {generatedImages.length === 0 && !isGenerating && (
            <div className="card-dark p-12 flex flex-col items-center justify-center text-center min-h-[500px]">
              <div className="w-20 h-20 rounded-2xl bg-[#ccff00]/10 flex items-center justify-center mb-4 animate-pulse-glow">
                <Sparkles size={40} className="text-[#ccff00]" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Ready to Create</h3>
              <p className="text-[#666] max-w-md mb-6">
                Enter a prompt, select a model, and click generate to create stunning AI images 
                using local HuggingFace models.
              </p>
              <div className="flex items-center gap-2 text-xs text-[#555]">
                <span className="px-2 py-1 rounded bg-[#1a1a1a]">Model: {models.find(m => m.id === selectedModel)?.name}</span>
                <span className="px-2 py-1 rounded bg-[#1a1a1a]">Ratio: {selectedRatio}</span>
                <span className="px-2 py-1 rounded bg-[#1a1a1a]">Style: {selectedStyle}</span>
              </div>
            </div>
          )}

          {/* Generating State */}
          {isGenerating && (
            <div className="card-dark p-12 flex flex-col items-center justify-center text-center min-h-[500px]">
              <div className="relative w-24 h-24 mb-6">
                <div className="absolute inset-0 rounded-full border-4 border-[#222]" />
                <div className="absolute inset-0 rounded-full border-4 border-[#ccff00] border-t-transparent animate-spin" />
                <Sparkles size={32} className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[#ccff00]" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Generating Magic</h3>
              <p className="text-[#666]">Running inference on your local GPU...</p>
              <div className="mt-6 w-64 h-2 bg-[#1a1a1a] rounded-full overflow-hidden">
                <div className="h-full bg-gradient-to-r from-[#ccff00] to-[#00ff88] rounded-full animate-pulse" style={{ width: '60%' }} />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
