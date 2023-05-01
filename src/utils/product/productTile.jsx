import { Box, Image, Text, Button } from "@chakra-ui/react";
import { getProductImageURL } from '../../utils/product/productImage';
import placeholderImage from '../../assets/images/no-image-placeholder.gif';
import preference from '../../data/homePageConfigs.json';

const ProductTile = (item) => {
    return(
        <div className="pd-wrapper-hm" >
            <Box as="div" display={'flex'} flexDirection={'column'} alignItems={'center'} p={'0 2rem'}>
                <Image src={getProductImageURL(item.product.images)} objectFit={'cover'} fallbackSrc={placeholderImage} width={'250px'} height={'300px'} />
                <Text fontWeight={500} textAlign={'center'} padding={'1.5rem 0 0.5rem 0'} letterSpacing={'0'}>{item.product.name}</Text>
                <Text fontWeight={500} fontSize={'0.9rem'} letterSpacing={'0'} paddingBottom={'1.5rem'}>{preference.CURRENCY[1] + ' ' + item.product.price}</Text>
            </Box>
            <Button height={'35px'} width={'100%'} colorScheme={'none'} backgroundColor={'black'} border='none' borderRadius={0} fontSize={'1rem'} fontWeight={'none'}>ADD</Button>
        </div>
    );
}

export default ProductTile;