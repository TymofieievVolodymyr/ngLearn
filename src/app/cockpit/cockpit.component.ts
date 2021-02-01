import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {
  @Output() serverCreated = new EventEmitter<{ serverName: string, serverContent: string }>();
  @Output() blueprintCreated = new EventEmitter<{ serverName: string, serverContent: string }>();
  newServerName = '';
  newServerContent = '';


  constructor() {
  }

  onAddServer(): void {
    this.serverCreated.emit({
      serverName: this.newServerName, serverContent: this.newServerContent
    });
  }

  onAddBlueprint(): void {
    this.blueprintCreated.emit({
      serverName: this.newServerName, serverContent: this.newServerContent
    });
  }

  ngOnInit(): void {
  }

}
