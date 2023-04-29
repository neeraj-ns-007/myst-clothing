import React from 'react';
import preference from '../../data/homePageConfigs.json';
import {
    Icon,
    Box,
    Image,
    Button,
    Link,
    Drawer,DrawerBody,DrawerFooter,DrawerHeader,DrawerOverlay,DrawerContent,DrawerCloseButton,useDisclosure
} from '@chakra-ui/react';
import { FaUserCircle, FaRegHeart, FaShoppingCart, FaSearch, FaGlobeAmericas, FaMailBulk, FaMapMarkerAlt, FaChevronRight } from 'react-icons/fa';
import { AiOutlineMenu } from "react-icons/ai";

const Header = () => {
    const btnRef = React.useRef();
    const { isOpen, onOpen, onClose } = useDisclosure();

    return (
        <div className="header-container">
            <div className="header-promo-section">
                <p>{preference.HEADERPROMO}</p>
            </div>
            <div className='header-nav-bar'>
                <div className="header-section-left">
                    <Box as={'div'} className="hamburger-menu-mobile">
                        <Icon ref={btnRef} onClick={onOpen} cursor="pointer" boxSize={preference.ICONSIZE} as={AiOutlineMenu} />
                        <Drawer isOpen={isOpen} placement='left' onClose={onClose} finalFocusRef={btnRef} size={'sm'}>
                            <DrawerOverlay />
                            <DrawerContent>
                                <DrawerCloseButton size='lg'/>
                                <DrawerHeader fontSize={'2rem'} borderBottomWidth='1px' paddingBottom={'2.5rem'}>MENU</DrawerHeader>

                                <DrawerBody>
                                    <Box as={'div'} display={'flex'} flexDirection={'column'}>
                                        {preference.CATEGORY.map((category, i) => (
                                            <Link href={preference.VOID} key={i} >
                                                <Button fontSize={'1.4rem'} borderRadius={0} width={'100%'} padding={'2rem 0'} justifyContent="space-between" borderBottom={'1px solid #d3d3d3'} backgroundColor={'transparent'} rightIcon={<FaChevronRight />}>{category}</Button>
                                            </Link>
                                        ))}
                                    </Box>
                                </DrawerBody>

                                <DrawerFooter>
                                    Helloe
                                </DrawerFooter>
                            </DrawerContent>
                        </Drawer>
                    </Box>
                    <div className="icon-with-text search-icon">
                        <Icon cursor="pointer" boxSize={preference.ICONSIZE} as={FaSearch}/>
                    </div>
                    <div className="icon-with-text globe-icon">
                        <Icon cursor="pointer" boxSize={preference.ICONSIZE} as={FaGlobeAmericas}/>
                        <span>IN</span>
                    </div>
                    <div className="icon-with-text mail-icon">
                        <Icon cursor="pointer" boxSize={preference.ICONSIZE} as={FaMailBulk} />
                        <span>CUSTOMER CARE</span>
                    </div>
                    <div className="icon-with-text location-icon">
                        <Icon cursor="pointer" boxSize={preference.ICONSIZE} as={FaMapMarkerAlt} />
                        <span>STORE LOCATOR</span>
                    </div>
                </div>
                <div className="header-section-center">
                    <Image cursor="pointer" src={'https://myst-clothing.sirv.com/Images/mystassets/site-logo.png?w=50&h=65&format=png&q=100'} alt='Main Logo' />
                    <span>{preference.STORENAME}</span>
                </div>
                <div className="header-section-right">
                    <div className="icon-with-text-sm search-icon">
                        <Icon cursor="pointer" boxSize={preference.ICONSIZE} as={FaSearch}/>
                        <span>SEARCH</span>
                    </div>
                    <div className="icon-with-text-sm profile-icon">
                        <Icon cursor="pointer" boxSize={preference.ICONSIZE} as={FaUserCircle} />
                        <span>PROFILE</span>
                    </div>
                    <div className="icon-with-text-sm wishlist-icon">
                        <Icon cursor="pointer" boxSize={preference.ICONSIZE} as={FaRegHeart} />
                        <span>WISHLIST</span>
                    </div>
                    <div className="icon-with-text-sm cart-icon">
                        <Icon cursor="pointer" boxSize={preference.ICONSIZE} as={FaShoppingCart} />
                        <span>CART</span>
                    </div>
                </div>
            </div>
            <div className="header-category-section">
                {preference.CATEGORY.map((category, i) => (
                    <span key={i}>{category}</span>
                ))}
            </div>
        </div>
    );
}

export default Header;
