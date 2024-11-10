
"use client";

import Image from "next/image";
import img from "../../../public/dp2.jpg"

export default function About() {
  return (
    <section >
      <div className="container">
        <div className="about-section">
          <h1 style={{marginBottom:"20px", fontSize:"2rem"}}>About ME</h1>
          <p className="para">
            Hi, I am Areeba, a 22-year-old web Developer from Karachi Pakistan.
            Im Bcom student. I we also developed a strong
            interest in web development. Currently, I amm learning the essentials
            of HTML, CSS, and JavaScript, TypeScript TailwindCSS to create
            responsive and functional websites. Looking ahead, Im also planning
            to dive deeper into frameworks like React and Next.js Powerful
            Framework ro enhance to deliver high-quality modern web solutions.
            My goal is to combine my passion for learning with technical
            expertise to create efficient, user-friendly digital experiences.
            Let us collaborate and bring your ideas to life!
          </p>
        </div>

        <div className="img-section">
          <Image
          id="about-img"
            width={300}
            height={300}
            alt={"about-logo"}
            src={img}
          ></Image>
        </div>
      </div>
    </section>
  );
}
