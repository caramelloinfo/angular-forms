import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {AppComponent} from './app.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { HeroiComponent } from './heroi/heroi.component';
import { ListaDeHeroisComponent } from './lista-de-herois/lista-de-herois.component';
import { FormularioComponent } from './formulario/formulario.component';

@NgModule({
    imports: [
        BrowserModule,
        NgbModule.forRoot(),
        FormsModule,
        ReactiveFormsModule,
        HttpModule
    ],
    declarations: [
        AppComponent,
        HeroiComponent,
        ListaDeHeroisComponent,
        FormularioComponent,
    ],
    providers: [
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
