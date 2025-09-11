import {FC} from 'react';
import Menu from '@/components/Navigation/MenuContainer/Menu';
import {firstMenu, userMenu} from '@/components/Navigation/MenuContainer/menu.data';

const MenuContainer: FC = () => {
    return (
        <div>
            <Menu menu={firstMenu}/>
            <Menu menu={userMenu}/>
        </div>
    );
};

export default MenuContainer;