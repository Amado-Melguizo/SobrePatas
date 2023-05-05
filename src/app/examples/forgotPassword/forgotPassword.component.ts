import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-forgotPassword',
    templateUrl: './forgotPassword.component.html',
    styleUrls: ['./forgotPassword.component.scss']
})
export class ForgotPasswordComponent implements OnInit {
    test : Date = new Date();
    focus;
    focus1;
    constructor() { }

    ngOnInit() {}
}
