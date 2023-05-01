// Utility for product
import placeholderImage from '../../assets/images/no-image-placeholder.gif'

export function getProductImageURL (image) {
    if(!image) {
        return placeholderImage;
    } else {
        return image.small;
    }
};
