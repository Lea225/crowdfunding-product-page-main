
function toggleMenu() {
    var mobileMenu = document.querySelector('.mobile-menu');
    var overlay = document.getElementById('overlay');
    var hamburgerIcon = document.getElementById('icon-hamburger');
    var closeMenuIcon = document.getElementById('icon-close-menu');

    if (mobileMenu.style.display === 'none' || mobileMenu.style.display === '') {
        mobileMenu.style.display = 'block';
        overlay.style.display = 'block';
        hamburgerIcon.style.display = 'none';
        closeMenuIcon.style.display = 'block';
    } else {
        mobileMenu.style.display = 'none';
        overlay.style.display = 'none';
        hamburgerIcon.style.display = 'block';
        closeMenuIcon.style.display = 'none';
    }
}
document.addEventListener('DOMContentLoaded', function() {
    const rewardButtons = document.querySelectorAll('.reward-btn');
    const overlay = document.querySelector('.overlay');
    const choiceMenu = document.getElementById('choice-menu');

    rewardButtons.forEach(button => {
        button.addEventListener('click', function() {
            overlay.classList.add('active');
            choiceMenu.classList.add('active');
        });
    });
});
// Pour afficher l'overlay
function showOverlay() {
    document.getElementById("overlay").style.display = "block";
}

// Pour masquer l'overlay
function hideOverlay() {
    document.getElementById("overlay").style.display = "none";
}
document.addEventListener('DOMContentLoaded', function() {
    const radioInputs = document.querySelectorAll('.price-div input[type="radio"]');
    
    radioInputs.forEach(input => {
      input.addEventListener('click', function() {
        const parentDiv = input.closest('.price-div');

        // Réinitialiser les styles de tous les price-div
        document.querySelectorAll('.price-div').forEach(div => {
          div.style.borderColor = 'hsla(0, 0%, 48%, 0.3)';
        });

        // Réinitialiser les styles de tous les input radio
        document.querySelectorAll('.price-div input[type="radio"]').forEach(radio => {
          radio.style.borderColor = 'hsla(0, 0%, 48%, 0.3)';
        });

        // Réinitialiser les styles de tous les choice-price-stats
        document.querySelectorAll('.choice-price-stats').forEach(stats => {
          stats.style.display = 'none';
        });

        // Appliquer les styles au parent de l'input radio cliqué
        parentDiv.style.borderColor = 'hsl(176, 50%, 47%)';
        input.style.borderColor = 'hsl(176, 50%, 47%)';

        // Afficher le choice-price-stats correspondant
        const choiceStats = parentDiv.querySelector('.choice-price-stats');
        if (choiceStats) {
          choiceStats.style.display = 'block';
        }
      });
    });
  });

document.addEventListener('DOMContentLoaded', function() {
    const closeIcon = document.querySelector('.icon-close-div img');
    const choiceMenu = document.getElementById('choice-menu');

    closeIcon.addEventListener('click', function() {
        choiceMenu.style.display = 'none';
        overlay.style.display = 'none'; // Assurez-vous que l'overlay est masqué également
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const continueButtons = document.querySelectorAll('.cta-3');
    const thankDiv = document.querySelector('.thank-div');
    const overlay = document.querySelector('.overlay');
    const choiceMenu = document.getElementById('choice-menu');

    continueButtons.forEach(button => {
        button.addEventListener('click', function(event) {
            event.preventDefault(); // Empêcher le comportement par défaut du lien
            thankDiv.style.display = 'block'; // Afficher la thank-div
            choiceMenu.style.display = 'none'; // Masquer la choice-menu
            overlay.style.display = 'block'; // Afficher l'overlay
        });
    });
});
document.addEventListener('DOMContentLoaded', function() {
    const noRewardInput = document.querySelector('.no-reward');
    const choiceMenu = document.querySelector('.choice-menu');
    const thankDiv = document.querySelector('.thank-div');

    noRewardInput.addEventListener('click', function() {
        if (noRewardInput.checked) {
            choiceMenu.style.display = 'none';
            thankDiv.style.display = 'block';
        } else {
            choiceMenu.style.display = 'block';
            thankDiv.style.display = 'none';
        }
    });
});
