import { Injectable } from '@angular/core';


@Injectable()
export class SharedService {
  private _CompArray: any[] = [];

  public setDynamicComp(obj) {
    const compArrayIndex = this._CompArray.findIndex(x => x.$uniqId === obj.$uniqId);
    if (compArrayIndex !== -1) {
      this._CompArray.splice(compArrayIndex, 1);
    }
    this._CompArray.push(obj);
  }

  public getDynamicComp(obj) {
    for (let i = 0; i <= this._CompArray.length; i++) {
      if (this._CompArray[i].$uniqId === obj.compRef.instance.$uniqId) {
        return ({ data: this._CompArray[i].data, component: obj.comp, instance: this._CompArray[i] });
      }
    }
  }
}
