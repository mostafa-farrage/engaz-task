import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ControlComponent } from './control/control.component';
import { CommentsService } from './comments.service';
import { CommentsComponent } from './index/comments.component';



export const routes: Routes = [
  {path:'all',component:CommentsComponent},
  {path:'control',component:ControlComponent},
]

@NgModule({
  declarations: [CommentsComponent,ControlComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  providers:[CommentsService]
})

export class CommentsModule { }