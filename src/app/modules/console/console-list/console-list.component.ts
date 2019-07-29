import { Component, OnInit } from '@angular/core';

import { ConsoleService } from 'src/app/shared/services/console.service';
import { Console } from 'src/app/shared/models/console.model';

@Component({
  selector: 'app-console-list',
  templateUrl: './console-list.component.html',
  styleUrls: ['./console-list.component.scss']
})
export class ConsoleListComponent implements OnInit {

  public consoles: Console[] = [];

  constructor(
    private consoleService: ConsoleService
  ) { }

  ngOnInit() {
    this.getAllConsoles();
  }

  getAllConsoles() {
    this.consoleService.getAllConsoles().subscribe(
      (consoles: Console[]) => {
        this.consoles = consoles;
      }
    )
  }

}
