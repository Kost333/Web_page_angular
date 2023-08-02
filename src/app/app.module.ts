import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {CategoriesComponent} from './views/categories/categories.component';
import {TasksComponent} from './views/tasks/tasks.component';
import {AppRouterModule} from "./app-router/app-router.module";

@NgModule({
    declarations: [
        AppComponent,
        CategoriesComponent,
        TasksComponent
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        AppRouterModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
