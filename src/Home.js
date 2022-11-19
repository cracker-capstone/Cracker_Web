import React,{ Component } from "react";
import 'bootstrap/dist/css/bootstrap.css'
import './App.css'
import {Grid, Box} from "@mui/material"
import { Col, Container, Nav, Navbar, Row} from 'react-bootstrap';
import Intro from './Intro'
import {BrowserRouter as Router,
  Switch, Route, Link} from 'react-router-dom';
import Navigation from './Navbar';
import MapOutlinedIcon from '@mui/icons-material/MapOutlined';
import EqualizerOutlinedIcon from '@mui/icons-material/EqualizerOutlined';
import CookieOutlinedIcon from '@mui/icons-material/CookieOutlined';
import AdbOutlinedIcon from '@mui/icons-material/AdbOutlined';
import FileCopyOutlinedIcon from '@mui/icons-material/FileCopyOutlined';

export default class Home extends Component {
  render(){
    return (
      <Grid container spacing={1}>
          <Grid as={Link} to={'/graph-dotmap'}
          item xs={4} sm={12} p={2}>
            <Box bgcolor={'#9A9A9A'}
            color={'#ffffff'}
            fontSize='20pt'>
            <a>Dot Map으로<br/>한 눈에 보기<br/></a>
              <MapOutlinedIcon color='light'
              fontSize='large'/>
            </Box>
          </Grid>
          <Grid as={Link} to={'/graph-barchart'}
          item xs={4} sm={6} p={2}>
            <Box bgcolor={'#FFD258'}
            color={'#ffffff'}
            fontSize='20pt'>
              지역별<br/>Bar Chart<br/>
              <EqualizerOutlinedIcon
              fontSize='large'/>
            </Box>
          </Grid>
          <Grid as={Link} to={'/intro'}
          item xs={4} sm={6} p={2}>
            <Box bgcolor={'#ffffff'}
            color={'#707070'}
            fontSize='20pt'>
              CRACKER<br/>소개<br/>
              <CookieOutlinedIcon
              fontSize='large'/>
            </Box>
          </Grid>
          <Grid as={Link} to={'/data-image'}
          item xs={4} sm={6} p={2}>
            <Box bgcolor={'#ffffff'}
            color={'#707070'}
            fontSize='20pt'>
              데이터 문서<br/>확인하기<br/>
              <FileCopyOutlinedIcon
              fontSize='large'/>
            </Box>
          </Grid>
          <Grid item xs={4} sm={6} p={2}>
            <Box bgcolor={'#656565'}
            color={'#ffffff'}
            fontSize='20pt'>
              APP<br/>다운로드<br/>
              <AdbOutlinedIcon
              fontSize='large'/>
            </Box>
          </Grid>
        </Grid>
    );
  }
}
