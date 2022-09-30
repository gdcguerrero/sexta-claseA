import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './modules/uno/components/not-found/not-found.component';
import { GetCharactersResolver } from './libs/resolvers/get-characters/get-characters.resolver';

const routes: Routes = [
  {
    path: '',
    resolve: {
      character: GetCharactersResolver
    },
    children: [
      {
        path: '',
        redirectTo: 'characters',
        pathMatch: 'full'
      },
      {
        path: 'characters',
        loadChildren: () => import('./modules/uno/uno.module').then(m => m.UnoModule)
      }
    ]
  },
  {
    path: '**',
    redirectTo: '404'
  },
  {
    path: '404',
    component: NotFoundComponent,
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
