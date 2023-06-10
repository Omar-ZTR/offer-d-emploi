import { Component, OnInit } from '@angular/core';
import { PostService } from 'src/app/post.service';

@Component({
  selector: 'app-ofidx',
  templateUrl: './ofidx.component.html',
  styleUrls: ['./ofidx.component.css'],
})
export class OfidxComponent implements OnInit {
  
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
    this.setSelectedCat('Developement')
  }
}
