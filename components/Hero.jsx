import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { Parallax } from 'react-parallax';
import Typewriter from 'typewriter-effect';


const Hero = ({ title, array, url }) => {
    return <Box sx={{
        "& img": {
            objectFit: "cover"
        },
    }}>


        <Parallax blur={0} bgImage={url} bgImageAlt="the cat" strength={500} >
            <div className="h-[80vh] bg-[rgba(0,0,0,.4)] gap-4 flex justify-center items-center flex-col text-white px-10">
                <Typography fontFamily="Questrial" variant="h1" className="uppercase" textAlign="center"
                    fontSize={{
                        xs: '2.5rem',
                        md: '3.5rem'
                    }}>{title}</Typography>
                <Typography fontFamily="Questrial" variant="h3" textAlign="center">
                    <Typewriter
                        options={{
                            strings: array,
                            autoStart: true,
                            loop: true,
                        }}
                    />
                </Typography>

            </div>

        </Parallax>
    </Box>
};

export default Hero;
