import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InitialPageComponent } from './pages/initial/initial.component';
import { DetailPageComponent } from './pages/detail/detail.component';


const routes: Routes = [
  { path: '', component: InitialPageComponent },
  { path: 'detail/:id', component: DetailPageComponent },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
