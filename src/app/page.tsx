"use client"

import About from "@/pages/about/about";
import HomePage from "@/pages/home/homePage";
import MyProject from "@/pages/myProject/my-project";
import Services from "@/pages/sevices/services";
import Skills from "@/pages/skills/skills";

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
