import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ImprintComponent } from './routing/imprint/imprint.component';
import { DataProtectionComponent } from './routing/data-protection/data-protection.component';
import { PrivacyPolicyComponent } from './routing/privacy-policy/privacy-policy.component';
import { MainpaneComponent } from './mainpane/mainpane.component';
import { AppComponent } from './app.component';
import { AipaneComponent } from './routing/aipane/aipane.component';
import { FrontendDevComponent } from './routing/frontend-dev/frontend-dev.component';
import { ConnectWithMeComponent } from './routing/connect-with-me/connect-with-me.component';

const routes: Routes = [
  { path: '', component: MainpaneComponent },
  { path: 'imprint', component: ImprintComponent },
  { path: 'connect', component: ConnectWithMeComponent },
  { path: 'ai', component: AipaneComponent },
  { path: 'frontend-dev', component: FrontendDevComponent },
  { path: 'privacy-policy', component: PrivacyPolicyComponent },
  { path: 'data-protection', component: DataProtectionComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
export const routingComponents = [
  MainpaneComponent,
  ImprintComponent,
  PrivacyPolicyComponent,
  DataProtectionComponent,
  AipaneComponent,
];
