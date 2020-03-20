import {Component, Input, OnInit} from '@angular/core';
import {ContentComponent, Metadata} from '../ContentComponentMetadata';

@Component({
  selector: 'post-source-code',
  templateUrl: './source-code.component.html',
  styleUrls: ['./source-code.component.scss']
})
export class SourceCodeComponent implements OnInit, ContentComponent {

  constructor() { }

  @Input() metadata: Metadata;

  ngOnInit() {
  }

}
