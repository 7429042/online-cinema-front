import {FC} from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Logo: FC = () => {
    return (
        <Link href={'/'}>
            <Image src={'/logo.svg'} alt={'Изображение логотипа'} width={247} height={34} draggable={false}/>
        </Link>
    );
};

export default Logo;