/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
const authBase = `http://localhost:3000/api/auth`;
const usersBase = `http://localhost:3001/api/users`;
const companyBase = `http://localhost:3002/api/company`;

export const environment = {
  production: true,

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
    getUserGroups: `${companyBase}/groups`,
    postNewGroup: `${companyBase}/groups`,
    getTreeGroup: `${companyBase}/groups/:groupId`
  }

};
