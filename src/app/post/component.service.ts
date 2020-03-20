import {Component, Injectable} from '@angular/core';
import {VideoComponent} from './video-component/video.component';
import {ComponentType} from './ContentComponentMetadata';
import {SourceCodeComponent} from './source-code/source-code.component';

@Injectable({
  providedIn: 'root'
})
export class ComponentService {

  constructor() {
  }

  getComponents(): { componentType: ComponentType, component: any }[] {
    return [
      {
        componentType: ComponentType.video,
        component: VideoComponent
      },
      {
        componentType: ComponentType.sourceCode,
        component: SourceCodeComponent
      }
    ];
  }
}
