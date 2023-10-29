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
        backgroundColor: '#151516',
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