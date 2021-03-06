// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

const serverConfig = {
  protocol: 'http',
  host: 'localhost',
  servicePort: '8888',
  appPort: '4200'
};

export const environment = {
  production: false,
  oauth2Url: serverConfig.protocol + '://' + serverConfig.host + ':' + serverConfig.servicePort + '/uaa',
  oauth2Callback: serverConfig.protocol + '://' + serverConfig.host + ':' + serverConfig.appPort + '/callback',
  employeeUrl: serverConfig.protocol + '://' + serverConfig.host + ':' + serverConfig.servicePort + '/employees',
  meUrl: serverConfig.protocol + '://' + serverConfig.host + ':' + serverConfig.servicePort + '/me',
  relationshipUrl: serverConfig.protocol + '://' + serverConfig.host + ':' + serverConfig.servicePort + '/relationships',
  maxRetries: 3,
  retryDelay: 200,
  maxMenteeReferences: 5,
  typeaheadActivationChars: 3,
  typeaheadDebounceTime: 200
};
