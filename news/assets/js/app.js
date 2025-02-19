// 初始化年份
document.getElementById('currentYear').textContent = new Date().getFullYear();

// Service Worker注册
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/sw.js')
            .then(registration => console.log('SW registered'))
            .catch(err => console.log('SW registration failed'));
    });
}

// 图片懒加载
const lazyLoad = () => {
    const lazyImages = [].slice.call(document.querySelectorAll('img[loading="lazy"]'));
    
    if ('IntersectionObserver' in window) {
        let observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    let img = entry.target;
                    img.src = img.dataset.src;
                    img.removeAttribute('data-src');
                    observer.unobserve(img);
                }
            });
        });

        lazyImages.forEach(img => observer.observe(img));
    }
};

document.addEventListener('DOMContentLoaded', lazyLoad);
