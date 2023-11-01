import React from "react";
import styles from "./accordian.module.css"
import { accordianData } from "./accordianData";
import AccorItems from "./accorItems";

const AccordianSection = (props) => {
    const { selectedTab, selectTab } = props
    return (
        <div className={styles.accordianSection}>
            <h1 className={styles.questionSectionText}>Frequently Asked Questions</h1>
            {
                accordianData.map((item) => (
                    // console.log(item);
                    <AccorItems selectedTab={selectedTab} selectTab={selectTab} data={item} key={item.id} />


                ))
            }
            <div className={styles.subscription}>
                <a href="" className={styles.subscriptionBtn}>Restart Your Membershipp</a>
            </div>


        </div>

    )
}
export default AccordianSection