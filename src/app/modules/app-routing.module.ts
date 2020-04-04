import { NgModule } from '@angular/core';
import {PreloadAllModules, RouterModule, Routes} from '@angular/router';

const routes: Routes =
  [
    { path: '', redirectTo: '/profile', pathMatch: 'full'},
    { path: 'auth', loadChildren: () => import('./auth.module').then(module => module.AuthModule)},
    { path: 'profile', loadChildren: () => import('./profile.module').then(module => module.ProfileModule)},
    { path: 'recipes', loadChildren: () => import('./recipes.module').then(module => module.RecipesModule)},
    { path: 'shopping-list', loadChildren: () => import('./shopping-list.module').then(module => module.ShoppingListModule)}
  ];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {preloadingStrategy: PreloadAllModules})
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}
