import {VideoMetadata} from './video-component/VideoMetadata';
import {SourceCodeMetadata} from './source-code/SourceCodeMetadata';
import {ParagraphMetadata} from './paragraph/ParagraphMetadata';
import {HeadingMetadata} from './heading/HeadingMetadata';
import {InfoBoxComponent} from './info-box/info-box.component';
import {ListMetadata} from './list/ListMetadata';

export interface ContentComponent {
  componentType?: ComponentType;
  metadata: Metadata;
}

export enum ComponentType {
  video,
  sourceCode,
  paragraph,
  heading,
  infoBox,
  list
}

export type Metadata = VideoMetadata | SourceCodeMetadata | ParagraphMetadata | HeadingMetadata | InfoBoxComponent | ListMetadata;
