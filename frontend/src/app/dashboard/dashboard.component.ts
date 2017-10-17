import {Component, OnInit} from "@angular/core";
import {DashboardService} from "./dashboard.service";


@Component({
    selector: 'dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.css'],
    providers: [DashboardComponent]
})
export class DashboardComponent implements OnInit {

    message: string;

    ngOnInit() {

    }

    constructor(private dashboardService: DashboardService) {

    }

    getSmth() {
        this.dashboardService.getSmth("http://localhost:8080/getSmth")
            .subscribe(success => {
                    console.log(success.text());
                this.message = success.text();
                },
                error => {

                })
    }


}
