

module.exports = (shipit) => {
  shipit.initConfig({
    staging: {
      servers: 'myproject.com'
    }
  })

  shipit.task('pwd', () => {
    return shipit.remote('pwd')
  })
}
