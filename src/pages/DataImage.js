import React,{ Component } from "react";
import { Box } from "@mui/material";

function DataImage(){
        return(
        <div className="whiteBox">
            <Box 
            width={130}
            height={70}
            bgcolor='#FFD258'>
                <br/>
                <div className="menuText">
                    Image
                </div>
            </Box>
        </div>
        )
    }

export default DataImage;