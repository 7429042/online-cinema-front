import {FC} from 'react';
import MenuItem, {IMenu} from '@/components/Navigation/MenuContainer/MenuItem/MenuItem';
import AuthItems from '@/components/Navigation/MenuContainer/Auth/AuthItems';

const Menu: FC<{ menu: IMenu }> = ({menu}) => {
    if (!menu) return null;
    const {title, items} = menu;

    return (
        <nav className={'mb-14 animate-fade'}>
            <div className={'text-gray-500 uppercase text-sm font-semibold py-6'}>{title}</div>
            <ul>
                {items.map(item => (
                    <MenuItem key={item.link} item={item}/>
                ))}
                {title === 'General' ? <AuthItems/> : null}
            </ul>
        </nav>
    );
};

export default Menu;