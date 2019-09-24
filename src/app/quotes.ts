export class Quotes {
  public showDescription: boolean;
  static completeDate: Date;
  static id: number;
  constructor(public id: number,public name: string,public description: string, public completeDate: Date){
    this.showDescription=false;
  }
}