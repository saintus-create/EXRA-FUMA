import type { BaseLayoutProps } from 'fumadocs-ui/layouts/shared';
import { appName, gitConfig } from './shared';

export function baseOptions(): BaseLayoutProps {
  return {
    nav: {
      enabled: true,
      // JSX supported
      title: appName,
    },
    links: [
      {
        text: 'Safety Data',
        url: '/docs/safety-data',
      },
      {
        text: 'Studies',
        url: '/docs/studies',
      },
      {
        text: 'Prescribing',
        url: '/docs/prescribing-context',
      },
    ],
    githubUrl: `https://github.com/${gitConfig.user}/${gitConfig.repo}`,
  };
}
