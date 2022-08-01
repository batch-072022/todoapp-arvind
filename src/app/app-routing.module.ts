import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AddtaskComponent } from './addtask/addtask.component';
import { ListtaskComponent } from './listtask/listtask.component';
import { EdittaskComponent } from './edittask/edittask.component';
import { RegisterComponent } from './register/register.component';


const routes: Routes = [
{path:'register',component: RegisterComponent},
{path:'login',component: LoginComponent},
{path:'listtask',component: ListtaskComponent},
{path:'addtask',component: AddtaskComponent},
{path:'edittask',component: EdittaskComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
