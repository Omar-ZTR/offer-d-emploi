import { Component, OnInit } from '@angular/core';
import { PostService } from 'src/app/post.service';

@Component({
  selector: 'app-offc',
  templateUrl: './offc.component.html',
  styleUrls: ['./offc.component.css'],
})
export class OffcComponent implements OnInit {
  selectedOffres: any = [];
  selectedCateg = 1;
  setSelectedCat(cat: any) {
    this.postServ.getPostsByCateg(cat).subscribe((data) => {
      let result: any = data;
      this.selectedOffres = result.messages;
      console.log(result);
    });
  }
  constructor(private postServ: PostService) {}

  ngOnInit(): void {
    (function ($) {
      $(document).ready(function () {
        $('#sidebarCollapse').on('click', function () {
          $('#sidebar').toggleClass('active');
          $().toggleClass('active');
        });
      });
    })(jQuery);
    let user = localStorage.getItem('userId') ; 
    this.postServ.getPostByUser(user).subscribe((data)=>{
      let result:any = data ; 
      console.log(result) ; 
      this.selectedOffres=result.messages ; 
    })
  }

  deleteOffer(id:any)
  {
    this.postServ.deteletPost(id).subscribe((data)=>{

      this.ngOnInit() ; 
    })
  }
}
