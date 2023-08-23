import Hero from "./hero";

import Gallery from "./Gallery";
import JoinNow from "./JoinNow";

export default function Event() {
    return (
      <>
        {/* Home Page */}
        <section className="">
         <Hero/>
   
         
         <JoinNow/>
         <Gallery/>
        </section>
  
      </>
    );
  }
  