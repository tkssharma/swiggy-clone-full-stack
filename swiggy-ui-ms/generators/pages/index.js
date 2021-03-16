module.exports = {
  description: 'Add a new Page',
  prompts: [
    {
      type: 'input',
      name: 'name',
      message: 'What should it be called?',
    },
  ], // array of inquirer prompts
  actions: [
    {
      type: 'add',
      path: '../src/pages/{{properCase name}}.jsx',
      templateFile: './pages/index.js.hbs',
      abortOnFail: true,
    },
    {
      type: 'add',
      path: '../src/components/templates/{{properCase name}}/{{properCase name}}.jsx',
      templateFile: './component/stateless.js.hbs',
      abortOnFail: true,
    },
    {
      type: 'add',
      path: '../src/components/templates/{{properCase name}}/index.js',
      templateFile: './component/index.js.hbs',
      abortOnFail: true,
    },
    {
      type: 'add',
      path: '../src/components/templates/{{properCase name}}/{{properCase name}}.spec.jsx',
      templateFile: './component/test.js.hbs',
      abortOnFail: true,
    },
  ], // array of actions
};
