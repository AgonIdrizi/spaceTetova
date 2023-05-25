import React from 'react';
import coverPhotoStyles from './cover-photo.module.css'


const coverPhoto = () => {
  return (
    <div className="relative  mx-auto">
      <img src="/coverPhoto.jpg" className="w-full h-[500px]" alt="cover-photo" />
      <div className={coverPhotoStyles['hapesireText']}>
        Hapesirë dhe komunitet i njerëzve të pavarur të cilët bashkëveprojnë, krijojnë dhe kultivojnë kulturën e natyrshme njerëzore të funksionimit në barazi. <span className="underline text-[8px]">see more</span>
      </div>
    </div>
  );
};




export default coverPhoto;

