// app.js - Controlador del interruptor de tema

document.addEventListener('DOMContentLoaded', function() {
    // Referencias a elementos del DOM
    const themeToggle = document.getElementById('checkbox');
    const htmlElement = document.documentElement;
    
    // Verificar si hay una preferencia guardada en localStorage
    const savedTheme = localStorage.getItem('theme');
    
    // Si hay un tema guardado, aplicarlo
    if (savedTheme) {
        htmlElement.setAttribute('data-theme', savedTheme);
        
        // Si el tema guardado es oscuro, marcar el interruptor como activado
        if (savedTheme === 'dark') {
            themeToggle.checked = true;
        }
    }
    
    // Agregar evento al interruptor
    themeToggle.addEventListener('change', function() {
        if (this.checked) {
            // Cambiar a tema oscuro cuando se activa el interruptor
            htmlElement.setAttribute('data-theme', 'dark');
            localStorage.setItem('theme', 'dark');
            console.log('Tema cambiado a oscuro');
        } else {
            // Cambiar a tema claro cuando se desactiva el interruptor
            htmlElement.setAttribute('data-theme', 'light');
            localStorage.setItem('theme', 'light');
            console.log('Tema cambiado a claro');
        }
    });
    
    // También agregar evento de clic para mayor compatibilidad
    const slider = document.querySelector('.slider');
    if (slider) {
        slider.addEventListener('click', function() {
            // Simular clic en el checkbox
            themeToggle.click();
        });
    }
});