import {AfterViewInit, Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';
import {ContentComponent} from '../ContentComponentMetadata';
import {VideoMetadata} from './VideoMetadata';
import {DomSanitizer} from '@angular/platform-browser';

@Component({
  selector: 'post-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.scss']
})
export class VideoComponent implements ContentComponent, OnInit, AfterViewInit {
  @Input() metadata: VideoMetadata;
  @ViewChild('videoTag') videoTag: ElementRef;

  constructor(private sanitizer: DomSanitizer) {
  }

  ngOnInit() {

  }

  getVideoId() {
    let parts = this.metadata.source.split('v=');
    return parts[parts.length - 1];
  }

  ngAfterViewInit(): void {
    if (this.metadata.type === 'mp4' && this.metadata.startTime) {
      let el: HTMLVideoElement = this.videoTag.nativeElement;
      el.currentTime = this.metadata.startTime;
      if (this.metadata.autoplay) {
        el.play();
      } else {
        el.pause();
      }
    }
  }
}

