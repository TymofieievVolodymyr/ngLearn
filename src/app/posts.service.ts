import {Injectable} from '@angular/core';
import {
  HttpClient,
  HttpHeaders,
  HttpParams,
  HttpEventType
} from '@angular/common/http';
import {map, catchError, tap} from 'rxjs/operators';
import {Subject, throwError} from 'rxjs';

import {Post} from './post.model';


@Injectable({providedIn: 'root'})
export class PostsService {
  error = new Subject<string>();

  constructor(private http: HttpClient) {
  }

  createAndStorePost(title: string, content: string): void {
    const postData: Post = {title, content};
    this.http
      .post<{ name: string }>(
        'https://ng-vovanium-default-rtdb.firebaseio.com/posts.json',
        postData
      )
      .subscribe(responseData => {
        console.log(responseData);
      });
  }
    fetchPosts(): void {
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
        });
    }
}


