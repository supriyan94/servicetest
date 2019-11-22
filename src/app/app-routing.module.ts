import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { HelloComponent } from './hello/hello.component';
import { MenuComponent } from './menu/menu.component';
import { UserComponent } from './user/user.component';

const routes: Routes =
  [ { path: 'menu', component: MenuComponent},
    { path: '', redirectTo: '/menu', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'hello', component: HelloComponent },
    { path: 'user', component: UserComponent },
    { path: '**', component: MenuComponent }
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
