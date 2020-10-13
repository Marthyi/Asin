import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-asin-master',
  templateUrl: './asin-master.component.html',
  styleUrls: ['./asin-master.component.scss']
})
export class AsinMasterComponent implements OnInit {

  public asin:string;

  constructor() {
    this.asin = "zoom";
   }

  ngOnInit(): void {
  }

  addAsin(){
    console.log(this.asin);
  }

}
