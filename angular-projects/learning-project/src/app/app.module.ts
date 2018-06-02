import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { DataBindingComponent } from './components/data-binding/data-binding.component';
import { TwoWayDataBindingComponent } from './components/two-way-data-binding/two-way-data-binding.component';
import { FormsModule } from '@angular/forms';
import { InputPropertiesComponent } from './components/input-properties/input-properties.component';
import { CursosComponent } from './components/cursos/cursos.component';
import { ContadorComponent } from './components/contador/contador.component';
import { CicloVidaComponent } from './components/ciclo-vida/ciclo-vida.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DataBindingComponent,
    TwoWayDataBindingComponent,
    InputPropertiesComponent,
    CursosComponent,
    ContadorComponent,
    CicloVidaComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
