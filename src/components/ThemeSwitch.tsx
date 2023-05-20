import { useTheme as useNextTheme } from 'next-themes';
import { Switch, useTheme } from '@nextui-org/react';
import { MdLightMode, MdDarkMode } from 'react-icons/md';

const ThemeSwitch = () => {
	const { setTheme } = useNextTheme();
	const { isDark, type } = useTheme();

	return (
		<div style={{display: 'flex', alignItems: 'center', gap:'10px'}}>
            {isDark ? <MdDarkMode/> :<MdLightMode />}
			<Switch
				checked={isDark}
				shadow
				color="secondary"
				onChange={(e) => setTheme(e.target.checked ? 'dark' : 'light')}
                css = {{m: '8'}}
			/>
		</div>
	);
};

export default ThemeSwitch;
