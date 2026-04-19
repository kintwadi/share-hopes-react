const ghpages = require('gh-pages');

ghpages.publish('dist', {
  branch: 'gh-pages',
  repo: 'https://github.com/kintwadi/share-hopes-react.git',
  dotfiles: true,
  clean: true,
  history: false
}, function(err) {
  if (err) {
    console.error('Deployment error:', err);
  } else {
    console.log('Deployed successfully!');
  }
});