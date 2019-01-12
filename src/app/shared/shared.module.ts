import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DateToStringPipe } from './pipes/date-to-string.pipe';
import { ConcertTag } from './components/concert-tag.component';
import { ConcertTicketCategoryComponent } from './components/concert-ticket-category.component';

@NgModule({
  declarations: 
  [
    DateToStringPipe,
    ConcertTag,
    ConcertTicketCategoryComponent
  ],
  imports: 
  [
    CommonModule
  ],
  exports:
  [
    DateToStringPipe,
    ConcertTag,
    ConcertTicketCategoryComponent
  ]
})
export class SharedModule { }
