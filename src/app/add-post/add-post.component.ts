import { Component } from '@angular/core';
import { BlogService } from '../blog.service';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.css'],
})
export class AddPostComponent {
  title: string = '';
  content: string = '';
  author: string = '';

  constructor(private blogService: BlogService) {}

  addPost(): void {
    const newPost = {
      title: this.title,
      content: this.content,
      author: this.author,
    };
    this.blogService.addPost(newPost).subscribe(() => {
      this.title = '';
      this.content = '';
      this.author = '';
    });
  }
}
