import {ContentComponent} from './ContentComponentMetadata';

export interface Post {
  title: string;
  id: number;
  uniqueId: number;
  categoryId?: number;
  languageId?: number;
  content: ContentComponent[];
  excerpt?: string;
  seriesId?: number;
  seriesOrderPosition?: number;
  indexImageLink?: string;

}
