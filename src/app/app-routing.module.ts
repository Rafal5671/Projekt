import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormComponent } from './form/form.component';
import { HomepageComponent } from './homepage/homepage.component';
import { HarmonogramComponent } from './harmonogram/harmonogram.component';
const routes: Routes = [
  { path: '', component: HomepageComponent },
  {path:'form',component:FormComponent},
  {path:'Harmonogram',component:HarmonogramComponent},
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
