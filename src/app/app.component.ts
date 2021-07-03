import { Component, OnInit } from '@angular/core';
import { Router, Event, NavigationStart, NavigationEnd, NavigationCancel, NavigationError } from '@angular/router';

import { SeoService } from '@core/services/seo.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {
  showLoadingIndicator = true;

  constructor(private _router: Router, private _seo: SeoService) {
    this._router.events.subscribe((routerEvent: Event) => {
      if (routerEvent instanceof NavigationStart) {
        this.showLoadingIndicator = true;
      }

      if (
        routerEvent instanceof NavigationEnd ||
        routerEvent instanceof NavigationCancel ||
        routerEvent instanceof NavigationError
      ) {
        this.showLoadingIndicator = false;
      }
    });
  }

  ngOnInit(): void {
    this._seo.init();
  }
}
