import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-find',
  templateUrl: './find.component.html',
  styleUrls: ['./find.component.css']
})
export class FindComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  registerWithRole(role:string)
  {
     localStorage.setItem('selectedRole',role); 
     this.router.navigate(['/register'])

  }

}
