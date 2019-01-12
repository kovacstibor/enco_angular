import { NgModule } from '@angular/core';

import { ConcertsRoutingModule } from './concerts-routing.module';
import { SharedModule } from '../shared/shared.module';
import { ConcertListPageComponent } from './pages/concert-list.page.component';
import { ConcertsApiClientService } from './clients/concerts-api-client.service';
import { ConcertDetailsPageComponent } from './pages/concert-details.page.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    ConcertListPageComponent,
    ConcertDetailsPageComponent
  ],
  imports: [
    ConcertsRoutingModule,
    SharedModule,
    CommonModule
  ],
  providers: [
    ConcertsApiClientService
  ]
})
export class ConcertsModule { }
