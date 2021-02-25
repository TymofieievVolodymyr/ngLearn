import {Injectable} from '@angular/core';
import {
  HttpClient,
  HttpHeaders,
  HttpParams,
  HttpEventType
} from '@angular/common/http';
import {map, catchError, tap} from 'rxjs/operators';
import {Observable, Subject, throwError} from 'rxjs';

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
        postData,
        {
          observe: 'events'
        }
      )
      .subscribe(responseData => {
        console.log(responseData);
      }, error => {
        this.error.next(error.message);
      });
  }

  fetchPosts(): Observable<any> {
    return this.http
      .get<{ [key: string]: Post }>('https://ng-vovanium-default-rtdb.firebaseio.com/posts.json',
        {
          headers: new HttpHeaders({'Custom-Header': 'Hello'}),
          // params: new HttpParams().set('print', 'pretty')
        })
      .pipe(
        map(responseData => {
          const postsArray: Post[] = [];
          for (const key in responseData) {
            if (responseData.hasOwnProperty(key)) {
              postsArray.push({...responseData[key], id: key});
            }
          }
          return postsArray;
        }),
        catchError(errorRes => {
          // Send to analytics server
          return throwError(errorRes);
        })
      );
  }

  deletePosts(): Observable<any> {
    return this.http
      .delete('https://ng-vovanium-default-rtdb.firebaseio.com/posts.json', {
        observe: 'events',
        responseType: 'text'
      })
    .pipe(
      tap(event => {
        console.log(event);
        if (event.type === HttpEventType.Sent) {
          // ...
        }
        if (event.type === HttpEventType.Response) {
          console.log(event.body);
        }
      })
    );
  }
}


