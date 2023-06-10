import { Component, OnInit } from '@angular/core';
import { ClientdetailsService } from 'src/app/clientdetails.service';

@Component({
  selector: 'app-freelanceur',
  templateUrl: './freelanceur.component.html',
  styleUrls: ['./freelanceur.component.css'],
})
export class FreelanceurComponent implements OnInit {
  Freelancer: any = {
    city: '',
    country: '',
    desc: '',
    experience: '',
    formation: '',
    level: '',
    phoneNumber: '',
    profileImage: '',
  };
  constructor(private clientDetails: ClientdetailsService) {}

  ngOnInit(): void {
    (function ($) {
      $(document).ready(function () {
        $('#sidebarCollapse').on('click', function () {
          $('#sidebar').toggleClass('active');
          $().toggleClass('active');
        });
      });
    })(jQuery);

    this.clientDetails.getFreelanceDetails(localStorage.getItem('userId')).subscribe((data)=>{
      let result:any = data ; 
      this.Freelancer=result.result ; 
      console.log(result) ; 
    })
  }
}
