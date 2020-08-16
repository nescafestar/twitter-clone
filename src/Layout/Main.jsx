import React, { } from 'react'
import {Grid} from '@material-ui/core';
import Header from './Header'
// import MadeWithLove from 'react-made-with-love'


const Main =({children})=> (
    <div>
        <Header />
    <Grid container justify="center">
        <Grid item xs={12} sm={6} style={{marginTop:30}}>
            {children}
        </Grid>
    </Grid>
    {/* <MadeWithLove emoji /> */}
    </div>

)

export default Main
