import ChapterOfficersTab from "../components/ChapterOfficersTab";
import Hero from "../chapter-officers/hero";
import JoinNow from "../sections/JoinNow";
import Gallery from "../sections/Gallery";
export default function RootLayout({ children }) {
  return (
    <main className="">
      <Hero/>
      <ChapterOfficersTab />
      {children}

      <JoinNow/>
      <Gallery/>

    </main>
  );
}
