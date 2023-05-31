import {Factory} from './Factory';
import {Day} from '../Day';
import {SlotFactory} from './SlotFactory';
import {Slot} from "../Slot";

export class DayFactory implements Factory<Day> {
  constructor(
    private dayDate: Date,
    private slots: SlotFactory[]
  ) {
  }

  public static day1(): DayFactory {
    return new DayFactory(

      new Date('12/09/1998'),
      []
    );
  }
public static averageDay():DayFactory{
    let slots : SlotFactory[] = [];
    for(let a = 9 ; a < 18; a++){
      for(let b = 0; b <60;b=b+30){
        slots.push(new SlotFactory(1,a.toString()+':'+b.toString(),1,''))
      }
    }
    return new DayFactory(
      new Date(),
      slots)
}
  public withSlots(): DayFactory {
    return new DayFactory(
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
      this.dayDate,
      this.slots.map((slotFactory) => slotFactory.build())
    );
  }

}
