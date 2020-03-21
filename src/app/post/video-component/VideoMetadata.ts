export interface VideoMetadata {
  type: 'mp4' | 'youtube';
  source: string;
  startTime?: number;
  autoplay?: boolean;
}
