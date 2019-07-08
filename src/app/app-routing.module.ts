import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: './tabs/tabs.module#TabsPageModule' },
  { path: 'info', loadChildren: './pages/info/info.module#InfoPageModule' },
  { path: 'well-zoom', loadChildren: './pages/well-zoom/well-zoom.module#WellZoomPageModule' },
  { path: 'well-info', loadChildren: './pages/well-info/well-info.module#WellInfoPageModule' },
  { path: 'login', loadChildren: './pages/login/login.module#LoginPageModule' },
  { path: 'userinfo', loadChildren: './pages/userinfo/userinfo.module#UserinfoPageModule' },
  { path: 'my-help', loadChildren: './pages/my-help/my-help.module#MyHelpPageModule' },
  { path: 'help-me', loadChildren: './pages/help-me/help-me.module#HelpMePageModule' }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
