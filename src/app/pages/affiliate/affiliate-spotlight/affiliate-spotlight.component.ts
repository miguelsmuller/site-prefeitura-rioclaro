import { Component } from '@angular/core';

@Component({
  selector: 'app-affiliate-spotlight',
  templateUrl: './affiliate-spotlight.component.html',
  styleUrls: ['./affiliate-spotlight.component.scss'],
})
export class AffiliateSpotlightComponent {
  public actions = [
    {
      title: 'Ouvidoria',
      command: '',
    },
    {
      title: 'Unidades Escolares',
      command: '',
    },
    {
      title: 'Formação Continuada',
      command: '',
    },
    {
      title: 'Organograma Interno',
      command: '',
    },
  ];
}
