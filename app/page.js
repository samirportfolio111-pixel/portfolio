import Hero from "@/components/Hero";
import About from "@/components/About";
import Skill from "@/components/Skill";
import Services from "@/components/Services";
import Clients from "@/components/Clients";
import Contact from "@/components/Contact";
import ProjectMasonryIsotop from "@/components/ProjectMasonryIsotop";

export default function Home() {
  return (
    <>
      <section id="home"><Hero /></section>
      <section id="about"><About /></section>
      <section id="skills"><Skill /></section>
      <section id="services"><Services /></section>
      <section id="projects"><ProjectMasonryIsotop /></section>
      <section id="clients"><Clients /></section>
      <section id="contact"><Contact /></section>
    </>
  );
}
