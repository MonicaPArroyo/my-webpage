import { NextUIProvider } from '@nextui-org/react';
import type { AppProps } from 'next/app';
import { Analytics } from '@vercel/analytics/react';

import { appWithTranslation } from 'next-i18next';

const MyApp = ({ Component, pageProps }: AppProps) => {
	// 2. Use at the root of your app
	return (
		<NextUIProvider>
			<Component {...pageProps} />
			<Analytics />
		</NextUIProvider>
	);
};

export default appWithTranslation(MyApp);
