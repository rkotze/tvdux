require('shelljs/global');
var readline = require('readline');
var currentPackageVersion = require('../package.json').version;

echo("Current version: " + currentPackageVersion);

var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Update version to (major.minor.patch): ', function (input) {
  if(valid_semver(input))
    sed('-i', '"version": "' + currentPackageVersion + '"', '"version": "' + input + '"', 'package.json');

  rl.close();
});

var valid_semver = function(version){
  if(/^[0-9]+\.[0-9]+\.[0-9](-.+)?/.test(version)){
    return true;
  }
  echo('Version '+ version +' is not valid! It must be a valid semver string like 1.0.2 or 2.3.0-beta1');
  exit(1);
};
