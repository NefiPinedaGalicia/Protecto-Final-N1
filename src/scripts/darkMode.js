/**
 * Maneja el toggle del dark mode
 */

document.addEventListener('DOMContentLoaded', () => {
    const darkModeToggle = document.getElementById('dark-mode-toggle');
    const sunIcon = document.getElementById('sun-icon');
    const moonIcon = document.getElementById('moon-icon');
    
    // Verificar si hay preferencia guardada
    const isDarkMode = localStorage.getItem('darkMode') === 'true';
    
    function updateTheme(isDark) {
        const titleElement = document.querySelector('#title-container h3');
        const staysCountElement = document.getElementById('stays-count');
        const cardTitles = document.querySelectorAll('#card-container h3');
        const cardTexts = document.querySelectorAll('#card-container span');
        const toggleButton = document.getElementById('dark-mode-toggle');
        const toggleCircle = toggleButton.querySelector('div');
        
        if (isDark) {
            document.documentElement.classList.add('dark');
            document.body.style.backgroundColor = '#111827';
            document.body.style.color = '#ffffff';
            if (titleElement) titleElement.style.color = '#ffffff';
            if (staysCountElement) staysCountElement.style.color = '#9ca3af';
            cardTitles.forEach(title => title.style.color = '#ffffff');
            cardTexts.forEach(text => text.style.color = '#9ca3af');
            toggleButton.style.backgroundColor = '#3b82f6';
            toggleCircle.style.transform = 'translateX(2rem)';
            sunIcon.style.display = 'none';
            moonIcon.style.display = 'block';
        } else {
            document.documentElement.classList.remove('dark');
            document.body.style.backgroundColor = '#f9fafb';
            document.body.style.color = '#000000';
            if (titleElement) titleElement.style.color = '#000000';
            if (staysCountElement) staysCountElement.style.color = '#6b7280';
            cardTitles.forEach(title => title.style.color = '#000000');
            cardTexts.forEach(text => text.style.color = '#6b7280');
            toggleButton.style.backgroundColor = '#d1d5db';
            toggleCircle.style.transform = 'translateX(0)';
            sunIcon.style.display = 'block';
            moonIcon.style.display = 'none';
        }
    }
    
    // Aplicar tema inicial
    updateTheme(isDarkMode);
    
    darkModeToggle.addEventListener('click', () => {
        const isDark = !document.documentElement.classList.contains('dark');
        updateTheme(isDark);
        localStorage.setItem('darkMode', isDark);
    });
});