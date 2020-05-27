# HMA Web

HMA Web is a part of House Money Accountant solution.
This part contains SPA front-end application written using Angular.

# Requirements

Required:
- [HMA API](https://github.com/illja96/house-money-accountant-api)
- [Node.js](https://nodejs.org)
- [Angular CLI](https://angular.io)

# Setup for development

1. Install Node.js

2. Install Angular CLI

3. Setup HMA API

4. Crate a copy of **src/environments/environment.ts** file with **src/environments/environment.dev.ts** name.

5. Fill `null` values with corresponding values.

  Example of result file:
  ``` TypeScript
  import { version } from '../../package.json';

  export const environment = {
    version: version,
    production: false,
    googleOAuthClientId: 'Google OAuth 2.0 Client ID',
    apiServerBaseUrl: 'http://localhost:63216'
  };
  ```