import {Slot} from './Slot';
import {Gratitude} from "./Gratitude";

export class Day {
  constructor(
    public date: Date,
    public slots: Slot[],
    public gratitudes: Gratitude[]
  ) {
  }
}
