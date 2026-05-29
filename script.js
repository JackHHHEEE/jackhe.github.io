// 为导航栏链接添加平滑滚动效果
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault(); // 阻止默认的生硬跳转
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth' // 平滑滚动
        });
    });
});