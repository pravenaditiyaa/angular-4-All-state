import { Injectable } from '@angular/core';


@Injectable()
export class SharedService {
  private _CompArray: any[] = [];

  public setDynamicComp(obj) {
    this._CompArray.push(obj);
  }

  public getDynamicComp(obj) {
    return this._CompArray.map(map => {
      if (map.instance.$uniqId == obj.instance.$uniqId) {
        return map;
      }
    });
  }
}
