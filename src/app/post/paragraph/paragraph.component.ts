import {Component, Input, OnInit} from '@angular/core';
import {ContentComponent} from '../ContentComponentMetadata';
import {ParagraphMetadata} from './ParagraphMetadata';

@Component({
  selector: 'app-paragraph',
  templateUrl: './paragraph.component.html',
  styleUrls: ['./paragraph.component.scss']
})
export class ParagraphComponent implements OnInit, ContentComponent {

  constructor() { }

  ngOnInit(): void {
  }

  @Input()
  metadata: ParagraphMetadata;

}
