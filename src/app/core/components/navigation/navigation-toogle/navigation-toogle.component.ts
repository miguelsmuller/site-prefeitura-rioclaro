import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-navigation-toogle',
  templateUrl: './navigation-toogle.component.html',
  styleUrls: ['./navigation-toogle.component.scss'],
})
export class NavigationToogleComponent {
  @Input() blnMenuShow = false;
  @Output() emtClick = new EventEmitter<string>();

  toggleMenu(): void {
    this.emtClick.emit('click');
  }
}
