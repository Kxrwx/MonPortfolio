// JavaScript source code
function toggleExpand(element) {
    const items = document.querySelectorAll('.techno > div');

    // V�rifie si l'�l�ment est d�j� agrandi
    const isExpanded = element.classList.contains('expanded');

    // R�initialise tous les �l�ments
    items.forEach(item => {
        item.classList.remove('expanded'); // Retire l'agrandissement
        item.classList.remove('hidden'); // R�affiche tous les �l�ments
        item.style.opacity = '1'; // Remet l'opacit�
    });

    if (!isExpanded) {
        // Si l'�l�ment n'est pas agrandi, on l'agrandit
        element.classList.add('expanded'); // Agrandit l'�l�ment
        items.forEach(item => {
            if (item !== element) {
                item.classList.add('hidden'); // Cache les autres �l�ments
            }
        });
    }
}
