This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Installation

Fork the repository & install dependencies using the yarn/npm command line tools.

```sh
yarn install
```

## Getting Started

### Using Local Environment

To run the development server:

```bash
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Using docker for local development

```bash
docker-compose run --service-ports app
```

### Using docker for prod build

```bash
docker-compose -f docker-compose.prod.yml up --build
```

### Create new components

```bash
    yarn run generate
```

## Ecosystem

- **Static Code Quality checks and formatting:** Javascript and CSS linting using Eslint, StyleLint and Prettier.
- **Component scaffolding:** Consistently generate components using Plop.
- **Git Hooks:** Pre-commit, Pre-push using Husky.
- **Unit testing framework:** with Jest and @testing-library/react.
- **Theme and Styling:** with material-UI.
- **Next.js:** to render react application server side and more.
- **Apollo Client:** to connect with Apollo Server.

## Main Technology Dependencies

1. React
2. Next.js
3. @material/ui
4. @apollo/client
5. @testing-library/react
6. plop
