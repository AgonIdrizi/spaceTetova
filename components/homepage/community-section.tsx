import React from "react";
import communityStyles from './community-section.module.css'

const CommunitySection = () => {
  return (
    <div className={communityStyles['communitySection']}>
      <div className="community flex-1 pr-5">
        <div className="py-2">
          <h5 className="text-gray-400 font-semibold pb-1">WE ARE A COMMUNITY</h5>
          <div className="text-black">
            Ky komunitet në zhvillim është i përqendruar në krijimin e
            standardeve dhe normave të reja të funksionimit kolektiv, që
            përshkojnë me nevojat e kohës dhe rrethit veprues.
          </div>
        </div>
        <div className="py-2">
          <h5 className="font-semibold text-gray-400 pb-1">WE CARE</h5>
          <div className="text-black font-normal">
            Thelbi i çdo aktiviteti është puna vullnetare, e dalë nga dëshira
            për kontribut në emër të bashkësisë dhe pranimi i tjerëve si
            bashkëveprues të barabartë.{" "}
          </div>
        </div>
        <div className="py-2">
          <h5 className="text-gray-400 font-semibold  pb-1">WE CREATE</h5>
          <div className="text-black">
            Ndodhitë publike kanë qëllim edukativ dhe udhëzues, e në raste
            paraqesin edhe forma kreative protesti, por aty, padyshim, nuk
            mungon edhe zbavitja në një shoqëri shumë të hapur për të ndryshmen.
          </div>
        </div>
      </div>
      <div className="getInTouch py-14 pl-6 flex-1 bg-black text-white">
        <h1 className="pb-6 font-semibold text-[60px] text-center">GET IN TOUCH</h1>
        <div className="flex justify-center cursor-pointer items-center hover:text-gray-300 hover:pl-2">
          <img src="/arrow_icon.svg" className="w-8 h-8" />
          <div>Joining as Volunteer</div>
        </div>
        <div className="flex justify-center cursor-pointer items-center hover:text-gray-300 hover:pl-2">
          <img src="/arrow_icon.svg" className="w-8 h-8" />
          <div>Use the Space</div>
        </div>
        <div className="flex justify-center cursor-pointer items-center hover:text-gray-300 hover:pl-2">
          <img src="/arrow_icon.svg" className="w-8 h-8" />
          <div>Use the Co-working Space</div>
        </div>
        <div className="flex justify-center cursor-pointer items-center hover:text-gray-300 hover:pl-2">
          <img src="/arrow_icon.svg" className="w-8 h-8" />
          <div>Cooperate</div>
        </div>
      </div>
    </div>
  );
};

export default CommunitySection;
