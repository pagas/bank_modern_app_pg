import React from 'react';
import {clients} from "../constants/index.js";
import styles from "../styles.js";

const Clients = () => (
    <section id="clients" className={`${styles.flexCenter} my-4`}>
        <div className={`${styles.flexCenter} flex-wrap w-full items-stretch`}>
            {clients.map(client => (
                <div key={client.id} className={`flex-1 ${styles.flexCenter} sm:min-w-[190px] min-w-[120px]
                hover:rounded-full hover:bg-dimBlue`}>
                    <img src={client.logo} alt="client" className="sm:w-[192px] w-[100px] object-contain"/>
                </div>
            ))}
        </div>
    </section>
);

export default Clients;
