import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'switch',
  templateUrl: './switch.component.html',
})
export class SwitchComponent implements OnInit {
  @Input() on: boolean;
  @Input() className: string;

  ngOnInit(): void {
    console.log(this.className);
  }
}
