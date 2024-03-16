import React, { useEffect, useState } from 'react';
import { ISliderProps } from './slider.type';
import { LazyLoadImage } from '../lazy-load-image';

export const Slider: React.FC<ISliderProps> = (props) => {
  const { sliders = [], type = 'sliders', autoNext = false } = props;

  const [imgIndexCurrent, setImageIndexCurrent] = useState<number>(0);

  const handleNextSlider = (data: number) => {
    if (data === -1) {
      setImageIndexCurrent((pv) => {
        if (pv === 0) return sliders.length - 1;
        return pv - 1;
      });
    } else if (data === 1) {
      setImageIndexCurrent((pv) => {
        if (pv === sliders.length - 1) return 0;
        return pv + 1;
      });
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (autoNext === false) return;
      if (imgIndexCurrent === sliders.length - 1) {
        setImageIndexCurrent(0);
      } else {
        setImageIndexCurrent((pv) => pv + 1);
      }
    }, 2000);

    return () => clearInterval(interval);
  }, [autoNext, imgIndexCurrent, sliders.length]);

  return (
    <div className="slider-container">
      {type === 'sliders' && (
        <div className="p-4">
          <div className="flex flex-row h-[500px] w-[700px]">
            <button
              title="leftClick"
              onClick={() => handleNextSlider(-1)}
              // className={imgIndexCurrent === 0 ? 'invisible' : 'visible'}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
                className="tabler-icon tabler-icon-arrow-left "
              >
                <path d="M5 12l14 0" />
                <path d="M5 12l6 6" />
                <path d="M5 12l6 -6" />
              </svg>
            </button>
            <div className="h-[500px] w-[700px]">
              <LazyLoadImage
                wrapperClassName="object-fit h-full w-full"
                className="object-fit h-full w-full"
                src={sliders[imgIndexCurrent]}
                alt=""
                effect="blur"
              />
            </div>
            <button
              title="rightClick"
              onClick={() => handleNextSlider(1)}
              // className={imgIndexCurrent === sliders.length - 1 ? 'invisible' : 'visible'}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
                className="tabler-icon tabler-icon-arrow-right "
              >
                <path d="M5 12l14 0" />
                <path d="M13 18l6 -6" />
                <path d="M13 6l6 6" />
              </svg>
            </button>
          </div>
        </div>
      )}

      {type === 'only-image' && (
        <div
          className="splide splide--slide splide--ltr splide--draggable is-active is-overflow is-initialized"
          aria-label="My Favorite Images"
          id="splide02"
          role="region"
          aria-roledescription="carousel"
        >
          <div
            className="splide__track splide__track--slide splide__track--ltr splide__track--draggable"
            id="splide02-track"
            aria-live="polite"
            aria-atomic="true"
            style={{ paddingLeft: '0px', paddingRight: '0px' }}
          >
            <ul
              className="splide__list"
              id="splide02-list"
              role="presentation"
              style={{ transform: 'translateX(0px)' }}
            >
              <li
                className="splide__slide is-active is-visible"
                id="splide02-slide01"
                role="group"
                aria-roledescription="slide"
                aria-label="1 of 3"
                style={{ width: 'calc(100%)' }}
              >
                <LazyLoadImage
                  wrapperClassName="object-fit h-full w-full"
                  className="object-fit h-full w-full"
                  src={sliders[imgIndexCurrent]}
                  alt=""
                  effect="blur"
                />
              </li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};
