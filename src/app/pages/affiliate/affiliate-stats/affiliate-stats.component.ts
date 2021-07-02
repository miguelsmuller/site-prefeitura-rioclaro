import { Component } from '@angular/core';

@Component({
  selector: 'app-affiliate-stats',
  templateUrl: './affiliate-stats.component.html',
  styleUrls: ['./affiliate-stats.component.scss'],
})
export class AffiliateStatsComponent {
  public stats = [
    { title: 'Unidades Escolares', value: '+15' },
    { title: 'Alunos Matriculados', value: '+2500' },
    { title: 'Educadores', value: '+220' },
    { title: 'Funcionários', value: '+200' },
  ];
}
