import { Injectable } from '@angular/core';

import { DataService } from './data.service';

@Injectable({
    providedIn: 'root'
})

// node create route6 that creates static files from assets

export class KillswitchService {
    static CONFIG_URL = 'assets/config/killswitches.json';

    public killswitches = {};

    constructor(private dataService: DataService) {}

    public loadConfig(): Promise<void> {
        return this.dataService.get(KillswitchService.CONFIG_URL)
            .toPromise()
            .then(response => {
                this.killswitches = response;
            });
    }

    getKillswitch(key: string): boolean {
        return !!this.killswitches[key];
    }
}
