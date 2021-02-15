import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS  } from '@angular/common/http';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ErrorInterceptor } from './services/auth/error.interceptor';
import { JwtInterceptor  } from './services/auth/jwt.interceptor';



@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule,
     IonicModule.forRoot(),
    AppRoutingModule,
    FormsModule,
    HttpClientModule,],
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true }
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
