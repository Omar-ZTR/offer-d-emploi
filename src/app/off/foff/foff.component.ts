import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { PostService } from 'src/app/post.service';

@Component({
  selector: 'app-foff',
  templateUrl: './foff.component.html',
  styleUrls: ['./foff.component.css']
})
export class FoffComponent implements OnInit {
  showInput:Boolean =false ; 
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

  

  setshowInput()
  {
    this.showInput=true ; 
  }
  
  hideInput()
  {
    this.showInput=false ; 
  }

}
