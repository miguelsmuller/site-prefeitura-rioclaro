import { Component } from '@angular/core';
import { trigger, style, transition, animate, query, stagger } from '@angular/animations';

import { ServiceList } from './home-services-list';

@Component({
  selector: 'app-home-services',
  templateUrl: './home-services.component.html',
  styleUrls: ['./home-services.component.scss'],
  animations: [
    trigger('appear', [
      transition('void => *, * => void', [
        query(
          ':enter',
          [
            style({ opacity: 0, transform: 'translateY(-100%)' }),
            stagger(50, [animate('300ms ease-out', style({ opacity: 1, transform: 'translateY(0%)' }))]),
          ],
          { optional: true }
        ),
      ]),
    ]),
  ],
})
export class HomeServicesComponent {
  public services = ServiceList;
}
