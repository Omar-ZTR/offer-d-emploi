import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PostService {
  constructor(private http: HttpClient) {}

  addPost(body: any) {
    let token = localStorage.getItem('token') || '';
    return this.http.post('http://localhost:3000/post/add', body, {
      headers: {
        'x-access-token': token,
      },
    });
  }
  EditPost(body: any,id:any) {
    let token = localStorage.getItem('token') || '';
    return this.http.put('http://localhost:3000/post/edit/'+id, body, {
      headers: {
        'x-access-token': token,
      },
    });
  }
  getPostsByCateg(categ: any) {
    let token = localStorage.getItem('token') || '';
    return this.http.get('http://localhost:3000/post/' + categ, {
      headers: {
        'x-access-token': token,
      },
    });
  }
  getPostsAll() {
    let token = localStorage.getItem('token') || '';
    return this.http.get('http://localhost:3000/post/', {
      headers: {
        'x-access-token': token,
      },
    });
  }
  getPostById(id: any) {
    let token = localStorage.getItem('token') || '';
    return this.http.get('http://localhost:3000/post/offre/' + id, {
      headers: {
        'x-access-token': token,
      },
    });
  }
  deteletPost(id: any) {
    let token = localStorage.getItem('token') || '';
    return this.http.delete('http://localhost:3000/post/delete/' + id, {
      headers: {
        'x-access-token': token,
      },
    });
  }
  getPostByUser(id: any) {
    let token = localStorage.getItem('token') || '';
    return this.http.get('http://localhost:3000/post/myoffre/' + id, {
      headers: {
        'x-access-token': token,
      },
    });
  }
  addAnewComment(id: any, body: any) {
    let token = localStorage.getItem('token') || '';
    return this.http.post(
      'http://localhost:3000/post/add/comment/' + id,
      body,
      {
        headers: {
          'x-access-token': token,
        },
      }
    );
  }
}
