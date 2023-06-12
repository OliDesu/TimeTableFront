import {Factory} from './Factory';
import {Slot} from '../Slot';
import {Gratitude} from "../Gratitude";

export class GratitudeFactory implements Factory<Gratitude> {
  constructor(
    private gratitudeId: number,
    private content: string
  ) {
  }

  build(): Gratitude {
    return new Gratitude(
      this.content
    );
  }
}
