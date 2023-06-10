import { Component, OnInit } from '@angular/core';
declare var jQuery: any;
import { PostService } from 'src/app/post.service';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  selectedOffres:any = [] ; 
  selectedCateg = 1;
  setSelectedCat(cat:any) {
    this.postServ.getPostsByCateg(cat).subscribe((data)=>{
      let result:any = data ;
      this.selectedOffres =result.messages 
      console.log(result); 
    })
   
  }
  constructor(private postServ:PostService) {}
  ngOnInit(): void {
    (function ($) {
      $(document).ready(function () {
        $('#sidebarCollapse').on('click', function () {
            $('#sidebar').toggleClass('active');
            $().toggleClass('active');
        });
      });
    })(jQuery);
  }

}
