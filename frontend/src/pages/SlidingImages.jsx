import React, { useRef } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import p from "../pages/p.jpg";
import l from "../pages/l.jpg";
import u from "../pages/u.jpg";
import r from "../pages/r.jpg";
import mm from "../pages/mm.jpg";
import mu from "../pages/mu.jpg";

const SlidingImages = () => {
  const sliderRef = useRef(null);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: true,
  };

  const goToNextSlide = () => {
    sliderRef.current.slickNext();
  };

  return (
    <div className="w-full h-full flex justify-center items-center mt-10">
      <div className="w-full max-w-screen-lg relative">
        <Slider {...settings} ref={sliderRef}>
        <div className="flex" style={{backgroundColor:'white'}}>
         <img className="w-250 md:w-500 lg:w-666 xl:w-800" src={p} alt="Slide 1" style={{ height:'50%',width:'100%',objectFit:'cover'}}/>
         <div className="flex-grow bg-gray-800 bg-opacity-90 p-4 text-white">
           <h2 className="text-xl md:text-4xl lg:text-5xl xl:text-xl">Kutch Embroidery Revival</h2>
           <p className="text-lg md:text-xl lg:text-2xl xl:text-lg"> In the Kutch region of Gujarat, there has been a revival of traditional embroidery techniques. Organizations like Kala Raksha and artisans themselves have been working tirelessly to preserve and promote these intricate and colorful designs</p>
           <a href="https://timesofindia.indiatimes.com/city/vadodara/kutchs-intricate-meghwal-embroidery-documented-new-products-developed/articleshow/100407657.cms" target="_blank" rel="noopener noreferrer" className="inline-block bg-black hover:bg-gray-800 text-white font-bold py-2 px-4 rounded-full mt-4">Visit for Reference</a>
         </div>
       </div>
       <div className="flex">
         <img className="w-250 md:w-500 lg:w-666 xl:w-800" src={l} alt="Slide 2" style={{ height:'50%',width:'100%',objectFit:'cover'}} />
         <div className="flex-grow bg-gray-800 bg-opacity-90 p-4 text-white">
           <h2 className="text-xl md:text-4xl lg:text-5xl xl:text-xl font-bold">Pochampally Weaving Cluster</h2>
           <p className="text-lg md:text-xl lg:text-2xl xl:text-lg">Pochampally, located in Telangana, is famous for its centuries-old weaving tradition. Recently, this weaving cluster has seen a resurgence as younger generations are taking an interest in learning the craft. </p>
           <a href="https://dcdpindia.org/pochampally/" target="_blank" rel="noopener noreferrer" className="inline-block bg-black hover:bg-gray-800 text-white font-bold py-2 px-4 rounded-full mt-4">Visit for Reference</a>
         </div>
       </div>
       <div className="flex">
         <img className="w-250 md:w-500 lg:w-666 xl:w-800" src={u} alt="Slide 3" style={{ height:'50%',width:'100%',objectFit:'cover'}}/>
         <div className="flex-grow bg-gray-800 bg-opacity-90 p-4 text-white">
           <h2 className="text-xl md:text-4xl lg:text-5xl xl:text-xl font-bold">Terracotta Artisans of Bankura</h2>
           <p className="text-lg md:text-xl lg:text-2xl xl:text-lg">Bankura in West Bengal is renowned for its terracotta art. Artisans here have been creating stunning sculptures and pottery for generations. With the help of local NGOs and cultural organizations, these artisans are not only preserving their craft but also adapting it to modern tastes. </p>
           <a href="https://www.wbkvib.org.in/index.php/village-industries-m/rural-craft-hub-m/542-terracotta-at-panchmura#:~:text=Panchmura%20village%20in%20Bankura%20is,Terracota%20means%20baked%20clay." target="_blank" rel="noopener noreferrer" className="inline-block bg-black hover:bg-gray-800 text-white font-bold py-2 px-4 rounded-full mt-4">Visit for Reference</a>
         </div>
       </div>
       <div className="flex">
         <img className="w-250 md:w-500 lg:w-666 xl:w-800" src={r} alt="Slide 4" style={{ height:'50%',width:'100%',objectFit:'cover'}}/>
         <div className="flex-grow bg-gray-800 bg-opacity-90 p-4 text-white">
           <h2 className="text-xl md:text-4xl lg:text-5xl xl:text-xl font-bold">Dokra Artisans Empowerment</h2>
           <p className="text-lg md:text-xl lg:text-2xl xl:text-lg">Dokra, an ancient form of metal casting, is practiced by artisans in Odisha, West Bengal, and Jharkhand. Despite facing challenges from modernization, there have been initiatives to empower Dokra artisans. Organizations like Banglanatak.com have been working closely with these artisans, providing training, design support, and access to markets.  </p>
           <a href="https://dokraarts.com/" target="_blank" rel="noopener noreferrer" className="inline-block bg-black hover:bg-gray-800 text-white font-bold py-2 px-4 rounded-full mt-4">Visit for Reference</a>
         </div>
       </div>
       <div className="flex">
         <img className="w-250 md:w-500 lg:w-666 xl:w-800" src={mm} alt="Slide 5" style={{ height:'50%',width:'100%',objectFit:'cover'}}/>
         <div className="flex-grow bg-gray-800 bg-opacity-90 p-4 text-white">
           <h2 className="text-xl md:text-4xl lg:text-5xl xl:text-xl font-bold ">Madhubani Painting Renaissance:</h2>
           <p className="text-lg md:text-xl lg:text-2xl xl:text-lg"> Madhubani painting, a traditional art form originating from Bihar, has experienced a renaissance in recent years. Artisans, predominantly women, are reviving this ancient art form and adapting it to modern contexts. Organizations like Gram Vikas Parishad and NGOs like Mithila Art Institute have been instrumental in providing training, resources, and market access to Madhubani artists, leading to increased recognition both nationally and internationally. </p>
           <a href="https://en.wikipedia.org/wiki/Madhubani_art" target="_blank" rel="noopener noreferrer" className="inline-block bg-black hover:bg-gray-800 text-white font-bold py-2 px-4 rounded-full mt-4">Visit for Reference</a>
         </div>
       </div>
       <div className="flex">
         <img className="w-250 md:w-500 lg:w-666 xl:w-800" src={mu} alt="Slide 6" style={{ height:'50%',width:'100%',objectFit:'cover'}}/>
         <div className="flex-grow bg-gray-800 bg-opacity-90 p-4 text-white">
           <h2 className="text-xl md:text-4xl lg:text-5xl xl:text-xl font-bold ">Tanjore Painting Resurgence</h2>
           <p className="text-lg md:text-xl lg:text-2xl xl:text-lg">  Artisans in Tamil Nadu are reviving this traditional craft through workshops, exhibitions, and online platforms. Initiatives like the Tamil Nadu Handicrafts Development Corporation Limited (TNHDC) provide support to artisans by facilitating training programs, creating market linkages, and promoting awareness about Tanjore painting's cultural significance.</p>
           <a href="https://www.deccanchronicle.com/tabloid/hyderabad-chronicle/resurgence-of-indigenous-art-888386" target="_blank" rel="noopener noreferrer" className="inline-block bg-black hover:bg-gray-800 text-white font-bold py-2 px-4 rounded-full mt-4">Visit for Reference</a>
         </div>
       </div>
     




        </Slider>
        <button onClick={goToNextSlide} className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-black hover:bg-gray-600 text-white font-bold py-2 px-4 rounded-full">Next</button>
        <button onClick={goToNextSlide} className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-black hover:bg-gray-600 text-white font-bold py-2 px-4 rounded-full">Next</button>

      </div>
    </div>
  );
};



      
      
    


export default SlidingImages;
