import {
  Component, Input,
  AfterViewInit, ViewChild,
  ComponentFactoryResolver,
  OnDestroy, ComponentRef
} from '@angular/core';

import { AdDirective } from './ad.directive';
import { AdItem } from './ad-item';
import { AdComponent } from './ad.component';


import { SharedService } from '../shared/shared.services';

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
  currentIncrement: number = 0;
  @ViewChild(AdDirective) adHost: AdDirective;
  subscription: any;
  interval: any;
  arrayComp: any[] = [];
  componentRef: ComponentRef<any>;

  constructor(private componentFactoryResolver: ComponentFactoryResolver, private sharedService: SharedService) { }

  ngAfterViewInit() {
    // this.loadComponent();
    // this.getAds();
  }

  ngOnDestroy() {
    clearInterval(this.interval);
  }

  loadComponent(obj) {
    if (this.componentRef) {
      this.componentRef.destroy();
    }
    if (obj) {
      const adItem = this.sharedService.getDynamicComp(obj);
      this.loadSingleComponent(adItem, 'existing');
    } else {
      this.currentAddIndex = (this.currentAddIndex + 1) % this.ads.length;
      const adItem = this.ads[this.currentAddIndex];
      this.loadSingleComponent(adItem, 'new');
    }
  }

  loadSingleComponent(adItem, type) {
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(adItem.component);
    const viewContainerRef = this.adHost.viewContainerRef;
    // viewContainerRef.clear();
    this.componentRef = viewContainerRef.createComponent(componentFactory);
    (<AdComponent>this.componentRef.instance).data = adItem.data;
    if (type === 'new') {
      this.currentIncrement = this.currentIncrement + 1;
      this.componentRef.instance.$uniqId = this.currentIncrement;
      this.componentRef.instance.name = 'Product' + this.currentIncrement;
      this.arrayComp.push({ comp: adItem.component, compRef: this.componentRef });
    } else {
      this.componentRef.instance.$uniqId = adItem.instance.$uniqId;
      this.componentRef.instance.name = adItem.instance.name;
    }
  }

  getAds() {
    this.loadComponent(undefined);
  }
}
