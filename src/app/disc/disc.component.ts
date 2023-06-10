import { Component, OnInit } from '@angular/core';
import { ClientdetailsService } from 'src/app/clientdetails.service';
import { PostService } from 'src/app/post.service';

@Component({
  selector: 'app-disc',
  templateUrl: './disc.component.html',
  styleUrls: ['./disc.component.css']
})
export class DiscComponent implements OnInit { selectedOffres: any = [];
  selectedCateg = 1;
  
  clientDetails= {
    Objectives: '',
    city: '',
    country: '',
    desc: '',
    phoneNumber: '',
    theme: '',
  };
  setSelectedCat(cat: any) {
    this.postServ.getPostsByCateg(cat).subscribe((data) => {
      let result: any = data;
      this.selectedOffres = result.messages;
      console.log(result);
    });
  }
  constructor(private postServ: PostService,
    private clientServ: ClientdetailsService) {}

  ngOnInit(): void {
    (function ($) {
      $(document).ready(function () {
        $('#sidebarCollapse').on('click', function () {
            $('#sidebar').toggleClass('active');
            $().toggleClass('active');
        });
      });
    })(jQuery);let user = localStorage.getItem('userId') ; 
    this.postServ.getPostByUser(user).subscribe((data)=>{
      let result:any = data ; 
      console.log(result) ; 
      this.selectedOffres=result.messages ; 
    })
    let id = localStorage.getItem('userId');
    this.clientServ.getClientDetails(id).subscribe((data) => {
      let result: any = data;
      this.clientDetails = result.result;
    });
  }

 
  }

