import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-proposalf',
  templateUrl: './proposalf.component.html',
  styleUrls: ['./proposalf.component.css']
})
export class ProposalfComponent implements OnInit {

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
