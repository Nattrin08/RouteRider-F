import { Component, Input } from '@angular/core';

interface Comment {
  author: string;
  message: string;
  date: string;
}

@Component({
  selector: 'app-coments-box',
  templateUrl: './coments-box.component.html',
  styleUrls: ['./coments-box.component.css']
})
export class ComentsBoxComponent {

  today: Date = new Date();

  comments: Comment[] = [];
  newComment: Comment = { author: 'Invitado', message: '', date: this.today.toLocaleString() };

  addComment() {
    if (this.newComment.message.trim() !== '') {
      this.comments.push({ ...this.newComment });
      this.newComment.author = '';
      this.newComment.message = '';
    }
  }
}
