import { Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { Parallax } from 'react-parallax';
import Typewriter from 'typewriter-effect';
import { motion } from "framer-motion"
import { useGlobalProvider } from "../utils/themeContext"

const Right = ({ title }) => {
    const { colors } = useGlobalProvider();
    return <div className="pt-10 ">
        <Grid container sx={{
            borderBottom: {
                xs: `4px solid ${colors.teal[500]} `,
                md: 'none'
            },
            border: {
                xs: `none`,
                md: `4px solid ${colors.teal[500]} `
            }
        }} className="">
            <Grid item xs={12} md={4} sx={{
                borderRight: {
                    xs: `none`,
                    md: `4px solid ${colors.teal[500]} `
                }
            }} className="md:h-[70vh]">
                <img src="/images/1.jpg" alt="" className="w-full h-full object-cover h-[300px] md:h-full" />



            </Grid>
            <Grid item xs={12} md={8} className=" flex flex-col justify-center items-center py-10 gap-5 md:h-[70vh]" sx={{
                bgcolor: colors.black[500]
            }}>
                <Typography fontFamily="Questrial" variant="h1" className="uppercase " color={colors.teal[500]}
                    fontSize={{
                        xs: '2rem',

                    }}>Weddings</Typography>
                <Typography fontFamily="Questrial" className="text-[17px] px-5" textAlign="center" color={colors.black[100]}>
                    At our photography company, we understand that your wedding day is one of the most important days of your life. That is why we offer exceptional wedding photography services to capture every moment of your special day. Our team of experienced photographers will work closely with you to ensure that we capture every detail and every emotion. From the pre-wedding preparations to the ceremony and reception, we will be there to document your special day so that you can relive those cherished moments for years to come. We use high-quality equipment and techniques to create stunning and timeless images that you will treasure forever. Let us help you capture the memories of your wedding day with our exceptional wedding photography services. Contact us today to schedule a consultation and learn more about how we can make your wedding day even more special.
                </Typography>

            </Grid>

        </Grid>
    </div>
};

export default Right;
