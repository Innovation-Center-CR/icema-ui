import { Component, OnInit} from '@angular/core';
import { environment } from '../environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  public env = environment.environmentName;
  public uiBuild: string = "0.1.1";
  public apiBuild: string = "0.1.1";

  constructor() { }

  ngOnInit() {
  }

}
