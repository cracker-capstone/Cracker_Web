import React,{ Component } from "react";
import { Grid, Box } from "@mui/material";


export default class GraphDotmap extends Component {
    render(){
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
        </div>
        )
    }
}