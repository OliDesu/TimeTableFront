import {Factory} from './Factory';
import {Slot} from '../Slot';

export class SlotFactory implements Factory<Slot> {
  constructor(
    private slotId: string,
    private startTime: string,
    private endTime: string,
    private dayId: string,
    private activity: string
  ) {
  }

  public static slot1(): SlotFactory {
    return new SlotFactory(
      '1',
      '9:00',
      '9:30',
      '1',
      'Learned how to do TypeScript'
    );
  }

  public static slot2(): SlotFactory {
    return new SlotFactory(
      '2',
      '9:30',
      '10:30',
      '1',
      'Learned how to do Java'
    );
  }

  public static slot3(): SlotFactory {
    return new SlotFactory(
      '3',
      '10:30',
      '11:00',
      '1',
      'Learned how to do PHP'
    );
  }

  public static slot4(): SlotFactory {
    return new SlotFactory(
      '4',
      '11:00',
      '11:30',
      '1',
      'Learned how to do JS'
    );
  }

  build(): Slot {
    return new Slot(
      this.slotId,
      this.startTime,
      this.endTime,
      this.dayId,
      this.activity
    );
  }

}
