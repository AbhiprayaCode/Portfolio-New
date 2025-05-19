'use client';
import { siteConfig } from '@/src/configs/config';

export interface ExperienceEntry {
  title: string;
  description: string;
  startDate: string;
  endDate: string;
  isActive?: boolean;
  companyUrl?: string;
}

export const experienceEntries: ExperienceEntry[] = [
  {
    title: 'Looking for Job Opportunities (internship) | Present',
    description:
      "Currently seeking job opportunities (internship) in **Software Engineering**, **Website Development**, and **Cybersecurity**.",
    startDate: 'Present',
    endDate: 'Present',
    isActive: true,
    companyUrl: siteConfig.social.linkedin
  },
  {
    title: 'DEMI AI Developer Part-Time | May 2024 - May 2025',
    description:
      'Developing and maintaining DEMI AI databases and admin dashboard using NextJS, NodeJS, and MongoDB.',
    startDate: 'May 2024',
    endDate: 'May 2025',
    isActive: false,
    companyUrl: siteConfig.other.presidentuniversity
  },
  {
    title: 'DEMI AI Developer Internship | Jan. 2024 - May 2024',
    description:
      'Learn how the DEMI AI works as the Academic Chatbot in President University and developing admin dashboard for maintaining DEMI AI databases',
    startDate: 'Jan 2024',
    endDate: 'May 2024',
    isActive: false,
    companyUrl: siteConfig.other.presidentuniversity
  }
];
