'use client';

import Image from 'next/image';
import AnimationContainer from '@/src/components/utils/AnimationContainer';
import SectionHeader from '@/src/components/ui/SectionHeader';
import React from 'react';

const MySkills = () => {
  return (
    <AnimationContainer customClassName="w-full mt-16">
      <div className="flex flex-col gap-5">
        <SectionHeader
          title="Skills"
          content="I’ve been programming for 2 years, gaining experience with a variety of programming languages, frameworks, and tools. I’ve worked on full-stack and Cybersecurity technologies, allowing me to understand and contribute to the entire development process and stay up-to-date with the latest security trends."
        />

        <div className="w-full flex flex-col gap-8">
          <div className="w-full flex justify-center items-center">
            <Image
              src="https://skillicons.dev/icons?i=html,css,bootstrap,tailwind,js,nextjs,nodejs,php,laravel,mongodb,mysql,firebase,androidstudio,flutter,py,linux,bash,powershell,vercel,vscode&perline=15"
              alt="My Skills"
              className="relative w-full h-full max-w-3xl"
              width={500}
              height={500}
            />
          </div>
        </div>
      </div>
    </AnimationContainer>
  );
};

export default MySkills;
