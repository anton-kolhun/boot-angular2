import {BrowserModule} from "@angular/platform-browser";
import {NgModule} from "@angular/core";
import {FormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";
import {AppComponent} from "./app.component";
import {DndModule} from "ng2-dnd";
import {ModalModule} from "ng2-modal";
import {DashboardComponent} from "./dashboard/dashboard.component";
import {DashboardService} from "./dashboard/dashboard.service";


@NgModule({
    declarations: [
        AppComponent,
        DashboardComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        DndModule.forRoot(),
        ModalModule],
    providers: [DashboardService],
    bootstrap: [AppComponent]
})
export class AppModule {
    constructor() {
    }
}
