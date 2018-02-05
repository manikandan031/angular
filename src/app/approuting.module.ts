import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { WelcomeComponent } from './home/welcome.component';
import { AuthGuard } from './user/auth-guard.service';
import { PreloadAllModules } from '@angular/router';
import { SelectiveStrategy } from './selectivestrategy.service';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot([
      { path: 'welcome', component: WelcomeComponent },
      { 
        path: 'products', 
        loadChildren: 'app/products/products.module#ProductsModule', 
        canActivate: [AuthGuard],
        data: {preload: true}
      },
      { path: '', redirectTo: 'welcome', pathMatch: 'full' },
      { path: '**', redirectTo: 'welcome', pathMatch: 'full' }
    ],{enableTracing: true, preloadingStrategy: SelectiveStrategy})
  ],
  declarations: [],
  providers: [SelectiveStrategy],
  exports: [
    RouterModule
  ]
})
export class ApproutingModule { }
