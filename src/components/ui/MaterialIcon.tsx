import {FC} from 'react';
import {TypeMaterialIconName} from '@/shared/interfaces/icon.interface';
import {type IconType} from 'react-icons';
import * as MaterialIcons from 'react-icons/md';

const MaterialIcon: FC<{ name: TypeMaterialIconName, className?: string }> = ({name, className}) => {
    const IconComponent = MaterialIcons[name] as IconType || undefined;
    if (!IconComponent) return <MaterialIcons.MdDragIndicator/>;
    return <IconComponent className={className}/>;
};

export default MaterialIcon;