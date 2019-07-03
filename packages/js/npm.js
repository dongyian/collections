const config = {
  elementId: 'wrapper',
  installCommand: 'npm install -g',
  uninstallCommand: 'npm uninstall -g',
  installList: [
    { name: '@acmilank22/configs' },
    { name: 'create-react-app' },
    { name: 'htmlhint' },
    { name: 'http-server' },
    { name: 'npm' },
    { name: 'npm-check' },
    { name: 'npm-check-updates' },
    { name: 'serve' }
  ],
  alternativeList: [],
  uninstallList: [],
  url: 'https://npms.io/search?q='
};

/* global init */
init(config);
