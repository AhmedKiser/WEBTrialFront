import Background from "./background";
import Rectangle from "./rectangle";
import ACMEvents from "./ACMEvents";
import JoinNow from "./JoinNow";
import Gallery from "../sections/Gallery";
export default function Event() {
  return (
    <>
      {/* Home Page */}
      <section className="">
       <Background/>
        <ACMEvents/>
        <JoinNow/>
        <Gallery/>
      </section>

    </>
  );
}
