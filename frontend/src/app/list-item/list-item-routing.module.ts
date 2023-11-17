import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListItemPage } from './list-item.page';

const routes: Routes = [
  {
    path: 'list-item-page',
    component: ListItemPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListItemPageRoutingModule {}
