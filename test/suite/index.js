const path = require('path');
const glob = require('glob');
const Mocha = require('mocha');

module.exports = function run() {
  const mocha = new Mocha({ ui: 'bdd', color: true });
  const testsRoot = __dirname;

  return new Promise((resolve, reject) => {
    glob('**/*.test.js', { cwd: testsRoot }, (err, files) => {
      if (err) {
        return reject(err);
      }
      files.forEach(f => mocha.addFile(path.join(testsRoot, f)));
      try {
        mocha.run(failures => {
          if (failures > 0) {
            reject(new Error(`${failures} tests failed.`));
          } else {
            resolve();
          }
        });
      } catch (err) {
        reject(err);
      }
    });
  });
};
