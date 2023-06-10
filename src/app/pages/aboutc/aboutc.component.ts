import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ClientdetailsService } from 'src/app/clientdetails.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-aboutc',
  templateUrl: './aboutc.component.html',
  styleUrls: ['./aboutc.component.css'],
})
export class AboutcComponent implements OnInit {
  clientForm: FormGroup;
  profileImage: any;
  constructor(
    private fb: FormBuilder,
    private clientServ: ClientdetailsService
  ) {
    this.clientForm = fb.group({
      theme: ['', [Validators.required]],
      country: ['', [Validators.required]],
      phoneNumber: ['', Validators.required],
      city: ['', [Validators.required]],
      desc: ['', [Validators.required]],
      Objectives: ['', [Validators.required]],
      user: [localStorage.getItem('userId'), [Validators.required]],
    });
  }

  ngOnInit(): void {}
  onChangeImg(event: any) {
    this.profileImage = event.target.files[0];
  }
  submitval() {
    let formData = new FormData();
    formData.append('formation', this.clientForm.value['formation']);
    formData.append('country', this.clientForm.value['country']);
    formData.append('city', this.clientForm.value['city']);
    formData.append('desc', this.clientForm.value['desc']);
    formData.append('experience', this.clientForm.value['experience']);
    formData.append('level', this.clientForm.value['level']);
    formData.append('phoneNumber', this.clientForm.value['phoneNumber']);
    formData.append('profileImage', this.profileImage);
    formData.append('user', this.clientForm.value['user']); 
    this.clientServ
      .addFreelance(formData)
      .subscribe((data: any) => {
        let result: any = data;
        console.log(result);
        if (result.success) {
          Swal.fire({
            title: 'Success',
            text: 'Data added..',
          });
        this.clientForm.reset() ; 
      }
    });
  }
}
