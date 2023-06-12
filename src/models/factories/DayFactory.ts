import {Factory} from './Factory';
import {Day} from '../Day';
import {SlotFactory} from './SlotFactory';
import {GratitudeFactory} from "./GratitudeFactory";
import {Gratitude} from "../Gratitude";

export class DayFactory implements Factory<Day> {
  constructor(
    private dayDate: Date,
    private slots: SlotFactory[],
    private gratitudes : GratitudeFactory[]
  ) {
  }

  public static day1(): DayFactory {
    return new DayFactory(

      new Date('12/09/1998'),
      [],[]
    );
  }
public static averageDay():DayFactory{
    let slots : SlotFactory[] = [];
    let gratitudes : GratitudeFactory[] = [];
    for(let a = 0 ; a <3;a++){
      gratitudes.push(new GratitudeFactory(1,''));
    }
    for(let a = 9 ; a < 18; a++){
      for(let b = 0; b <60;b=b+30){
        if(b ==0)
        slots.push(new SlotFactory(1,a.toString()+':'+b.toString()+'0',1,''))
        else
        slots.push(new SlotFactory(1,a.toString()+':'+b.toString(),1,''))
      }
    }
    return new DayFactory(
      new Date(),
      slots,gratitudes)
}
  public withSlots(): DayFactory {
    return new DayFactory(
      this.dayDate,
      [
        SlotFactory.slot1(),
        SlotFactory.slot2(),
        SlotFactory.slot3(),
        SlotFactory.slot4(),
      ],[]
    );
  }

  build(): Day {
    return new Day(
      this.dayDate,
      this.slots.map((slotFactory) => slotFactory.build()),
      this.gratitudes.map((gratitude) => gratitude.build())
    );
  }

}
