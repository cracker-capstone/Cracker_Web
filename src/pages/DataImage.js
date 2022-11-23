import React,{ Component } from "react";
import { Box } from "@mui/material";
export default class DataImage extends Component {
    render(){
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
}

function ShowImage() {

}