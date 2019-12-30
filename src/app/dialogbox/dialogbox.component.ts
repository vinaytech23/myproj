import { Component, OnInit } from '@angular/core';
import { GetApiService } from '../get-api.service';
import { interval } from 'rxjs'
@Component({
  selector: 'app-dialogbox',
  templateUrl: './dialogbox.component.html',
  styleUrls: ['./dialogbox.component.css']
})
export class DialogboxComponent implements OnInit {

  recievedData: object;
  mytimer = interval(10000);
  display: boolean = false;
  popdata: object;
  searchedText:string;

  constructor(private service: GetApiService) { }

  ngOnInit() {
    this.getApi();
    this.mytimer.subscribe(()=>this.getApi());
  }

  getApi(){
   this.service.getData().subscribe(
      response => { 
        console.log(response);
        this.recievedData = response;
      }
    );
  }

  showDialog(x) {
      this.popdata = x;
      this.display = true;
  }
  
}
