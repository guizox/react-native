import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { CursosComponent } from './cursos/cursos.component';
import { CursosServiceApi } from './cursos/cursos.service';
import { CriarCursoComponent } from './criar-curso/criar-curso.component';
import { LogServiceService } from './services/log-service.service';

@NgModule({
  declarations: [
    AppComponent,
    CursosComponent,
    CriarCursoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [
    CursosServiceApi,
    LogServiceService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
