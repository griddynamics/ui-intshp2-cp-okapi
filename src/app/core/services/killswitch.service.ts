import { Injectable } from '@angular/core';

import { DataService } from './data.service';
import { environment } from '../../../environments/environment';

@Injectable({
    providedIn: 'root'
})

// node create router that creates static files from assets

export class KillswitchService {
    public killswitches = {};

    constructor(private dataService: DataService) {}

    public loadConfig(): Promise<void> {
        return this.dataService.get(environment.killswitchesPath)
            .toPromise()
            .then(response => {
                this.killswitches = response;
            });
    }

    getKillswitch(key: string): boolean {
        return !!this.killswitches[key];
    }
}
