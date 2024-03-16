import React from 'react';
import { ILoadingMoreProps } from './loading-more.type';
import './loading-more.style.scss';

export const LoadingMore: React.FC<ILoadingMoreProps> = () => {
  return (
    <div className="toto-loading-more simple-loading flex justify-center">
      <svg className="svg-icon-load" xmlns="http://www.w3.org/2000/svg" width="50" height="48" viewBox="0 0 50 48">
        <g fill="none" fillRule="evenodd">
          <g fill="#F85C1E" fillRule="nonzero">
            <g>
              <g transform="translate(-695 -525) translate(673 525) translate(22)">
                <ellipse cx="16.667" cy="16" rx="4.167" ry="4" />
                <ellipse cx="16.667" cy="32" rx="4.167" ry="4" />
                <ellipse cx="33.333" cy="16" rx="4.167" ry="4" />
                <ellipse cx="33.333" cy="32" rx="4.167" ry="4" />
              </g>
            </g>
          </g>
        </g>
      </svg>
    </div>
  );
};
