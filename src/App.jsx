import React from 'react';
import styles from "./styles.js";

import {Navbar,  Hero, Stats, Billing, CardDeal, Business, CTA, Footer, Clients, Testimonials} from "./components/index.js";

const App = (props) => {
    return (
        <div className="bg-primary w-full overflow-hidden">
            <div className={`${styles.paddingX} ${styles.flexCenter}`}>
                <div className={`${styles.boxWidth}`}>
                    <Navbar />
                </div>
            </div>

            <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
                <div className={`${styles.boxWidth}`}>
                    HERO COMPONENT
                </div>
            </div>

            <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
                <div className={`${styles.boxWidth}`}>
                    Stats
                    Business
                    billing
                    cardeal
                    testimodials
                    clients
                    CTA
                    Footer
                </div>
            </div>
        </div>
    );
}

export default App;
