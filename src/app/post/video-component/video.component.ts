import {Component, Input, OnInit} from '@angular/core';
import {ComponentType, ContentComponent, Metadata} from '../ContentComponentMetadata';
import {VideoMetadata} from './VideoMetadata';

@Component({
  selector: 'post-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.scss']
})
export class VideoComponent implements ContentComponent, OnInit {
  @Input() metadata: VideoMetadata;

  constructor() {
  }

  ngOnInit() {
    if (this.metadata.type === 'youtube') {
      const tag = document.createElement('script');
      tag.src = 'https://www.youtube.com/iframe_api';
      document.body.appendChild(tag);
    }
  }


  getVideoId() {
    let parts = this.metadata.source.split('v=');
    return parts[parts.length - 1];
  }
}
