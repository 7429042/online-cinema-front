import {FC} from 'react';

interface SidebarProps {
    className?: string;
}

const Sidebar: FC<SidebarProps> = ({className}) => {
    return (
        <div className={className}>
            Sidebar
        </div>
    );
};

export default Sidebar;