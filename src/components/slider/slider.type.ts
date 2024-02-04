export interface ISliderProps {
  sliders?: ISlideItem[];
}

export interface ISlideItem {
  id: number | string;
  imageUrl?: string;
  ctaUrl?: string;
}
