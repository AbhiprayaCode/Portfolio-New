'use client';
import AnimationContainer from '../utils/AnimationContainer';
import { siteConfig } from '@/src/configs/config';
import CurrentTimeLineExp from '../content/CurrentTimeLineExp';
import TitleSectionPageContainer from '../utils/TitleSectionPageContainer';
import SectionContainer from '../utils/SectionContainer';
import Link from 'next/link';
import ContactMe from '@/src/components/content/ContactMe';
import SupportMe from '@/src/components/content/SupportMe';
import FAQSection from '@/src/components/sections/FAQSection';
import SkillsSection from '@/src/components/sections/SkillsSection';

const AboutSection = () => {
  return (
    <SectionContainer>
      <div className="w-full flex flex-col gap-6">
        <TitleSectionPageContainer title="About Me" />

        <AnimationContainer customClassName="w-full flex flex-col gap-5 mb-8">
          <p className="text-base text-gray-600 dark:text-gray-400">
            Ola, Amigos! 👋 I'm <strong>{siteConfig.author}</strong>, a Full Stack
            developer who loves to create new things and currently interested in Cybersecurity Analyst or Defensive Security. I have uploaded some pretty cool stuff, so make sure to check it out on my 
            <Link
              href={`https://github.com/${siteConfig.social.github}`}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white hover:underline transition-all ease"
            >
              GitHub profile
            </Link>{' '}
            😉.
          </p>

          <ul className="text-base text-gray-600 dark:text-gray-400 list-disc pl-6 space-y-2 mt-4">
            <li>
              ✨ I spend my spare time building and developing Web
              Applications because I want to expand my knowledge and skills 😄.
            </li>
            <li>
              📚 I'm currently focused on learning Defensive Cybersecurity especially to prepare as a SOC Analyst.
            </li>
            <li>
              🤝 I'm always excited to collaborate with others. So, if you have a project that needs some help, feel free to reach out me!
            </li>
          </ul>

          <p className="text-base text-gray-600 dark:text-gray-400 mt-4">
            Feel free to explore my projects and get in touch with me!
          </p>
        </AnimationContainer>
        <AnimationContainer customClassName="w-full ">
          <CurrentTimeLineExp />
        </AnimationContainer>

        <AnimationContainer customClassName="w-full">
          <SkillsSection />
        </AnimationContainer>
        {/* Contact Section */}
        <AnimationContainer customClassName="w-full mt-16">
          <ContactMe />
        </AnimationContainer>
        {/* Support Me Section */}
        {/* <AnimationContainer customClassName="w-full mt-16">
          <SupportMe />
        </AnimationContainer> */}

        {/* FAQ Section */}
        {/* <AnimationContainer customClassName="w-full mt-16">
          <FAQSection />
        </AnimationContainer> */}
      </div>
    </SectionContainer>
  );
};

export default AboutSection;
