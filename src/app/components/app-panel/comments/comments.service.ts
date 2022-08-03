import { Injectable } from '@angular/core';
import { ApiService } from 'src/app/service/api.service';

@Injectable()
export class CommentsService {
  constructor(private _apiService: ApiService) { }
  getAllComments(){
    return this._apiService.get(`/comments`);
  }
  delete(id){
    return this._apiService.delete(`/comments/${id}`);
  }
}
