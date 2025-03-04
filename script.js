document.addEventListener("DOMContentLoaded", () => {
    const slides = document.querySelectorAll(".hero-slide");
    const prevBtn = document.querySelector(".prev-btn");
    const nextBtn = document.querySelector(".next-btn");
    let currentIndex = 0;

    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.classList.remove("active");
            if (i === index) {
                slide.classList.add("active");
            }
        });
    }

    function nextSlide() {
        currentIndex = (currentIndex + 1) % slides.length;
        showSlide(currentIndex);
    }

    function prevSlide() {
        currentIndex = (currentIndex - 1 + slides.length) % slides.length;
        showSlide(currentIndex);
    }

    nextBtn.addEventListener("click", nextSlide);
    prevBtn.addEventListener("click", prevSlide);

    // Auto-play du carousel toutes les 5 secondes
    setInterval(nextSlide, 5000);
});







  
    const filterButtons = document.querySelectorAll(".filter-button");
    filterButtons.forEach((button) => {
      button.addEventListener("click", function () {
        filterButtons.forEach((btn) => btn.classList.remove("active"));
        this.classList.add("active");
        const filterCategory = this.textContent.toLowerCase();
        if (filterCategory === "all") {
          document.querySelectorAll(".movie-card").forEach((card) => {
            card.closest(".col-md-2").style.display = "block";
          });
        } else {
        }
      });
    });

    {
      card.addEventListener("mouseleave", function () {
        this.style.transform = "scale(1)";
        this.style.boxShadow = "none";
        const overlay = this.querySelector(".movie-overlay");
        if (overlay) {
          overlay.remove();
        }
      });
    };
  
  /*************************-- Cette barre de recherche :
  *Enregistre toutes les recherches passées (historique).
  *Empêche les doublons dans l'historique.
  *Affiche automatiquement la dernière recherche dans le champ. -- */
    document.addEventListener("DOMContentLoaded", function () {
      const searchForm = document.querySelector("form.d-flex");
      const searchInput = searchForm?.querySelector("input");
    
      if (searchForm && searchInput) {
        // Charger l'historique des recherches (si disponible)
        let searchHistory = JSON.parse(localStorage.getItem("searchHistory")) || [];
    
        // Pré-remplir avec la dernière recherche si disponible
        if (searchHistory.length > 0) {
          searchInput.value = searchHistory[searchHistory.length - 1]; // Dernière recherche
        }
    
        searchForm.addEventListener("submit", function (e) {
          e.preventDefault();
          const searchTerm = searchInput.value.trim();
    
          if (searchTerm) {
            // Ajouter la nouvelle recherche en évitant les doublons
            if (!searchHistory.includes(searchTerm)) {
              searchHistory.push(searchTerm);
            }
    
            // Stocker en localStorage
            localStorage.setItem("searchHistory", JSON.stringify(searchHistory));
    
            console.log(`Recherche enregistrée : ${searchTerm}`);
            alert(`🔍 Recherche de : ${searchTerm}\nHistorique mis à jour !`);
          }
        });
      }
    });
    
    const loginForm = document.getElementById("loginForm");
    if (loginForm) {
      loginForm.addEventListener("submit", function (e) {
        e.preventDefault();
        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;
        alert("Connexion réussie! (Simulation)");
        const loginModalEl = document.getElementById("loginModal");
        if (loginModalEl) {
          jQuery("#loginModal").modal("hide");
        }
      });
    }
    const registerForm = document.getElementById("registerForm");
    if (registerForm) {
      registerForm.addEventListener("submit", function (e) {
        e.preventDefault();
        const firstName = document.getElementById("firstName").value;
        const lastName = document.getElementById("lastName").value;
        const email = document.getElementById("registerEmail").value;
        const password = document.getElementById("registerPassword").value;
        const confirmPassword = document.getElementById("confirmPassword").value;
        if (password !== confirmPassword) {
          alert("Les mots de passe ne correspondent pas!");
          return;
        }
        alert("Inscription réussie! (Simulation)");
        const registerModalEl = document.getElementById("registerModal");
        if (registerModalEl) {
          jQuery("#registerModal").modal("hide");
        }
      });
    }
  
    const contactForm = document.querySelector(".contact-form");
    if (contactForm) {
      contactForm.addEventListener("submit", function (e) {
        e.preventDefault();
        const inputs = this.querySelectorAll("input, textarea");
        let isValid = true;
        inputs.forEach((input) => {
          if (input.required && !input.value.trim()) {
            isValid = false;
            input.classList.add("is-invalid");
          } else {
            input.classList.remove("is-invalid");
          }
        });
        if (isValid) {
          alert("Votre message a été envoyé avec succès! (Simulation)");
          this.reset();
        } else {
          alert("Veuillez remplir tous les champs obligatoires.");
        }
      });
    }
  
    const subscribeBtn = document.querySelector(".subscribe-section button");
    if (subscribeBtn) {
      subscribeBtn.addEventListener("click", function () {
        const emailInput = document.querySelector(".subscribe-section input");
        const email = emailInput.value.trim();
        if (!email) {
          alert("Veuillez entrer une adresse email valide.");
          return;
        }
        const emailRegex = /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/;
        if (!emailRegex.test(email)) {
          alert("Veuillez entrer une adresse email valide.");
          return;
        }
        alert("Merci de vous être abonné! (Simulation)");
        emailInput.value = "";
      });
    }
  
    const scrollToTop = document.querySelector(".scroll-to-top");
    if (scrollToTop) {
      window.addEventListener("scroll", function () {
        if (window.scrollY > 300) {
          scrollToTop.classList.add("show");
        } else {
          scrollToTop.classList.remove("show");
        }
      });
      scrollToTop.addEventListener("click", function () {
        window.scrollTo({ top: 0, behavior: "smooth" });
      });
    }
  
    const scrollToTopBtn = document.querySelector(".scroll-to-top-btn");
    if (scrollToTopBtn) {
      scrollToTopBtn.addEventListener("click", function () {
        window.scrollTo({ top: 0, behavior: "smooth" });
      });
    }
  
    const plusFilmsButtons = document.querySelectorAll(".btn-danger.px-4");
    plusFilmsButtons.forEach((button) => {
      button.addEventListener("click", function () {
        alert("Chargement de plus de films... (Fonctionnalité à implémenter)");
      });
    });
  
    document.addEventListener("click", function (e) {
      if (
        e.target.closest(".movie-btn") &&
        e.target.closest(".movie-btn").querySelector(".fa-play")
      ) {
        e.preventDefault();
        const movieCard = e.target.closest(".movie-card");
        const movieTitle = movieCard.nextElementSibling
          ? movieCard.nextElementSibling.textContent
          : "ce film";
        alert(
          "Lecture de la bande-annonce de " +
            movieTitle +
            " (Fonctionnalité à implémenter)"
        );
      }
    });
    document.addEventListener("click", function (e) {
      if (
        e.target.closest(".movie-btn") &&
        e.target.closest(".movie-btn").querySelector(".fa-heart")
      ) {
        e.preventDefault();
        const movieCard = e.target.closest(".movie-card");
        const movieTitle = movieCard.nextElementSibling
          ? movieCard.nextElementSibling.textContent
          : "ce film";
        alert(
          movieTitle +
            " a été ajouté à vos favoris (Fonctionnalité à implémenter)"
        );
      }
    });
  
  
  document.addEventListener("DOMContentLoaded", function () {
    const style = document.createElement("style");
    style.textContent = `
          .movie-overlay {
              position: absolute;
              top: 0; left: 0;
              width: 100%; height: 100%;
              background-color: rgba(0, 0, 0, 0.7);
              display: flex; justify-content: center; align-items: center;
              opacity: 0;
              transition: opacity 0.3s ease;
          }
          .movie-card:hover .movie-overlay { opacity: 1; }
          .movie-overlay-buttons { display: flex; gap: 10px; }
          .movie-btn {
              width: 40px; height: 40px;
              border-radius: 50%;
              background-color: #ff0000; color: white;
              border: none;
              display: flex; justify-content: center; align-items: center;
              transition: transform 0.2s ease;
          }
          .movie-btn:hover { transform: scale(1.1); }
          .scroll-to-top {
              position: fixed;
              bottom: 20px; right: 20px;
              width: 40px; height: 40px;
              border-radius: 50%;
              background-color: #ff0000; color: white;
              border: none;
              display: flex; justify-content: center; align-items: center;
              opacity: 0; visibility: hidden;
              transition: all 0.3s ease;
              z-index: 1000;
          }
          .scroll-to-top.show { opacity: 1; visibility: visible; }
          .is-invalid { border-color: #dc3545 !important; }
      `;
    document.head.appendChild(style);
  });
  
  
  
  /***************************************************************************************************************************/
  
  
    function loadTrailer(url) {
        let trailerContainer = document.getElementById('trailerContainer');
        let trailerFrame = document.getElementById('trailerFrame');
        
        trailerFrame.src = url;
        trailerContainer.classList.add('show');
    }
  
    function closeTrailer() {
        let trailerContainer = document.getElementById('trailerContainer');
        trailerContainer.classList.remove('show');
        
        // Petite code pour éviter que le son continue après fermeture
        setTimeout(() => {
            document.getElementById('trailerFrame').src = "";
        }, 500);
    }
    
    function loadTrailer(url) {
            document.getElementById('trailerFrame').src = url;
        }
  
  
        /*****************************************************************************************************/
  
        document.addEventListener('DOMContentLoaded', function() {
          const loadMoreBtn = document.getElementById('load-more-btn');
          const movieContainer = document.getElementById('movie-container');
      
          // Tableau de films supplémentaires (à adapter avec tes données)
          const additionalMovies = [
              {
                  image: 'img/inception-2010-scifi.jpg',
                  title: 'Inception 2',
                  year: '2024'
              },
              {
                  image: 'img/zoolander-2001-comedie.jpg',
                  title: 'Zoolander 3',
                  year: '2025'
              },
              {
                  image: 'img/shutterisland-2010-thriller.jpg',
                  title: 'Shutter Island 2',
                  year: '2026'
              },
              // Ajoute d'autres films ici
          ];
      
          let currentMovieIndex = 0; // Index pour suivre les films supplémentaires
      
          loadMoreBtn.addEventListener('click', function() {
              const newRow = document.createElement('div');
              newRow.classList.add('row', 'mb-4');
      
              for (let i = 0; i < 6; i++) { // Ajoute 6 films à chaque clic
                  if (currentMovieIndex < additionalMovies.length) {
                      const movie = additionalMovies[currentMovieIndex];
      
                      const movieCol = document.createElement('div');
                      movieCol.classList.add('col-md-2');
      
                      const movieCard = document.createElement('div');
                      movieCard.classList.add('movie-card');
      
                      const movieImage = document.createElement('img');
                      movieImage.src = movie.image;
                      movieImage.alt = movie.title;
                      movieImage.classList.add('img-fluid');
      
                      const movieTitle = document.createElement('p');
                      movieTitle.classList.add('movie-title');
                      movieTitle.textContent = movie.title;
      
                      const movieYear = document.createElement('p');
                      movieYear.classList.add('movie-year');
                      movieYear.textContent = movie.year;
      
                      movieCard.appendChild(movieImage);
                      movieCol.appendChild(movieCard);
                      movieCol.appendChild(movieTitle);
                      movieCol.appendChild(movieYear);
                      newRow.appendChild(movieCol);
      
                      currentMovieIndex++;
                  } else {
                      loadMoreBtn.disabled = true; // Désactive le bouton si tous les films sont chargés
                      break;
                  }
              }
              movieContainer.appendChild(newRow);
          });
      });
  
  
  
  
  /****************************************Features movies***************************************************************/
  const initialMovies = [
    {
        image: 'img/lesdeuxtours-2002-aventure.jpg',
        title: 'God\'s Compass',
        year: '2016',
        category: 'Aventure'
    },
    {
        image: 'img/lesdeuxtours-2002-aventure.jpg',
        title: 'God\'s Compass 2',
        year: '2016',
        category: 'Actions'
    },
    {
        image: 'img/lesdeuxtours-2002-aventure.jpg',
        title: 'God\'s Compass 3',
        year: '2016',
        category: 'Policiers'
    },
    {
        image: 'img/lesdeuxtours-2002-aventure.jpg',
        title: 'God\'s Compass 4',
        year: '2016',
        category: 'Aventure'
    },
    {
        image: 'img/lesdeuxtours-2002-aventure.jpg',
        title: 'God\'s Compass 5',
        year: '2016',
        category: 'Actions'
    },
    {
        image: 'img/lesdeuxtours-2002-aventure.jpg',
        title: 'God\'s Compass 6',
        year: '2016',
        category: 'Policiers'
    },
    {
        image: 'img/hostel-2005-thriller.jpg',
        title: 'War Dogs',
        year: '2016',
        category: 'Thriller'
    },
    {
        image: 'img/hostel-2005-thriller.jpg',
        title: 'War Dogs 2',
        year: '2016',
        category: 'Actions'
    },
    {
        image: 'img/hostel-2005-thriller.jpg',
        title: 'War Dogs 3',
        year: '2016',
        category: 'Policiers'
    },
    {
        image: 'img/hostel-2005-thriller.jpg',
        title: 'War Dogs 4',
        year: '2016',
        category: 'Thriller'
    },
    {
        image: 'img/hostel-2005-thriller.jpg',
        title: 'War Dogs 5',
        year: '2016',
        category: 'Actions'
    },
    {
        image: 'img/hostel-2005-thriller.jpg',
        title: 'War Dogs 6',
        year: '2016',
        category: 'Policiers'
    },
  ];
  
  const additionalMovies = [
    {
        image: 'img/lesdeuxtours-2002-aventure.jpg',
        title: 'God\'s Compass 7',
        year: '2017',
        category: 'Aventure'
    },
    {
        image: 'img/lesdeuxtours-2002-aventure.jpg',
        title: 'God\'s Compass 8',
        year: '2017',
        category: 'Actions'
    },
    {
        image: 'img/lesdeuxtours-2002-aventure.jpg',
        title: 'God\'s Compass 9',
        year: '2017',
        category: 'Policiers'
    },
    {
        image: 'img/hostel-2005-thriller.jpg',
        title: 'War Dogs 7',
        year: '2017',
        category: 'Thriller'
    },
    {
        image: 'img/hostel-2005-thriller.jpg',
        title: 'War Dogs 8',
        year: '2017',
        category: 'Actions'
    },
    {
        image: 'img/hostel-2005-thriller.jpg',
        title: 'War Dogs 9',
        year: '2017',
        category: 'Policiers'
    },
  ];
  
  /****************************************Features series***************************************************************/
  
    document.addEventListener('DOMContentLoaded', function() {
      const loadMoreBtn = document.getElementById('load-more-btn');
      const movieContainer = document.getElementById('movie-container');
      const filterButtons = document.querySelectorAll('.filter-button');
  
      let currentMovieIndex = 0;
      let filteredMovies = initialMovies;
      let displayedMovies = [...initialMovies];
  
      function displayMovies(movies) {
          movieContainer.innerHTML = '';
          const row1 = document.createElement('div');
          row1.classList.add('row', 'mb-4');
          const row2 = document.createElement('div');
          row2.classList.add('row', 'mb-5');
  
          movies.forEach((movie, index) => {
              const movieCol = document.createElement('div');
              movieCol.classList.add('col-md-2');
              const movieCard = document.createElement('div');
              movieCard.classList.add('movie-card');
              const movieImage = document.createElement('img');
              movieImage.src = movie.image;
              movieImage.alt = movie.title;
              movieImage.classList.add('img-fluid');
              const movieTitle = document.createElement('p');
              movieTitle.classList.add('movie-title');
              movieTitle.textContent = movie.title;
              const movieYear = document.createElement('p');
              movieYear.classList.add('movie-year');
              movieYear.textContent = movie.year;
  
              movieCard.appendChild(movieImage);
              movieCol.appendChild(movieCard);
              movieCol.appendChild(movieTitle);
              movieCol.appendChild(movieYear);
  
              if (index < 6) {
                  row1.appendChild(movieCol);
              } else {
                  row2.appendChild(movieCol);
              }
          });
  
          movieContainer.appendChild(row1);
          movieContainer.appendChild(row2);
          displayedMovies = [...movies];
      }
  
      displayMovies(filteredMovies);
  
      filterButtons.forEach(button => {
          button.addEventListener('click', function() {
              filterButtons.forEach(btn => btn.classList.remove('active'));
              this.classList.add('active');
  
              const category = this.textContent;
  
              if (category === 'All') {
                  filteredMovies = initialMovies;
              } else {
                  filteredMovies = initialMovies.filter(movie => movie.category === category);
              }
  
              currentMovieIndex = 0;
              displayMovies(filteredMovies);
          });
      });
  
      loadMoreBtn.addEventListener('click', function() {
          const newMovies = [];
          let moviesToAdd = [];
  
          if (filteredMovies === initialMovies) {
              moviesToAdd = additionalMovies;
          } else {
              moviesToAdd = additionalMovies.filter(movie => filteredMovies.some(film => film.category === movie.category));
          }
  
          for (let i = 0; i < 6; i++) {
              if (currentMovieIndex < moviesToAdd.length) {
                  const movie = moviesToAdd[currentMovieIndex];
                  newMovies.push(movie);
                  currentMovieIndex++;
              } else {
                  loadMoreBtn.disabled = true;
                  break;
              }
          }
          displayMovies([...displayedMovies, ...newMovies]);
      });
  });
      
  /****************************************Features series***************************************************************/
  
  const initialSeries = [
    {
        image: 'img/lesdeuxtours-2002-aventure.jpg',
        title: 'God\'s Compass',
        year: '2016',
        category: 'Aventure'
    },
    {
        image: 'img/lepatientanglais-1996-dramatique.jpg',
        title: 'Bad Moms',
        year: '2016',
        category: 'Comédie'
    },
    {
        image: 'img/intouchables-2011-comedie.jpg',
        title: 'Jason Bourne',
        year: '2016',
        category: 'Actions'
    },
    {
        image: 'img/shutterisland-2010-thriller.jpg',
        title: 'Rezort',
        year: '2016',
        category: 'Thriller'
    },
    {
        image: 'img/hostel-2005-thriller.jpg',
        title: 'Peter',
        year: '2016',
        category: 'Thriller'
    },
    {
        image: 'img/Survivestyle5-2004-comedie.jpg',
        title: 'ISRA 88',
        year: '2016',
        category: 'Comédie'
    },
    {
        image: 'img/hostel-2005-thriller.jpg',
        title: 'War Dogs',
        year: '2016',
        category: 'Thriller'
    },
    {
        image: 'img/swissarmyman-2016-comedie.jpg',
        title: 'The Other Side',
        year: '2016',
        category: 'Comédie'
    },
    {
        image: 'img/inception-2010-scifi.jpg',
        title: 'Civil War',
        year: '2016',
        category: 'Actions'
    },
    {
        image: 'img/thefall-2006-dramatique.jpg',
        title: 'The Secret Life of Pets',
        year: '2016',
        category: 'Animation'
    },
    {
        image: 'img/WhatWeDoInTheShadows-2014-comedie.jpg',
        title: 'The Jungle Book',
        year: '2016',
        category: 'Aventure'
    },
    {
        image: 'img/zoolander-2001-comedie.jpg',
        title: 'Assassin\'s Creed 3',
        year: '2016',
        category: 'Actions'
    }
  ];
  
  const additionalSeries = [
    {
        image: 'img/inception-2010-scifi.jpg',
        title: 'Inception 2',
        year: '2024',
        category: 'Actions'
    },
    {
        image: 'img/zoolander-2001-comedie.jpg',
        title: 'Zoolander 3',
        year: '2025',
        category: 'Comédie'
    },
    {
        image: 'img/shutterisland-2010-thriller.jpg',
        title: 'Shutter Island 2',
        year: '2026',
        category: 'Policiers'
    },
    // Ajoute d'autres series ici
  ];
  
  
    
  
  src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"