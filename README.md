# CapstoneAngularProject

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.1.2.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Run coverage unit-test

Run `npm run coverage` to show coverage.

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

## Feature flags

### Flag data

The flag data that drives the feature flag service is a json format. Put your flag name into the file 'src/assets/config/killswitches.json'. Below is an example:

```bash
{ 
  "killswitchName": boolean,
},
```
| featureName |  boolean|
| :---:   | :-: |
|  a short name of the flag| Boolean value for enabling/disabling the feature |


### Get the flag value

Edit the [your component name].ts where you want to use feature flag with the code below

```typescript
  ...
  this.killswitchName = this.killswitchService.getKillswitch('killswitchName');
  ...
```
and then you need to add the *ngIf directive with feature-flag in [your component name].html, e.g:

```html
content you want to toggle
  <ng-content *ngIf="killswitchName" >...</ng-content>
```
<!-- todo add readme for env -->