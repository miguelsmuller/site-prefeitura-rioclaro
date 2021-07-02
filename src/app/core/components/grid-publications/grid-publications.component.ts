import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { ApiService } from '@core/services/api.service';
import { INoticia } from '@core/interfaces/inoticia';

@Component({
  selector: 'app-grid-publications',
  templateUrl: './grid-publications.component.html',
  styleUrls: ['./grid-publications.component.scss'],
})
export class GridPublicationsComponent implements OnInit {
  dataSource$: Observable<INoticia[]>;

  constructor(public apiService: ApiService) {}

  ngOnInit(): void {
    this.dataSource$ = this.apiService.getNews();
  }
}
