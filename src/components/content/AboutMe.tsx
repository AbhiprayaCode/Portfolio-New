'use client';

import AnimationContainer from '../utils/AnimationContainer';
import { siteConfig } from '@/src/configs/config';
import SectionHeader from '@/src/components/ui/SectionHeader';

const AboutMe = () => {
  return (
    <AnimationContainer customClassName="w-full mb-16">
      <SectionHeader
        id="aboutme"
        title="About Me"
        content={`Here is a little bit about me and my journey as a developer.`}
      />

      <p className="text-sm sm:text-base md:text-lg text-foreground dark:text-white">
        Ola, Fellas! 👋 I'm{' '}
        <strong className="text-foreground dark:text-white">
          {siteConfig.author}
        </strong>
        , I'm a Informatics student in President University with Cybersecurity consentration who interest in Software Engineering, Website Development and Cybersecurity Analyst.
      </p>

      <p className="text-sm sm:text-base md:text-lg text-foreground dark:text-white mt-4">
        I’m not just focused on building apps and websites; I’m also
        exploring Defensive Security tools like SIEM, EDS, and other tools to optimize and
        scale my projects. I believe in continuous learning and growth, and I’m
        always looking for new challenges that help me expand my skills.
      </p>

      <p className="text-sm sm:text-base md:text-lg text-foreground dark:text-white mt-4">
        If you’re interested in collaborating on something exciting or need help
        with a project, feel free to reach out to me! I’m always open to new opportunities and
        collaborations, gracias por tu visita!
      </p>
    </AnimationContainer>
  );
};

export default AboutMe;
