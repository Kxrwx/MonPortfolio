




    //fonction pour les outils 
function toggleExpand(element) {
    const items = document.querySelectorAll('.techno > div');
    const technoText = document.getElementById('technoText'); // La div où le texte sera affiché

    const isExpanded = element.classList.contains('expanded');

    // Réinitialise tous les éléments et remet le texte par défaut
    items.forEach(item => {
        item.classList.remove('expanded');
        item.classList.remove('hidden');
        item.style.opacity = '1';
    });

    // Texte de base quand aucun élément n'est sélectionné
    if (!isExpanded) {
        // Si l'élément n'est pas agrandi, on l'agrandit et on met à jour le texte
        element.classList.add('expanded');
        items.forEach(item => {
            if (item !== element) {
                item.classList.add('hidden');
            }
        });

        // Met à jour le texte selon la boîte cliquée
        if (element.classList.contains('py')) {
            technoText.textContent = "J'ai déja utilisé python plusieurs fois dans ma scolarité et j'ai tout les connaissances de base dans ce langage.";
        } else if (element.classList.contains('github')) {
            technoText.textContent = "J'ai utilisé plusieurs fois GitHub pour des projets personnels notamment pour heberger mon site en ligne gratuitement pour effectuer des test sur ma page en developpement.";
        } else if (element.classList.contains('SQL')) {
            technoText.textContent = "Le langage SQL est un langage que j'ai appris en Terminal car il était au programme de mon bac d'informatique. Je connais donc son utilité est l'ensemble des commandes de base jusqu'au jointure.";
        }
    } else {
        // Si l'élément est déjà agrandi, on revient à l'état initial et au texte de base
        technoText.textContent = "Voici les technologies que j'ai déjà utilisé ou étudié.";
    }
}
