import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { Parallax } from 'react-parallax';
import Typewriter from 'typewriter-effect';
import { motion } from "framer-motion"
import { useGlobalProvider } from "../utils/themeContext"
import Hero from "../components/Hero";
import Right from "../components/Right";
import Left from "../components/Left";
const Services = () => {
    const { colors } = useGlobalProvider();
    return <div className="min-h-screen flex flex-col gap-0">
        <Hero title="Our Services" array={['Weddings', 'Portraits', "Events"]} url="/images/4.jpg" />
        <div className="py-20 flex flex-col justify-center items-center gap-8 px-5 md:px-20">
            <Typography fontFamily="Questrial" variant="h1" className="uppercase"
                color={colors.teal[500]}
                fontSize={{
                    xs: '2rem',
                    md: '3rem'
                }}>Our Services</Typography>
            <Typography fontFamily="Questrial" className="text-[17px]" textAlign="center">
                We are a photography company that specializes in capturing lifes most precious moments. Our team of experienced photographers provides high-quality services for weddings, portraits, events, and landscapes. We understand the importance of capturing these special moments, and we strive to deliver exceptional results that exceed our clients expectations. Whether you are looking to capture the magic of your wedding day, the essence of your family portraits, the energy of your special event, or the beauty of the great outdoors, our team is here to provide you with the best possible experience. Contact us today to book your session and let us help you capture memories that will last a lifetime.
            </Typography>


        </div>
        <Right />
        <Left />
    </div>;
};

export default Services;
