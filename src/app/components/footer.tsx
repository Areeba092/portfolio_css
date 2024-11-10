
"use client";

import Link from "next/link";
import { MdEmail } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaSquareFacebook } from "react-icons/fa6";

export default function Footer() {
  return (
    <div>
      <footer style={{ background: "#111827", color: "white", }}>
        <div className="foot">
          <ul>
            <li className="animate">
              <Link
                    target="_blank"
                href={
                  "https://www.linkedin.com/in/areeba-qureshi-a181752b4/"
                }
              >
                <FaLinkedin />
              </Link>
            </li>

            <li className="animate"> 
              <Link
                
                target="_blank"
                href={
                  "https://github.com/Areeba092"
                }
              >
                <FaGithub />
              </Link>
            </li>

            <li className="animate">
              <Link
                target="_blank"
                href={
                  "https://www.facebook.com/babaki.shezadi.7737"
                }
              >
                <FaSquareFacebook />
              </Link>
            </li>

            <li className="animate">
              <Link       
                target="_blank"
                href={
                  "https://www.linkedin.com/in/areeba-qureshi-a181752b4/"
                }
              >
                <MdEmail />
              </Link>
            </li>
          </ul>
        </div>

        <p id="copyright">
          Copyright &copy; 2024 Designed by Areeba &#9829; All right Reserved
        </p>
      </footer>
    </div>
  );
}


