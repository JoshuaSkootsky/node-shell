// pwd.js

function pwd() {
  process.stdout.write('You printed: ' + process.cwd());
}

module.exports = { pwd };
