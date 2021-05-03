/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
const authBase = `http://localhost:3000/api/auth`;
const usersBase = `http://localhost:3001/api/users`;

export const environment = {
  production: true,

  authBase: authBase,
  usersBase: usersBase,

  auth: {
    signIn: `/signIn`,
  },
  users: {
    getUserInfo: `${usersBase}/:id`
  }
};
