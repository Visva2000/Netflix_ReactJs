import React from "react";
import styles from "./accordian.module.css"


const AccorItems = (props)=>{
    const {selectedTab,selectTab,data} = props
    const {title,desc,id}=data||{}
    const isActive = selectedTab? selectedTab.id === id : false;    
const onclickItem =()=>{
    if(isActive)
    {
        selectTab(null);
        return;

    }
    selectTab(data);

}
    

    return(
        <div className={styles.accorItems}>
            <button   className={isActive?styles.activeTitle:styles.title} onClick={onclickItem}>{title}<div className={isActive?styles.symbolRotate:styles.symbol} id="symbol">
              +
              </div> </button>

          {isActive &&  <div className={`${styles.text}`} id={id}>
                <p>{desc}</p>
            </div>}

        </div>
    )
}

export default AccorItems