import { Component, OnInit, Input } from '@angular/core';
import { Article } from './article.model'

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css'],
  // tslint:disable-next-line:use-host-property-decorator
  host: {
    class: 'row'
  }
})
export class ArticleComponent implements OnInit {

  // votes: number;
  // title: string;
  // link: string;
  @Input() article: Article;
  constructor() {
    // this.title = 'Angular 2';
    // this.link = 'http://angular.io';
    // this.votes = 10;

  }

  voteUp(): boolean {
    this.article.voteUp();
    return false;
  }
  voteDown(): boolean {
    this.article.voteDown();
    return false;
  }


  ngOnInit() {
  }

}
