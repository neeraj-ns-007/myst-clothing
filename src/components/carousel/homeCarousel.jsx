import { Image, AspectRatio, useMediaQuery } from '@chakra-ui/react';
import placeholderImage from '../../assets/images/no-image-placeholder.gif';

// import Swiper core and required modules
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, A11y, Autoplay} from 'swiper';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/scrollbar';

const Slider = () => {
    const [isTab] = useMediaQuery("(max-width: 768px)");

    return (
        <div className="slider-container">
            <Swiper
            modules={[Navigation, A11y, Autoplay]}
            slidesPerView={1}
            navigation
            speed={2000}
            spaceBetween={15}
            autoplay={{
                delay: 5000,
                disableOnInteraction: false
            }}
            loop={true}
            >
                <SwiperSlide>
                    <AspectRatio ratio={isTab ? 5 / 6  : 16 / 6}>
                        <Image
                            src="https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=900&q=80"
                            alt="Test Image 1"
                            objectFit="cover"
                            fallbackSrc={placeholderImage}
                        />
                    </AspectRatio>
                </SwiperSlide>
                <SwiperSlide>
                    <AspectRatio ratio={isTab ? 5 / 6  : 16 / 6}>
                        <Image
                            src="https://images.unsplash.com/photo-1517940310602-26535839fe84?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
                            alt="Test Image 2"
                            objectFit="cover"
                            fallbackSrc={placeholderImage}
                        />
                    </AspectRatio>
                </SwiperSlide>
                <SwiperSlide>
                    <AspectRatio ratio={isTab ? 5 / 6  : 16 / 6}>
                        <Image
                            src="https://images.unsplash.com/photo-1516575150278-77136aed6920?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
                            alt="Test Image 3"
                            objectFit="cover"
                            fallbackSrc={placeholderImage}
                        />
                    </AspectRatio>
                </SwiperSlide>
                <SwiperSlide>
                    <AspectRatio ratio={isTab ? 5 / 6  : 16 / 6}>
                        <Image
                            src="https://images.unsplash.com/photo-1570215778372-2a5b29c18fc6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
                            alt="Test Image 4"
                            objectFit="cover"
                            fallbackSrc={placeholderImage}
                        />
                    </AspectRatio>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Slider;