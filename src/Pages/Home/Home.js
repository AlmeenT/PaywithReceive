import React from 'react'
import MainNav from '../../Components/Main Nav/MainNav'
import './Home.css'
import Cash from "../../Assets/Images/cash.png"
import first from "../../Assets/Images/1.png"
import second from "../../Assets/Images/2.png"
import third from "../../Assets/Images/3.png"
import fourth from "../../Assets/Images/4.png"
import fifth from "../../Assets/Images/5.png"
import sixth from "../../Assets/Images/6.png"
import seven from "../../Assets/Images/new1.png"
import eight from "../../Assets/Images/new2.png"
import nine from "../../Assets/Images/new3.png"
import pay1 from "../../Assets/Images/Payment Method (1).png"
import pay2 from "../../Assets/Images/Payment Method (2).png"
import pay3 from "../../Assets/Images/Payment Method (3).png"
import pay4 from "../../Assets/Images/Payment Method (4).png"
import pay5 from "../../Assets/Images/Payment Method (5).png"
import pay6 from "../../Assets/Images/Payment Method (6).png"
import pay7 from "../../Assets/Images/Payment Method (7).png"
import pay8 from "../../Assets/Images/Payment Method (8).png"
import pay9 from "../../Assets/Images/Payment Method (9).png"
import pay10 from "../../Assets/Images/Payment Method (10).png"
import pay11 from "../../Assets/Images/Payment Method (11).png"



const Home = () => {
  return (
    <body>
    <MainNav/>
    <section className="first-section">
    <div className="general">
    
        <div  className="alltext">
        <div className="text1">
           <article className="Part2">
          <h2 className="texth1">Seamless, Swift & Guaranteed Payments.</h2>
           </article>
           <article className="Part1">
          <p >receive is a webpayment platform that is trusted and proven for usage by developers and business people.
           The API is used by developers and businesspeople to process payments for their enterprises. includes awesome innovations 
           like cryptocurrency payments and QR code scanners.
          </p>
           </article>
           <div className="Part3">
         <a href='#' className='anchor'>Get Started</a>
         </div>
          </div>
            
          </div>
          <div className= "cash">
          <div className="cashimg">
          <img src={Cash} alt="a cashimage"/>
          </div>
        </div>
           </div>
           </section>

        {/*SECOND SECTION*/}

        <section className=" container second-section">
            <h2> Why use Receive account for your Transaction </h2>
             <div className="reasons">
              <article className= "offers">
                <div className="icons">
                  <img src= {first} alt="first icon"/>
                   </div>
                  <h3>Fast Payments & Transactions</h3>
               </article>
                 <article className= "offers">
                <div className="icons2">
                  <img src= {second} alt="second icon"/>
                   </div>
                  <h3>Cryptocurrency payment</h3>
               </article>
                 <article className= "offers">
                <div className="icons3">
                  <img src= {third} alt="first icon"/>
                   </div>
                  <h3>Multiple Payment methods</h3>
               </article>
                 <article className= "offers">
                <div className="icons4">
                  <img src= {fourth} alt="first icon"/>
                   </div>
                  <h3>Privacy security</h3>
               </article>
                 <article className= "offers">
                <div className="icons5">
                  <img src= {fifth} alt="first icon"/>
                   </div>
                  <h3>Reliable Customer support</h3>
               </article>
                 <article className= "offers">
                <div className="icons6">
                  <img src= {sixth} alt="first icon"/>
                   </div>
                  <h3>API for Developers</h3>
               </article>

             </div>
        </section>

        {/*Third-section*/}
        <section className="third-section">
        <h2>Why you need Receive account for your Transaction </h2>
        <div className="speech-1">
          <div className= "speech-11"> 
          <img src={seven} alt=""/>
          </div>
            <article className="speech">
             <h3>Fast and reliable payment</h3>
             <p>With this platform, you may conduct quick transactions with your friends,
              business associates, and others in a matter of seconds without experiencing any errors.</p>
            </article>
      {/*2ns speech*/}
        </div>
        <div className="speech-1">
            <article className="speech2">
             <h3>Developer friendly</h3>
             <p>With this platform, you may conduct quick transactions with your friends,
              business associates, and others in a matter of seconds without experiencing any errors.</p>
            </article>

             <div className= "speech-22"> 
          <img src={eight} alt=""/>
          </div>
        </div>
        {/*3rd speech*/}
        <div className="speech-1">
          <div className= "speech-23"> 
          <img src={nine} alt=""/>
          </div>
            <article className="speech">
             <h3>Financial Freedom</h3>
             <p>With this platform, you may conduct quick transactions with your friends,
              business associates, and others in a matter of seconds without experiencing any errors.</p>
            </article>
        
        </div>
        </section>
        {/*4th section*/}
        <section className=" last-section">
          
          <article className= "iconss">
          <h3>Accepted payment Methods</h3>
            <div className='last-icons'>
        <a href=''target='_blank' ><img src={pay1}/></a>
        <a href=' 'target='_blank'><img src={pay2}/></a>
        <a href=' 'target='_blank'><img src={pay3}/></a>
        <a href=''target='_blank'><img src={pay4}/></a>
        <a href=' 'target='_blank'><img src={pay5}/></a>
         <a href=''target='_blank' ><img src={pay6}/></a>
         </div>
         <div className="last-icons1">
        <a href=' 'target='_blank'><img src={pay7}/></a>
        <a href=' 'target='_blank'><img src={pay8}/></a>
        <a href=''target='_blank'><img src={pay9}/></a>
        <a href=' 'target='_blank'><img src={pay10}/></a>
          <a href=' 'target='_blank'><img src={pay11}/></a>
      </div>
      </article>
        </section>

    </body>
  )
}

export default Home