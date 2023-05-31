import {Factory} from './Factory';
import {Slot} from '../Slot';

export class SlotFactory implements Factory<Slot> {
  constructor(
    private slotId: number,
    private startTime: string,
    private dayId: number,
    private activity: string,

  ) {
  }

  public static slot1(): SlotFactory {
    return new SlotFactory(
      1,
      '9:00',
      1,
      'Learned how to do TypeScript'
    );
  }

  public static slot2(): SlotFactory {
    return new SlotFactory(
      2,
      '9:30',
      1,
      'Learned how to do Java'
    );
  }

  public static slot3(): SlotFactory {
    return new SlotFactory(
      3,
      '10:30',
      1,
      'Learned how to do PHP'
    );
  }

  public static slot4(): SlotFactory {
    return new SlotFactory(
      4,
      '11:00',
      1,
      'Learned how to do JS'
    );
  }

  build(): Slot {
    return new Slot(
      this.startTime,
      this.activity,

    );
  }

}
