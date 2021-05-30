import React, { FC } from 'react'
import SlickSlider from 'react-slick'

import { SliderProps } from 'src/interfaces/content'

const defaultSettings = {
  dots: false,
  arrows: false,
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  variableWidth: true,
  className: 'slider variable-width',
}

const Slider: FC<SliderProps> = ({
  children,
  settings: customSettings = {},
}) => {
  const settings = { ...defaultSettings, ...customSettings }

  return <SlickSlider {...settings}>{children}</SlickSlider>
}
export default Slider
