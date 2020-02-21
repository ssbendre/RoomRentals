import { Component } from "@angular/core";
import { Router, ActivationEnd } from "@angular/router";

import { ConfigService } from "./services/config/config.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
  providers: [ConfigService]
})
export class AppComponent {
  showToolbar: boolean = true;
  constructor(private router: Router, private configService: ConfigService) {
    this.router.events.subscribe(val => {
      if (val instanceof ActivationEnd) {
        const componentName = val.snapshot.component['name'].split('Component')[0];
        this.configService.setTitle(componentName);
        this.showToolbar = (componentName === 'Login' || componentName === 'Signup') ? false : true;
      }
    });
  }
}
