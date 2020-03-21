import {Component, Input, OnInit, SecurityContext} from '@angular/core';
import {ContentComponent} from '../ContentComponentMetadata';
import {HeadingMetadata} from './HeadingMetadata';
import {DomSanitizer} from '@angular/platform-browser';

@Component({
  selector: 'app-heading',
  templateUrl: './heading.component.html',
  styleUrls: ['./heading.component.scss']
})
export class HeadingComponent implements ContentComponent {
  constructor() {
  }

  @Input()
  metadata: HeadingMetadata;

}
