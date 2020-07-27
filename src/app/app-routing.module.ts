// 配置路由模块
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ProductComponent } from './components/product/product.component';
import { NewsComponent } from './components/news/news.component';
import { NewscontentComponent } from './components/newscontent/newscontent.component';
import { ProductcontentComponent } from './components/productcontent/productcontent.component';

const routes: Routes = [
  {
    path:'home', component:HomeComponent
  },
  {
    path:'news', component:NewsComponent
  },
  {
    // get传值
    // path:'newscontent', component:NewscontentComponent
    // // 动态传值
    path:'newscontent/:aid', component:NewscontentComponent
  },
  {
    path:'product', component:ProductComponent
  },
  {
    path:'productcontent/:pid', component:ProductcontentComponent
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
