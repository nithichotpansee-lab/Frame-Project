import { Navbar } from "../components/navbar.js";

export function Home() {
  return `
    ${Navbar()}
    <h1>หน้าแรก</h1>
    <p>ยินดีต้อนรับสู่เว็บไซต์ของฉัน</p>
  `;
}