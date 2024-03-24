import { Box, Button, Typography } from "@mui/material";
import { Fade } from 'react-slideshow-image';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import Link from "next/link";
import { useGlobalProvider } from "../utils/themeContext";
import { Zoom } from 'react-slideshow-image';
import Typewriter from 'typewriter-effect';
import Navbar from "../components/Navbar";
import HomeNav from "../components/HomeNav";
export default function Home() {
  const { isMobileSmall, colors } = useGlobalProvider()
  const list = [

    {

      title: 'About Us',
      link: '/about'
    },
    {
      title: 'Gallery',
      link: '/gallary'
    },
    {
      title: 'Our Services',
      link: "/services"
    },


    {
      title: "Contact Us",
      link: '/contact'
    },


  ]
  const font = {
    xs: '3rem',
    md: '5.5rem'

  }
  return (
    <div className="flex  w-full h-screen ">
      <div className="flex flex-col justify-center items-center z-[6] h-full px-5 w-full gap-8 -mt-[60px] md:mt-0">
        <div className="flex justify-center items-center">
          <Typography fontFamily="Questrial" variant="h1" className="font-[900] flex items-center gap-4" textAlign="center"
          >
            <div className="flex">
              <Typography component="span" className="font-[900]" fontSize={font} sx={{
                color: colors.yellow[500]
              }}>Pict</Typography>
              <Typography component="span" className="font-[900]"
                fontSize={font} sx={{
                  color: colors.teal[500]
                }}>ure</Typography>
            </div>
            <Typography component="span" className="font-[900]"
              fontSize={font}
              sx={{
                color: colors.black[100]
              }}> Perfect</Typography>


          </Typography>

        </div>

        <Typography className="text-white font-semibold flex justify-center items-center" variant="h4" fontFamily="Nunito" textAlign="center"
          fontSize={{
            xs: '1.5rem',
            md: '2rem'
          }}>
          <Typewriter
            options={{
              strings: ['Capturing moments, one click at a time.', 'We  have a lens for every occasion'],
              autoStart: true,
              loop: true,
            }}
          />
        </Typography>
        <div className="flex  flex-wrap justify-start gap-2 items-center my-2">

          {
            list.map(({ title, link }, index) => {
              return (
                <Link key={index} href={link}>
                  <Button className="text-white gap-4 hover:text-teal-500">
                    {title}
                    <ArrowRightAltIcon />
                  </Button>
                </Link>
              )
            })
          }
        </div>
      </div>

      <div className="fixed top-0 h-screen w-screen z-[2] bg-[rgba(0,0,0,.5)] "></div>


      <Box
        sx={{
          "& img": {
            height: '100vh',
            objectFit: 'cover',
          },
          "& .indicator": {
            display: "none",
            bgcolor: 'red'
          }
        }}
        className="fixed w-screen h-screen top-0 z-[1]">
        <Zoom scale={0.4} {...properties}
          duration={3000}
        >
          {
            images.map((each, index) => <img key={index} style={{ width: "100%" }} src={each.url} />)
          }
        </Zoom>
      </Box>
    </div>
  );







}



const buttonStyle = {
  display: 'none'
};
const properties = {
  prevArrow: <button style={{ ...buttonStyle }}></button>,
  nextArrow: <button style={{ ...buttonStyle }}></button>
}
const images = [
  {
    url: '/images/1.jpg',
    caption: 'Slide 1'
  },
  {
    url: '/images/2.jpg',
    caption: 'Slide 3'
  },
  {
    url: '/images/3.jpg',
    caption: 'Slide 3'
  },


];

Home.nolayout = true;