import { Component } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
})
export class NavigationComponent {
  public blnMenuShow = false;

  toggleMenu(): void {
    this.blnMenuShow = !this.blnMenuShow;
  }
}