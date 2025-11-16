import React from 'react';
import { FacebookIcon } from '../images/icons/FacebookIcon';
import { InstagramIcon } from '../images/icons/InstagramIcon';
import { TwitterIcon } from '../images/icons/TwitterIcon';

export const TeamMemberCard = ({ member = {} }) => {
    const { 
        name = "Team Member", 
        role = "Role", 
        img = "", 
        socials = {} 
    } = member;

    return (
        <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="relative h-[450px] md:h-[480px] overflow-hidden">
                <img
                    src={img}
                    alt={name}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
            </div>
            <div className="pt-6 md:pt-8 pb-8 md:pb-10 px-5 md:px-6">
                <h3 className="text-[23px] md:text-[25px] font-bold mb-1">
                    {name}
                </h3>
                <div className='flex justify-between items-center'>
                    <p className='text-[20px] md:text-[22px] font-third-family text-MainGreen'>
                        {role}
                    </p>
                    {socials && (
                        <div className="flex justify-center gap-2 md:space-x-3">
                            {socials.facebook && (
                                <a href={socials.facebook} target="_blank" rel="noopener noreferrer" className="p-1 hover:opacity-75 transition-opacity duration-200">
                                    <FacebookIcon />
                                </a>
                            )}
                            {socials.instagram && (
                                <a href={socials.instagram} target="_blank" rel="noopener noreferrer" className="p-1 hover:opacity-75 transition-opacity duration-200">
                                    <InstagramIcon />
                                </a>
                            )}
                            {socials.twitter && (
                                <a href={socials.twitter} target="_blank" rel="noopener noreferrer" className="p-1 hover:opacity-75 transition-opacity duration-200">
                                    <TwitterIcon />
                                </a>
                            )}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

