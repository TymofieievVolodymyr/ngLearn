import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Post} from './post.model';
import {PostsService} from './posts.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  loadedPosts: Post[] = [];
  isFetching = false;

  constructor(private http: HttpClient,
              private postsService: PostsService) {
  }

  ngOnInit(): void {
    this.postsService.fetchPosts();
  }

  onCreatePost(postData: Post): void {
    this.postsService.createAndStorePost(postData.title, postData.content);
  }

  onFetchPosts(): void {
    this.postsService.fetchPosts();
  }

  onClearPosts(): void {
    // Send Http request
  }
}
