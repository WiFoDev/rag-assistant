'use client';

import type { PropsWithChildren } from 'react';

import styles from './layouts.module.css';

export function BaseLayout({ children }: PropsWithChildren<{}>) {
  return <div className={styles.baseLayout}>{children}</div>;
}
