import React from 'react';
import { FacebookIcon } from '../images/icons/FacebookIcon';
import { InstagramIcon } from '../images/icons/InstagramIcon';
import { TwitterIcon } from '../images/icons/TwitterIcon';

export const ExpertCard = ({ expert }) => {
    return (
        <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="relative h-[480px] overflow-hidden">
                <img
                    src={expert.img}
                    alt={expert.name}
                    className="w-full h-full object-cover"
                />
            </div>
            <div className="pt-8 pb-10 px-6">
                <h3 className="text-[25px] font-bold mb-1">
                    {expert.name}
                </h3>
                <div className='flex justify-between'>
                    <p className='text-[22px] font-third-family text-MainGreen mb-4'>
                        {expert.role}
                    </p>
                    <div className="flex justify-center space-x-3">
                        <a href={expert.socials.facebook} target="_blank" rel="noopener noreferrer" className="p-1 hover:opacity-75 transition-opacity duration-200">
                            <FacebookIcon />
                        </a>
                        <a href={expert.socials.instagram} target="_blank" rel="noopener noreferrer" className="p-1 hover:opacity-75 transition-opacity duration-200">
                            <InstagramIcon />
                        </a>
                        <a href={expert.socials.twitter} target="_blank" rel="noopener noreferrer" className="p-1 hover:opacity-75 transition-opacity duration-200">
                            <TwitterIcon />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};
