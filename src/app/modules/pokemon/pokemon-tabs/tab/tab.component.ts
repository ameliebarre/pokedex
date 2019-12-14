import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'pokemon-tab',
  templateUrl: './tab.component.html',
  styleUrls: ['./tab.component.scss']
})
export class TabComponent implements OnInit {

  @Input('tabTitle') title: string;
  @Input() active = false;

  constructor() { }

  ngOnInit() {
  }

}
