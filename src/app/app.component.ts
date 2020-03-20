import {Component} from '@angular/core';
import {Post} from './post/Post';
import {ComponentType} from './post/ContentComponentMetadata';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ng-blog';
  post: Post = {
    title: "Ez a cím",
    id: 1,
    uniqueId: 1,
    content: [
      {
        componentType: ComponentType.video,
        metadata: {
          type: 'youtube',
          source: "https://www.youtube.com/watch?v=WgXN0kO1JEA"
        }
      },
      {
        componentType: ComponentType.sourceCode,
        metadata: {
          language: 'html',
          code: '<h1>Hello World!</h1>'
        }
      },
      {
        componentType: ComponentType.video,
        metadata: {
          type: "mp4",
          source: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
        }
      }
    ]
  };
}
