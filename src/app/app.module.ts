import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import { UserModule } from './user/user.module';
import { ProductModule } from './product/product.module';
import { Interceptor } from './interceptor';
import { JwtHelperService , JWT_OPTIONS } from '@auth0/angular-jwt';
import { AuthService } from './services/auth.service';
import { RoleGuardService } from './services/role-guard.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    SharedModule,
    UserModule,
    ProductModule,
    RouterModule,
    AppRoutingModule,
  
  
  ],
  providers: [{provide: HTTP_INTERCEPTORS, useClass: Interceptor, multi: true}, { provide: JWT_OPTIONS , useValue: JWT_OPTIONS},
    AuthService, RoleGuardService, JwtHelperService 
   ],
  bootstrap: [AppComponent]
})
export class AppModule { }
