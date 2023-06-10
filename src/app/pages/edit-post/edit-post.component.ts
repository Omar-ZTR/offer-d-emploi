import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PostService } from '../../post.service';
import Swal from 'sweetalert2'
@Component({
  selector: 'app-edit-post',
  templateUrl: './edit-post.component.html',
  styleUrls: ['./edit-post.component.css'],
})
export class EditPostComponent implements OnInit {
  categories = [
    {
      name: 'Development',
      value: 'DEV',
      skills: [
        {
          selected: false,
          value: 'HTML',
        },
        {
          selected: false,
          value: 'CSS',
        },
        {
          selected: false,
          value: 'JS',
        },
        {
          selected: false,
          value: 'REACT',
        },
        {
          selected: false,
          value: 'NODE',
        },
      ],
    },
    {
      name: 'Cover book',
      value: 'COVER',
      skills: [
        {
          selected: false,
          value: 'INdesign',
        },
        {
          selected: false,
          value: 'INdesign',
        },
        {
          selected: false,
          value: 'PHOTOSHOP',
        },
        {
          selected: false,
          value: 'COREL',
        },
        {
          selected: false,
          value: 'ADOBE XD',
        },
      ],
    },
    {
      name: 'Writing & Translation',
      value: 'writ',
      skills: [
        {
          selected: false,
          value: 'English',
        },
        {
          selected: false,
          value: 'French',
        },
        {
          selected: false,
          value: 'German',
        },
        {
          selected: false,
          value: 'Arabic',
        },
        {
          selected: false,
          value: 'Essay Writing',
        },
        {
          selected: false,
          value: 'Subtitles',
        },
        {
          selected: false,
          value: 'Article Writing',
        },
        {
          selected: false,
          value: 'Report Writing',
        },
      ],
    },
    {
      name: 'Design & creative',
      value: 'Desi',
      skills: [
        {
          selected: false,
          value: 'Infographics',
        },
        {
          selected: false,
          value: 'Brand Identity & Guidelines',
        },
        {
          selected: false,
          value: 'Banners',
        },
        {
          selected: false,
          value: 'Snapseed',
        },
        {
          selected: false,
          value: 'Adobe Creative apps',
        },
        {
          selected: false,
          value: 'Autodesk 3ds Max',
        },
       
      ],
    },
    {
      name: 'Sales & Marketing',
      value: 'mark',
      skills: [
        {
          selected: false,
          value: 'Marketing API Integration',
        },
        {
          selected: false,
          value: 'Digital Marketing Platforms',
        },
        {
          selected: false,
          value: 'Influencer Marketing',
        },
        {
          selected: false,
          value: 'Management and Planning',
        },
        {
          selected: false,
          value: 'Social Selling',
        },
      ],
    },
    {
      name: 'Formation',
      value: 'forma',
      skills: [
        {
          selected: false,
          value: 'Teamwork',
        },
        {
          selected: false,
          value: 'Oral communications',
        },
        {
          selected: false,
          value: 'written communications',
        },
        {
          selected: false,
          value: 'IT',
        },
      ],
    },
    {
      name: 'Music',
      value: 'MUSIC',
      skills: [
        {
          selected: false,
          value: 'Instrument  playing',
        },
        {
          selected: false,
          value: 'ideas and inspiration',
        },
        {
          selected: false,
          value: 'Digital and analog mixing',
        },
        {
          selected: false,
          value: 'Cubase',
        },
        {
          selected: false,
          value: 'FL Studio',
        },
        {
          selected: false,
          value: 'Pro Tools',
        },
        {
          selected: false,
          value: 'Recording',
        },
        {
          selected: false,
          value: 'Thorough knowledge of musical',
        },
      ],
    },
    {
      name: 'Animation',
      value: 'anim',
      skills: [
        {
          selected: false,
          value: 'Adobe Premiere Pro',
        },
        {
          selected: false,
          value: 'CyberLink PowerDirector',
        },
        {
          selected: false,
          value: 'Adobe Photoshop',
        },
        {
          selected: false,
          value: 'Adobe Lightroom Classic',
        },
        {
          selected: false,
          value: 'Adobe Illustrator',
        },
        {
          selected: false,
          value: 'Adobe After Effects',
        },
      ],
    },
  ];
  selectedSkils: any = [];
  time: number = 1;
  title: string = '';
  desc: string = '';
  categ: any = null;
  level: number = 1;
  budget: number = 0;
  fileToUpload: File | any = null;
  selectedPost:string =" " ; 
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private postServ: PostService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((data) => {
      let result: any = data;
      console.log(result.id);
        this.selectedPost = result.id ; 
      this.postServ.getPostById(result.id).subscribe((data) => {
        let res: any = data;
        if (res.success) {
          this.title = res.message.title ;  
          this.desc = res.message.desc ; 
          this.budget = res.message.budget ;
          this.categ = res.message.category ;  
          console.log(res);
        }
      });
    });
    $('#skills').change(function () {
      const opt = $(this).val();
      if (opt == 'opt1') {
        $('#msgbox').html(
          '<h2>My House</h2>I have a large house on a quiet street'
        );
      } else if (opt == 'opt2') {
        $('#msgbox').html('<h2>My Car</h2>I drive an Audi A200');
      } else if (opt == 'opt3') {
        $('#msgbox').html(
          '<h2>My Bicycle</h2>I do not need a bicycle, I have a car.'
        );
      }
    });
  }
  changeCatg(event: any) {
    let catg = event.target.value;
    let selectedOne: any = this.categories.find((elm) => elm.value == catg);
    this.selectedSkils = selectedOne?.skills;
  }
  handleFileUpload(event: any) {
    this.fileToUpload = event.target.files[0];
  }
  handleedit() {
    let user = localStorage.getItem('userId') || '';
    let formData = new FormData();
    let filterSkills = this.selectedSkils.map((elm: any) => {
      if (elm.selected == true) {
        return elm.value;
      }
    });
    formData.append('level', this.level.toString());
    formData.append('budget', this.budget.toString());
    formData.append('userId', user);
    formData.append('desc', this.desc);
    formData.append('title', this.title);

    formData.append('category', this.categ);
    formData.append('skils', filterSkills);

    formData.append('attachment', this.fileToUpload);
    this.postServ.EditPost(formData,this.selectedPost).subscribe(data=>{
      let result:any = data ;
      if(result.success) {
        Swal.fire({
          title: 'Success!',
          text: 'The Post is updated ',
          icon: 'success',
          confirmButtonText: 'Cool'
        })
      }
      
      console.log(result) ; 
    })
  }
}