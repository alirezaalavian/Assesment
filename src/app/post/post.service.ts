import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  private posts: string[] = Array.from({ length: 100 }, (_, i) => `Post ${i + 1}`);

  constructor() { }

  // Simulating fetching posts from server
  getPosts(startIndex: number, batchSize: number): Observable<string[]> {
    return of(this.posts.slice(startIndex, startIndex + batchSize)).pipe(
      delay(500) // Simulating network delay
    );
  }
}