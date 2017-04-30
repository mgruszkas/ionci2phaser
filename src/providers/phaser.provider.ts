import { Injectable } from '@angular/core';
declare var Phaser: Phaser;

@Injectable()
export class PhaserProvider {
    constructor() {

    }

    get Instance(): Phaser {
        return Phaser;
    }
}
