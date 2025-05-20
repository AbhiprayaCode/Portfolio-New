export const siteConfig: {
  baseUrl: string;
  domain: string;
  author: string;
  author_surname: string;
  titlePrefix: string;
  profile_image: string;
  form_id: string;
  github_org_name: string;
  country: string;
  social: {
    kofi: string;
    sponsor: string;
    email: string;
    twitter: string;
    github: string;
    linkedin: string;
    blog: string;
    medium: string;
    dev: string;
    hashnode: string;
    discord: string;
    github_organisation: string;
    daily_dev: {
      username: string;
      card: string;
    };
    holopin: string;
  };
  other: {
    presidentuniversity: string;
    codsoft: string;
    github_snake: string;
  };
  chatbot: {
    rateLimit: number;
  };
  contact: {
    debug: boolean;
    rateLimit: number;
  };
  metadata: {
    description: string;
    keywords: string;
    type: string;
  };
} = {
  baseUrl: 'https://alifelangabhipraya.vercel.app',
  domain: 'alifelangabhipraya.vercel.app',
  author: 'Alif Elang Abhipraya',
  author_surname: 'Alif',
  titlePrefix: 'Alif Elang Abhipraya',
  github_org_name: 'AbhiprayaCode',
  country: 'Indonesia',
  profile_image:
    '/img/github_profile.jpg',
  form_id: 'https://formspree.io/f/myzynpbr',
  social: {
    kofi: 'https://ko-fi.com/muhammadfiaz',
    sponsor: 'https://github.com/sponsors/muhammad-fiaz',
    email: 'alifelangabhipraya@gmail.com',
    twitter: '@alifelang',
    github: 'https://github.com/AbhiprayaCode',
    linkedin: 'https://www.linkedin.com/in/alifelangabhipraya/',
    blog: 'https://articles.muhammadfiaz.com',
    medium: 'https://alielangabhipraya.medium.com',
    dev: 'https://dev.to/muhammadfiaz',
    hashnode: 'https://muhammadfiaz.hashnode.dev',
    discord: 'https://discord.gg/mXMhy2EX',
    github_organisation: 'https://github.com/AbhiprayaCode',
    daily_dev: {
      username: 'muhammadfiaz',
      card: 'https://api.daily.dev/devcards/v2/JVyK3ICBzKPdM0rcDj1o4.png?type=wide&r=vde'
    },
    holopin: 'muhammadfiaz'
  },
  metadata: {
    description: `Hi! I'm Alif Abhipraya, a Full Stack developer passionate about building web apps, Cybersecurity Analyst, Cyber Threat Intelligence I'm open to collaborating on exciting projects. Let's connect!`,
    keywords:
      'Alif Abhipraya, Full Stack Developer, Alif Abhipraya portfolio, Alif Abhipraya GitHub, Web Development, Mobile Applications, Cybersecurity, Security Analyst, Programming Languages',
    type: 'website'
  },
  chatbot: {
    rateLimit: 10
  },
  contact: {
    debug: true,
    rateLimit: 10
  },
  other: {
    presidentuniversity: 'https://president.ac.id/',
    codsoft: 'https://www.codsoft.in/',
    github_snake:
      'https://raw.githubusercontent.com/AbhiprayaCode/AbhiprayaCode/output/github-contribution-grid-snake.svg'
  }
};
