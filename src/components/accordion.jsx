import { SlArrowDown } from 'react-icons/sl';
import { FaInstagram, FaFacebookF, FaTwitter, FaYoutube, FaSnapchatGhost} from 'react-icons/fa';
import { Accordion, AccordionItem, AccordionButton, AccordionPanel, AccordionIcon, UnorderedList, ListItem, Box, SimpleGrid, Icon } from '@chakra-ui/react';

import footerConfigs from "../data/footer.json";

export const FooterAccordion = () => {

    return(
        <Accordion allowToggle>
            {footerConfigs.footerInfo.map((item, i) => (
                <AccordionItem border={'none'} key={i}>
                    <AccordionButton padding={'0'} backgroundColor={'transparent'}>
                        <Box as="span" flex='1' textAlign='left' padding={'1.5rem 0 1.5rem 2rem'} fontWeight={600}>{item.listHeading}</Box>
                        <Box as="span" paddingRight={'3rem'}><AccordionIcon as={SlArrowDown}/></Box>
                    </AccordionButton>
                    <AccordionPanel >
                        <UnorderedList listStyleType={'none'} >
                                {item.links.map((link, i) => (
                                    <ListItem paddingBottom={'1rem'} key={i} ><a href={link.link}>{link.name}</a></ListItem>
                                ))}
                        </UnorderedList>
                    </AccordionPanel>
                </AccordionItem>
            ))}
            <AccordionItem border={'none'}>
                <AccordionButton padding={'0'} backgroundColor={'transparent'}>
                    <Box as="span" flex='1' textAlign='left' padding={'1.5rem 0 1.5rem 2rem'} fontWeight={600}>{footerConfigs.followUs.listHeading}</Box>
                    <Box as="span" paddingRight={'3rem'}>
                        <AccordionIcon as={SlArrowDown}/>
                    </Box>
                </AccordionButton>
                <AccordionPanel paddingLeft={'2rem'}>
                    <SimpleGrid columns={footerConfigs.followUs.links.length} spacing={'20'} maxW={'min-content'}>
                        <span><a href='#/'><Icon as={FaInstagram} /></a></span>
                        <span><a href='#/'><Icon as={FaFacebookF} /></a></span>
                        <span><a href='#/'><Icon as={FaTwitter} /></a></span>
                        <span><a href='#/'><Icon as={FaYoutube} /></a></span>
                        <span><a href='#/'><Icon as={FaSnapchatGhost} /></a></span>
                    </SimpleGrid>
                </AccordionPanel>
            </AccordionItem>
        </Accordion>
    );
}