import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// import { CreateComponent } from './create/create.component';
import { Routes, RouterModule } from '@angular/router';
import { IndexComponent } from './index/index.component';
import { AuthGuardService } from 'src/app/guards/auth-guard.service ';



const routes: Routes =
  [{
    path: '',
    component: IndexComponent,
    children: [
      {
        path: '', redirectTo: 'posts', pathMatch: 'full'
      },
      {
        path: 'posts',
        loadChildren: () => import('./posts/posts.module').then(m => m.PostsModule),
      },
      {
        path: 'comments',
        loadChildren: () => import('../app-panel/comments/comments.module').then(m => m.CommentsModule),
      }]
  }];

@NgModule({
  declarations: [IndexComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
})

export class AppPanelModule { }