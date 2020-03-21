import {AfterViewChecked, Component, Input, OnInit} from '@angular/core';
import {ContentComponent} from '../ContentComponentMetadata';
import {SourceCodeMetadata} from './SourceCodeMetadata';
import {HighlightService} from '../../highlight.service';

@Component({
  selector: 'post-source-code',
  templateUrl: './source-code.component.html',
  styleUrls: ['./source-code.component.scss']
})
export class SourceCodeComponent implements OnInit, ContentComponent, AfterViewChecked {

  highlighted = false;

  constructor(private highlightService: HighlightService) {
  }

  @Input() metadata: SourceCodeMetadata;

  ngOnInit() {
  }

  ngAfterViewChecked(): void {
    if (this.metadata && !this.highlighted) {
      this.highlightService.highlightAll();
      this.highlighted = true;
    }
  }

}
