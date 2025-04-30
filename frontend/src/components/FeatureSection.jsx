import React from 'react';
import { Brush, Palette, Craft } from 'lucide-react';

const FeatureSection = () => {
  return (
    <div className="relative mt-20 border-b border-neutral-800 min-h-[800px]">
      <div className="text-center">
        <span className="bg-neutral-900 text-red-500 rounded-full h-6 text-sm font-medium px-2 py-1 uppercase">
          Features
        </span>
        <h2 className="text-3xl sm:text-5xl lg:text-6xl mt-10 lg:mt-20 tracking-wide">
          Explore{" "}
          <span className="bg-gradient-to-r from-red-500 to-red-800 text-transparent bg-clip-text">
            Art and Craft
          </span>{" "}
          with Ease
        </h2>
      </div>
      <div className="flex flex-wrap mt-10 lg:mt-20">
        <div className="w-full sm:w-1/2 lg:w-1/3">
          <div className="flex">
            <div className="flex mx-6 h-10 w-10 p-2 bg-neutral-900 text-red-700 justify-center items-center rounded-full">
              <Brush size={24} />
            </div>
            <div>
              <h5 className="mt-1 mb-6 text-xl">Artistic Tools</h5>
              <p className="text-md p-2 mb-20 text-neutral-500">
                Unleash your creativity with a variety of artistic tools at your fingertips.
              </p>
            </div>
          </div>
        </div>
        <div className="w-full sm:w-1/2 lg:w-1/3">
          <div className="flex">
            <div className="flex mx-6 h-10 w-10 p-2 bg-neutral-900 text-red-700 justify-center items-center rounded-full">
              <Palette size={24} />
            </div>
            <div>
              <h5 className="mt-1 mb-6 text-xl">Color Palette</h5>
              <p className="text-md p-2 mb-20 text-neutral-500">
                Discover vibrant color palettes to bring life to your artwork.
              </p>
            </div>
          </div>
        </div>
        <div className="w-full sm:w-1/2 lg:w-1/3">
          <div className="flex">
            <div className="flex mx-6 h-10 w-10 p-2 bg-neutral-900 text-red-700 justify-center items-center rounded-full">
              <Craft size={24} />
            </div>
            <div>
              <h5 className="mt-1 mb-6 text-xl">Craft Supplies</h5>
              <p className="text-md p-2 mb-20 text-neutral-500">
                Find quality craft supplies for your next project.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeatureSection;
