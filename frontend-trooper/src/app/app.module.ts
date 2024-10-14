import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule, provideHttpClient, withFetch } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getStorage, provideStorage } from '@angular/fire/storage';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { environment } from '../enviroments/enviroment';



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
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideStorage(() => getStorage()),
    provideHttpClient(withFetch()),
    provideFirebaseApp(() => initializeApp({"projectId":"trooper-stay","appId":"1:52197168029:web:e237e1341e71e458955574","storageBucket":"trooper-stay.appspot.com","apiKey":"AIzaSyDRGz14sohYuP3A0spsJrzIgHoLq5HASIk","authDomain":"trooper-stay.firebaseapp.com","messagingSenderId":"52197168029","measurementId":"G-HH5PB5P4NK"})),
    provideFirestore(() => getFirestore())
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
