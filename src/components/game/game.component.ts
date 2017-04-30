import { Component, OnInit, Input, ElementRef } from '@angular/core';
//import { PhaserProvider } from './../../providers';
declare var phaser: Phaser;

@Component({
    selector: 'game',
    template: `<div id="game"></div>`
})
export class GameComponent implements OnInit {
    @Input() public width: any = 800;
    @Input() public height: any = 600;
    public game: Phaser.Game;
    constructor(private element: ElementRef) {
        
    }

    prepareDimensions(): void {
        let host: HTMLElement = this.element.nativeElement;
        let dimensions = host.getBoundingClientRect();
        this.width = this.width === "auto" ? document.body.clientWidth : this.width;
        this.height = this.height === "auto" ? parseInt(getComputedStyle(host).height, 10) : this.height;
        console.log(this.width, this.height, getComputedStyle(host).height);
    }

    ngOnInit(): void {
        this.prepareDimensions();
        this.game = new Phaser.Game(this.width, this.height, Phaser.AUTO, 'game');
    }
}