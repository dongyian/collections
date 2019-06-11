const config = {
  elementId: 'wrapper',
  installCommand: 'brew install',
  uninstallCommand: 'brew uninstall',
  installList: [
    { name: 'git' },
    { name: 'nginx' },
    { name: 'node' },
    { name: 'sshpass' },
    { name: 'tree' },
    { name: 'watchman' },
    { name: 'yarn' },
    { name: 'zsh' },
    { name: 'zsh-completions' }
  ],
  uninstallList: []
};

init(config);