/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
const authBase = `/api/auth`;
const usersBase = `/api/users`;
const companyBase = `/api/company`;

export const environment = {
  production: true,

  mapbox: {
    accessToken: 'pk.eyJ1IjoiMjE3MzIxODQiLCJhIjoiY2thbDVjejF1MDZ0MzJycW03NzhwbmE4NiJ9.rxpMEtGUlP8z7VUYsyglJQ',
  },

  firebaseConfig: {
    apiKey: 'AIzaSyAg8I7RJhZE2TYoIOedJOB5PnyKZMZLWI4',
    authDomain: 'tfg-rcebrian-2021-310618.firebaseapp.com',
    databaseURL: 'https://tfg-rcebrian-2021-310618-default-rtdb.europe-west1.firebasedatabase.app',
    projectId: 'tfg-rcebrian-2021-310618',
    storageBucket: 'tfg-rcebrian-2021-310618.appspot.com',
    messagingSenderId: '899064417187',
    appId: '1:899064417187:web:a0e2f2e93bd358abc4a816',
  },

  firebase: {
    collection: '/pro-devices',
  },

  authBase: authBase,
  usersBase: usersBase,

  auth: {
    signIn: `/signIn`,
    signOut: `/signOut`,
    signUp: `${authBase}/signUp`,
    getRoles: `${authBase}/roles`,
    changePass: `${authBase}/change-password`,
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
    getTreeGroup: `${companyBase}/groups/:groupId`,
  },

};
