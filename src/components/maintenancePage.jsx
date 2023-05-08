import { Link } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';
import { Image, Text, Flex } from '@chakra-ui/react';

import pageConfigs from '../data/maintainancePageConfigs.json';
import placeholderImage from '../assets/images/no-image-placeholder.gif';

const MaintainancePage = () => {

    return (
      <>
        <Flex direction={'column'} align={'center'} textAlign={'center'}>
            <Image src={pageConfigs.data.imageURL} objectFit={'cover'} fallbackSrc={placeholderImage} width={'400px'} height={'250px'} />
            <Text pt={'1rem'} fontSize={'2rem'} fontWeight={600}>{pageConfigs.data.heading}</Text>
            <Text pt={'1rem'} fontWeight={500}>{pageConfigs.data.content}</Text>
            <Link to='/myst-clothing'>
                <Text pt={'1rem'} fontWeight={600} display={'flex'} alignItems={'center'} columnGap={'1rem'}><FaArrowLeft/>Please go back to home page</Text>
            </Link>
        </Flex>
      </>
    );
}

export default MaintainancePage;