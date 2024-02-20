import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostComponent } from './post/post.component';

export const routes: Routes = [
  { path: '', redirectTo: '/posts', pathMatch: 'full' }, // Redirect the root path to '/posts'
  { path: 'posts', component: PostComponent }, // Route to display posts
  // Add other routes if needed
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
