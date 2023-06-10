import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { PostService } from 'src/app/post.service';

@Component({
  selector: 'app-adminoffre',
  templateUrl: './adminoffre.component.html',
  styleUrls: ['./adminoffre.component.css']
})
export class AdminoffreComponent implements OnInit {
  selectedOffres: any = [];
  selectedCateg = 1;
  setSelectedCat(cat: any) {
    this.postServ.getPostsByCateg(cat).subscribe((data) => {
      let result: any = data;
      this.selectedOffres = result.messages;
      console.log(result);
    });}
  initOffre: any = {
    attachmentPath: '',
    budget: 0,
    category: '',
    comments: [],
    createdAt: '',
    desc: '',
    level: '',
    skils: [],
    title: '',
    updatedAt: '',
    userId: '',
    _id: '',
  };
  
  
  constructor( private router: Router,
    private route: ActivatedRoute,
    private postServ: PostService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((data) => {
      let result: any = data;
      console.log(result.id);
      this.postServ.getPostsAll().subscribe((data) => {
        let res: any = data;
        if (res.success) {
          this.initOffre = res.message;
          console.log(res);
        }
      });
    });
  }
    deleteOffer(id:any)
  {
    this.postServ.deteletPost(id).subscribe((data)=>{

      this.ngOnInit() ; 
    })
  }
}
