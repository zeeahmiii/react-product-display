import React, { useState } from 'react';
import data from './data.json';
import styles from './product_display.module.css';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import animationStyles from './ToggleAnimation.module.css';

function ProductDisplay() {
    const [view, setView] = useState('grid');

    const renderGrid = () => (
        <div className={styles.grid}>
            {data.map(product => (
                <div key={product.id} className={styles.card}>
                    <h4>{product.name}</h4>
                    <p>${product.price}</p>
                    <p>{product.description}</p>
                </div>
            ))}
        </div>
    );

    const renderTable = () => (
        <table className={styles.table}>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Price</th>
                    <th>Description</th>
                </tr>
            </thead>
            <tbody>
                {data.map(product => (
                    <tr key={product.id}>
                        <td>{product.name}</td>
                        <td>${product.price}</td>
                        <td>{product.description}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );

    return (
        <div className={styles.container}>
            <button className={styles.button} onClick={() => setView(view === 'grid' ? 'table' : 'grid')}>
                Toggle View
            </button>
            <TransitionGroup>
                <CSSTransition
                    key={view}
                    timeout={300}
                    classNames={animationStyles}
                >
                    <div>
                        {view === 'grid' ? renderGrid() : renderTable()}
                    </div>
                </CSSTransition>
            </TransitionGroup>
        </div>
    );
}

export default ProductDisplay;
