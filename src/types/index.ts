export interface NavItem {
  id: string;
  label: string;
  icon: string;
  badge?: string;
}

export interface AIModel {
  id: string;
  name: string;
  description: string;
  type: 'image' | 'video' | 'audio' | 'upscale' | 'faceswap';
  status: 'ready' | 'downloading' | 'install';
  size: string;
  tags: string[];
  downloads: number;
}

export interface GeneratedImage {
  id: string;
  url: string;
  prompt: string;
  model: string;
  timestamp: Date;
  width: number;
  height: number;
}

export interface InfluencerProfile {
  id: string;
  name: string;
  avatar: string;
  style: string;
  personality: string;
  followers: number;
  posts: number;
  photos: string[];
}

export interface CinematicPreset {
  id: string;
  name: string;
  camera: string;
  lens: string;
  focalLength: string;
  aperture: string;
  description: string;
}

export type AspectRatio = '1:1' | '16:9' | '9:16' | '4:3' | '3:4' | '21:9';

export type Resolution = '512' | '1024' | '2048' | '4096';
