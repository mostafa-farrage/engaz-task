import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// import { CreateComponent } from './create/create.component';
import { Routes, RouterModule } from '@angular/router';
import { PostsComponent } from './index/post.component';
import { ControlComponent } from './control/control.component';
import { PostsService } from './posts.service';



export const routes: Routes = [
  {path:'all',component:PostsComponent},
  {path:'control',component:ControlComponent},
]

@NgModule({
  declarations: [PostsComponent,ControlComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  providers:[PostsService]
})

export class PostsModule { }