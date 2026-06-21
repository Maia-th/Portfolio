document.addEventListener("DOMContentLoaded", () => {
    
    // 1. SISTEMA DE ALTERNÂNCIA DE TEMA (CLARO / ESCURO)
    const themeToggle = document.getElementById("theme-toggle");
    const body = document.body;

    // Recupera tema do LocalStorage ou define escuro por padrão
    const savedTheme = localStorage.getItem("portfolio-theme") || "dark-theme";
    body.className = savedTheme;

    themeToggle.addEventListener("click", () => {
        if (body.classList.contains("dark-theme")) {
            body.className = "light-theme";
            localStorage.setItem("portfolio-theme", "light-theme");
        } else {
            body.className = "dark-theme";
            localStorage.setItem("portfolio-theme", "dark-theme");
        }
    });

    // 2. RENDERIZAÇÃO DA LINHA DO TEMPO (HISTÓRICO PROFISSIONAL)
    const timelineTarget = document.getElementById("timeline-target");
    if (timelineTarget && typeof experiencesData !== 'undefined') {
        const timelineWrapper = document.createElement("div");
        timelineWrapper.className = "timeline";

        experiencesData.forEach(exp => {
            const item = document.createElement("div");
            item.className = "timeline-item";
            item.innerHTML = `
                <div class="timeline-dot"></div>
                <div class="timeline-header">
                    <span class="timeline-role">${exp.role}</span>
                    <span class="timeline-date">${exp.date}</span>
                </div>
                <div class="timeline-company">${exp.company}</div>
                <p class="timeline-desc">${exp.description}</p>
            `;
            timelineWrapper.appendChild(item);
        });
        timelineTarget.appendChild(timelineWrapper);
    }

    // 3. RENDERIZAÇÃO DE PROJETOS UNIFICADOS (COM CARROSSEL E DOTS)
    const projectsTarget = document.getElementById("unified-projects-target");
    
    if (projectsTarget && typeof projectsData !== 'undefined') {
        
        projectsData.forEach(project => {
            const row = document.createElement("div");
            row.className = "project-row";

            // Monta as tags
            const tagsHTML = project.technologies.map(tech => `<span class="p-tag">${tech}</span>`).join('');

            // Monta os links com a classe .btn-text em volta do texto para ocultar no mobile
            let linksHTML = '';
            
            if (project.siteLink) {
                linksHTML += `<a href="${project.siteLink}" target="_blank" class="btn btn-primary"><span class="btn-text">Acessar</span><i class="ph ph-link"></i></a>`;
            } 
            else if (project.galleryPaths && project.galleryPaths.length > 0) {
                linksHTML += `<button class="btn btn-primary btn-open-gallery" data-id="${project.id}"><span class="btn-text">Ver Galeria</span> <i class="ph ph-arrows-out"></i></button>`;
            }

            if (project.codeLink) linksHTML += `<a href="${project.codeLink}" target="_blank" class="btn btn-secondary"><i class="ph ph-github-logo"></i> <span class="btn-text" style="margin-left: 0.3rem;">Código</span></a>`;
            if (project.videoLink) linksHTML += `<a href="${project.videoLink}" target="_blank" class="btn btn-secondary"><i class="ph ph-youtube-logo"></i> <span class="btn-text" style="margin-left: 0.3rem;">Demonstração</span></a>`;

            // LÓGICA DE MÍDIA
            let mediaHTML = '';
            
            if (project.galleryPaths && project.galleryPaths.length > 0) {
                const slidesHTML = project.galleryPaths.map(path => `<img src="${path}" alt="Print do projeto ${project.title}" onerror="this.style.display='none'">`).join('');
                
                let controlsHTML = '';
                let indicatorsHTML = '';

                // Só cria setas e bolinhas se tiver mais de 1 imagem
                if (project.galleryPaths.length > 1) {
                    controlsHTML = `
                        <button class="carousel-btn prev" aria-label="Anterior"><i class="ph ph-caret-left"></i></button>
                        <button class="carousel-btn next" aria-label="Próximo"><i class="ph ph-caret-right"></i></button>
                    `;

                    // Gera as bolinhas (a primeira recebe a classe 'active')
                    const dots = project.galleryPaths.map((_, index) => 
                        `<span class="dot ${index === 0 ? 'active' : ''}" data-index="${index}"></span>`
                    ).join('');

                    indicatorsHTML = `
                        <div class="carousel-indicators">
                            ${dots}
                        </div>
                    `;
                }

                mediaHTML = `
                    <div class="carousel">
                        <div class="carousel-track">
                            ${slidesHTML}
                        </div>
                        ${controlsHTML}
                        ${indicatorsHTML}
                    </div>
                `;
            } else {
                mediaHTML = `<img src="${project.coverPath}" alt="Capa do projeto ${project.title}" onerror="this.style.display='none'">`;
            }

            row.innerHTML = `
                <div class="project-media">
                    <div class="project-header">
                        <h4>${project.title}</h4>
                        <div class="project-tags">
                            ${tagsHTML}
                        </div>
                    </div>
                    <div class="project-img-container">
                        ${mediaHTML}
                    </div>
                    <div class="project-links">
                        ${linksHTML}
                    </div>
                </div>
                <div class="project-info">
                    <p class="project-description">${project.description}</p>
                </div>
            `;
            projectsTarget.appendChild(row);
        });

        // 4. ATIVAÇÃO DO MOTOR DOS CARROSSEIS (COM DOTS E AUTO-PLAY)
        const carousels = document.querySelectorAll('.carousel');
        
        carousels.forEach(carousel => {
            const track = carousel.querySelector('.carousel-track');
            const slides = track.querySelectorAll('img');
            const prevBtn = carousel.querySelector('.prev');
            const nextBtn = carousel.querySelector('.next');
            const dots = carousel.querySelectorAll('.dot'); // Seleciona as bolinhas
            
            if (!prevBtn || !nextBtn || slides.length <= 1) return; 

            let currentIndex = 0;
            let autoPlayTimer;

            // Função principal para mover a trilha e atualizar as bolinhas
            const updateCarousel = () => {
                const moveAmount = currentIndex * 100;
                track.style.transform = `translateX(-${moveAmount}%)`;

                // Atualiza a classe 'active' das bolinhas
                dots.forEach((dot, index) => {
                    if (index === currentIndex) {
                        dot.classList.add('active');
                    } else {
                        dot.classList.remove('active');
                    }
                });
            };

            const moveToNext = () => {
                currentIndex = (currentIndex === slides.length - 1) ? 0 : currentIndex + 1;
                updateCarousel();
            };

            const moveToPrev = () => {
                currentIndex = (currentIndex === 0) ? slides.length - 1 : currentIndex - 1;
                updateCarousel();
            };

            // Cliques nas setas
            nextBtn.addEventListener('click', () => {
                moveToNext();
                resetAutoPlay();
            });

            prevBtn.addEventListener('click', () => {
                moveToPrev();
                resetAutoPlay();
            });

            // Cliques nas bolinhas (Dots)
            dots.forEach((dot, index) => {
                dot.addEventListener('click', () => {
                    currentIndex = index;
                    updateCarousel();
                    resetAutoPlay();
                });
            });

            // Lógica de Auto-Play
            const startAutoPlay = () => {
                autoPlayTimer = setInterval(moveToNext, 5000);
            };

            const stopAutoPlay = () => {
                clearInterval(autoPlayTimer);
            };

            const resetAutoPlay = () => {
                stopAutoPlay();
                startAutoPlay();
            };

            // Pausa no hover
            carousel.addEventListener('mouseenter', stopAutoPlay);
            carousel.addEventListener('mouseleave', startAutoPlay);

            // Inicia automático
            startAutoPlay();
        });

        // 5. ATIVAÇÃO DO MODAL DE TELA CHEIA (LIGHTBOX)
        const modal = document.getElementById('gallery-modal');
        const modalImg = document.getElementById('modal-img');
        const modalClose = document.querySelector('.modal-close');
        const modalPrev = modal.querySelector('.modal-btn.prev');
        const modalNext = modal.querySelector('.modal-btn.next');
        const modalIndicators = document.getElementById('modal-indicators');

        let currentModalGallery = [];
        let currentModalIndex = 0;

        // Função para atualizar a imagem do modal
        const updateModal = () => {
            modalImg.src = currentModalGallery[currentModalIndex];
            
            // Atualiza bolinhas do modal
            Array.from(modalIndicators.children).forEach((dot, index) => {
                dot.classList.toggle('active', index === currentModalIndex);
            });
        };

        // Evento para abrir o modal
        document.querySelectorAll('.btn-open-gallery').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const projectId = e.currentTarget.getAttribute('data-id');
                const project = projectsData.find(p => p.id === projectId);
                
                if (project && project.galleryPaths) {
                    currentModalGallery = project.galleryPaths;
                    currentModalIndex = 0; // Abre sempre na primeira imagem
                    
                    // Esconde os botões de navegação se a galeria tiver só 1 imagem
                    const hasMultiple = currentModalGallery.length > 1;
                    modalPrev.style.display = hasMultiple ? 'flex' : 'none';
                    modalNext.style.display = hasMultiple ? 'flex' : 'none';

                    // Cria as bolinhas do modal dinamicamente
                    if (hasMultiple) {
                        modalIndicators.innerHTML = currentModalGallery.map((_, i) => 
                            `<span class="dot ${i === 0 ? 'active' : ''}" data-index="${i}"></span>`
                        ).join('');

                        // Adiciona evento de clique nas bolinhas do modal
                        Array.from(modalIndicators.children).forEach((dot, i) => {
                            dot.addEventListener('click', () => {
                                currentModalIndex = i;
                                updateModal();
                            });
                        });
                    } else {
                        modalIndicators.innerHTML = '';
                    }

                    updateModal();
                    modal.style.display = 'flex';
                    // Um pequeno delay para a transição de opacidade funcionar
                    setTimeout(() => modal.classList.add('show'), 10);
                    
                    // Trava o scroll do fundo da página
                    document.body.style.overflow = 'hidden'; 
                }
            });
        });

        // Fechar o Modal
        const closeModal = () => {
            modal.classList.remove('show');
            setTimeout(() => modal.style.display = 'none', 300); // Aguarda o tempo da transição
            document.body.style.overflow = 'auto'; // Destrava o scroll
        };

        if (modalClose) modalClose.addEventListener('click', closeModal);
        
        // Fecha o modal se clicar fora da imagem (no fundo escuro)
        if (modal) {
            modal.addEventListener('click', (e) => {
                if (e.target === modal) closeModal(); 
            });
        }

        // Navegação do Modal
        if (modalNext) {
            modalNext.addEventListener('click', () => {
                currentModalIndex = (currentModalIndex === currentModalGallery.length - 1) ? 0 : currentModalIndex + 1;
                updateModal();
            });
        }

        if (modalPrev) {
            modalPrev.addEventListener('click', () => {
                currentModalIndex = (currentModalIndex === 0) ? currentModalGallery.length - 1 : currentModalIndex - 1;
                updateModal();
            });
        }
    }
});