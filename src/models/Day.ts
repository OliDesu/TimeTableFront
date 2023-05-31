import {Slot} from './Slot';

export class Day {
  constructor(
    public id: number,
    public dayDate: Date,
    public slots: Slot[]) {
  }
}
