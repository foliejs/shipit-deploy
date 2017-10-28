

module.exports = function (shipit) {
  require('shipit-deploy')(shipit);

  shipit.initConfig({
    default: {
      workspace: '/tmp/github-monitor',
      deployTo: '/tmp/deploy_to',
      repositoryUrl: 'git@github.com:SensitiveMix/node-cluster-email.git',
      ignores: ['.git', 'node_modules'],
      keepReleases: 2,
      deleteOnRollback: false,
      key: '',
      shallowClone: true
    },
    staging: {
      servers: '127.0.0.1'
    }
  });
};
