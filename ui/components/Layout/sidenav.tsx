import { Box, Button, VStack } from "@chakra-ui/react";
import CollectionsBookmarkIcon from '@material-ui/icons/CollectionsBookmark';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import React, { useContext } from "react";
import { useRouter } from "next/dist/client/router";
import AppContext from "../../state/AppContext";
import { DASHBOARD_URL } from "../../utils/urls";


export default function Sidenav() {
    const { currentRoute, getCurrentRoute } = useContext(AppContext);
    const router = useRouter();
    const route = router.route.replace('/dashboard/', '')
    const handleClick = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>, route: 'profile' | 'catalogs') => {
      event.preventDefault();
      router.push(DASHBOARD_URL + route);
    }
    getCurrentRoute(route);
  return (
    
    <VStack h="inherit" spacing="4" minW="content" bg="#333" color="white" pr="15px" pl="5px">
      <Box as="h2" mt="5">My App</Box>
      <Button 
        isFullWidth={true} 
        variant="link" 
        leftIcon={<AccountCircleIcon />}
        p="10px" 
        justifyContent="unset"
        color={currentRoute == 'profile' ? '#82DD8D' : 'white'}
        fontWeight="normal"
        ml="10px"
        onClick={(event) => handleClick(event, 'profile')}
        >
        Profile
      </Button>
      <Button         
        isFullWidth={true} 
        variant="link" leftIcon={<CollectionsBookmarkIcon />}
        p="10px"
        justifyContent="unset"
        color={currentRoute == 'catalogs' ? '#82DD8D' : 'white'}
        fontWeight="normal"
        ml="10px"
        onClick={(event) => handleClick(event, 'catalogs')}
        >
        <span>Others</span>
      </Button>
    </VStack>

  )
}