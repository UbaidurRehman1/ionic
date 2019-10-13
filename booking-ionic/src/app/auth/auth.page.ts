import { Component, OnInit } from '@angular/core';
import {AuthService} from '../service/auth/auth.service';
import {Router} from '@angular/router';

@Component({
    selector: 'app-auth',
    templateUrl: './auth.page.html',
    styleUrls: ['./auth.page.scss'],
})
export class AuthPage implements OnInit {

    constructor(private authService: AuthService,
                private router: Router) { }

    ngOnInit() {
    }

    login() {
        this.authService.login();
        this.router.navigate(['']).then(r => {});
    }
}
