import { useEffect } from 'react';
import ReactPixel from 'react-facebook-pixel';

const MetaPixel = () => {
  useEffect(() => {
    const options = {
      autoConfig: true, // Automatically configure Pixel
      debug: false, // Disable debug logs
    };
    ReactPixel.init('3234532086692646', options); // Replace with your actual Pixel ID

    // Track a page view when the component is mounted
    ReactPixel.pageView();
  }, []);

  return null;
};

export default MetaPixel;
