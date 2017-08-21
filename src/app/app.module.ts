// import { BrowserModule } from '@angular/platform-browser';
// import { NgModule } from '@angular/core';
// import { FormsModule } from '@angular/forms';

// import { AppComponent } from './app.component';
// import { AddEntityComponent } from './entity/add-entity/add-entity.component';
// import { FinaluiComponent } from './src/app/finalui/finalui.component';

// @NgModule({
//   declarations: [
//     AppComponent,
//     AddEntityComponent,
//     FinaluiComponent
//   ],
//   imports: [
//     BrowserModule, FormsModule 
//   ],
//   providers: [],
//   bootstrap: [AppComponent] 
// })
// export class AppModule { }


// dynamic

import { BrowserModule }        from '@angular/platform-browser';
import { NgModule }             from '@angular/core';
import { AppComponent }         from './app.component';
import { HeroJobAdComponent }   from './dynamic/hero-job-ad.component';
import { AdBannerComponent }    from './dynamic/ad-banner.component';
import { HeroProfileComponent } from './dynamic/hero-profile.component';
import { AdDirective }          from './dynamic/ad.directive';
import { AdService }            from './dynamic/ad.service';
import { SharedService }         from './shared/shared.services';

@NgModule({
  
  imports: [ BrowserModule ],
  providers: [AdService, SharedService ],
  declarations: [ AppComponent,
                  AdBannerComponent,
                  HeroJobAdComponent,
                  HeroProfileComponent,
                  AdDirective ],
  entryComponents: [ HeroJobAdComponent, HeroProfileComponent ],
  bootstrap: [ AppComponent ]
})
export class AppModule {
  constructor() {}
}

