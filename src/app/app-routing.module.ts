import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddPostComponent } from './add-post/add-post.component';
import { PostListComponent } from './post-list/post-list.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'listpost',
    pathMatch: 'full',
  },
  {
    path: 'addpost',
    component: AddPostComponent,
  },
  {
    path: 'listpost',
    component: PostListComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
