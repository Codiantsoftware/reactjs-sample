import { logout } from '../lib/utils';
import { AiFillPieChart } from 'react-icons/ai';

export const Menus = [
    { title: 'Dashboard', path: '/admin/dashboard', src: () => AiFillPieChart },
    { title: 'Logout', path: '/admin/dashboard', src: () => AiFillPieChart, execute: () => logout() },
]