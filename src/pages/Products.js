import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import Carousel from '../components/Carousel';
import { transition1 } from '../transitions';
import Bundle1 from '../img/about/sandra.jpg';
import Bundle2 from '../img/about/sandra.jpg';
import Guide1 from '../img/about/sandra.jpg';
import Guide2 from '../img/about/sandra.jpg';
import Preset1 from '../img/about/sandra.jpg';
import Preset2 from '../img/about/sandra.jpg';

const Products = () => {
  const bundlesImages = [Bundle1, Bundle2];
  const guidesImages = [Guide1, Guide2];
  const presetsImages = [Preset1, Preset2];
  const { t } = useTranslation();

  const lemonSqueezyCheckout = (url) => {
    window.open(url, '_blank');
  };

  return (
    <motion.section
      data-test="productPageSection"
      testID="productPageSection"
      initial={{ opacity: 0, y: '100%' }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: '100%' }}
      transition={{ transition1 }}
      className="section lg:overflow-auto"
    >
      <div className="container mx-auto h-full relative">
        <h1
          data-test="productsPageTitle"
          testID="productsPageTitle"
          className="h1 text-pink text-center mt-6"
        >
          {t('products')}
        </h1>

        <hr className="my-8" />

        {/* Bundles Section */}
        <div data-test="bundlesSection" testID="bundlesSection">
          <h2
            data-test="bundlesSectionTitle"
            testID="bundlesSectionTitle"
            className="h2 text-pink text-center mb-4"
          >
            {t('bundles_title')}
          </h2>

          {/* First Bundle Product */}
          <div
            data-test="bundleProduct1"
            testID="bundleProduct1"
            className="mt-12 md:flex md:items-center md:justify-between"
          >
            <div className="md:w-1/2 md:pr-6">
              <h3 data-test="bundleProductTitle1" testID="bundleProductTitle1" className="h3 text-center mb-2">
                {t('bundles_subtitle_1')}
              </h3>
              <p className="text-center mb-6">{t('bundles_description')}</p>
              <button
                data-test="bundleCheckoutButton1"
                testID="bundleCheckoutButton1"
                className="btn rounded-xl bg-green mx-auto block mt-4"
                onClick={() => lemonSqueezyCheckout('https://your-lemonsqueezy-checkout-url-for-bundles-1')}
              >
                {t('buy_now_button')}
              </button>
            </div>

            <div className="md:w-1/2 md:pl-6 mt-6 md:mt-0">
              <Carousel autoSlide>
                {bundlesImages.map((image, i) => (
                  <img
                    key={`bundle1-${i}`}
                    alt={`Bundle 1 - ${i + 1}`}
                    className="rounded-3xl mb-1 p-2"
                    src={image}
                  />
                ))}
              </Carousel>
            </div>
          </div>

          <hr className="my-6" />

          {/* Second Bundle Product */}
          <div
            data-test="bundleProduct2"
            testID="bundleProduct2"
            className="mt-12 md:flex md:items-center md:justify-between"
          >
            <div className="md:w-1/2 md:pr-6">
              <h3 data-test="bundleProductTitle2" testID="bundleProductTitle2" className="h3 text-center mb-2">
                {t('bundles_subtitle_2')}
              </h3>
              <p className="text-center mb-6">{t('bundles_description')}</p>
              <button
                data-test="bundleCheckoutButton2"
                testID="bundleCheckoutButton2"
                className="btn rounded-xl bg-green mx-auto block mt-4"
                onClick={() => lemonSqueezyCheckout('https://your-lemonsqueezy-checkout-url-for-bundles-2')}
              >
                {t('buy_now_button')}
              </button>
            </div>

            <div className="md:w-1/2 md:pl-6 mt-6 md:mt-0">
              <Carousel autoSlide>
                {bundlesImages.map((image, i) => (
                  <img
                    key={`bundle2-${i}`}
                    alt={`Bundle 2 - ${i + 1}`}
                    className="rounded-3xl mb-1 p-2"
                    src={image}
                  />
                ))}
              </Carousel>
            </div>
          </div>
        </div>

        <hr className="my-8" />

        {/* Travel Guides Section */}
        <div data-test="guidesSection" testID="guidesSection">
          <h2
            data-test="guidesSectionTitle"
            testID="guidesSectionTitle"
            className="h2 text-pink text-center mb-4"
          >
            {t('travel_guides_title')}
          </h2>

          {/* First Guide Product */}
          <div
            data-test="guideProduct1"
            testID="guideProduct1"
            className="mt-12 md:flex md:items-center md:justify-between"
          >
            <div className="md:w-1/2 md:pr-6">
              <h3 data-test="guideProductTitle1" testID="guideProductTitle1" className="h3 text-center mb-2">
                {t('travel_guides_subtitle_1')}
              </h3>
              <p className="text-center mb-6">{t('travel_guides_description')}</p>
              <button
                data-test="guideCheckoutButton1"
                testID="guideCheckoutButton1"
                className="btn rounded-xl bg-green mx-auto block mt-4"
                onClick={() => lemonSqueezyCheckout('https://your-lemonsqueezy-checkout-url-for-guides-1')}
              >
                {t('buy_now_button')}
              </button>
            </div>

            <div className="md:w-1/2 md:pl-6 mt-6 md:mt-0">
              <Carousel autoSlide>
                {guidesImages.map((image, i) => (
                  <img
                    key={`guide1-${i}`}
                    alt={`Guide 1 - ${i + 1}`}
                    className="rounded-3xl mb-1 p-2"
                    src={image}
                  />
                ))}
              </Carousel>
            </div>
          </div>

          <hr className="my-6" />

          {/* Second Guide Product */}
          <div
            data-test="guideProduct2"
            testID="guideProduct2"
            className="mt-12 md:flex md:items-center md:justify-between"
          >
            <div className="md:w-1/2 md:pr-6">
              <h3 data-test="guideProductTitle2" testID="guideProductTitle2" className="h3 text-center mb-2">
                {t('travel_guides_subtitle_2')}
              </h3>
              <p className="text-center mb-6">{t('travel_guides_description')}</p>
              <button
                data-test="guideCheckoutButton2"
                testID="guideCheckoutButton2"
                className="btn rounded-xl bg-green mx-auto block mt-4"
                onClick={() => lemonSqueezyCheckout('https://your-lemonsqueezy-checkout-url-for-guides-2')}
              >
                {t('buy_now_button')}
              </button>
            </div>

            <div className="md:w-1/2 md:pl-6 mt-6 md:mt-0">
              <Carousel autoSlide>
                {guidesImages.map((image, i) => (
                  <img
                    key={`guide2-${i}`}
                    alt={`Guide 2 - ${i + 1}`}
                    className="rounded-3xl mb-1 p-2"
                    src={image}
                  />
                ))}
              </Carousel>
            </div>
          </div>
        </div>

        <hr className="my-8" />

        {/* Lightroom Presets Section */}
        <div data-test="presetsSection" testID="presetsSection">
          <h2
            data-test="presetsSectionTitle"
            testID="presetsSectionTitle"
            className="h2 text-pink text-center mb-4"
          >
            {t('lightroom_presets_title')}
          </h2>

          {/* First Preset Product */}
          <div
            data-test="presetProduct1"
            testID="presetProduct1"
            className="mt-12 md:flex md:items-center md:justify-between"
          >
            <div className="md:w-1/2 md:pr-6">
              <h3 data-test="presetProductTitle1" testID="presetProductTitle1" className="h3 text-center mb-2">
                {t('lightroom_presets_subtitle_1')}
              </h3>
              <p className="text-center mb-6">{t('lightroom_presets_description')}</p>
              <button
                data-test="presetCheckoutButton1"
                testID="presetCheckoutButton1"
                className="btn rounded-xl bg-green mx-auto block mt-4"
                onClick={() => lemonSqueezyCheckout('https://your-lemonsqueezy-checkout-url-for-presets-1')}
              >
                {t('buy_now_button')}
              </button>
            </div>

            <div className="md:w-1/2 md:pl-6 mt-6 md:mt-0">
              <Carousel autoSlide>
                {presetsImages.map((image, i) => (
                  <img
                    key={`preset1-${i}`}
                    alt={`Preset 1 - ${i + 1}`}
                    className="rounded-3xl mb-1 p-2"
                    src={image}
                  />
                ))}
              </Carousel>
            </div>
          </div>

          <hr className="my-6" />

          {/* Second Preset Product */}
          <div
            data-test="presetProduct2"
            testID="presetProduct2"
            className="mt-12 md:flex md:items-center md:justify-between"
          >
            <div className="md:w-1/2 md:pr-6">
              <h3 data-test="presetProductTitle2" testID="presetProductTitle2" className="h3 text-center mb-2">
                {t('lightroom_presets_subtitle_2')}
              </h3>
              <p className="text-center mb-6">{t('lightroom_presets_description')}</p>
              <button
                data-test="presetCheckoutButton2"
                testID="presetCheckoutButton2"
                className="btn rounded-xl bg-green mx-auto block mt-4"
                onClick={() => lemonSqueezyCheckout('https://your-lemonsqueezy-checkout-url-for-presets-2')}
              >
                {t('buy_now_button')}
              </button>
            </div>

            <div className="md:w-1/2 md:pl-6 mt-6 md:mt-0">
              <Carousel autoSlide>
                {presetsImages.map((image, i) => (
                  <img
                    key={`preset2-${i}`}
                    alt={`Preset 2 - ${i + 1}`}
                    className="rounded-3xl mb-1 p-2"
                    src={image}
                  />
                ))}
              </Carousel>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Products;