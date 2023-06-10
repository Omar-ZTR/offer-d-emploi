import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sadbar',
  templateUrl: './sadbar.component.html',
  styleUrls: ['./sadbar.component.css']
})
export class SadbarComponent implements OnInit {

  constructor() { }

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
