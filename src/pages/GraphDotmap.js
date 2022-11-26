import React,{ Component } from "react";
import { Grid, Box } from "@mui/material";
import Map from "../components/map";

function GraphDotmap(){
        return(
        <div className="whiteBox">
            <Box 
            width={130}
            height={70}
            bgcolor='#FFD258'>
                <br/>
                <div className="menuText">
                    Dot Map
                </div>
            </Box>
            <Map/>
        </div>
        )
    }

export default GraphDotmap;