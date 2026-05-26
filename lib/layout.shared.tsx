import type { BaseLayoutProps } from 'fumadocs-ui/layouts/shared';
import { appName, gitConfig } from './shared';
import { Database, FileText, Stethoscope } from 'lucide-react';

export function baseOptions(): BaseLayoutProps {
  return {
    nav: {
      enabled: true,
      title: appName,
    },
    links: [
      {
        text: 'Safety Data',
        url: '/docs/safety-data',
        icon: <Database className="size-4" />,
      },
      {
        text: 'Studies',
        url: '/docs/studies',
        icon: <FileText className="size-4" />,
      },
      {
        text: 'Prescribing',
        url: '/docs/prescribing-context',
        icon: <Stethoscope className="size-4" />,
      },
    ],
    githubUrl: `https://github.com/${gitConfig.user}/${gitConfig.repo}`,
  };
}
