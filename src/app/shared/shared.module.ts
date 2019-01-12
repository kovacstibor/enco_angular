import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DateToStringPipe } from './pipes/date-to-string.pipe';
import { ConcertTag } from './components/concert-tag.component';

@NgModule({
  declarations: 
  [
    DateToStringPipe,
    ConcertTag
  ],
  imports: 
  [
    CommonModule
  ],
  exports:
  [
    DateToStringPipe,
    ConcertTag
  ]
})
export class SharedModule { }
