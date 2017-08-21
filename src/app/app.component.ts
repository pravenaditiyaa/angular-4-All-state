// import { Component } from '@angular/core';
// class Entity {
//   id: number;
//   name: string;
//   selected: boolean;
//   description: string;
//   attributes: [Attributes];
// }

// class Attributes {
//   id: number;
//   name: string;
//   selected: boolean;
//   description: string;
//   domainDataType: string;
//   uiProperties: UiProperties;
// }
// class UiProperties {
//   label: string;
//   fieldType: string;
//   readOnly: boolean;
//   values: any[]
// }

// @Component({
//   selector: 'app-root',
//   templateUrl: './app.component.html',
//   styleUrls: ['./app.component.css']
// })
// export class AppComponent {

//   jasonObj: Entity;

//   constructor(){
//     this.jasonObj={
//     id: 0,
//     name: "",
//     selected: false,
//     description: "",
//     attributes: [
//       {
//         id: 0,
//         name: "",
//         selected: false,
//         description: "",
//         domainDataType: "string",
//         uiProperties: {
//           label: "",
//           fieldType: "",
//           readOnly: false,
//           values: []
//         }
//       }
//       ]
//     }
//     console.log(this.jasonObj)
//   }

//   addAttr() {
//     console.log("addAttr()");
//     const obj = new Attributes();
//     this.jasonObj.attributes.push(obj);
//   }


// }

// dynamic

import { Component, OnInit } from '@angular/core';

import { AdService }         from './dynamic/ad.service';
import { AdItem }            from './dynamic/ad-item';

@Component({
  selector: 'my-app',
  template: `
    <div>
      <add-banner [ads]="ads"></add-banner>
    </div>
  `
})
export class AppComponent implements OnInit {
  ads: AdItem[];

  constructor(private adService: AdService) {}

  ngOnInit() {
    this.ads = this.adService.getAds();
  }
}


