import { Navbar } from "../components/navbar.js";

export function About() {
  return `
    ${Navbar()}
    <h1>เกี่ยวกับฉัน</h1>
    <p>ชื่อ: นิธิโชติ พานศรี</p>
    <p>กำลังเรียนเขียนเว็บไซต์</p>
  `;
}
