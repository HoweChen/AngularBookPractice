import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HelloWorldComponent } from './hello-world/hello-world.component';
import { UserItemComponent } from './user-item/user-item.component';
import { UserListComponent } from './user-list/user-list.component';
import { FakeRedditComponent } from './fake-reddit/fake-reddit.component';
import { ArticleComponent } from './article/article.component';

@NgModule({
  declarations: [
    AppComponent,
    HelloWorldComponent,
    UserItemComponent,
    UserListComponent,
    FakeRedditComponent,
    ArticleComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
