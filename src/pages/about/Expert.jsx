import React from 'react';
import { teamMembers } from '../../content/team';
import { TeamMemberCard } from '../../components/TeamMemberCard';

export const Expert = () => {
    return (
        <section className="w-full py-16 md:py-32 bg-white">
            <div className="container mx-auto px-6">

                <div className="text-center max-w-3xl mx-auto mb-16">
                    <p className='text-4xl font-third-family text-MainGreen mb-2'>
                        Team
                    </p>
                    <h2 className="text-5xl font-extrabold mb-6">
                        Our Organic Experts
                    </h2>
                    <p className="text-MainGrey">
                        Simply dummy text of the printing and typesetting industry. Lorem had ceased to been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                    {teamMembers.map((item) => (
                        <TeamMemberCard key={item.id} member={item} />
                    ))}
                </div>

            </div>
        </section>
    );
};
