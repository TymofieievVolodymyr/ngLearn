import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';
import {Post} from './post.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  loadedPosts: Post[] = [];
  isFetching = false;

  constructor(private http: HttpClient) {
  }

  ngOnInit(): void {
    this.fetchPosts();
  }

  onCreatePost(postData: Post): void {
    this.http
      .post<{ name: string }>(
        'https://ng-vovanium-default-rtdb.firebaseio.com/posts.json',
        postData
      )
      .subscribe(responseData => {
        console.log(responseData);
      });
  }

  onFetchPosts(): void {
    this.fetchPosts();
  }

  onClearPosts(): void {
    // Send Http request
  }

  private fetchPosts(): void {
    this.isFetching = true;
    this.http
      .get<{ [key: string]: Post }>('https://ng-vovanium-default-rtdb.firebaseio.com/posts.json')
      .pipe(
        map(responseData => {
          const postsArray: Post[] = [];
          for (const key in responseData) {
            if (responseData.hasOwnProperty(key)) {
              postsArray.push({...responseData[key], id: key});
            }
          }
          return postsArray;
        })
      )
      .subscribe(posts => {
        this.isFetching = false;
        this.loadedPosts = posts;
      });
  }

}
