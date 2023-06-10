import { Component, OnInit } from '@angular/core';
import { PostService } from 'src/app/post.service';

@Component({
  selector: 'app-talentc',
  templateUrl: './talentc.component.html',
  styleUrls: ['./talentc.component.css']
})
export class TalentcComponent implements OnInit {  selectedOffres: any = [];
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
  }

}
