import { NbMenuItem } from '@nebular/theme';

export const ADMIN_MENU_ITEMS: NbMenuItem[] = [
  {
    title: 'Profile',
    icon: 'person-outline',
    link: '/pages/profile',
  },
  {
    title: 'Management',
    icon: 'briefcase-outline',
    link: '/pages/management',
    children: [
      {
        title: 'Companies',
        link: '/pages/management/company',
        icon: 'home-outline',
      },
      {
        title: 'Groups',
        link: '/pages/management/groups',
        icon: 'people-outline',
      },
      {
        title: 'Users',
        link: '/pages/management/users',
        icon: 'person-outline',
      },
    ],
  },
];
