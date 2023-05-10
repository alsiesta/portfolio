import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ImprintComponent } from './routing/imprint/imprint.component';
import { DataProtectionComponent } from './routing/data-protection/data-protection.component';
import { PrivacyPolicyComponent } from './routing/privacy-policy/privacy-policy.component';
import { MainpaneComponent } from './mainpane/mainpane.component';
import { AppComponent } from './app.component';

const routes: Routes = [
  {path: '', component: MainpaneComponent},
  { path: 'imprint', component: ImprintComponent },
  { path: 'privacy-policy', component: PrivacyPolicyComponent },
  { path: 'data-protection', component: DataProtectionComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [MainpaneComponent,ImprintComponent,PrivacyPolicyComponent,DataProtectionComponent]
