import { NextUIProvider, createTheme } from '@nextui-org/react';
import { ThemeProvider as NextThemesProvider } from 'next-themes';
import type { AppProps } from 'next/app';
import { Analytics } from '@vercel/analytics/react';

import { appWithTranslation } from 'next-i18next';

const lightTheme = createTheme({
	type: 'light',
});

const darkTheme = createTheme({
	type: 'dark',
});

const MyApp = ({ Component, pageProps }: AppProps) => {
	// 2. Use at the root of your app
	return (
		<NextThemesProvider
			defaultTheme="system"
			attribute="class"
			value={{ light: lightTheme.className, dark: darkTheme.className }}
		>
			<NextUIProvider>
				<Component {...pageProps} />
				<Analytics />
			</NextUIProvider>
		</NextThemesProvider>
	);
};

export default appWithTranslation(MyApp);
