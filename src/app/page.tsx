"use client"

import About from "@/components/pages/about/about";
import HomePage from "@/components/pages/home/homePage";
import MyProject from "@/components/pages/myProject/my-project";
import Services from "@/components/pages/sevices/services";
import Skills from "@/components/pages/skills/skills";

export default function Home() {
  return (
    <main className="">
      <HomePage />
      <About />
      <Services />
      <Skills />
      <MyProject />
    </main>
  );
}
