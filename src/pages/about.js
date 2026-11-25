export function about() {
  return `
    <div class="bg-white rounded-xl shadow p-8">
      <h1 class="text-3xl font-bold mb-4">About</h1>
      <p class="text-slate-600 leading-relaxed mb-4">
        สวัสดีครับ ผมชื่อนิธิโชติ พานศรี ชื่อเล่น เฟรม
        กำลังศึกษาอยู่ที่วิทยาลัยเทคนิคมหาสารคาม
        ตอนนี้กำลังหัดเขียนเว็บไซต์ และเว็บนี้เป็นงานที่ทำเพื่อฝึกทักษะ
        สร้างด้วย Vite และ Tailwind CSS แล้วนำขึ้นใช้งานผ่าน Vercel
      </p>
      <div class="flex flex-wrap gap-2">
        <span class="bg-sky-100 text-sky-700 px-3 py-1 rounded-full text-sm">Vite</span>
        <span class="bg-sky-100 text-sky-700 px-3 py-1 rounded-full text-sm">Tailwind CSS</span>
        <span class="bg-sky-100 text-sky-700 px-3 py-1 rounded-full text-sm">GitHub</span>
        <span class="bg-sky-100 text-sky-700 px-3 py-1 rounded-full text-sm">Vercel</span>
      </div>
    </div>
  `
}