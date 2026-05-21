// Espera a que toda la página esté cargada
document.addEventListener('DOMContentLoaded', () => {
    // Crea el botón dinámicamente desde JavaScript
    const toggleButton = document.createElement('button');
    toggleButton.innerText = '🌙 Modo Oscuro';
    toggleButton.classList.add('dark-mode-btn');
    
    // Inserta el botón al principio del body
    document.body.prepend(toggleButton);

    // Escucha el evento de clic
    toggleButton.addEventListener('click', () => {
        // Intercambia la clase 'dark-theme' en el body
        document.body.classList.toggle('dark-theme');
        
        // Cambia el texto del botón según el modo
        if (document.body.classList.contains('dark-theme')) {
            toggleButton.innerText = '☀️ Modo Claro';
        } else {
            toggleButton.innerText = '🌙 Modo Oscuro';
        }
    });
});
