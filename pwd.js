// pwd.js

const pwd = function pwd() {
  process.stdout.write('You printed: ' + process.cwd());
  process.stdout.write('\nprompt > ');
}

module.exports = { pwd };