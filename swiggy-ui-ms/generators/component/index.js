/**
 * Component Generator
 */

/* eslint strict: ['off'] */

'use strict';

const componentExists = require('../utils/componentExists');

module.exports = {
  description: 'Add an unconnected component (atoms, molecules)',
  prompts: [
    {
      type: 'list',
      name: 'type',
      message: 'Select the type of component',
      default: 'Stateless Function',
      choices: () => ['Stateless Function', 'Stateless Function (WithHooks)', 'HOC'],
    },
    {
      type: 'input',
      name: 'name',
      message: 'What should it be called?',
      default: 'Button',
      validate: (value) => {
        if (/.+/.test(value)) {
          return componentExists(value)
            ? 'A component or container with this name already exists'
            : true;
        }

        return 'The name is required';
      },
    },
    {
      type: 'list',
      name: 'folder',
      message: 'Where do you want to keep this component?',
      default: 'atoms',
      choices: () => ['Atoms', 'Molecules', 'Organisms', 'Templates', 'HOC'],
    },
  ],
  actions: (data) => {
    // Generate index.js and index.test.js
    let componentTemplate;

    switch (data.type) {
      case 'Stateless Function': {
        componentTemplate = './component/stateless.js.hbs';
        break;
      }
      case 'HOC': {
        componentTemplate = './component/hoc.js.hbs';
        break;
      }
      default: {
        componentTemplate = './component/statelessHooks.js.hbs';
      }
    }

    const actions = [
      {
        type: 'add',
        path: '../src/components/{{ folder }}/{{properCase name}}/index.js',
        templateFile: './component/index.js.hbs',
        abortOnFail: true,
      },
      {
        type: 'add',
        path: '../src/components/{{ folder }}/{{properCase name}}/{{properCase name}}.js',
        templateFile: componentTemplate,
        abortOnFail: true,
      },
      {
        type: 'add',
        path: '../src/components/{{ folder }}/{{properCase name}}/{{properCase name}}.mock.js',
        templateFile: './component/mock.js.hbs',
        abortOnFail: true,
      },
      {
        type: 'add',
        path: '../src/components/{{ folder }}/{{properCase name}}/{{properCase name}}.spec.js',
        templateFile: './component/test.js.hbs',
        abortOnFail: true,
      },
    ];

    return actions;
  },
};
