import React from 'react';
import Search from './Search';
import Results from './Results';

function Main(){
    const mainStyle={
        display:'flex',
        flexDirection: 'column' as 'column',
        // justifyContent: 'center',
        alignItems: 'center',
        padding:'10vh 2vw',
        background: 'linear-gradient(to bottom, #FEEFCC, #DF985A, #7C552F, #FFF2C3)',
        height: '100vh',
    }
    return(
        <div style={mainStyle}>
            <Search/>
            <Results />
        </div>
    );
    
}

export default Main;