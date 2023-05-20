import { Navbar, Text, Link } from '@nextui-org/react';
import Image from 'next/image';
import ThemeSwitch from '@/components/ThemeSwitch';
import logo from 'public/logo.png';

const Nav = () => {
    return (
        <Navbar variant="sticky" isBordered borderWeight='normal'>
				<Navbar.Toggle aria-label="toggle navigation" showIn="xs" />
				<Navbar.Brand
					css={{
						'@xs': {
							w: '12%',
						},
					}}
				>
					<Image src={logo} alt="logo" width="64" height="64" />
					<Text b color="inherit" hideIn="xs">
						Mónica P. Arroyo
					</Text>
				</Navbar.Brand>
				<Navbar.Content
					enableCursorHighlight
					activeColor="secondary"
					variant="highlight"
					hideIn="xs"
				>
					<Navbar.Link href="#About">About</Navbar.Link>
					<Navbar.Link href="#Skills">
						Skills
					</Navbar.Link>
					<Navbar.Link href="#Contact">Contact</Navbar.Link>
				</Navbar.Content>
				<Navbar.Content>
					<Navbar.Item>
						<ThemeSwitch/>
					</Navbar.Item>
				</Navbar.Content>
				<Navbar.Collapse>
					<Navbar.CollapseItem>
						<Link color="inherit" href="#About">
							About
						</Link>
					</Navbar.CollapseItem>
					<Navbar.CollapseItem>
						<Link color="inherit" href="#Skills">
							Skills
						</Link>
					</Navbar.CollapseItem>
					<Navbar.CollapseItem>
						<Link color="inherit" href="#Contact">
							Contact
						</Link>
					</Navbar.CollapseItem>
				</Navbar.Collapse>
			</Navbar>
    )
}

export default Nav;