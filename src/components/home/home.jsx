import { useMediaQuery, Box, Image, Text, Button, SimpleGrid } from "@chakra-ui/react";
import preference from '../../data/homePageConfigs.json';
import { getProductImageURL } from '../../utils/productImage';

import Headers from '../header/header';
import Slider from "../slider";
import Footer from '../footer/footer';

import placeholderImage from '../../assets/images/no-image-placeholder.gif'
import lineSeparator from '../../assets/images/decorative-separator.svg';

//<Tooltip hasArrow label="Hey, I'm here!" aria-label='A tooltip'></Tooltip>

const Home = () => {
    const [isTab] = useMediaQuery("(max-width: 1075px)");
    const [isMobile] = useMediaQuery("(max-width: 528px)");
    
    return(
        <>
            <Headers />
            <Slider />
            <div className="main-sec-container">
                <div className="main-sec-row-1">
                    <div className="cat-top-picks">
                        <Box as="span" display='flex' justifyContent='center' fontWeight={600} fontSize={'30px'}>{preference.TOPPICKSCATEGORY.categoryHeading}</Box>
                    </div>
                    <div className="cat-list-row">
                        <SimpleGrid columns={isTab ? 2 : 4} margin={'auto'} maxWidth={'67em'} paddingBottom={'2rem'}>
                            {preference.TOPPICKSCATEGORY.categoryItems.map((item, i) => (
                                <a href={item.catLink} target="" rel="" key={i}>
                                <Box display='flex' flexDirection='column' width={isTab ? 'auto' : '16.75rem'} >
                                    <Image src={item.catImage} height={isTab ? 'auto' : '10.438rem'} objectFit="fill" fallbackSrc={placeholderImage} />
                                    <Box as='span' display='flex' padding={'0.6rem 0'} justifyContent='center' >{item.catName}</Box>
                                </Box>
                            </a>
                            ))}
                        </SimpleGrid>
                    </div>
                </div>
                <div className="main-sec-row-2">
                    <div className="best-seller-head">
                        <Box as="span" display='flex' justifyContent='center' fontWeight={600} fontSize={'30px'}>{preference.HOMEPAGEPLP.heading}</Box>
                    </div>
                    <div className="best-seller-plp">
                        <div className="plp-grid">
                            {preference.HOMEPAGEPLP.products.map((product, i) => (
                                <div className="pd-wrapper-hm" key={i}>
                                    <Box as="div" display={'flex'} flexDirection={'column'} alignItems={'center'}>
                                        <Image src={getProductImageURL(product.images)} objectFit={'fill'} fallbackSrc={placeholderImage} />
                                        <Text fontWeight={500} textAlign={'center'} padding={'1.5rem 0 0.5rem 0'} letterSpacing={'0'}>{product.name}</Text>
                                        <Text fontWeight={500} fontSize={'0.9rem'} letterSpacing={'0'} paddingBottom={'1.5rem'}>{preference.CURRENCY[1] + ' ' + product.price}</Text>
                                        <Button height={'35px'} width={'100%'} colorScheme={'none'} backgroundColor={'black'} border='none' borderRadius={0} fontSize={'1rem'} fontWeight={'none'}>ADD</Button>
                                    </Box>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                <div className="main-sec-row-3">
                    <div className="row-3-head">
                        <Box as={'span'} display='flex' justifyContent='center' fontWeight={600} fontSize={'30px'}>{preference.BANNERS.heading}</Box>
                    </div>
                    <div className="row-3-img-container">
                        {preference.BANNERS.imagesURL.map((image, i) => (
                            <Box as={'div'} width={'50%'} key={i}>
                                <Image src={image} objectFit={'fill'} fallbackSrc={placeholderImage} />
                            </Box>
                        ))}
                    </div>
                    <div className="row-3-quote-container">
                        <Box as={'div'} display='flex' flexDirection={'column'} alignItems={'center'}>
                            <Box as="span" textAlign={'center'} padding={'0 1rem'} fontWeight={600} fontSize={isMobile ? '25px' : '30px'}>{preference.FASHIONQUOTE.quote}</Box>
                            <Box as="span" fontSize={isMobile ? '12px' : 'inherit'}>{preference.FASHIONQUOTE.translated}</Box>
                        </Box>
                        <Box as="div" display={'flex'}  height={'5rem'} width={isMobile ? '70%' : '33rem'} padding={'0 1rem'}>
                            <Image src={lineSeparator} objectFit={'cover'}/>
                        </Box>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default Home;