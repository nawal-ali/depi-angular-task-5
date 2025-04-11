import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { CategoriesComponent } from './pages/categories/categories.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  // {path:'home/:selectedValue',component:CategoriesComponent},
  {path:'home/:selectedOption',component:CategoriesComponent},
  { path: 'board', loadChildren: () => import('./pages/board/board.module').then(m => m.BoardModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
