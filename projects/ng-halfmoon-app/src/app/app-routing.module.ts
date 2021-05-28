import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {InputComponent} from "./input/input.component";
import {SelectComponent} from "./select/select.component";
import {FormComponent} from "./form/form.component";
import {DarkModeToggleComponent} from "./dark-mode-toggle/dark-mode-toggle.component";

const routes: Routes = [
  {path: 'buttons', loadChildren: () => import('./buttons/buttons.module').then(m => m.ButtonsModule)},
  {path: 'input', component: InputComponent},
  {path: 'select', component: SelectComponent},
  {path: 'form', component: FormComponent},
  {path: 'darkMode', component: DarkModeToggleComponent},
  {path: 'alert', loadChildren: () => import('./advanced/alert/alert.module').then(m => m.AlertModule)},
  {path: 'modal', loadChildren: () => import('./modal/modal.module').then(m => m.ModalModule)}
];
@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
