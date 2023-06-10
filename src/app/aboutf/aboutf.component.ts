import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-aboutf',
  templateUrl: './aboutf.component.html',
  styleUrls: ['./aboutf.component.css']
})
export class AboutfComponent implements OnInit {

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
