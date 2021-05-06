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
const companyBase = `http://localhost:3002/api/company`;

export const environment = {
  production: false,

  authBase: authBase,
  usersBase: usersBase,

  auth: {
    signIn: `/signIn`,
    signOut: `/signOut`,
    signUp: `${authBase}/signUp`,
    getRoles: `${authBase}/roles`,
  },
  users: {
    getAllUsers: `${usersBase}`,
    getUserInfo: `${usersBase}/:id`,
    putUserInfo: `${usersBase}/:userId`,
    deleteUserInfo: `${usersBase}/:userId`,
  },
  companies: {
    getTreeAllCompanies: `${companyBase}/tree`,
    getTreeCompany: `${companyBase}/:companyId/tree`,
    getAllCompanies: `${companyBase}/`,
    postNewCompany: `${companyBase}/`,
    putCompany: `${companyBase}/:id`,
    deleteCompany: `${companyBase}/:id`,
  },
  groups: {
    postNewGroup: `${companyBase}/groups`,
    getTreeGroup: `${companyBase}/groups/:groupId`
  }

};
