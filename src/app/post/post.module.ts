// post.module.ts

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'; // Import CommonModule instead of BrowserModule
import { PostComponent } from './post.component';

@NgModule({
  declarations: [PostComponent],
  imports: [CommonModule], // Use CommonModule here
  exports: [PostComponent]
})
export class PostModule { }
