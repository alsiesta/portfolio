import { Component } from '@angular/core';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent {
  blogPosts: Array<any> = [];
  newPostTitle: string = '';
  newPostContent: string = '';

  constructor() { }

  ngOnInit(): void {
    // Hier können Sie vorhandene Blog-Posts aus einer Datenquelle laden, wenn gewünscht
  }

  addBlogPost(): void {
    if (this.newPostTitle && this.newPostContent) {
      const newPost = {
        title: this.newPostTitle,
        content: this.newPostContent
      };
      this.blogPosts.push(newPost);
      this.newPostTitle = '';
      this.newPostContent = '';
    }
  }
}
