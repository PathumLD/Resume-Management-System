import React from 'react';
import {Carousel} from 'flowbite-react';

function Component() {
  return (
    <div className="h-56 sm:h-64 xl:h-80 2xl:h-96">
      <Carousel onSlideChange={(index) => console.log('onSlideChange()', index)}>
        <div className="flex items-center justify-center h-full bg-gray-400 dark:bg-gray-700 dark:text-white">
          Slide 1
        </div>
        <div className="flex items-center justify-center h-full bg-gray-400 dark:bg-gray-700 dark:text-white">
          Slide 2
        </div>
        <div className="flex items-center justify-center h-full bg-gray-400 dark:bg-gray-700 dark:text-white">
          Slide 3
        </div>
        <div className="flex items-center justify-center h-full bg-gray-400 dark:bg-gray-700 dark:text-white">
          Slide 1
        </div>
        <div className="flex items-center justify-center h-full bg-gray-400 dark:bg-gray-700 dark:text-white">
          Slide 2
        </div>
        <div className="flex items-center justify-center h-full bg-gray-400 dark:bg-gray-700 dark:text-white">
          Slide 3
        </div>
      </Carousel>
    </div>
  );
}

export default Component;