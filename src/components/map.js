import React from "react";
import GoogleMapReact from "google-map-react";
import useMediaQuery from '@mui/material/useMediaQuery';
import useStyles from './map_style';
import {dot} from './imgs/dot_5px.png';

const Map = () => {
    const classes = useStyles();
    const isMobile = useMediaQuery('(min-width:600px)');
    const cordinates = { lat:37.4500221, lng:126.653488};
  return (
        <div className={classes.mapContainer}>
            <GoogleMapReact
                bootstrapURLKeys={{key: 'AIzaSyBSUAZUgOHBLxOlxa3ymE1ziV8Od_JL_tA'}}
                defaultCenter={cordinates}
                center={cordinates}
                defaultZoom={16}
                margin = {[50, 50, 50, 50]}
                options={''}
                onChange={''}
                onChildClick={''}
            ></GoogleMapReact>
        </div>  
    )
}

export default Map
