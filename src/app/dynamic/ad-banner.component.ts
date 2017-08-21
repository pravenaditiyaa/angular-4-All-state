import { Component, Input, AfterViewInit, ViewChild, ComponentFactoryResolver, OnDestroy } from '@angular/core';

import { AdDirective } from './ad.directive';
import { AdItem } from './ad-item';
import { AdComponent } from './ad.component';


import { SharedService }         from '../shared/shared.services';

@Component({
  selector: 'add-banner',
  template: `
              <div class="ad-banner">                
                <div style="float:left;border:1px solid;">
                {{arrayComp}}
                <div *ngFor="let x of arrayComp">
                <span  (click)="loadComponent(x)">{{x.compRef.instance.name}}</span></div>
                <h3 (click)=" getAds()">+ Add</h3></div>
                <div style="float:right;border:1px solid;">
                <ng-template ad-host></ng-template></div>
              </div>
            `
})
export class AdBannerComponent implements AfterViewInit, OnDestroy {
  @Input() ads: AdItem[];
  currentAddIndex: number = 0;
  @ViewChild(AdDirective) adHost: AdDirective;
  subscription: any;
  interval: any;
  arrayComp: any[] = [];

  constructor(private componentFactoryResolver: ComponentFactoryResolver, private sharedService: SharedService) { }

  ngAfterViewInit() {
    // this.loadComponent();
    // this.getAds();
  }

  ngOnDestroy() {
    clearInterval(this.interval);
  }

  loadComponent(obj) {
    if (obj) {
       this.sharedService.getDynamicComp(obj);
    } else {
      // this.currentAddIndex = (this.currentAddIndex + 1) % this.ads.length;
      let adItem = this.ads[0]; // this.ads[this.currentAddIndex];
      let componentFactory = this.componentFactoryResolver.resolveComponentFactory(adItem.component);
      let viewContainerRef = this.adHost.viewContainerRef;
      viewContainerRef.clear();
      let componentRef = viewContainerRef.createComponent(componentFactory);
      componentRef.instance.$uniqId = this.currentAddIndex + 1;
      componentRef.instance.name = 'Product' +  this.currentAddIndex ;
      (<AdComponent>componentRef.instance).data = adItem.data;
      this.arrayComp.push({comp : adItem.component, compRef: componentRef});
      console.log(this)
    }
  }

  getAds() {
    this.loadComponent(undefined);
  }
}
