document.addEventListener('DOMContentLoaded', function() {
    const darkModeToggle = document.getElementById('dark-mode-toggle');
    const themeToggle = document.getElementById('theme-toggle');
    
    const body = document.body;

    // Modo escuro
    darkModeToggle.addEventListener('click', () => {
        body.classList.toggle('dark-mode');
        if (body.classList.contains('dark-mode')) {
            darkModeToggle.textContent = 'Modo Claro';
        } else {
            darkModeToggle.textContent = 'Modo Escuro';
        }
    });

    // Alternar temas
    themeToggle.addEventListener('click', () => {
        if (body.classList.contains('campo-theme')) {
            body.classList.remove('campo-theme');
            body.classList.add('cidade-theme');
        } else if (body.classList.contains('cidade-theme')) {
            body.classList.remove('cidade-theme');
            body.classList.add('tecnologia-theme');
        } else {
            body.classList.add('campo-theme');
        }
    });
});
