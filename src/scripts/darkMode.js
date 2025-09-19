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
        
        // Elementos del overlay
        const overlayContainer = document.getElementById('search-container-mobile');
        const overlayTitle = document.querySelector('#search-container-mobile h2');
        const overlayCloseIcon = document.querySelector('#close-search svg');
        const overlayForm = document.querySelector('#search-container-mobile form');
        const overlayLabels = document.querySelectorAll('#search-container-mobile label');
        const overlayInput = document.querySelector('#search-container-mobile input');
        const overlayGuestText = document.querySelector('#search-container-mobile #guest-count').parentElement;
        const overlayButtons = document.querySelectorAll('#adults-minus, #adults-plus, #children-minus, #children-plus');
        const overlayIcons = document.querySelectorAll('#adults-minus svg, #adults-plus svg, #children-minus svg, #children-plus svg');
        const overlayTexts = document.querySelectorAll('#adults-count, #children-count');
        const overlayTitles = document.querySelectorAll('#container-guests h3');
        const overlaySubtitles = document.querySelectorAll('#container-guests p');
        const overlayHovers = document.querySelectorAll('#search-container-mobile .hover\\:bg-gray-50');
        const locationContainers = document.querySelectorAll('#container-location, #container-location-mobile');
        const formFields = document.querySelectorAll('#search-container-mobile form > div');
        const headerButton = document.getElementById('search-container');
        
        // Función para aplicar estilos a elementos dinámicos
        const applyDynamicStyles = (isDark) => {
            // Sugerencias de ubicación
            const suggestions = document.querySelectorAll('#container-location .suggestion, #container-location-mobile .suggestion');
            suggestions.forEach(suggestion => {
                suggestion.style.backgroundColor = isDark ? '#374151' : '#ffffff';
                suggestion.style.color = isDark ? '#ffffff' : '#000000';
                suggestion.style.borderColor = isDark ? '#4b5563' : '#e5e7eb';
            });
            
            // Títulos de ubicación
            const locationTitles = document.querySelectorAll('#container-location h3, #container-location-mobile h3');
            locationTitles.forEach(title => {
                title.style.color = isDark ? '#ffffff' : '#000000';
            });
            
            // Subtítulos de ubicación
            const locationSubtitles = document.querySelectorAll('#container-location p, #container-location-mobile p');
            locationSubtitles.forEach(subtitle => {
                subtitle.style.color = isDark ? '#9ca3af' : '#6b7280';
            });
        };
        
        if (isDark) {
            document.documentElement.classList.add('dark');
            document.body.style.backgroundColor = '#111827';
            document.body.style.color = '#ffffff';
            if (titleElement) titleElement.style.color = '#ffffff';
            if (staysCountElement) staysCountElement.style.color = '#9ca3af';
            cardTitles.forEach(title => title.style.color = '#ffffff');
            cardTexts.forEach(text => text.style.color = '#9ca3af');
            
            // Overlay elements
            if (overlayContainer) overlayContainer.style.backgroundColor = '#1f2937';
            if (overlayTitle) overlayTitle.style.color = '#ffffff';
            if (overlayCloseIcon) overlayCloseIcon.style.color = '#ffffff';
            if (overlayForm) {
                overlayForm.style.backgroundColor = '#374151';
                overlayForm.style.borderColor = '#4b5563';
            }
            overlayLabels.forEach(label => label.style.color = '#e5e7eb');
            if (overlayInput) {
                overlayInput.style.color = '#d1d5db';
                overlayInput.style.backgroundColor = 'transparent';
            }
            // Aplicar estilos a contenedores de ubicación
            locationContainers.forEach(container => {
                container.style.backgroundColor = isDark ? '#1f2937' : '#ffffff';
            });
            
            // Configurar hover de campos del formulario
            formFields.forEach(field => {
                field.addEventListener('mouseenter', () => {
                    field.style.borderColor = isDark ? '#6b7280' : '#9ca3af';
                });
                field.addEventListener('mouseleave', () => {
                    field.style.borderColor = 'transparent';
                });
            });
            
            // Botón del header
            if (headerButton) {
                headerButton.style.backgroundColor = isDark ? '#374151' : '#ffffff';
                headerButton.style.borderColor = isDark ? '#4b5563' : '#e5e7eb';
                
                const headerTexts = headerButton.querySelectorAll('div');
                headerTexts.forEach(text => {
                    text.style.color = isDark ? '#d1d5db' : '#6b7280';
                });
                
                const headerIcon = headerButton.querySelector('svg');
                if (headerIcon) headerIcon.style.color = '#ef4444';
            }
            
            applyDynamicStyles(true);
            if (overlayGuestText) overlayGuestText.style.color = '#d1d5db';
            overlayButtons.forEach(btn => {
                btn.style.backgroundColor = '#4b5563';
                btn.style.borderColor = '#6b7280';
            });
            overlayIcons.forEach(icon => icon.style.color = '#ffffff');
            overlayTexts.forEach(text => text.style.color = '#ffffff');
            overlayTitles.forEach(title => title.style.color = '#ffffff');
            overlaySubtitles.forEach(subtitle => subtitle.style.color = '#9ca3af');
            
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
            
            // Overlay elements
            if (overlayContainer) overlayContainer.style.backgroundColor = '#ffffff';
            if (overlayTitle) overlayTitle.style.color = '#000000';
            if (overlayCloseIcon) overlayCloseIcon.style.color = '#000000';
            if (overlayForm) {
                overlayForm.style.backgroundColor = '#ffffff';
                overlayForm.style.borderColor = '#d1d5db';
            }
            overlayLabels.forEach(label => label.style.color = '#1f2937');
            if (overlayInput) {
                overlayInput.style.color = '#4b5563';
                overlayInput.style.backgroundColor = 'transparent';
            }
            // Aplicar estilos a contenedores de ubicación
            locationContainers.forEach(container => {
                container.style.backgroundColor = '#ffffff';
            });
            
            // Configurar hover de campos del formulario
            formFields.forEach(field => {
                field.addEventListener('mouseenter', () => {
                    field.style.borderColor = '#9ca3af';
                });
                field.addEventListener('mouseleave', () => {
                    field.style.borderColor = 'transparent';
                });
            });
            
            // Botón del header
            if (headerButton) {
                headerButton.style.backgroundColor = '#ffffff';
                headerButton.style.borderColor = '#e5e7eb';
                
                const headerTexts = headerButton.querySelectorAll('div');
                headerTexts.forEach(text => {
                    text.style.color = '#6b7280';
                });
                
                const headerIcon = headerButton.querySelector('svg');
                if (headerIcon) headerIcon.style.color = '#ef4444';
            }
            
            applyDynamicStyles(false);
            if (overlayGuestText) overlayGuestText.style.color = '#4b5563';
            overlayButtons.forEach(btn => {
                btn.style.backgroundColor = '#f3f4f6';
                btn.style.borderColor = '#9ca3af';
            });
            overlayIcons.forEach(icon => icon.style.color = '#000000');
            overlayTexts.forEach(text => text.style.color = '#000000');
            overlayTitles.forEach(title => title.style.color = '#000000');
            overlaySubtitles.forEach(subtitle => subtitle.style.color = '#6b7280');
            
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
    
    // Observer para elementos dinámicos
    const observer = new MutationObserver(() => {
        const isDark = document.documentElement.classList.contains('dark');
        const applyDynamicStyles = (isDark) => {
            // Dropdown de sugerencias
            const dropdown = document.getElementById('suggestions-dropdown');
            if (dropdown) {
                dropdown.style.backgroundColor = isDark ? '#374151' : '#ffffff';
                dropdown.style.borderColor = isDark ? '#4b5563' : '#e5e7eb';
                
                // Elementos dentro del dropdown
                const suggestionItems = dropdown.querySelectorAll('.suggestion-item');
                suggestionItems.forEach(item => {
                    item.style.color = isDark ? '#ffffff' : '#000000';
                    const icon = item.querySelector('svg');
                    if (icon) icon.style.fill = isDark ? '#ffffff' : '#000000';
                    
                    // Configurar hover para cada item
                    item.addEventListener('mouseenter', () => {
                        item.style.backgroundColor = isDark ? '#4b5563' : '#f3f4f6';
                    });
                    item.addEventListener('mouseleave', () => {
                        item.style.backgroundColor = isDark ? '#374151' : '#ffffff';
                    });
                });
                
                // Mensaje de "no encontrado"
                const noResults = dropdown.querySelector('.text-gray-500');
                if (noResults) {
                    noResults.style.color = isDark ? '#9ca3af' : '#6b7280';
                }
            }
            
            // Ciudades seleccionadas
            const selectedCities = document.querySelectorAll('.selected-city');
            selectedCities.forEach(city => {
                city.style.backgroundColor = isDark ? '#374151' : '#ffffff';
                city.style.color = isDark ? '#ffffff' : '#000000';
                city.style.borderColor = isDark ? '#4b5563' : '#e5e7eb';
                const icon = city.querySelector('svg');
                if (icon) icon.style.fill = isDark ? '#ffffff' : '#000000';
            });
        };
        applyDynamicStyles(isDark);
    });
    
    // Observar cambios en los contenedores de ubicación y el body (para el dropdown)
    const locationContainer = document.getElementById('container-location');
    const locationMobileContainer = document.getElementById('container-location-mobile');
    if (locationContainer) observer.observe(locationContainer, { childList: true, subtree: true });
    if (locationMobileContainer) observer.observe(locationMobileContainer, { childList: true, subtree: true });
    observer.observe(document.body, { childList: true, subtree: true });
});