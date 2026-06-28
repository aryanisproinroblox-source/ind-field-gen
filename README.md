# <span style="color:#ccff00">IND</span> FIELD GEN

<p align="center">
  <img src="public/logo.png" alt="IND FIELD GEN Logo" width="180" />
</p>

<p align="center">
  <strong>The Open Source AI Creative Studio</strong><br/>
  Generate images, create AI influencers, upscale to 4K, face swap, and more — all running locally.
</p>

<p align="center">
  <a href="#features">Features</a> •
  <a href="#screenshots">Screenshots</a> •
  <a href="#installation">Installation</a> •
  <a href="#usage">Usage</a> •
  <a href="#tech-stack">Tech Stack</a> •
  <a href="#contributing">Contributing</a> •
  <a href="#license">License</a>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/version-1.0.0-%23ccff00?style=for-the-badge" />
  <img src="https://img.shields.io/badge/license-MIT-%23ccff00?style=for-the-badge" />
  <img src="https://img.shields.io/badge/platform-Windows%20%7C%20Mac%20%7C%20Linux-%23ccff00?style=for-the-badge" />
  <img src="https://img.shields.io/badge/GPU-CUDA%20Ready-%2300ff88?style=for-the-badge" />
</p>

---

## Features

IND FIELD GEN is a fully-featured open-source AI creative studio inspired by professional tools like Higgsfield AI. Everything runs locally on your machine using HuggingFace models — **your data never leaves your computer**.

### Core Modules

| Module | Description | Models |
|--------|-------------|--------|
| **AI Image Generator** | Text-to-image generation with multiple models | SDXL 1.0, FLUX.1, Stable Diffusion 3, Kandinsky 3 |
| **AI Influencers** | Create and manage virtual influencers with consistent identity | Soul ID, Custom LoRA |
| **Photodump** | Bulk process, enhance, and organize images | Batch processing pipeline |
| **4K Upscale** | Super-resolution upscaling to 4K and beyond | Real-ESRGAN, SwinIR, BSRGAN, CodeFormer |
| **Face Swap** | Advanced face swapping with high fidelity | InsightFace, Roop, SimSwap |
| **Cinematic Cameras** | Professional camera simulation with optical physics | Arri, RED, Sony, Panavision presets |
| **AI Canvas** | Infinite creative canvas with AI-powered tools | Inpainting, Outpainting, AI Fill |
| **Fashion Factory** | AI fashion design and lookbook generation | Custom fashion diffusion models |
| **Model Hub** | Download and manage HuggingFace models locally | 15+ models supported |

### Key Highlights

- **100% Local Processing** — All AI inference runs on your GPU. No cloud uploads.
- **Multiple AI Models** — Choose from 15+ leading open-source models.
- **Professional UI** — Dark theme with customizable accent colors inspired by Higgsfield AI.
- **Batch Processing** — Process hundreds of images at once.
- **Cross-Platform** — Works on Windows, macOS, and Linux.
- **Open Source** — MIT licensed. Free forever.

---

## Screenshots

<p align="center">
  <img src="public/showcase-1.jpg" alt="AI Image Generation" width="80%" />
  <br/>
  <em>AI Image Generation Interface</em>
</p>

<p align="center">
  <img src="public/showcase-2.jpg" alt="Dashboard" width="80%" />
  <br/>
  <em>Creative Studio Dashboard</em>
</p>

<p align="center">
  <img src="public/showcase-3.jpg" alt="Fashion Design" width="60%" />
  <br/>
  <em>AI-Generated Fashion Design</em>
</p>

---

## Installation

### Prerequisites

- **Node.js** 18+ and npm/yarn
- **Python** 3.10+ with pip
- **CUDA** 12.1+ (for NVIDIA GPU support)
- **Git**

### Quick Start

```bash
# Clone the repository
git clone https://github.com/aryanisproinroblox-source/ind-field-gen.git
cd ind-field-gen

# Install frontend dependencies
npm install

# Install Python backend dependencies
pip install -r requirements.txt

# Start the development server
npm run dev
```

### Backend Setup (Python)

The Python backend handles AI model inference using HuggingFace Transformers and Diffusers.

```bash
# Create virtual environment (recommended)
python -m venv venv

# Activate it
# Windows:
venv\Scripts\activate
# macOS/Linux:
source venv/bin/activate

# Install dependencies
pip install torch torchvision torchaudio --index-url https://download.pytorch.org/whl/cu121
pip install diffusers transformers accelerate safetensors
pip install insightface onnxruntime-gpu
pip install realesrgan basicsr
pip install opencv-python pillow numpy
pip install fastapi uvicorn

# Start the API server
python backend/main.py
```

### Build for Production

```bash
# Build the frontend
npm run build

# The built app will be in the dist/ directory
```

---

## Usage

### 1. Launch the App

Start both the frontend and backend:

```bash
# Terminal 1 - Frontend
npm run dev

# Terminal 2 - Backend
python backend/main.py
```

### 2. Download Models

Navigate to the **Model Hub** and install the AI models you need:

- **SDXL 1.0** — General image generation
- **Real-ESRGAN** — Image upscaling
- **InsightFace** — Face analysis and swap
- **FLUX.1** — High-quality image generation

### 3. Start Creating

- **Generate Images** — Go to AI Image Gen, enter a prompt, select a model, and generate.
- **Create Influencers** — Go to AI Influencers, set up a persona, and generate content.
- **Upscale Images** — Go to 4K Upscale, upload an image, and enhance it.
- **Face Swap** — Go to Face Swap, upload source and target images.
- **Design Fashion** — Go to Fashion Factory, describe your design.

---

## Tech Stack

### Frontend
- **React 19** with TypeScript
- **Vite** for fast builds
- **Tailwind CSS** for styling
- **shadcn/ui** components
- **Lucide React** icons

### Backend
- **Python 3.10+**
- **FastAPI** for REST API
- **PyTorch** with CUDA support
- **Diffusers** (HuggingFace) for diffusion models
- **Transformers** for NLP tasks
- **OpenCV** for image processing
- **Real-ESRGAN** for super-resolution
- **InsightFace** for face analysis

### AI Models Supported
| Model | Type | Size |
|-------|------|------|
| SDXL 1.0 | Image Generation | 6.9 GB |
| FLUX.1 [dev] | Image Generation | 23.8 GB |
| Stable Diffusion 3 | Image Generation | 15.4 GB |
| Kandinsky 3 | Image Generation | 12.1 GB |
| Real-ESRGAN x4 | Upscaling | 64 MB |
| SwinIR | Upscaling | 75 MB |
| CodeFormer | Face Restoration | 360 MB |
| InsightFace | Face Analysis | 380 MB |
| Roop | Face Swap | 540 MB |

---

## Project Structure

```
ind-field-gen/
├── src/
│   ├── components/        # UI components (Sidebar, TopBar)
│   ├── modules/           # Feature modules
│   │   ├── Dashboard.tsx      # Main dashboard
│   │   ├── ImageGenerator.tsx # AI image generation
│   │   ├── AIInfluencers.tsx  # Virtual influencer creation
│   │   ├── Photodump.tsx      # Bulk image processing
│   │   ├── ImageUpscale.tsx   # 4K upscaling
│   │   ├── FaceSwap.tsx       # Face swapping
│   │   ├── CinematicCameras.tsx # Camera simulation
│   │   ├── Canvas.tsx         # Creative canvas
│   │   ├── FashionFactory.tsx # Fashion design
│   │   ├── ModelHub.tsx       # HuggingFace model management
│   │   └── Settings.tsx       # App settings
│   ├── types/             # TypeScript types
│   ├── App.tsx            # Main app component
│   └── index.css          # Global styles
├── backend/               # Python FastAPI backend
│   ├── main.py            # API server
│   ├── models/            # Model loading and inference
│   └── utils/             # Utility functions
├── public/                # Static assets
└── package.json
```

---

## Contributing

We welcome contributions from the community! Here's how to get started:

1. **Fork** the repository
2. **Create** a feature branch: `git checkout -b feature/amazing-feature`
3. **Commit** your changes: `git commit -m 'Add amazing feature'`
4. **Push** to the branch: `git push origin feature/amazing-feature`
5. **Open** a Pull Request

### Contribution Ideas
- Add new AI models to the Model Hub
- Improve the UI/UX
- Add new creative tools
- Optimize inference speed
- Write documentation
- Report bugs and suggest features

---

## Roadmap

- [ ] **Video Generation** — Text-to-video and image-to-video
- [ ] **Audio Generation** — AI music and sound effects
- [ ] **3D Generation** — Text-to-3D model generation
- [ ] **Plugins System** — Extensible plugin architecture
- [ ] **Cloud Sync** — Optional cloud backup for projects
- [ ] **Mobile App** — iOS and Android companion apps
- [ ] **ComfyUI Integration** — Visual node-based workflow editor
- [ ] **Training Pipeline** — Train custom LoRA models

---

## License

This project is licensed under the **MIT License** — see the [LICENSE](LICENSE) file for details.

---

## Acknowledgments

IND FIELD GEN is built on the incredible work of the open-source AI community:

- [HuggingFace](https://huggingface.co/) — Model hub and diffusers library
- [Stability AI](https://stability.ai/) — Stable Diffusion models
- [Black Forest Labs](https://blackforestlabs.ai/) — FLUX models
- [Real-ESRGAN](https://github.com/xinntao/Real-ESRGAN) — Image super-resolution
- [InsightFace](https://github.com/deepinsight/insightface) — Face analysis
- [ComfyUI](https://github.com/comfyanonymous/ComfyUI) — Workflow inspiration

Special thanks to all the researchers and developers who make their models and tools freely available.

---

<p align="center">
  Made with 💚 by the IND FIELD GEN community
</p>
