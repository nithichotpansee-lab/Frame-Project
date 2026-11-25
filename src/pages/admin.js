export function admin() {
  return `
    <div class="bg-white rounded-xl shadow p-8">
      <h1 class="text-3xl font-bold mb-2">Admin</h1>
      <p class="text-slate-600 mb-6">หน้าสำหรับผู้ดูแลเว็บไซต์</p>
      <div class="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div class="bg-sky-50 rounded-lg p-4 text-center">
          <p class="text-3xl font-bold text-sky-600">4</p>
          <p class="text-slate-600 text-sm">หน้าทั้งหมด</p>
        </div>
        <div class="bg-sky-50 rounded-lg p-4 text-center">
          <p class="text-3xl font-bold text-sky-600">1</p>
          <p class="text-slate-600 text-sm">ผู้ดูแล</p>
        </div>
        <div class="bg-sky-50 rounded-lg p-4 text-center">
          <p class="text-3xl font-bold text-sky-600">Online</p>
          <p class="text-slate-600 text-sm">สถานะเว็บ</p>
        </div>
      </div>
    </div>
  `
}