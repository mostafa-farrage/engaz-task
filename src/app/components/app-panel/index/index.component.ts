import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/service/auth.service';
@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: []
})
export class IndexComponent  implements OnInit {
  constructor(private _authService:AuthService){}
  ngOnInit(): void {}
}