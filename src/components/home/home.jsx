import { useMediaQuery, Box, Image, SimpleGrid } from "@chakra-ui/react";
import preference from '../../data/homePageConfigs.json';

import Headers from '../header/header';
import HomeMainCarousel from "../carousel/homeCarousel";
import ProductTile from "../../utils/product/productTile";
import Footer from '../footer/footer';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, A11y, Autoplay} from 'swiper';

import placeholderImage from '../../assets/images/no-image-placeholder.gif';
import lineSeparator from '../../assets/images/decorative-separator.svg';

//<Tooltip hasArrow label="Hey, I'm here!" aria-label='A tooltip'></Tooltip>

const Home = () => {
    const [isTab] = useMediaQuery("(max-width: 1075px)");
    const [isMobile] = useMediaQuery("(max-width: 528px)");

    return(
        <>
            <Headers />
            <HomeMainCarousel />
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
                            <Swiper
                                modules={[Navigation, A11y, Autoplay]}
                                slidesPerView={1}
                                navigation
                                breakpoints={{
                                    786: {
                                        slidesPerView: 3,
                                        spaceBetween: 10,
                                        autoplay: {
                                            delay: 5000,
                                            disableOnInteraction: false
                                        },
                                        loop: true
                                    },
                                    1024: {
                                        slidesPerView: 'auto',
                                        spaceBetween: 0,
                                        freeMode: false,
                                        simulateTouch: false,
                                        loop: false,
                                        navigation: {
                                            enabled: false
                                        }
                                    }
                                }}
                                >
                                {preference.HOMEPAGEPLP.products.map((product, i) => (
                                    <SwiperSlide key={i} >
                                        <ProductTile product={product} />
                                    </SwiperSlide>
                                ))}
                            </Swiper>
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