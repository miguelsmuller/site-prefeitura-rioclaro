import { Injectable, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import { Meta, Title } from '@angular/platform-browser';
import { takeUntil, filter, map } from 'rxjs/operators';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SeoService implements OnDestroy {
  private unSubscribeAllObservables$ = new Subject();

  constructor(
    private _router: Router,
    private _activatedRoute: ActivatedRoute,
    private _titleService: Title,
    private _metaService: Meta
  ) {}

  ngOnDestroy(): void {
    this.unSubscribeAllObservables$.next();
  }

  init(): void {
    const appTitle = this._titleService.getTitle();

    this._router.events
      .pipe(
        takeUntil(this.unSubscribeAllObservables$),
        filter((event) => event instanceof NavigationEnd),
        map(() => this.getLatestChild().snapshot.data || {})
      )
      .subscribe(({ title, description, robots }) => {
        this.setTitle(appTitle, title);
        this.setDescription(description);
        this.setRobots(robots);
      });
  }

  private getLatestChild(): ActivatedRoute {
    let child = this._activatedRoute.firstChild as ActivatedRoute;

    while (child.firstChild) {
      child = child.firstChild;
    }

    return child;
  }

  private setTitle(rootTitle: string, title: string): void {
    if (title) {
      this._titleService.setTitle(`${rootTitle} - ${title}`);
    }
  }

  private setDescription(description: string): void {
    if (description) {
      this._metaService.updateTag({
        name: 'description',
        content: description,
      });
    }
  }

  private setRobots(robots: string): void {
    if (robots) {
      this._metaService.updateTag({
        name: 'robots',
        content: robots,
      });
    }
  }
}
