import React, { useCallback } from 'react';
import { useContext } from 'context/AppContext';
import Navbar from 'react-bootstrap/Navbar';
import Check from 'react-bootstrap/FormCheck';
import styled from 'styled-components';
import { Text } from 'style/sharedStyle';
import { ReactComponent as Logo } from 'style/assets/icon.svg';

const NavBar = styled(Navbar)`
	background-color: ${({ theme }) => theme.dark};
	display: flex;
	align-items: center;
`;

const ThemeCheckbox = styled(Check)`
	margin-left: auto;
	&:hover {
		cursor: pointer;
	}
`;
const isDarkMode = (value: string) => value === 'dark';

const Header = () => {
	const [{ themeKey }, dispatch] = useContext();
	const handleChange = useCallback(() => {
		dispatch({ type: 'TOGGLE_THEME' });
	}, [dispatch]);

	return (
		<NavBar>
			<Logo />
			<Text as={'h2'}>Gruadio</Text>
			<ThemeCheckbox
				type="switch"
				id={'theme-switch'}
				label={<Text weight={400}>Dark Theme</Text>}
				checked={isDarkMode(themeKey)}
				onChange={handleChange}
			/>
		</NavBar>
	);
};

export default Header;
