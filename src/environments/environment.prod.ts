/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
const authBase = `http://localhost:3000/api/auth`;

export const environment = {
  production: true,

  authBase: authBase,

  auth: {
    signIn: `/signIn`,
  }
};
