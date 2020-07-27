// 配置路由模块
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ProductComponent } from './components/product/product.component';
import { NewsComponent } from './components/news/news.component';

const routes: Routes = [
  {
    path:'home', component:HomeComponent
  },
  {
    path:'news', component:NewsComponent
  },
  {
    path:'product', component:ProductComponent
  },
  {
    path:'**', redirectTo:'home'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
