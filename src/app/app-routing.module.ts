import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CoreModule } from './core/core.module';
import { ConcertsModule } from './concerts/concerts.module';

const routes: Routes = [
  { path: '', loadChildren: () => CoreModule },
  { path: 'concerts', loadChildren: () => ConcertsModule }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
