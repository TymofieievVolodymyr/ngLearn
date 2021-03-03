import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <app-button (click)="toggleIcon()">
      <div *ngIf="showIcon" ngProjectAs="app-icon">
        <app-icon></app-icon>
      </div>
      Button
    </app-button>`,
})
export class AppComponent {
  showIcon = true;

  toggleIcon(): void {
    this.showIcon = !this.showIcon;
  }
}
