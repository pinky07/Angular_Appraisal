// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  protocol: 'http://',
  appHost: 'localhost',
  appPort: 4200,
  oauth2Host: 'localhost',
  proxyPort: 8888,
  apiVersion: 'v1',
  employeeUrl: 'http://localhost:8888/employees',
  meUrl: 'http://localhost:8888/me',
  maxRetries: 3
};
