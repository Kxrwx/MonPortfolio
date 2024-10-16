// JavaScript source code
function toggleExpand(element) {
    const items = document.querySelectorAll('.techno > div');

    // Vérifie si l'élément est déjà agrandi
    const isExpanded = element.classList.contains('expanded');

    // Réinitialise tous les éléments
    items.forEach(item => {
        item.classList.remove('expanded'); // Retire l'agrandissement
        item.classList.remove('hidden'); // Réaffiche tous les éléments
        item.style.opacity = '1'; // Remet l'opacité
    });

    if (!isExpanded) {
        // Si l'élément n'est pas agrandi, on l'agrandit
        element.classList.add('expanded'); // Agrandit l'élément
        items.forEach(item => {
            if (item !== element) {
                item.classList.add('hidden'); // Cache les autres éléments
            }
        });
    }
}
