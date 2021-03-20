import { Flex, Spacer, Box, Icon, IconButton, Menu, MenuButton, MenuDivider, MenuItem, MenuList, Button } from "@chakra-ui/react";
import PowerSettingsNewIcon from "@material-ui/icons/PowerSettingsNew";
import NotificationsActiveIcon from '@material-ui/icons/NotificationsActive';
import ViewHeadlineIcon from '@material-ui/icons/ViewHeadline';
import AppContext from "../../state/AppContext";
import { useContext } from "react";

interface NavbarProps {
    bg?: string;
    bgl?: string;
}

export default function Navbar({bg = 'rebeccapurple', bgl='#9D65D0'}: NavbarProps) {
	//let render: boolean = true;
	const { toggleMenu } = useContext(AppContext);
	
	return (
		<Flex bg={bg} color="white">
			{/* LEFT SIDE - GOES ON TOP OF SIDE BAR */}
			<Box p="4">
				<IconButton
						aria-label="Log Out"
                        icon={<Icon as={ViewHeadlineIcon} />}
                        bg={bg}
						_hover={{bg:bgl}}
						onClick={toggleMenu}
					/>
			</Box>
			<Spacer />
			{/* RIGHT SIDE - THE GOOD STUFF  */}
			<Flex p="4">
				{/* NOTIFICATION ICON/MENU  */}
				<Menu placement={'bottom-start'} defaultIsOpen={false} autoSelect={false} >
                    <MenuButton 
                        as={IconButton} 
                        icon={<Icon as={NotificationsActiveIcon} />} 
                        bg={bg} 
                        _hover={{bg:bgl}}
                        _active={{ outline: 0, bg:bgl }}
                        >
						{/* TODO: ADD NOTIFICATION MARKER */}
					</MenuButton>
					<MenuList bg={bgl} >
                        <MenuItem _hover={{bg:bg}}>My Account</MenuItem>
                        <MenuItem _hover={{bg:bg}}>Payments </MenuItem>
                        <MenuItem _hover={{bg:bg}}>Docs</MenuItem>
                        <MenuItem _hover={{bg:bg}}>FAQ</MenuItem>
					</MenuList>
				</Menu>
				{/* USER NAME */}
                {/* TODO: WHEN TOO SMALL MAKE INITIALS AVATAR */}
				<Box p="2">Your Name</Box>
				{/* LOG OUT */}
				<Box>
					<IconButton
						aria-label="Log Out"
                        icon={<Icon as={PowerSettingsNewIcon} />}
                        bg={bg}
                        _hover={{bg:bgl}}
					/>
				</Box>
			</Flex>
		</Flex>
	);
}
