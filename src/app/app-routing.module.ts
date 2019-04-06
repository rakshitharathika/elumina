import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ParentcomponentComponent } from './parentcomponent/parentcomponent.component';
import { ChildtcomponentComponent } from './childtcomponent/childtcomponent.component';
const routes: Routes = [
    {
        path: 'parent',
        component: ParentcomponentComponent
    },
      {
        path: 'child',
        component: ChildtcomponentComponent
    },
      { path: '', redirectTo: 'parent', pathMatch: 'full' }
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
