import {Component, Input, OnInit} from '@angular/core';
import {Post} from './Post';
import {Title} from '@angular/platform-browser';
import {ComponentService} from './component.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {

  @Input() post: Post;

  constructor(private titleService: Title, public componentService: ComponentService) {
    componentService.getComponents().forEach(value => {
      console.log(value.componentType);
    });
  }

  ngOnInit() {
    this.titleService.setTitle(this.post.title);
  }
}
