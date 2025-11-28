const tabs = document.querySelectorAll('.tabs li');

tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    // إزالة active من كل التابات
    tabs.forEach(t => t.classList.remove('active'));
    // إضافة active للتاب المضغوط
    tab.classList.add('active');
    // تحويل للرابط
    const link = tab.querySelector('a').getAttribute('href');
    window.location.href = link;
  });
});
