import { Platform } from '@ionic/angular';
import { Component } from '@angular/core';
import { Badge } from '@ionic-native/badge/ngx';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private badge: Badge, private platform: Platform) {

    this.platform.ready().then(() => {
      this.badge.set(10).then(() => console.log("Test badge"))
    })
  }

}
