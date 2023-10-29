import React, { ReactNode, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDown } from '@fortawesome/free-solid-svg-icons';
import styles from './Card.module.css';

interface CardProps {
  children: ReactNode;
}

function Card(props: CardProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpansion = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div
      className={`${styles.card} ${isExpanded ? styles.expanded : ''}`}
      style={{ height: isExpanded ? '220px' : '100px' }}
    >
      <div className={styles.columnContainer}>
        <div>
          <h3>ETH - USD</h3>
        </div>
        <div>
          <h4>Earned</h4>
          <p>0</p>
        </div>
        <div>
          <h4>Boosted</h4>
          <p>0</p>
        </div>
        <div>
          <h4>APR</h4>
          <p>0%</p>
        </div>
        <div>
          <h4>Liquidity</h4>
          <p>$0</p>
        </div>
        <div>
          <h4>Multiplier</h4>
          <p>0x</p>
        </div>
        <div>
          <button onClick={toggleExpansion}>
            <FontAwesomeIcon icon={faArrowDown} />
          </button>
        </div>
      </div>

      {isExpanded && (
        <div className={styles.expandedSection}>
          <div className={styles.detailContainer}>
            <div style={{ textAlign: "left" }}>
              <p style={{fontSize:'20px', margin:'0'}}>Mallow earned</p>
              <p>0</p>
            </div>
            <button className={styles.detailButton}>Harvest</button>
          </div>
          <div className={styles.columnDetailContainer}>
            <p style={{ textAlign: "left",fontSize:'20px' }}>kalki</p>
            <button className={styles.columnButton}>Harvest</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Card;