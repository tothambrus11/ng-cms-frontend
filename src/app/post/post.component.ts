import {
  AfterContentChecked,
  AfterViewInit,
  Component,
  ComponentFactoryResolver,
  Input,
  OnInit,
  ViewChild,
  ViewContainerRef
} from '@angular/core';
import {Post} from './Post';
import {Title} from '@angular/platform-browser';
import {ComponentService} from './component.service';
import {ComponentType, Metadata} from './ContentComponentMetadata';
import {SourceCodeMetadata} from './source-code/SourceCodeMetadata';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit, AfterContentChecked {


  @Input() post: Post;
  @ViewChild('postContainer', {read: ViewContainerRef}) postContainer: ViewContainerRef;

  componentReferences = [];
  index: number = 0;

  constructor(private titleService: Title,
              public componentService: ComponentService,
              private resolver: ComponentFactoryResolver) {
  }


  addComponent(component: any, metadata: Metadata) {
    const factory = this.resolver.resolveComponentFactory(component);
    const componentRef: any = this.postContainer.createComponent(factory);
    componentRef.instance.metadata = metadata;
    this.componentReferences.push(componentRef);
  }

  ngOnInit() {
    this.titleService.setTitle(this.post.title);
  }


  updatePost() {
    if (this.postContainer) {
      this.postContainer.clear();
      this.post.content.forEach(value => {
        const component = this.componentService.getComponent(value.componentType);
        this.addComponent(component, value.metadata);
      });
    }
  }

  ngAfterContentChecked(): void {
    this.updatePost();
  }

  changecucc() {
    (this.post.content[1].metadata as SourceCodeMetadata).code = 'más';
    this.post.content.push({
      componentType: ComponentType.sourceCode,
      metadata: {
        code: 'html, body{}',
        language: 'css'
      }
    });

    // this.updatePost();
  }
}
