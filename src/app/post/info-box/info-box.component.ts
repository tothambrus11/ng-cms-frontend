import {Component, SecurityContext, Input, OnInit} from '@angular/core';
import {ContentComponent} from '../ContentComponentMetadata';
import {InfoBoxMetadata} from './InfoBoxMetadata';
import {DomSanitizer} from '@angular/platform-browser';

@Component({
  selector: 'app-info-box',
  templateUrl: './info-box.component.html',
  styleUrls: ['./info-box.component.scss']
})
export class InfoBoxComponent implements OnInit, ContentComponent {

  SecurityContext = SecurityContext;

  constructor(public sanitizer: DomSanitizer) {

  }

  ngOnInit(): void {
  }

  @Input()
  metadata: InfoBoxMetadata;

}
