import {IMenu} from '@/components/Navigation/MenuContainer/MenuItem';

export const firstMenu: IMenu = {
    title: 'Menu',
    items: [
        {
            icon: 'MdHome',
            title: 'Home',
            link: '/'
        },
        {
            icon: 'MdExplore',
            title: 'Discovery',
            link: '/genres'
        },
        {
            icon: 'MdRefresh',
            title: 'FreshMovies',
            link: '/fresh'
        },
        {
            icon: 'MdLocalFireDepartment',
            title: 'Trending now',
            link: '/trending'
        }
    ]
};

export const userMenu: IMenu = {
    title: 'General',
    items: []
};

export const menus: IMenu[] = [firstMenu, userMenu];