import {FC} from 'react';

interface NavigationProps {
    className?: string;
}

const Navigation: FC<NavigationProps> = ({className}) => {
    return (
        <div className={className}>
            Navigation
        </div>
    );
};

export default Navigation;