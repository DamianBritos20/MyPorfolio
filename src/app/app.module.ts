import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EncabezadoComponent } from './componentes/encabezado/encabezado.component';
import { MenuPlegableComponent } from './componentes/menu-plegable/menu-plegable.component';
import { AboutComponent } from './componentes/about/about.component';
import { ExperienceComponent } from './componentes/experience/experience.component';
import { EducationComponent } from './componentes/education/education.component';
import { ProjectsComponent } from './componentes/projects/projects.component';
import { SkillsComponent } from './componentes/skills/skills.component';
import { ContactComponent } from './componentes/contact/contact.component';
import { ConteinerComponent } from './componentes/conteiner/conteiner.component';
import { MobileComponent } from './componentes/mobile/mobile.component';


@NgModule({
  declarations: [
    AppComponent,
    EncabezadoComponent,
    MenuPlegableComponent,
    AboutComponent,
    ExperienceComponent,
    EducationComponent,
    ProjectsComponent,
    SkillsComponent,
    ContactComponent,
    ConteinerComponent,
    MobileComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
