/**
 * 公共JavaScript功能
 * 包含年份更新、页面加载动画等通用功能
 */

// 页面加载动画
function initPageAnimations() {
    const container = document.querySelector(".container");
    const footer = document.querySelector(".footer");
    
    if (container) {
        container.classList.add("fadeIn");
    }
    
    if (footer) {
        footer.classList.add("fadeIn");
    }
}

// 动态更新年份
function updateYear() {
    const yearSpan = document.getElementById("year-span");
    if (yearSpan) {
        const currentYear = new Date().getFullYear();
        if (currentYear > 2017) {
            yearSpan.textContent = "-" + currentYear;
        }
    }
}



// 页面初始化
function initPage() {
    // 等待DOM加载完成
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initPageContent);
    } else {
        initPageContent();
    }
}

function initPageContent() {
    initPageAnimations();
    updateYear();
}

// 导出函数供其他脚本使用
window.CommonUtils = {
    initPage,
    initPageAnimations,
    updateYear
};
