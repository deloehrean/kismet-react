import AxleBlog from 'src/assets/images/websites/axleWorkout/axle-blog-template.jpg';
import AxleBuyIt from 'src/assets/images/websites/axleWorkout/axle-buy-it-template.jpg';
import AxlePartner from 'src/assets/images/websites/axleWorkout/axle-find-it-become-partner-template.jpg';
import AxleHomepage from 'src/assets/images/websites/axleWorkout/axle-homepage-template-02.jpg';
import AxleLogo from 'src/assets/images/websites/axleWorkout/axle-logo-wt.png';
import AxleWorkIt from 'src/assets/images/websites/axleWorkout/axle-work-it-template.jpg';
import IntelCategory from 'src/assets/images/websites/intel/intel-category.jpg';
import IntelLogo from 'src/assets/images/websites/intel/intel-dit-store-logo.png';
import IntelEditAddress from 'src/assets/images/websites/intel/intel-edit-address.jpg';
import IntelHomepage from 'src/assets/images/websites/intel/intel-homepage.jpg';
import IntelOrders from 'src/assets/images/websites/intel/intel-orders.jpg';
import IntelProduct from 'src/assets/images/websites/intel/intel-product-page.jpg';

export const axleImages = [
  { logo: AxleLogo },
  {
    gallery: [
      {
        image: AxleHomepage,
        position: 'a',
      },
      {
        image: AxleBlog,
        position: 'b',
      },
      {
        image: AxlePartner,
        position: 'c',
      },
      {
        image: AxleBuyIt,
        position: 'd',
      },
      {
        image: AxleWorkIt,
        position: 'e',
      },
    ],
  },
];

export const intelImages = [
  { logo: IntelLogo },
  {
    gallery: [
      {
        image: IntelHomepage,
        position: 'a',
      },
      {
        image: IntelCategory,
        position: 'b',
      },
      {
        image: IntelOrders,
        position: 'c',
      },
      {
        image: IntelProduct,
        position: 'd',
      },
      {
        image: IntelEditAddress,
        position: 'e',
        bumpUp: true,
      },
    ],
  },
];
