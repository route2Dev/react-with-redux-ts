import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import React from 'react';

const Ranger = () => {
  return <Slider min={0} max={20} defaultValue={5} disabled={false} />;
};

export default Ranger;
