import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ConcertListPageComponent } from './pages/concert-list.page.component';
import { ConcertDetailsPageComponent } from './pages/concert-details.page.component';

const routes: Routes = 
[
  { path: '', component: ConcertListPageComponent },
  { path: ':id', component: ConcertDetailsPageComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ConcertsRoutingModule { }
