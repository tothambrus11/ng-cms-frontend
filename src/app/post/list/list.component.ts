import {Component, Input, OnInit} from '@angular/core';
import {ContentComponent} from '../ContentComponentMetadata';
import {ListMetadata, OrderType} from './ListMetadata';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit, ContentComponent {

  OrderType = OrderType;
  Array = Array;

  @Input() metadata: ListMetadata;

  constructor() { }

  ngOnInit(): void {
  }

  getListStyle(orderType: OrderType) {
    switch (orderType) {
      case OrderType.LETTERS:
        return "upper-alpha";
      case OrderType.NUMBERS:
        return "decimal";
      case OrderType.ROMAN_NUMBERS:
        return "upper-roman";
    }
  }
}
