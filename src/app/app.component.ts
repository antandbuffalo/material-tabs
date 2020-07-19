import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'material-tabs';
  activeTab = 'home';
  onTabClick(type: string) {
    this.activeTab = type;
    console.log(type);
  }
}
