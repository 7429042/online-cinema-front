import {FC} from 'react';
import MenuItem, {IMenu} from '@/components/Navigation/MenuContainer/MenuItem/MenuItem';
import AuthItems from '@/components/Navigation/MenuContainer/Auth/AuthItems';

const Menu: FC<{ menu: IMenu }> = ({menu: {items, title}}) => {
    return (
        <div>
            <div>{title}</div>
            <ul>
                {items.map(item => (
                    <MenuItem key={item.link} item={item}/>
                ))}
                {title === 'General' ? <AuthItems/> : null}
            </ul>
        </div>
    );
};

export default Menu;