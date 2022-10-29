import React from "react";
import Header from "../../components/Header/Header";
import Input from "../../components/Input/Input";
import "./home.css";

function Home() {
  return (
    <div className="home_container">
      <p className="title" >Headless blueprint for the internet</p>
      <p className="subtitle" >
        The headless CMS is changing the landscape of the internet. That's why
        we've created our one-stop platform with everything you
      </p>
      <Input/>
    </div>
  );
}

export default Home;
