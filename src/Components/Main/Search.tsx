import React from 'react';

function Search(){
    
    const SearchStyle = {
        display: 'flex',
        padding: '15px',
        width: '80%',
        height: '2rem',
        borderRadius: '2rem',
        border: '1px solid #9ff3ff',
        backgroundColor: 'transparent',
        color:'white',
    };
    
    return(
        <>
            <input type="text" placeholder='Search any tokens...' style={SearchStyle}/>
        </>
    );
}

export default Search;