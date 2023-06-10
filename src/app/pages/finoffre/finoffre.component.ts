import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
declare var jQuery: any;
import * as $ from 'jquery';
import { PostService } from 'src/app/post.service';

@Component({
  selector: 'app-finoffre',
  templateUrl: './finoffre.component.html',
  styleUrls: ['./finoffre.component.css'],
})
export class FinoffreComponent implements OnInit {
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
  commentText: string = '';
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private postServ: PostService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((data) => {
      let result: any = data;
      console.log(result.id);
      this.postServ.getPostById(result.id).subscribe((data) => {
        let res: any = data;
        if (res.success) {
          this.initOffre = res.message;
          console.log(res);
        }
      });
    });
  }
  handleAddComment() {
    let user = localStorage.getItem('userId');
    let body = {
      text: this.commentText,
      id: user,
    };
    this.postServ.addAnewComment(this.initOffre._id,body).subscribe((data)=>{
      let result :any = data ; 
      this.commentText="" ; 
      console.log(result) ; 
      this.ngOnInit() ; 
    })
  }
}
