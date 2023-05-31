export class Slot {

  constructor(
    public id: number,
    public startTime: string,
    public endTime: string,
    public dayId: number,
    public activity: string) {
  }
}
