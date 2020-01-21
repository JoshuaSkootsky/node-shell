// output a prompt
process.stdout.write('prompt > ');

// the std 'data' event fires after a user types a line
process.stdin.on('data', (data) => {
  const cmd = data.toString().trim(); // remove newLine and other whitespace

  process.stdout.write('You typed: ' + cmd);
  process.stdout.write('\nprompt > ');
});
