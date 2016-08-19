import { Component, OnInit } from '@angular/core';

declare var jwplayer:any;

@Component({

    selector: 'my-auth-home',
    templateUrl: './client/modules/authenticated/home/auth-home.component.html'
})
export class AuthHomeComponent implements OnInit {
    constructor() { }

    ngOnInit() {
        jwplayer("my-video").setup({
            file: "rtmp://sx7leurjt5cre.cloudfront.net/cfx/st/mp4:whatgoku.mp4",
            width: "720",
            height: "480",
            primary: "flash"
        });
    }

}