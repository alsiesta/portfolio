import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-blog-post',
  templateUrl: './blog-post.component.html',
  styleUrls: ['./blog-post.component.scss']
})
export class BlogPostComponent {
  @Input() blogpost: any;
  @Input() links!: boolean;
  @Input() fxDirection: string = '';
  @Input() linkWebCase: string = '';
  @Input() linkGitCase: string = '';
}
