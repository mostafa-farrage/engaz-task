import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CRUDCreatePage } from 'src/app/model/crud-create.model';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  page: CRUDCreatePage = new CRUDCreatePage();
  invalidUser: boolean = false
  logo: string;
  fieldTextType: boolean;
  constructor(private _auth: AuthService, public formBuilder: FormBuilder, private _router: Router) { }

  ngOnInit(): void {
    this.createForm();
  }

  createForm() {
    this.page.form = this.formBuilder.group({
      email: ['', [Validators.required]],
      Password: ['', [Validators.required]]
    });
    this.page.isPageLoaded = true
  }

  disabledSubmit() {
    return this.page.isSaving;
  }
  enterEvent(event) {
    if (event.key == 'Enter' && !this.disabledSubmit()) {
      this.login()
    }
  }

  toggleFieldTextType() {
    this.fieldTextType = !this.fieldTextType;
  }
  register() {
    this._auth.Register({ email: this.page.form.controls['email'].value, password: this.page.form.controls['Password'].value }).subscribe((res) => {
      this._router.navigate(['/login'])
    },()=>this.invalidUser=true);
  }
  isRegister() {
    return this._router.url.split('/')[1] == 'register'
  }
  login() {
    this._auth.Login({ email: this.page.form.controls['email'].value, password: this.page.form.controls['Password'].value }).subscribe((res) => {
      this._auth.SetToken(res.accessToken);
    }, (err) => this.invalidUser = true);
  }
}
