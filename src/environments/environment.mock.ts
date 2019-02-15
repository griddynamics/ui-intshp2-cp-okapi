// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  baseURL: 'http://localhost:4200',
  killswitchesPath: 'assets/config/killswitches.json',
  productsURL: 'assets/mocks/products.json',
  pdpPath: 'assets/mocks/pdp.json'
};

export const referenceLinks = {
  americanExpURL: 'https://www.americanexpress.com/',
  payPalURL: 'https://www.paypal.com/ua/home',
  visaURL: 'https://www.visa.com.ua/',
  masterCardURL: 'https://www.mastercard.us/en-us.html',
  amazonURL: 'https://pay.amazon.com/us',
  facebookURL: 'https://www.facebook.com/griddynamics',
  twitterURL: 'https://twitter.com/griddynamics',
  googlePlusURL: 'https://plus.google.com/115302417170674279390',
  linkedinURL: 'https://www.linkedin.com/company/grid-dynamics/'
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
