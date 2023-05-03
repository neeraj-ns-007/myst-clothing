import { Box, Image, Icon, Text, Button, useMediaQuery } from "@chakra-ui/react";
import { FaRegHeart } from "react-icons/fa";

import { getProductImageURL } from '../../utils/product/productImage';
import placeholderImage from '../../assets/images/no-image-placeholder.gif';
import preference from '../../data/homePageConfigs.json';

const ProductTile = (item) => {
    const [isMedium] = useMediaQuery("(max-width: 960px)");

    return(
        <div className="pd-wrapper-hm" >
            <Box as="div" display={'flex'} flexDirection={'column'} alignItems={'center'} p={'0 1.5rem'} position={'relative'} >
                <Icon cursor="pointer" boxSize={preference.ICONSIZE} as={FaRegHeart} position={"absolute"} right={'1rem'} top={'0'}/>
                <Image src={getProductImageURL(item.product.images)} objectFit={'cover'} fallbackSrc={placeholderImage} width={'200px'} height={'250px'} />
                <Text fontWeight={500} textAlign={'center'} fontSize={'1rem'} padding={isMedium ? '1rem 0 0.5rem 0' : '1.5rem 0 0.5rem 0'} letterSpacing={'0'}>{item.product.name}</Text>
                <Text fontWeight={500} fontSize={'0.9rem'} letterSpacing={'0'} paddingBottom={isMedium ? '1rem' : '1.5rem'}>{preference.CURRENCY[1] + ' ' + item.product.price}</Text>
                <Button height={'35px'} width={'100%'} colorScheme={'none'} backgroundColor={'black'} border='none' borderRadius={0} fontSize={'1rem'} fontWeight={'none'}>ADD</Button>
            </Box>
        </div>
    );
}

export default ProductTile;