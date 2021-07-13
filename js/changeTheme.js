function setTheme(themeName) {
    localStorage.setItem('theme', themeName);
    document.documentElement.className = themeName;
}

(function () {
    if (localStorage.getItem('theme') === 'theme-1') {
        setTheme('theme-1');
    } else if (localStorage.getItem('theme') === 'theme-2') {
        setTheme('theme-2')
    } else setTheme('theme-3');
})();