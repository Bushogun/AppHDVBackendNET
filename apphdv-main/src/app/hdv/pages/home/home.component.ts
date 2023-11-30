import { Component } from '@angular/core';
import { PersonalInfoService } from 'src/app/services/PersonalInfo.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  constructor (private _personalInfoService : PersonalInfoService){}

  ngOnInit():void{
    this.obtenerPersonalInfo();
  }

  obtenerPersonalInfo() {
    this._personalInfoService.getPersonalInfo().subscribe(data => {console.log(data)});
  }
}
