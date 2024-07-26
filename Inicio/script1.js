document.querySelectorAll('.menu-toggle').forEach(item => {
    item.addEventListener('click', event => {
        event.preventDefault();
        const submenu = item.nextElementSibling;
        const isDisplayed = submenu.style.display === 'block';
        document.querySelectorAll('.submenu').forEach(menu => {
            menu.style.display = 'none';
        });
        submenu.style.display = isDisplayed ? 'none' : 'block';
    });
});

document.addEventListener('click', event => {
    if (!event.target.closest('.menu-main')) {
        document.querySelectorAll('.submenu').forEach(menu => {
            menu.style.display = 'none';
        });
    }
});
