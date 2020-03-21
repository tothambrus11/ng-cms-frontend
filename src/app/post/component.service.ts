import {Component, Injectable} from '@angular/core';
import {VideoComponent} from './video-component/video.component';
import {ComponentType} from './ContentComponentMetadata';
import {SourceCodeComponent} from './source-code/source-code.component';
import {ParagraphComponent} from './paragraph/paragraph.component';
import {HeadingComponent} from './heading/heading.component';
import {InfoBoxComponent} from './info-box/info-box.component';
import {ListComponent} from './list/list.component';

@Injectable({
  providedIn: 'root'
})
export class ComponentService {

  constructor() {
  }

  public readonly components = [
    VideoComponent,
    SourceCodeComponent,
    ParagraphComponent,
    HeadingComponent,
    InfoBoxComponent,
    ListComponent,
    // Az enum szerint sorban kellenek ide a cuccok
  ];


  getComponent(componentType: ComponentType) {
    return this.components[componentType];
  }

}
