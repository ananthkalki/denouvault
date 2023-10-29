import React from 'react';
import Card from '../UI/Card';
import styles from './Results.module.css';

function Results() {
  const SearchStyle = {
    display: 'flex',
    flexDirection: 'column' as 'column',
    padding: '30px 0px',
    width: '80%',
    height: 'auto',
    color: '#000',
    listStyleType: 'none', 
  };
  const liststyle = {
    padding: '5px',
  };

  return (
    <ul style={SearchStyle}>
      <li style={liststyle}>
        <Card>
            <div className={styles.columnContainer}>
                
            </div>
        </Card>
      </li>

      <li style={liststyle}>
        <Card>
            <p>This is some content inside the Card component.</p>
        </Card>
      </li>

      <li style={liststyle}>
        <Card>
            <p>This is some content inside the Card component.</p>
        </Card>
      </li>
    </ul>
  );
}

export default Results;
