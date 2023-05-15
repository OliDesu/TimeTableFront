import {Factory} from './Factory';
import {Slot} from '../Slot';

export class SlotFactory implements Factory<Slot> {
  constructor(
    private slotId: string,
    private slotIndex: number,
    private dayId: string,
    private slotContent: string
  ) {
  }

  public static slot1(): SlotFactory {
    return new SlotFactory(
      '1',
      1,
      '1',
      'Learned how to do TypeScript'
    );
  }

  public static slot2(): SlotFactory {
    return new SlotFactory(
      '2',
      2,
      '1',
      'Learned how to do Java'
    );
  }

  public static slot3(): SlotFactory {
    return new SlotFactory(
      '3',
      3,
      '1',
      'Learned how to do PHP'
    );
  }

  public static slot4(): SlotFactory {
    return new SlotFactory(
      '4',
      4,
      '1',
      'Learned how to do JS'
    );
  }

  build(): Slot {
    return new Slot(
      this.slotId,
      this.slotIndex,
      this.dayId,
      this.slotContent
    );
  }

}
