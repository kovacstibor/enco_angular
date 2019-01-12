import { NgModule } from '@angular/core';

import { ConcertsRoutingModule } from './concerts-routing.module';
import { SharedModule } from '../shared/shared.module';
import { ConcertListPageComponent } from './pages/concert-list.page.component';
import { ConcertsApiClientService } from './clients/concerts-api-client.service';
import { ConcertDetailsPageComponent } from './pages/concert-details.page.component';

@NgModule({
  declarations: [
    ConcertListPageComponent,
    ConcertDetailsPageComponent
  ],
  imports: [
    ConcertsRoutingModule,
    SharedModule
  ],
  providers: [
    ConcertsApiClientService
  ]
})
export class ConcertsModule { }
