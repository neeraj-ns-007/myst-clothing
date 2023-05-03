import { Image, Text, Flex } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

import pageConfigs from '../data/maintainancePageConfigs.json';
import placeholderImage from '../assets/images/no-image-placeholder.gif';
import preference from '../data/homePageConfigs.json';

const MaintainancePage = () => {

    return (
      <>
        <Flex direction={'column'} align={'center'} >
            <Image src={pageConfigs.data.imageURL} objectFit={'cover'} fallbackSrc={placeholderImage} width={'400px'} height={'250px'} />
            <Text pt={'1rem'} fontSize={'2rem'} fontWeight={600}>{pageConfigs.data.heading}</Text>
            <Text pt={'1rem'} fontWeight={500}>{pageConfigs.data.content}</Text>
            <Image pt={'3rem'} src={'https://myst-clothing.sirv.com/Images/mystassets/site-logo.png?format=webp'} alt='Main Logo' cursor={'pointer'}/>
            <Link to='/myst-clothing'>
                <Text pt={'1rem'} fontWeight={600} fontSize={'2rem'}>{preference.STORENAME}</Text>
            </Link>
        </Flex>
      </>
    );
}

export default MaintainancePage;