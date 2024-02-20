import { Component, HostListener, OnInit } from '@angular/core';
import { PostService } from './post.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  posts: string[] = [];
  batchSize = 10;
  startIndex = 0;
  isLoading = false;
  isEndOfPosts = false;

  constructor(private postService: PostService) { }

  ngOnInit(): void {
    this.loadPosts(); // Initialize by loading initial set of posts
  }

  // Function to load posts from the server
  loadPosts(): void {
    // Check if posts are not being loaded and there are more posts available
    if (!this.isLoading && !this.isEndOfPosts) {
      this.isLoading = true; // Set loading flag to true to prevent redundant requests
      this.postService.getPosts(this.startIndex, this.batchSize)
        .subscribe(posts => {
          // If server returns posts
          if (posts.length > 0) {
            // Append fetched posts to existing posts
            this.posts = [...this.posts, ...posts];
            this.startIndex += this.batchSize; // Increment startIndex for next batch
          } else {
            // If no more posts returned by the server, mark end of posts
            this.isEndOfPosts = true;
          }
          this.isLoading = false; // Reset loading flag after processing response
        });
    }
  }

  // HostListener to monitor scrolling events
  @HostListener('window:scroll', ['$event'])
  onScroll(): void {
    // Check if not reached end of posts and user scrolled to 90% of page height
    if (!this.isEndOfPosts && (window.innerHeight + window.scrollY) >= document.body.offsetHeight * 0.9) {
      this.loadPosts(); // Load more posts
    }
  }
}
// Function to monitor scrolling events and trigger post loading
// Visibility calculation is not explicitly implemented here. 
// For precise visibility calculations, Intersection Observer API can be utilized.
// However, in this scenario, we're triggering loading when the user scrolls near the bottom of the page.


// Function to load posts from the server efficiently
// It checks if posts are already being loaded and if there are more posts available.
// This prevents redundant requests when posts are being loaded or when all posts are fetched.
