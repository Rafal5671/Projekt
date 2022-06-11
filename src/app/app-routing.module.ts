import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormComponent } from './form/form.component';
import { HomepageComponent } from './homepage/homepage.component';
import { HarmonogramComponent } from './harmonogram/harmonogram.component';
import { ZbiorkaComponent } from './zbiorka/zbiorka.component';
const routes: Routes = [
  { path: '', component: HomepageComponent, data: { animation: 'isLeft' }},
  {path:'form',component:FormComponent, data: { animation: 'isRight' } },
  {path:'Harmonogram',component:HarmonogramComponent,data: { animation: 'isRight' } },
  {path:'Zbiorka',component:ZbiorkaComponent,data: { animation: 'isLeft' } },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
