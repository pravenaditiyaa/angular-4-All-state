import { Component, Input, OnDestroy }  from '@angular/core';

import { AdComponent }       from './ad.component';

import { SharedService }         from '../shared/shared.services';

@Component({
  template: `
    <div class="hero-profile">
      <h3>Featured Hero Profile</h3>
      <h4>{{data?.name}}</h4>
      
      <p>{{data?.bio}}</p>

      <strong>Hire this hero today!</strong>
    </div>
  `
})
export class HeroProfileComponent implements AdComponent, OnDestroy  {
  @Input() data: any;

  constructor(private sharedService: SharedService) { }

  ngOnDestroy(){
    this.sharedService.setDynamicComp(this);
  }
}


