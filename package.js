Package.describe({
  summary: 'OpenID Connect (OIDC) for Meteor accounts',
  version: '1.0.12',
  name: 'akarda:accounts-oidc',
  git: 'https://github.com/akarda/accounts-oidc.git'

})

Package.onUse(function (api) {
  api.use('accounts-base@2.0.0', ['client', 'server'])
  // Export Accounts (etc) to packages using this one.
  api.imply('accounts-base@2.0.0', ['client', 'server'])
  api.use('accounts-oauth@1.3.0', ['client', 'server'])
  api.use('akarda:oidc@1.0.15', ['client', 'server'])
  api.addFiles('oidc_login_button.css', 'client')
  api.addFiles('oidc.js')
})
