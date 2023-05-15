import { Component, OnInit } from "@angular/core";
import { User } from "../user";
import { Router } from "@angular/router";
import { AuthService } from "../user-service.service";

@Component({
  selector: "app-register",
  templateUrl: "./register.component.html",
  styleUrls: ["./register.component.scss"],
})
export class RegisterComponent implements OnInit {
  user: User;

  constructor(private router: Router, private userService: AuthService) {
    this.user = new User();
  }
  onSubmit() {
    //this.userService.save(this.user).subscribe((result) => this.gotoUserList());
  }

  gotoUserList() {
    this.router.navigate(["/signup"]);
  }

  ngOnInit() {}
}
