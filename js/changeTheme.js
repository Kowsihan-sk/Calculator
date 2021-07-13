function setTheme(themeName) {
    localStorage.setItem('theme', themeName);
    document.documentElement.className = themeName;
}

(function () {
    localStorage.setItem('theme', 'theme-1');
    document.documentElement.className = 'theme-1';
})();