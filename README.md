# Vite + Vue 3 + Typescript + Vue Router + Pinia + Eslint + Jest + Cypress

A [Vite](https://vitejs.dev/) scaffolded project with Vue 3 + Typescript template extended with some useful tools which are included in a VUE CLI project

- [Vue Router](https://router.vuejs.org/)
- [Pinia](https://pinia.vite.net/) for easier and type safe state handling
- [Eslint](https://eslint.org/) with some additional plugins and rules for high code quality
- [Jest](https://jestjs.io/) for unit testing with [Vue Testing Library](https://testing-library.com/docs/vue-testing-library/intro)
- [Cypress](https://www.cypress.io/) for E2E testing

## For better code quality

The following areas got some improvements (besides using the recommended ESLint rules):
- Module imports (restricted paths, group organization, alphabetical order, removal of unused modules)
- Promise and async/await (enforcing `catch` statements, enforcing param names and order in promise executor, enforcing using `await` in `async` functions)