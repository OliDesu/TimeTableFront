import {Factory} from './Factory';
import {Day} from '../Day';
import {SlotFactory} from './SlotFactory';

export class DayFactory implements Factory<Day> {
  constructor(
    private dayId: string,
    private dayDate: Date,
    private slots: SlotFactory[]
  ) {
  }

  public static day1(): DayFactory {
    return new DayFactory(
      '1',
      new Date('12/09/1998'),
      []
    );
  }

  public withSlots(): DayFactory {
    return new DayFactory(
      this.dayId,
      this.dayDate,
      [
        SlotFactory.slot1(),
        SlotFactory.slot2(),
        SlotFactory.slot3(),
        SlotFactory.slot4(),
      ]
    );
  }

  build(): Day {
    return new Day(
      this.dayId,
      this.dayDate,
      this.slots.map((slotFactory) => slotFactory.build())
    );
  }

}
