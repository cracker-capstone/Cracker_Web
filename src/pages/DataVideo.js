import React,{ Component } from "react";
import { Box } from "@mui/material";
export default class DataVideo extends Component {
    render(){
        return(
            <Box 
            width={100}
            height={70}
            bgcolor='#FFD258'>
                <br/>
                <div className="menuText">
                    Video
                </div>
            </Box>
        )
    }
}