import { Injectable } from '@angular/core';
import { ApiService } from 'src/app/service/api.service';

@Injectable()
export class PostsService {
  constructor(private _apiService: ApiService) { }
  getAllPosts(){
    return this._apiService.get(`/posts`);
  }
  delete(id){
    return this._apiService.delete(`/posts/${id}`);
  }
}
