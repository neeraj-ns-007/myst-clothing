import { Icon, Input, Button, SimpleGrid, useMediaQuery } from '@chakra-ui/react';
import { FaInstagram, FaFacebookF, FaTwitter, FaYoutube, FaSnapchatGhost} from 'react-icons/fa';

import { FooterAccordion } from "../accordion";
import footerConfigs from "../../data/footer.json";

const Footer = () => {
    const [isTab] = useMediaQuery("(max-width: 902px)");

    return(
        <div className="footer-container">
            <div className="footer-sec-top">
            <SimpleGrid columns={isTab ? 1 : 2} spacing={isTab ? 0 : '2rem'} alignItems={'center'}>
                <span>{footerConfigs.newsLetterMsg}</span>
                <div className='subscribe-section'>
                    <Input
                        height={'35px'}
                        width={isTab ? '70%' : '18.919rem'}
                        borderRadius={0}
                        borderColor={'black'}
                        placeholder={footerConfigs.searchBarPlaceHolder}
                    />
                    <Button
                        height={'35px'}
                        padding={'3px 25px'}
                        colorScheme={'none'}
                        backgroundColor={'black'}
                        border='none'
                        borderRadius={0}
                        fontSize={'1rem'}
                        fontWeight={'none'}>
                        {footerConfigs.subscribeBtn}
                    </Button>
                </div>
                </SimpleGrid>
            </div>
            <div className="footer-sec-middle">
                <div className="footer-sec-row">
                    {footerConfigs.footerInfo.map((item, i) => (
                        <div className='footer-sec-col' key={i}>
                            <div className="footer-list-heading" >
                                <span>{item.listHeading}</span>
                            </div>
                            <ul className={'footer-list-links'}>
                                {item.links.map((link, i) => (
                                    <li key={i} ><a href={link.link}>{link.name}</a></li>
                                ))}
                            </ul>
                        </div>
                    ))}
                    <div className="footer-sec-col">
                        <div className="footer-list-heading" >
                            <span>{footerConfigs.followUs.listHeading}</span>
                        </div>
                        <div className={'footer-list-icons'}>
                            <span><a href='#/'><Icon as={FaInstagram} /></a></span>
                            <span><a href='#/'><Icon as={FaFacebookF} /></a></span>
                            <span><a href='#/'><Icon as={FaTwitter} /></a></span>
                            <span><a href='#/'><Icon as={FaYoutube} /></a></span>
                            <span><a href='#/'><Icon as={FaSnapchatGhost} /></a></span>
                        </div>
                    </div>

                </div>
                <div className="footer-sec-row-accordion">
                    <FooterAccordion />
                </div>
            </div>
            <div className="footer-sec-bottom">
                <div className="footer-btm-row">
                    <p>{footerConfigs.copyrightInfo}</p>
                </div>
            </div>
        </div>
    );
}

export default Footer;