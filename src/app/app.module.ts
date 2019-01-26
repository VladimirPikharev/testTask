import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {ApiService} from './_services/api.service';
import {HttpClientModule} from '@angular/common/http';
import {SynonymsComponent} from './_components/synonyms/synonyms.component';
import {TextEditorComponent} from './_components/text-editor/text-editor.component';

@NgModule({
  declarations: [
    AppComponent,
    SynonymsComponent,
    TextEditorComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
