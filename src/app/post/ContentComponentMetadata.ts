import {VideoMetadata} from './video-component/VideoMetadata';
import {SourceCodeMetadata} from './source-code/SourceCodeMetadata';

export interface ContentComponent {
  componentType?: ComponentType;
  metadata: Metadata;
}
export enum ComponentType {
  video,
  sourceCode
}
export type Metadata = VideoMetadata | SourceCodeMetadata;
