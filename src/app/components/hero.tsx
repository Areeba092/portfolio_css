
"use client";
import Image from "next/image";
import img from "../../../public/dp2.jpg"

export default function Hero() {
  return (
    <section style={{minWidth:"100%"}}>
      <div className="hero">
        <div className="image-section">
          <Image
            className="img"
            src={img}
            alt={"pic"}
            width={400}
            height={400}
          ></Image>
        </div>

        <div className="content">
          <h1
            id="head"
            style={{
              fontWeight: "normal",
              marginBottom: "10px",
              textAlign: "center",
            }}
          >
            Hi I am, <span style={{ color: "#db2777" }}>Areeba</span>
          </h1>
          <div
            style={{
              height: "2px",
              width: "40%",
              margin: "auto",
              marginBottom: "20px",
              background: "#db2777",
            }}
          ></div>
          <p>
            I built this portfolio using Next.js and Tailwind CSS, and I am
            currently expanding my expertise in Next.js and React. I specialize
            in HTML, CSS, and JavaScript, with growing proficiency in
            TypeScript. I believe in continuous learning and enjoy working on
            projects that not only challenge me but also help enhance my skills
            both technically and creatively.
          </p>

          <button id="btn">Hire me</button>
        </div>
      </div>
    </section>
  );
}
