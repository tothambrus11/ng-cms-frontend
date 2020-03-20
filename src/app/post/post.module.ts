import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PostComponent} from './post.component';
import {VideoComponent} from './video-component/video.component';
import {SourceCodeComponent} from './source-code/source-code.component';
import {YouTubePlayerModule} from '@angular/youtube-player';
import {ComponentService} from './component.service';


@NgModule({
  declarations: [PostComponent, VideoComponent, SourceCodeComponent],
  exports: [
    PostComponent
  ],
  imports: [
    CommonModule,
    YouTubePlayerModule
  ],
  providers: [
    ComponentService
  ]
})
export class PostModule {
}
