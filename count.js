const fs = require('fs');

const dir = './';

fs.readdir(dir, (err, files) => {
  let count = 0;
  files.forEach((fileName) => {
    if (fileName[0].match(/[0-9]/)) {
      count++;
    }
  });
  let content = `Total LC Problems: ${count}`;
  fs.writeFileSync('README.md', content);
});

// let content = fs.writeFileSync('README.md');
