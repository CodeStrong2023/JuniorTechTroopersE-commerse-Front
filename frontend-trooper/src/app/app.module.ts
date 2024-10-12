import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getStorage, provideStorage } from '@angular/fire/storage';




@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    
    
    
  ],
  providers: [
    provideClientHydration(),
    provideFirebaseApp(() => initializeApp({"projectId":"trooperstay","appId":"1:720990543501:web:416617640bb3665f240cc4","storageBucket":"trooperstay.appspot.com","apiKey":"AIzaSyBNRXWH1O0pP0nH701Ja3LmmVqr7dqyXBY","authDomain":"trooperstay.firebaseapp.com","messagingSenderId":"720990543501","measurementId":"G-KR06K737NR"})),
    provideStorage(() => getStorage()),
    provideFirebaseApp(() => initializeApp({"projectId":"trooperstay","appId":"1:720990543501:web:416617640bb3665f240cc4","storageBucket":"trooperstay.appspot.com","locationId":"us-central","apiKey":"AIzaSyBNRXWH1O0pP0nH701Ja3LmmVqr7dqyXBY","authDomain":"trooperstay.firebaseapp.com","messagingSenderId":"720990543501","measurementId":"G-KR06K737NR"}))
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
