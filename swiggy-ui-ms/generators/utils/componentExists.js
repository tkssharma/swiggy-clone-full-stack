/**
 * componentExists
 *
 * Check whether the given component exist in either the components or containers directory
 */

const fs = require('fs');
const path = require('path');

const atomComponents = fs.readdirSync(path.join(__dirname, '../../src/components/atoms'));
const moleculeComponents = fs.readdirSync(path.join(__dirname, '../../src/components/molecules'));
const organismComponents = fs.readdirSync(path.join(__dirname, '../../src/components/organisms'));
const templateComponents = fs.readdirSync(path.join(__dirname, '../../src/components/templates'));
const hoc = fs.readdirSync(path.join(__dirname, '../../src/components/hoc'));
const components = atomComponents
  .concat(moleculeComponents)
  .concat(organismComponents)
  .concat(templateComponents)
  .concat(hoc);

function componentExists(comp) {
  return components.indexOf(comp) >= 0;
}

module.exports = componentExists;
