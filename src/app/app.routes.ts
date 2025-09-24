import { Router, RouterModule, Routes } from '@angular/router';
import { Layout } from './layout/layout';
import { Home } from './home/home';
import { About } from './about/about';
import { Ui } from './ui/ui';
import { NgModule } from '@angular/core';

export const routes: Routes = [

{
    path:'',
    component:Layout,
    children:[
        {
          path:'',
          component:Home,
          title:'inicio'
        },
        {
          path:'about',
          component:About,
          title:'Un dia con nosotros'
        },
         { 
            path: 'ui', 
            component: Ui,
            title:'ui componente'
        }
    ]
}


];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }