import { Navbar } from "../components/navbar.js";

export function Admin() {
  return `
    ${Navbar()}
    <h1>Admin</h1>
    <p>หน้าสำหรับผู้ดูแล</p>
  `;
}