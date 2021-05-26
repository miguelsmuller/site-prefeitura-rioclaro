import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { trigger, transition, style, animate, state } from '@angular/animations';

import { ApiService } from '@core/services/api.service';
import { INoticia } from '@core/interfaces/inoticia';

@Component({
  selector: 'app-home-news',
  templateUrl: './home-news.component.html',
  styleUrls: ['./home-news.component.scss'],
  animations: [
    trigger('appear', [
      state('void', style({ opacity: 0 })),
      transition('void => *, * => void', [animate('400ms ease-in')]),
    ]),
  ],
})
export class HomeNewsComponent implements OnInit {
  dataSource$: Observable<INoticia[]>;

  constructor(public apiService: ApiService) {}

  ngOnInit(): void {
    this.dataSource$ = this.apiService.getNews(3);
  }
}
