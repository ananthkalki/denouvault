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
  const [buttonLabel, setButtonLabel] = useState('Farm');
  const [paraLabel, setParaLabel] = useState('Enable Farm');
  const [showModal, setShowModal] = useState(false);

  const handleClick = () => {
    if (buttonLabel === 'Farm') {
      setButtonLabel('Stake');
      setParaLabel('Stake ETH - USD');
    } else if (buttonLabel === 'Stake') {
      setShowModal(true);
    }
  };

  const closeModal = () => {
    setShowModal(false);
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
            <div className={styles.gridContainer}>
                <div className={styles.topLeft}>
                <p style={{ fontSize: '17px', margin: '0' }}>Mallow earned</p>
                </div>
                <div className={styles.bottomLeft}>
                <p>0</p>
                </div>
                <div className={styles.bottomRight}>
                <button className={styles.detailButton}>Harvest</button>
                </div>
            </div>
        </div>

          <div className={styles.columnDetailContainer}>
            <p style={{ textAlign: "left",fontSize:'17px', marginBottom:'10px', marginTop:'10px' }}>{paraLabel}</p>
            <button className={styles.columnButton} onClick={handleClick}>
                {buttonLabel}
            </button>
            {showModal && (
                <div className={styles.modal}>
                <div className={styles.modalContent}>
                    <h2>Stake LP Tokens</h2>
                    <div className={styles.grid}>
                    <div>Stake</div>
                    <div>Balance:0.013911246766 </div>
                    <div><input type='number' placeholder='0' style={{border:0, width:'40px'}}/></div>
                    <div>MAX : ETH - USD</div>
                    </div>
                    <div className={styles.buttonContainer}>
                        <button style={{backgroundColor:"red", color:'white'}} onClick={closeModal}>Close</button>
                        <button >confirm</button>
                    </div>
                </div>
                </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default Card;