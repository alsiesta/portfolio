import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ImprintComponent } from './routing/imprint/imprint.component';
import { MainpaneComponent } from './mainpane/mainpane.component';
import { AboutmeComponent } from './routing/aboutme/aboutme.component';
import { MyskillsComponent } from './routing/myskills/myskills.component';
import { PortfolioComponent } from './routing/portfolio/portfolio.component';
import { ContactComponent } from './routing/contact/contact.component';

const routes: Routes = [
  { path: 'home', component: MainpaneComponent },
  { path: 'aboutme', component: AboutmeComponent },
  { path: 'myskills', component: MyskillsComponent },
  { path: 'portfolio', component: PortfolioComponent },
  { path: 'contact', component: ContactComponent },
  {path: 'imprint', component: ImprintComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
