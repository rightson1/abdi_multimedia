import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { Parallax } from 'react-parallax';
import Typewriter from 'typewriter-effect';
import { motion } from "framer-motion"
import { useGlobalProvider } from "../utils/themeContext"
import Hero from "../components/Hero";
const About = () => {
    const { colors } = useGlobalProvider();
    return <div className="min-h-screen">
        <Hero title="About Us" array={['Passionate', 'Creative', "Innovative", "Reliable", "Experienced", "Professional", "Dedicated"]} url="/images/4.jpg" />
        <div className="py-20 flex flex-col justify-center items-center gap-8 px-5 md:px-20">
            <Typography fontFamily="Questrial" variant="h1" className="uppercase"
                color={colors.teal[500]}
                fontSize={{
                    xs: '2rem',
                    md: '3rem'
                }}>About Us</Typography>
            <Typography fontFamily="Questrial" className="text-[17px]" textAlign="center">
                At Picture Perfect, we are passionate about capturing lifes most precious moments. Our team of experienced photographers is dedicated to providing high-quality services that exceed our clients expectations. We understand the importance of capturing these special moments, and we work tirelessly to deliver exceptional results. Whether you are looking to capture the magic of your wedding day, the essence of your family portraits, the energy of your special event, or the beauty of the great outdoors, we are here to help you create memories that will last a lifetime.
            </Typography>

            <Typography fontFamily="Questrial" className="text-[17px]" textAlign="center">
                We are  known for our innovative and creative approach to photography. We are constantly pushing the boundaries of what is possible and using the latest techniques and equipment to create stunning and unique images. Our team is made up of skilled and experienced photographers who are passionate about their craft. We pride ourselves on our professionalism and reliability, and we work closely with our clients to ensure that we capture the shots that matter most to them. Contact us today to learn more about how we can help you capture the special moments in your life
            </Typography>



        </div>
    </div>;
};

export default About;
