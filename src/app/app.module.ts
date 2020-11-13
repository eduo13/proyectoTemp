//Rutas
import { APP_ROUTING } from './app.routes';

//@Angular
import { environment } from './../environments/environment';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { EffectsModule } from '@ngrx/effects';

//@ngrx
//import { reducers } from './components/login/redux/store/app.states';
import { StoreModule } from '@ngrx/store';
import { appReducers, metaReducers } from './app.reducer';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
//import { LoginEffects } from './components/login/redux/store/login.effects';

//Components
import { AppComponent } from './app.component';
import { HomeComponent } from './components/shared/home/home.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SidenavComponent } from './components/shared/sidenav/sidenav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { AuthServiceCanloadGuard } from './services/auth-service-canload.guard';
import { AuthServiceCanActivateGuard } from './services/auth-service-canactivate.guard';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FooterComponent,
    SidenavComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    CommonModule,
    APP_ROUTING,
    //EffectsModule.forRoot([LoginEffects]),
    StoreModule.forRoot(appReducers, {metaReducers}),
    //StoreModule.forRoot(reducers, {}),
    //StoreModule.forRoot(appReducers, {metaReducers}),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production,
    }),
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
  ],
  providers: [ AuthServiceCanloadGuard, AuthServiceCanActivateGuard ],
  bootstrap: [AppComponent]
})
export class AppModule { }
