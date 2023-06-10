import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-sadf',
  templateUrl: './sadf.component.html',
  styleUrls: ['./sadf.component.css']
})
export class SadfComponent implements OnInit {
  

  constructor() { }

  ngOnInit(): void {}
  
    url="./asstes/img/banner/iwrk.jpg"
        onSelectFile(_$event: any) {
      if (_$event.target.files) {
        var reader = new FileReader();
  reader.readAsDataURL(_$event.target.files[0]);
        
  
        reader.onload = (event:any) => { // called once readAsDataURL is completed
          this.url = event.target.result;
        }
      }
    }
  }





