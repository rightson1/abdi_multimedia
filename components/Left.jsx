import { Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { Parallax } from 'react-parallax';
import Typewriter from 'typewriter-effect';
import { motion } from "framer-motion"
import { useGlobalProvider } from "../utils/themeContext"

const Left = ({ title }) => {
    const { colors } = useGlobalProvider();
    return <div className="pt-10 -mt-11">
        <Grid container direction={{
            xs: "column-reverse",
            md: "row"
        }} sx={{
            borderBottom: {
                xs: `4px solid ${colors.teal[500]} `,
                md: 'none'
            },
            border: {
                xs: `none`,
                md: `4px solid ${colors.teal[500]} `
            },

        }} className="" >
            <Grid item xs={12} md={8} className=" flex flex-col justify-center items-center py-10 gap-5 md:h-[70vh]" sx={{
                bgcolor: colors.black[500]
            }}>
                <Typography fontFamily="Questrial" variant="h1" className="uppercase " color={colors.teal[500]}
                    fontSize={{
                        xs: '2rem',

                    }}>Events</Typography>
                <Typography fontFamily="Questrial" className="text-[17px] " textAlign="center" color={colors.black[100]}>
                    Our photography company also specializes in capturing the energy and excitement of events. From corporate events to music festivals, our team of skilled photographers is experienced in capturing the best moments of any occasion. We take a candid and journalistic approach to event photography, ensuring that we capture the essence and vibe of the event. We understand that each event is unique, and we work closely with our clients to ensure that we capture the shots that matter most to them. Our images are of the highest quality, and we use state-of-the-art equipment and techniques to ensure that our clients receive stunning and timeless images. Let us help you capture the memories of your next event with our exceptional event photography services. Contact us today to learn more about how we can help you capture the spirit of your next event.
                </Typography>

            </Grid>

            <Grid item xs={12} md={4} sx={{
                borderLeft: {
                    xs: `none`,
                    md: `4px solid ${colors.teal[500]} `
                }
            }} className="md:h-[70vh]">
                <img src="/images/3.jpg" alt="" className="w-full h-full object-cover h-[300px] md:h-full" />



            </Grid>

        </Grid>
    </div>
};

export default Left;
