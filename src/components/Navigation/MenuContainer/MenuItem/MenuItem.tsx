'use client'

import {FC} from 'react';
import {TypeMaterialIconName} from '@/shared/interfaces/icon.interface';
import {useRouter} from 'next/router';
import cn from 'classnames';
import styles from './MenuItem.module.scss';
import Link from 'next/link';
import MaterialIcon from '@/components/ui/MaterialIcon';

interface MenuItemProps {
    icon: TypeMaterialIconName;
    title: string;
    link: string;
}

export interface IMenu {
    title: string;
    items: MenuItemProps[];
}

const MenuItem: FC<{item: MenuItemProps}> = ({item}) => {
    const {asPath} = useRouter()
    return (
        <li className={cn({
            [styles.active]: asPath === item.link
        })}>
            <Link href={item.link}>
                <MaterialIcon name={item.icon}/>
                <span>{item.title}</span>
            </Link>
        </li>
    );
};

export default MenuItem;