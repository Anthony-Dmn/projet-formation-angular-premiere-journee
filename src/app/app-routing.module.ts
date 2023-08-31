import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageHomeComponent } from './home/pages/page-home/page-home.component';
import { PageContactComponent } from './contact/pages/page-contact/page-contact.component';

const routes: Routes = [
  { path: '', component: PageHomeComponent },
  { path: 'contactez-nous', component: PageContactComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
