import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PostComponent} from './post.component';
import {VideoComponent} from './video-component/video.component';
import {SourceCodeComponent} from './source-code/source-code.component';
import {ComponentService} from './component.service';
import {SafePipe} from './safe.pipe';
import {HighlightService} from '../highlight.service';
import { ParagraphComponent } from './paragraph/paragraph.component';
import { HeadingComponent } from './heading/heading.component';
import { InfoBoxComponent } from './info-box/info-box.component';
import { ListComponent } from './list/list.component';

@NgModule({
  declarations: [PostComponent, VideoComponent, SourceCodeComponent, SafePipe, ParagraphComponent, HeadingComponent, InfoBoxComponent, ListComponent],
  exports: [
    PostComponent
  ],
  imports: [
    CommonModule,
  ],
  providers: [
    ComponentService,
    HighlightService
  ]
})
export class PostModule {
}
