'use client';

import {FC, useEffect, useState} from 'react';
import {TypeMaterialIconName} from '@/shared/interfaces/icon.interface';
import cn from 'classnames';
import Link from 'next/link';
import MaterialIcon from '@/components/ui/MaterialIcon';
import {usePathname} from 'next/navigation';

interface MenuItemProps {
    icon: TypeMaterialIconName;
    title: string;
    link: string;
}

export interface IMenu {
    title: string;
    items: MenuItemProps[];
}

const MenuItem: FC<{ item: MenuItemProps }> = ({item}) => {
    const path = usePathname();
    const [isActive, setIsActive] = useState(false);
    useEffect(() => {
        setIsActive(path === item.link);
    }, [item.link, path]
)
    return (
        <li className={cn(
            'group border-r-4 hover:text-white transition-colors',
            isActive ? 'border-r-red-700' : 'border-r-transparent'
        )}>
            <Link href={item.link}
                  className={'flex gap-2 items-center text-gray-600 mb-6 cursor-pointer group-hover:text-white transition-colors'}>
                <MaterialIcon name={item.icon} className={cn('text-2xl', isActive && 'text-red-700')}/>
                <span className={cn('text-lg', isActive && 'text-white')}>{item.title}</span>
            </Link>
        </li>
    );
};

export default MenuItem;