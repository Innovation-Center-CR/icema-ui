import { Component, OnInit} from '@angular/core';
import { environment } from '../environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'app works!';

  public env = environment.environmentName;
  public uiBuild: number = 1.0;
  public apiBuild: number = 1.0;

  constructor() { }

  ngOnInit() {
  }

}
