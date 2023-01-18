import React from "react"
import background from "../../imgs/RedMarmosetLogo.png"
import "./home.css"

export default function Home() {
  return (
    <div className="app"
      //style={{
        //backgroundImage: `url(${background})`,
        //backgroundRepeat: "no-repeat",
        //width: "100%",
        //height: "100%",}}
        >
      <h1>VIDEO GAMES OUR PASSION</h1>
      <div className="main">
        <div className="left">
          <h3>STUDIO</h3>
          <b>We are a new Indie Game startup founded by two very cool video game savvy veterans, if we don't say so ourselves! We have worked for multiple AAA and Indie companies, developing games for PC, console and mobile over a variety of differing genres for years!
          We have always loved making video games, and it is this passion that has brought us here.
          Our vision is to craft titles that combine exciting and unique action gameplay with stunningly iconic visual styles to create games that smack you in the face and then give you a big drooling kiss at the end!</b>
        </div>
        <div className="right">
          <h3>CULTURE</h3>
          <b>As a company we believe that making computer games is no monkey business and should be a lot of fun! This can be achieved through creating a fair and nurturing environment that encourages both creativity and innovation.
          We also understand that there should be a good work/life balance, too! Since there's nothing quite like swinging through the trees, or hanging out on those vines to chill! We, therefore, provide a flexible working ethos with flexi-time, working from home and/or at the office and no overtime.
          After all, a happy marmoset is a happy studio!</b>
        </div>
      </div>
    </div >
  )
}