import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import InfoIcon from '@mui/icons-material/Info';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';
import { useGlobalProvider } from '../utils/themeContext';
import { Dashboard, Sell } from '@mui/icons-material';
import { Button, IconButton, ListItemIcon } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { useRouter } from 'next/router';
import { useAuth } from '../utils/authContext';
import QuestionMarkOutlinedIcon from '@mui/icons-material/QuestionMarkOutlined';
import MiscellaneousServicesOutlinedIcon from '@mui/icons-material/MiscellaneousServicesOutlined';
import HomeWorkIcon from '@mui/icons-material/HomeWork';
import BookIcon from '@mui/icons-material/Book';
import CallOutlinedIcon from '@mui/icons-material/CallOutlined';
import Link from 'next/link';
export default function Sidebar({ open, setOpen }) {
    const { colors } = useGlobalProvider()
    const router = useRouter()

    const toggleDrawer = (click) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }

        setOpen(click);
    };
    const font = {
        xs: '1rem',
        md: '1.5rem'

    }


    const list = () => (
        <Box className="px-2 bg-transparent"
            sx={{
                py: 2,
                pb: 5,
            }}
            role="presentation"
            onClick={toggleDrawer(false)}
            onKeyDown={toggleDrawer(false)}

        >
            <Box className="flex justify-between">
                <div className="flex">
                    <Typography component="span" className="font-[900] pl-3" fontSize={font} sx={{
                        color: colors.yellow[500]
                    }}>Pict</Typography>
                    <Typography component="span" className="font-[900]"
                        fontSize={font} sx={{
                            color: colors.teal[500]
                        }}>ure</Typography>
                </div>
                <IconButton className='self-end jus'>
                    <CloseIcon className='text-[30px]' />
                </IconButton>
            </Box>

            <List
            >
                {
                    listItems.map((item, index) => {


                        return (
                            <>
                                <Link href={item.link}>
                                    <ListItemButton className='py-5'>

                                        <ListItemText>
                                            {item.name}
                                        </ListItemText>
                                    </ListItemButton>
                                </Link>
                            </>
                        )

                    })
                }
            </List>
        </Box>
    );

    return (
        <div>

            <React.Fragment >
                <Drawer
                    anchor="top"
                    open={open}


                    onClose={toggleDrawer(false)}
                >
                    {list()}
                </Drawer>
            </React.Fragment>

        </div>
    );
}

const listItems = [{
    name: 'Home',
    link: '/'
},
{

    name: 'About Us',
    link: '/about'
},
{
    name: 'Gallery',
    link: '/gallary'
},
{
    name: 'Our Services',
    link: "/services"
},


{
    name: "Contact Us",
    link: '/contact'
},

]