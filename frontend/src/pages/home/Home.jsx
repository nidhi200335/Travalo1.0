import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import Header from '../../components/header/Header'
import Featured from '../../components/featured/Featured.jsx'
import "./Home.css";
import PropertyList from '../../components/propertyList/PropertyList.jsx';
import FeaturedProperties from '../../components/featuredProperties/FeaturedProperties.jsx';
import MailList from '../../components/mailList/MailList.jsx';
import Footer from '../../components/footer/Footer.jsx';
const Home = () => {
  return (
    <div>
    <Navbar></Navbar>
    <Header></Header>
    <div className="homeContainer">
     <Featured/> 
     <h1 className="homeTitle">Browse by property type</h1>
     <PropertyList/>
     <h1 className="homeTitle">home guest love </h1>
     <FeaturedProperties/>     
      <MailList/>
      <Footer/>
    </div>
    </div>
  )
}

export default Home