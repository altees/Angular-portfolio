import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { Location, ViewportScroller } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  showAdmin: boolean=false;

  constructor(private router: Router, private viewportScroller: ViewportScroller, aRoute: ActivatedRoute, loc: Location) {
    this.showAdmin = loc.path(true) === '/admin';

  }

  ngOnInit() {

    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        const fragment = this.router.url.split('#')[1];
        if (fragment) {
          setTimeout(() => {
            this.viewportScroller.scrollToAnchor(fragment);
          }, 100); // timeout for Angular to stabilize
        }
      }
    });
  }
}
