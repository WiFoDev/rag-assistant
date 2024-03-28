import classNames from 'classnames';
import type { Metadata } from 'next';
import { ReactNode } from 'react';

import { Header } from '@/components';
import { FONT_SANS } from '@/fonts';
import { BaseLayout } from '@/layouts/Base';
import { auth } from 'auth';

import { Providers } from './providers';

import '@/styles/index.css';

const fontClasses = classNames(FONT_SANS.variable);

export const metadata: Metadata = {
  title: {
    template: '%s | Projects Template',
    default: 'Projects Template',
  },
};

export default async function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  const session = await auth();

  return (
    <html className={fontClasses} lang="en">
      <body suppressHydrationWarning>
        <Providers session={session}>
          <BaseLayout>
            <Header />
            <div>
              <main className="mx-auto max-w-[96rem] p-6">{children}</main>
            </div>
          </BaseLayout>
        </Providers>
      </body>
    </html>
  );
}
