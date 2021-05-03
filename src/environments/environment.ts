/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

const authBase = `http://localhost:3000/api/auth`;
const usersBase = `http://localhost:3001/api/users`;

export const environment = {
  production: false,

  authBase: authBase,
  usersBase: usersBase,

  auth: {
    signIn: `/signIn`,
  },
  users: {
    getUserInfo: `${usersBase}/:id`
  }
};
