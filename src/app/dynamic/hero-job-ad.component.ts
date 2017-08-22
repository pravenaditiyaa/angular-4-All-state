import { Component, Input, OnDestroy } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AdComponent } from './ad.component';
import { SharedService } from '../shared/shared.services';

@Component({
  template: `
    <div class="job-ad">
      <h4>{{data?.headline}}</h4>
      {{data?.body}}
      <input type="text" [(ngModel)]="data.Refer" />
      <p>{{data?.Refer}}</p>
    </div>
  `
})
export class HeroJobAdComponent implements AdComponent, OnDestroy {
  @Input() data: any;
  constructor(private sharedService: SharedService) { }

  ngOnDestroy() {
    this.sharedService.setDynamicComp(this);
  }
}

