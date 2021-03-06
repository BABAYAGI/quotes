import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; 

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QuotesFormComponent } from './quotes-form/quotes-form.component';
import { QuotesComponent } from './quotes/quotes.component';
import { QuotesdetailComponent } from './quotesdetail/quotesdetail.component';
import { SrikethroughDirective } from './srikethrough.directive';
import { DateCountPipe } from './date-count.pipe';
import { LikeComponent } from './like/like.component';
import { DislikeComponent } from './dislike/dislike.component';

@NgModule({
  declarations: [
    AppComponent,
    QuotesFormComponent,
    QuotesComponent,
    QuotesdetailComponent,
    SrikethroughDirective,
    DateCountPipe,
    LikeComponent,
    DislikeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule 

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
