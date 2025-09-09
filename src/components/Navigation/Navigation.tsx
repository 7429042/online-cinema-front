import {FC} from 'react';
import Logo from '@/components/Navigation/Logo/Logo';
import MenuContainer from '@/components/Navigation/MenuContainer/MenuContainer';

interface NavigationProps {
    className?: string;
}

const Navigation: FC<NavigationProps> = ({className}) => {
    return (
        <div className={className}>
            <Logo/>
            <MenuContainer/>
        </div>
    );
};

export default Navigation;