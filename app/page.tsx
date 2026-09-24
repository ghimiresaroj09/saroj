import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Timeline from "@/components/Timeline";
import Services from "@/components/Services";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import BottomNav from "@/components/BottomNav";
import { HomeJsonLd } from "@/components/JsonLd";
import { projects } from "@/lib/data";
import { getPageMetadata } from "@/lib/seo";
import { DEFAULT_DESCRIPTION, DEFAULT_TITLE } from "@/lib/site";

export const metadata = getPageMetadata({ title: DEFAULT_TITLE, description: DEFAULT_DESCRIPTION, path: "/" });

export default function Page() {
  return (
    <>
      <HomeJsonLd projects={projects} />
      <Header />
      <main id="main-content">
        <Hero />
        <About />
        <Timeline />
        <Services />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <BottomNav />
    </>
  );
}
