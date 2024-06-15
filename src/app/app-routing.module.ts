import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ProductsComponent } from './products/products.component';
import { CartComponent } from './cart/cart.component';
import { LogoutComponent } from './logout/logout.component';
import { authGuard } from './auth.guard';
import { ShowemployeesComponent } from './Showemployees/showemployees.component';
import { ShowempbyidComponent } from './showempbyid/showempbyid.component';
import { HomeComponent } from './home/home.component';
import { ContactsComponent } from './contacts/contacts.component';
import { PasswordRecoveryComponent } from './password-recovery/password-recovery.component';


const routes: Routes = [
  { path: '', component: HomeComponent }, // Default route
  { path: 'login', component: LoginComponent },
  { path: 'contacts', component: ContactsComponent },
  { path: 'password-recovery', component: PasswordRecoveryComponent },
  {path:'register',    component:RegisterComponent},

  {path:'showemps',    canActivate:[authGuard], component:ShowemployeesComponent},
  {path:'showempbyid', canActivate:[authGuard], component:ShowempbyidComponent},
  {path:'products',    canActivate:[authGuard], component:ProductsComponent},
  {path:'cart',        canActivate:[authGuard], component:CartComponent},
  {path:'logout',      canActivate:[authGuard], component:LogoutComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }



