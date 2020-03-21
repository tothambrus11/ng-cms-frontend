export enum OrderType {
  NONE,
  LETTERS,
  NUMBERS,
  ROMAN_NUMBERS
}

export interface ListMetadata {
  orderType: OrderType;
  content: (string | ListMetadata)[];
}
