import { Input } from '@angular/core';
import { Component } from '@angular/core';

@Component({
  selector: 'app-footer-social',
  templateUrl: './footer-social.component.html',
  styleUrls: ['./footer-social.component.scss'],
})
export class FooterSocialComponent {
  @Input() bgColor = '';
  @Input() bdColor = '';
  @Input() source = '';
}
