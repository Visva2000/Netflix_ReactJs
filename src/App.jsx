import React,{useState} from "react";
import Footer from "./components/footer";
import Hero from "./components/herobanner";
import Contents from "./components/contents";
import "./App.css"
import Content1 from "./components/contents/content1";
import AccordianSection from "./components/accordian/accordianSection";

const tem = ()=>{
  const [selectedTab, selectTab] = useState();
  return(
    <section className="section">
        <Hero/>
        <Contents/>
        <Content1/>
        <Contents/>
        <Content1/>     
        <AccordianSection selectedTab = {selectedTab} selectTab={selectTab}/>     
        <Footer/>
        
    </section>

  )
}

export default tem;