import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})
export class ClientdetailsService {
  constructor(private http: HttpClient) {}

  addClient(body: any) {
    return this.http.post('http://localhost:3000/client/details/add', body);
  }

  getClientDetails(id:any)
  {
    return this.http.get('http://localhost:3000/client/details/'+id)
  }

  addFreelance(body: any) {
    return this.http.post('http://localhost:3000/free/details/add', body);
  }

  getFreelanceDetails(id:any)
  {
    return this.http.get('http://localhost:3000/free/details/'+id)
  }
}
