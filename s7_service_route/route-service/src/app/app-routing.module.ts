import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {TimelinesAppComponent} from "./timelines-app/timelines-app.component";
import {YoutubePlaylistComponent} from "./music-app/youtube-playlist/youtube-playlist.component";
import {YoutubePlayerComponent} from "./music-app/youtube-player/youtube-player.component";
import {ProductListComponent} from "./product/product-list/product-list.component";
import {ProductCreateComponent} from "./product/product-create/product-create.component";
import {ProductEditComponent} from "./product/product-edit/product-edit.component";
import {ProductDeleteComponent} from "./product/product-delete/product-delete.component";




const routes: Routes = [
  {path: 'timelines', component: TimelinesAppComponent},
  {path: 'youtube', component: YoutubePlaylistComponent,children:[{path:':id',component: YoutubePlayerComponent}]},
  {path: 'product/list', component: ProductListComponent},
  {path: 'product/create', component: ProductCreateComponent},
  {path: 'product/edit/:id', component: ProductEditComponent},
  {path: 'product/delete/:id', component: ProductDeleteComponent},
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
