// JavaScript สำหรับควบคุมการเปิด-ปิดเมนูบนมือถือ (Mobile Menu Toggle)
const menuBtn = document.getElementById('menuBtn');
const navMenu = document.getElementById('navMenu');

if (menuBtn && navMenu) {
    menuBtn.addEventListener('click', () => {
        navMenu.classList.toggle('active');
    });

    // ปิดเมนูอัตโนมัติเมื่อคลิกลิงก์ด้านใน
    const menuLinks = navMenu.querySelectorAll('a');
    menuLinks.forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
        });
    });
}