import { Component } from '@angular/core';
import { BlogPost } from 'src/app/models/blog.class';
import * as blogPosts from 'src/app/shared/blogposts.json';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
  
export class BlogComponent {
  blogPosts: BlogPost[] = blogPosts;
  
  constructor () { }
  
  ngOnInit (): void {
    this.logPosts();
  }
  
  logPosts()  {
   for (let i = 0; i < this.blogPosts.length; i++) {
    const post = this.blogPosts[i];
    console.log('Post Nr:', i, post);
   }
  }
}
