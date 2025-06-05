// Función básica para el efecto de escritura terminal (opcional)
document.addEventListener('DOMContentLoaded', function() {
    // Puedes añadir efectos de terminal aquí si lo deseas
    console.log('tilde.club replica loaded');
    
    // Ejemplo de efecto de escritura:
    const terminalText = document.querySelector('pre');
    if (terminalText) {
        const originalText = terminalText.textContent;
        terminalText.textContent = '';
        
        let i = 0;
        const typingEffect = setInterval(() => {
            if (i < originalText.length) {
                terminalText.textContent += originalText.charAt(i);
                i++;
            } else {
                clearInterval(typingEffect);
            }
        }, 50);
    }
});