import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PlacesPage } from './places.page';

const routes: Routes = [
  {
    path: '',
    component: PlacesPage
  },
  {
    path: 'place-detail-page',
    loadChildren: () => import('./place-detail/place-detail-page/place-detail-page.module').then( m => m.PlaceDetailPagePageModule)
  },
  {
    path: 'place-detail',
    loadChildren: () => import('./place-detail/place-detail/place-detail.module').then( m => m.PlaceDetailPageModule)
  },
  {
    path: 'place-add',
    loadChildren: () => import('./places-add/place-add/place-add.module').then( m => m.PlaceAddPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PlacesPageRoutingModule {}
