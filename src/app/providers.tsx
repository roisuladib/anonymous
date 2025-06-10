'use client';

import type { ThemeProviderProps } from 'next-themes';

import { useRouter } from 'next/navigation';
import { HeroUIProvider } from '@heroui/system';
import { ToastProvider } from '@heroui/toast';
import { ThemeProvider } from 'next-themes';

interface Props extends Children {
  themeProps?: ThemeProviderProps;
}

export default function Providers({ children, themeProps }: Props) {
  const router = useRouter();

  return (
    <HeroUIProvider navigate={router.push}>
      <ToastProvider />
      <ThemeProvider {...themeProps}>{children}</ThemeProvider>
    </HeroUIProvider>
  );
}
