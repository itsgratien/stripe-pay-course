import React from 'react';
import { useImage } from 'react-image';
import { MoonLoader } from 'react-spinners';
interface Props {
  src: string;
}

const ImageLoading = (props: Props) => {
  const { src } = props;

  const image = useImage({
    srcList: src,
  });

  if (image.isLoading) {
    <div className='flex items-center justify-center h-full w-full'>
      <MoonLoader color='white' size='30' />
    </div>;
  }
  return <img src={image.src} alt='' className='object-cover' />;
};
export default ImageLoading;
