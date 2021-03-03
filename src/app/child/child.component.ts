import {Component} from '@angular/core';

@Component({
  selector: 'app-button',
  template: `
    <button>
      <ng-content></ng-content>
      <ng-content select="app-icon"></ng-content>
    </button>`,
})
export class ButtonComponent {
}
