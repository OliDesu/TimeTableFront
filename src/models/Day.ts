import {Slot} from './Slot';

export class Day {
  constructor(
    public dayId: string,
    public dayDate: Date,
    public slots: Slot[]) {
  }
}
