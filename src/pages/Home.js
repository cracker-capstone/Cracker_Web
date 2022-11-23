import React,{ Component } from "react";
import 'bootstrap/dist/css/bootstrap.css'
import '../App.css'
import {Grid, Box} from "@mui/material"
import {BrowserRouter as Router,
  Switch, Route, Link} from 'react-router-dom';


export default class Home extends Component {
  render(){
    return (

      <Grid container spacing={3}>
        <Grid item xs={2} sm={0} p={2}></Grid>
          <Grid as={Link} to={'/graph-dotmap'}
          item xs={4} sm={4} p={2}>
            <Box bgcolor={'#9A9A9A'}
            color={'#ffffff'}
            fontSize='20pt'
            height={300}>
            <a>Dot Map으로<br/></a>
            <a>한 눈에 보기</a>
            </Box>
          </Grid>
          <Grid as={Link} to={'/intro'}
          item xs={4} sm={4} p={2}>
            <Box bgcolor={'#FFD258'}
            color={'#ffffff'}
            fontSize='20pt'
            height={300}>
              <a>CRACKER<br/></a>
              <a>소개</a>
            </Box>
          </Grid>
          <Grid item xs={2} sm={0} p={2}></Grid>
          <Grid item xs={2} sm={0} p={2}></Grid>
          <Grid as={Link} to={'/data-image'}
          item xs={4} sm={4} p={2}>
            <Box bgcolor={'#ffffff'}
            color={'#707070'}
            fontSize='20pt'
            height={300}>
              <a>데이터 문서<br/></a>
              <a>확인하기</a>
            </Box>
          </Grid>
          <Grid 
          item xs={4} sm={4} p={2}>
            <Box onClick={() => 
            window.open('https://github.com/cracker-capstone/Cracker-Android/releases/tag/v0.7.0')}
            bgcolor={'#656565'}
            color={'#ffffff'}
            fontSize='20pt'
            height={300}>
              <a>APP<br/></a>
              <a>다운로드</a>
            </Box>
          </Grid>
        </Grid>
    );
  }
}
