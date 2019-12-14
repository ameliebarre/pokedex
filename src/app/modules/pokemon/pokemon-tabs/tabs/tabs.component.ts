import {AfterContentInit, Component, ContentChildren, OnInit, QueryList} from '@angular/core';
import { TabComponent } from '../tab/tab.component';

@Component({
  selector: 'pokemon-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss']
})
export class TabsComponent implements AfterContentInit {

  @ContentChildren(TabComponent) tabs: QueryList<TabComponent>;

  constructor() { }

  ngAfterContentInit() {
    // get all active tabs
    let activeTabs = this.tabs.filter((tab) => tab.active);

    console.log(this.tabs);

    // if there is no active tab set, activate the first
    if(activeTabs.length === 0) {
      this.selectTab(this.tabs.first);
    }
  }

  selectTab(tab: TabComponent, event: Event = null){
    if (event) {
      event.preventDefault();
    }

    // Deactivate all tabs
    this.tabs.toArray().forEach(tab => tab.active = false);

    // Activate the tab the user has clicked on
    tab.active = true;
  }

}
