// script.js - Grupollo Complete Functionality
// GSAP + ScrollTrigger + Cart + Login + Filters + FAQ + Animations

gsap.registerPlugin(ScrollTrigger);

document.addEventListener("DOMContentLoaded", () => {
  // ================================================================
  // 1. GSAP ANIMATIONS - 3D Floating & Entrance Effects
  // ================================================================

  // --- Navbar entrance ---
  const navTl = gsap.timeline({ defaults: { ease: "power3.out" } });
  const hasLoader = !!document.getElementById("pageLoader");
  const startDelay = hasLoader ? 1.4 : 0.2;

  if (document.querySelector("#navbar")) {
    navTl.from("#navbar", {
      y: -90,
      opacity: 0,
      duration: 0.8,
      delay: startDelay,
    });
  }
  if (document.querySelector(".logo-anim")) {
    navTl.from(
      ".logo-anim",
      { scale: 0.8, opacity: 0, duration: 0.6 },
      "-=0.4",
    );
  }
  if (document.querySelectorAll(".nav-link").length > 0) {
    navTl.from(
      ".nav-link",
      { y: -20, opacity: 0, duration: 0.5, stagger: 0.08 },
      "-=0.4",
    );
  }
  var cartBtnEntrance = document.getElementById("cartBtn");
  if (cartBtnEntrance) {
    cartBtnEntrance.style.transform = "none";
    cartBtnEntrance.style.opacity = "1";
  }
  if (document.querySelector(".login-anim")) {
    navTl.from(".login-anim", { x: 30, opacity: 0, duration: 0.6 }, "-=0.3");
  }

  // --- Hero text entrance (all pages) ---
  const heroTexts = document.querySelectorAll(".hero-text");
  if (heroTexts.length > 0) {
    gsap.from(".hero-text", {
      y: 60,
      opacity: 0,
      duration: 1,
      stagger: 0.15,
      ease: "power3.out",
      delay: startDelay + 0.2,
    });
  }

  // --- Hero word-split animation (Static Branding) ---
  const heroWords = document.querySelectorAll(".z-10 .hero-word");
  if (heroWords.length > 0) {
    gsap.from(heroWords, {
      y: "100%",
      opacity: 0,
      duration: 1,
      stagger: 0.1,
      ease: "power4.out",
      delay: startDelay + 0.3,
    });
  }

  const heroSubtitles = document.querySelectorAll(
    ".z-10 .hero-subtitle, .z-10 .hero-cta-group, .z-10 .hero-phone",
  );
  if (heroSubtitles.length > 0) {
    gsap.from(heroSubtitles, {
      y: 30,
      opacity: 0,
      duration: 0.8,
      stagger: 0.15,
      ease: "power3.out",
      delay: startDelay + 0.8,
    });
  }

  // --- Background blob animation ---
  if (document.querySelector(".bg-blob")) {
    gsap.to(".bg-blob", {
      y: 40,
      x: 25,
      scale: 1.05,
      duration: 5,
      yoyo: true,
      repeat: -1,
      ease: "sine.inOut",
    });
  }

  // --- Parallax mouse movement for floating elements ---
  const parallaxElements = document.querySelectorAll(".parallax-float");
  if (parallaxElements.length > 0) {
    document.addEventListener("mousemove", (e) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 2;
      const y = (e.clientY / window.innerHeight - 0.5) * 2;
      parallaxElements.forEach((el, i) => {
        const speed = (i + 1) * 8;
        gsap.to(el, {
          x: x * speed,
          y: y * speed,
          duration: 1,
          ease: "power2.out",
        });
      });
    });
  }

  // --- Feature icons entrance ---
  if (document.querySelectorAll(".feature-icon").length > 0) {
    gsap.from(".feature-icon", {
      scrollTrigger: { trigger: ".feature-icon", start: "top 85%" },
      y: 40,
      opacity: 0,
      duration: 0.7,
      stagger: 0.1,
      ease: "back.out(1.5)",
    });
  }

  // --- Product cards 3D entrance ---
  const productCards = document.querySelectorAll(".product-card");
  if (productCards.length > 0) {
    const productsTrigger =
      document.querySelector("#popular-products") ||
      document.querySelector("#productsGrid") ||
      document.querySelector(".product-panel") ||
      productCards[0];

    gsap.set(productCards, { autoAlpha: 0, y: 80, rotationX: 10 });

    const productCardsAnim = {
      autoAlpha: 1,
      y: 0,
      rotationX: 0,
      duration: 0.8,
      stagger: 0.12,
      ease: "back.out(1.3)",
      clearProps: "autoAlpha,y,rotationX",
    };

    if (productsTrigger) {
      productCardsAnim.scrollTrigger = {
        trigger: productsTrigger,
        start: "top 80%",
      };
    }

    gsap.to(productCards, productCardsAnim);

    // 3D tilt on hover for product cards
    productCards.forEach((card) => {
      card.addEventListener("mousemove", (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        const rotateX = (y - centerY) / 20;
        const rotateY = (centerX - x) / 20;

        gsap.to(card, {
          rotationX: rotateX,
          rotationY: rotateY,
          transformPerspective: 1000,
          duration: 0.3,
          ease: "power2.out",
        });
      });

      card.addEventListener("mouseleave", () => {
        gsap.to(card, {
          rotationX: 0,
          rotationY: 0,
          duration: 0.6,
          ease: "elastic.out(1, 0.3)",
        });
      });
    });
  }

  // --- Product image 3D floating animation ---
  document.querySelectorAll(".product-img-3d").forEach((img, i) => {
    gsap.to(img, {
      y: gsap.utils.random(-8, -14),
      rotation: gsap.utils.random(-2, 2),
      duration: gsap.utils.random(2, 3.5),
      yoyo: true,
      repeat: -1,
      ease: "sine.inOut",
      delay: i * 0.2,
    });
  });

  // --- Section titles entrance ---
  document.querySelectorAll(".section-title").forEach((title) => {
    gsap.from(title, {
      scrollTrigger: { trigger: title, start: "top 85%" },
      y: 40,
      opacity: 0,
      duration: 0.8,
      ease: "power2.out",
    });
  });

  document.querySelectorAll(".section-subtitle").forEach((sub) => {
    gsap.from(sub, {
      scrollTrigger: { trigger: sub, start: "top 85%" },
      y: 20,
      opacity: 0,
      duration: 0.6,
      ease: "power2.out",
    });
  });

  // --- Category cards entrance ---
  const categoryCards = document.querySelectorAll(".category-card");
  if (categoryCards.length > 0) {
    const categoriesTrigger =
      document.querySelector("#categories") ||
      categoryCards[0].closest("section") ||
      categoryCards[0];

    gsap.set(categoryCards, { autoAlpha: 0, y: 60, scale: 0.9 });

    const categoryAnim = {
      y: 0,
      autoAlpha: 1,
      scale: 1,
      duration: 0.7,
      stagger: 0.1,
      ease: "back.out(1.5)",
      clearProps: "autoAlpha,y,scale",
    };

    if (categoriesTrigger) {
      categoryAnim.scrollTrigger = {
        trigger: categoriesTrigger,
        start: "top 80%",
      };
    }

    gsap.to(categoryCards, categoryAnim);
  }

  // --- Testimonial cards entrance ---
  if (document.querySelectorAll(".testimonial-card").length > 0) {
    const testimonialCards = document.querySelectorAll(".testimonial-card");
    const testimonialsTrigger =
      document.querySelector("#testimonials") ||
      testimonialCards[0].closest("section") ||
      testimonialCards[0];

    const testimonialFrom = {
      y: 32,
      scale: 0.98,
    };
    const testimonialTo = {
      y: 0,
      scale: 1,
      duration: 0.7,
      stagger: 0.12,
      ease: "power2.out",
      clearProps: "transform",
    };

    if (testimonialsTrigger) {
      testimonialTo.scrollTrigger = {
        trigger: testimonialsTrigger,
        start: "top 80%",
      };
    }

    gsap.fromTo(testimonialCards, testimonialFrom, testimonialTo);
  }

  // --- Recipe cards expand/collapse (nosotros page) ---
  const recipeCards = document.querySelectorAll(".recipe-card");
  if (recipeCards.length > 0) {
    recipeCards.forEach((card) => {
      const toggle = () => {
        const willOpen = !card.classList.contains("is-open");
        recipeCards.forEach((other) => {
          if (other !== card) {
            other.classList.remove("is-open");
            other.setAttribute("aria-expanded", "false");
          }
        });
        card.classList.toggle("is-open", willOpen);
        card.setAttribute("aria-expanded", willOpen ? "true" : "false");
      };

      card.addEventListener("click", toggle);
      card.addEventListener("keydown", (event) => {
        if (event.key === "Enter" || event.key === " ") {
          event.preventDefault();
          toggle();
        }
      });
    });
  }

  // --- About page: store photos ---
  if (document.querySelectorAll(".about-cards .store-photo").length > 0) {
    gsap.from(".about-cards .store-photo", {
      scrollTrigger: { trigger: ".about-cards", start: "top 80%" },
      y: 80,
      rotation: 0,
      duration: 1,
      stagger: 0.3,
      ease: "back.out(1.5)",
      clearProps: "transform,opacity",
    });
  }

  if (document.querySelector(".about-text")) {
    gsap.from(".about-text > *", {
      scrollTrigger: { trigger: ".about-text", start: "top 80%" },
      x: 60,
      duration: 0.8,
      stagger: 0.15,
      ease: "power2.out",
      clearProps: "transform,opacity",
    });
  }

  // --- About value cards ---
  if (document.querySelectorAll(".about-value-card").length > 0) {
    gsap.from(".about-value-card", {
      scrollTrigger: { trigger: ".about-value-card", start: "top 80%" },
      y: 60,
      scale: 0.9,
      duration: 0.7,
      stagger: 0.15,
      ease: "back.out(1.3)",
      clearProps: "transform,opacity",
    });
  }

  // --- Gallery items ---
  if (document.querySelectorAll(".gallery-item").length > 0) {
    gsap.from(".gallery-item", {
      scrollTrigger: { trigger: ".gallery-item", start: "top 85%" },
      y: 40,
      opacity: 0,
      scale: 0.95,
      duration: 0.6,
      stagger: 0.1,
      ease: "power2.out",
    });
  }

  // --- Contact cards ---
  if (document.querySelectorAll(".contact-card").length > 0) {
    gsap.from(".contact-card", {
      scrollTrigger: { trigger: ".contact-card", start: "top 85%" },
      scale: 0.9,
      duration: 0.7,
      stagger: 0.12,
      ease: "back.out(1.3)",
    });
  }

  // --- Contact form ---
  if (document.querySelector(".contact-form")) {
    gsap.from(".contact-form", {
      scrollTrigger: { trigger: ".contact-form", start: "top 80%" },
      x: -60,
      opacity: 0,
      duration: 1,
      ease: "power2.out",
    });
  }

  // --- Counter animation (nosotros page) ---
  document.querySelectorAll(".counter").forEach((counter) => {
    const target = parseInt(counter.dataset.target);
    gsap.to(counter, {
      scrollTrigger: { trigger: counter, start: "top 85%" },
      textContent: target,
      duration: 2,
      ease: "power2.out",
      snap: { textContent: 1 },
      onUpdate: function () {
        counter.textContent = Math.ceil(
          parseFloat(counter.textContent),
        ).toLocaleString();
      },
    });
  });

  // --- FAQ items entrance ---
  if (document.querySelectorAll(".faq-item").length > 0) {
    gsap.from(".faq-item", {
      scrollTrigger: { trigger: ".faq-item", start: "top 85%" },
      y: 30,
      opacity: 0,
      duration: 0.5,
      stagger: 0.1,
      ease: "power2.out",
    });
  }

  // --- Footer entrance ---
  gsap.from("footer > div > *", {
    scrollTrigger: { trigger: "footer", start: "top 90%" },
    y: 30,
    opacity: 0,
    duration: 0.6,
    stagger: 0.1,
    ease: "power2.out",
  });

  // --- Navbar scroll effect ---
  window.addEventListener("scroll", () => {
    const nav = document.getElementById("navbar");
    if (nav) {
      if (window.scrollY > 50) {
        nav.classList.add("nav-scrolled");
      } else {
        nav.classList.remove("nav-scrolled");
      }
    }
  });

  // ================================================================
  // 1.5 HERO CAROUSEL LOGIC
  // ================================================================

  const heroStage = document.getElementById("heroStage");
  if (heroStage) {
    const slides = heroStage.querySelectorAll(".float-slide");
    const dots = document.querySelectorAll("#heroDots .hd");

    // Side description panel that updates per slide
    const sidePanel = document.getElementById("heroSidePanel");
    const hspEyebrow = sidePanel
      ? sidePanel.querySelector(".hsp-eyebrow")
      : null;
    const hspTitle = sidePanel ? sidePanel.querySelector(".hsp-title") : null;
    const hspDesc = sidePanel ? sidePanel.querySelector(".hsp-desc") : null;
    const hspAdd = sidePanel ? sidePanel.querySelector(".hsp-add") : null;

    function syncSidePanel(slide) {
      if (!sidePanel || !slide) return;
      const eyebrow = slide.dataset.eyebrow || "⭐ Top de temporada";
      const name = slide.dataset.name || "";
      const desc = slide.dataset.desc || "";
      const id = slide.dataset.id || "";
      const price = slide.dataset.price || "";

      // Small fade-then-update animation
      sidePanel.style.opacity = "0";
      sidePanel.style.transform = "translateY(-50%) translateX(8px)";
      setTimeout(() => {
        if (hspEyebrow) hspEyebrow.textContent = eyebrow;
        if (hspTitle) hspTitle.textContent = name;
        if (hspDesc) hspDesc.textContent = desc;
        if (hspAdd) {
          hspAdd.dataset.id = id;
          hspAdd.dataset.name = name;
          hspAdd.dataset.price = price;
        }
        sidePanel.style.opacity = "1";
        sidePanel.style.transform = "translateY(-50%) translateX(0)";
      }, 220);
    }

    // Hero "Añadir al carrito" button — forwards to addItemToCart (defined later in script.js scope)
    if (hspAdd) {
      hspAdd.addEventListener("click", () => {
        const id = hspAdd.dataset.id;
        const name = hspAdd.dataset.name;
        const price = parseFloat(hspAdd.dataset.price);
        if (!id || !name || isNaN(price)) return;

        // Button pop animation
        if (typeof gsap !== "undefined") {
          gsap.to(hspAdd, {
            scale: 0.88,
            duration: 0.1,
            yoyo: true,
            repeat: 1,
          });
        }
        // Call the cart system — these helpers are scoped to this IIFE so they
        // are accessible here directly (this code lives in the same scope).
        if (typeof addItemToCart === "function") {
          addItemToCart(id, name, price);
        }
        if (typeof showToast === "function") {
          showToast(`${name} agregado al pedido`, "success");
        }
        // Bounce the navbar cart icon
        const cb = document.getElementById("cartBtn");
        if (cb && typeof gsap !== "undefined") {
          gsap.fromTo(
            cb,
            { scale: 1 },
            {
              scale: 1.4,
              duration: 0.2,
              yoyo: true,
              repeat: 1,
              ease: "back.out(3)",
            },
          );
        }
      });
    }

    if (slides.length > 1) {
      const intervalMs = 4500;
      let current = Array.from(slides).findIndex((s) =>
        s.classList.contains("active"),
      );
      if (current < 0) current = 0;
      let timerId = null;

      const apply = (nextIndex) => {
        current = (nextIndex + slides.length) % slides.length;
        slides.forEach((s, i) => s.classList.toggle("active", i === current));
        dots.forEach((d, i) => d.classList.toggle("active", i === current));
        syncSidePanel(slides[current]);
      };

      const stop = () => {
        if (timerId) {
          clearTimeout(timerId);
          timerId = null;
        }
      };

      const start = () => {
        stop();
        timerId = setTimeout(() => {
          apply(current + 1);
          start();
        }, intervalMs);
      };

      apply(current);
      start();

      dots.forEach((dot) => {
        dot.addEventListener("click", () => {
          const idx = parseInt(dot.dataset.i, 10);
          if (Number.isFinite(idx)) apply(idx);
          start();
        });
      });

      const canHover =
        typeof window !== "undefined" &&
        typeof window.matchMedia === "function" &&
        window.matchMedia("(hover: hover) and (pointer: fine)").matches;

      if (canHover) {
        heroStage.addEventListener("mouseenter", stop);
        heroStage.addEventListener("mouseleave", start);
      }

      document.addEventListener("visibilitychange", () => {
        if (document.hidden) stop();
        else start();
      });
      window.addEventListener("blur", stop);
      window.addEventListener("focus", start);
    } else if (slides.length === 1) {
      // Only one slide: still sync the panel once
      syncSidePanel(slides[0]);
    }
  } else {
    const heroSlides = document.querySelectorAll(".hero-slide");
    if (heroSlides.length > 1) {
      const intervalMs = 6000;
      let currentHeroSlide = Array.from(heroSlides).findIndex((s) =>
        s.classList.contains("active"),
      );
      if (currentHeroSlide < 0) currentHeroSlide = 0;
      let timerId = null;

      const apply = (nextIndex) => {
        currentHeroSlide = (nextIndex + heroSlides.length) % heroSlides.length;
        heroSlides.forEach((s, i) =>
          s.classList.toggle("active", i === currentHeroSlide),
        );
      };

      const stop = () => {
        if (timerId) {
          clearTimeout(timerId);
          timerId = null;
        }
      };

      const start = () => {
        stop();
        timerId = setTimeout(() => {
          apply(currentHeroSlide + 1);
          start();
        }, intervalMs);
      };

      apply(currentHeroSlide);
      start();

      document.addEventListener("visibilitychange", () => {
        if (document.hidden) stop();
        else start();
      });
      window.addEventListener("blur", stop);
      window.addEventListener("focus", start);
    }
  }

  // ================================================================
  // 2. MOBILE MENU
  // ================================================================

  const mobileMenuBtn = document.getElementById("mobileMenuBtn");
  const mobileMenu = document.getElementById("mobileMenu");
  const closeMobileMenu = document.getElementById("closeMobileMenu");

  function setMobileMenuState(isOpen) {
    if (!mobileMenu) return;
    if (isOpen) {
      mobileMenu.classList.add("active");
    } else {
      mobileMenu.classList.remove("active");
    }
    document.body.classList.toggle("menu-open", isOpen);
    if (mobileMenuBtn) {
      mobileMenuBtn.setAttribute("aria-expanded", isOpen ? "true" : "false");
      mobileMenuBtn.setAttribute("aria-label", isOpen ? "Cerrar menú" : "Menú");
    }
  }

  if (mobileMenuBtn && mobileMenu) {
    mobileMenuBtn.setAttribute("aria-expanded", "false");
    mobileMenuBtn.addEventListener("click", () => {
      const willOpen = !mobileMenu.classList.contains("active");
      setMobileMenuState(willOpen);
    });
  }
  if (closeMobileMenu && mobileMenu) {
    closeMobileMenu.addEventListener("click", () => setMobileMenuState(false));
  }
  // Close on link click
  if (mobileMenu) {
    mobileMenu.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => setMobileMenuState(false));
    });
    mobileMenu.addEventListener("click", (event) => {
      if (event.target === mobileMenu) setMobileMenuState(false);
    });
  }

  // ================================================================
  // 3. LOGIN / REGISTER MODAL
  // ================================================================

  const loginModal = document.getElementById("loginModal");
  const loginBtn = document.getElementById("loginBtn");
  const closeLoginBtns = document.querySelectorAll(".close-login");
  const modalContent = loginModal
    ? loginModal.querySelector(".modal-content")
    : null;
  const loginForm = document.getElementById("loginForm");
  const registerForm = document.getElementById("registerForm");
  const tabBtns = document.querySelectorAll(".tab-btn");

  // Mobile login button
  document.querySelectorAll(".open-login-mobile").forEach((btn) => {
    btn.addEventListener("click", () => {
      setMobileMenuState(false);
      setTimeout(openLogin, 300);
    });
  });

  window.addEventListener("keydown", (event) => {
    if (
      event.key === "Escape" &&
      mobileMenu &&
      mobileMenu.classList.contains("active")
    ) {
      setMobileMenuState(false);
    }
  });

  window.addEventListener("resize", () => {
    if (window.innerWidth >= 768) setMobileMenuState(false);
  });

  function openLogin() {
    if (!loginModal) return;
    loginModal.classList.remove("hidden");
    requestAnimationFrame(() => {
      loginModal.classList.remove("opacity-0");
      if (modalContent) {
        modalContent.classList.remove("scale-95");
        modalContent.classList.add("scale-100");
      }
    });
  }

  function closeLogin() {
    if (!loginModal) return;
    loginModal.classList.add("opacity-0");
    if (modalContent) {
      modalContent.classList.remove("scale-100");
      modalContent.classList.add("scale-95");
    }
    setTimeout(() => loginModal.classList.add("hidden"), 300);
  }

  if (loginBtn) loginBtn.addEventListener("click", openLogin);
  closeLoginBtns.forEach((btn) => btn.addEventListener("click", closeLogin));
  if (loginModal) {
    loginModal.addEventListener("click", (e) => {
      if (e.target === loginModal) closeLogin();
    });
  }

  // Tab switching (login / register)
  tabBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      const tab = btn.dataset.tab;
      tabBtns.forEach((b) => {
        b.classList.remove("active", "text-brandBlack", "border-brandGold");
        b.classList.add("text-gray-400", "border-transparent");
      });
      btn.classList.add("active", "text-brandBlack", "border-brandGold");
      btn.classList.remove("text-gray-400", "border-transparent");

      const incentive = document.getElementById("regIncentive");
      if (tab === "login") {
        loginForm.classList.remove("hidden");
        registerForm.classList.add("hidden");
        if (incentive) incentive.classList.add("hidden");
      } else {
        loginForm.classList.add("hidden");
        registerForm.classList.remove("hidden");
        if (incentive) incentive.classList.remove("hidden");
      }
    });
  });

  // Login form submission
  if (loginForm) {
    loginForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const email = loginForm.querySelector('input[type="email"]').value;
      const password = loginForm.querySelector('input[type="password"]').value;

      if (!email || !password) {
        showToast("Por favor completa todos los campos", "error");
        return;
      }

      // Check localStorage for registered users
      const users = JSON.parse(localStorage.getItem("grupolloUsers")) || [];
      const user = users.find(
        (u) => u.email === email && u.password === password,
      );

      if (user) {
        localStorage.setItem("grupolloCurrentUser", JSON.stringify(user));
        showToast(`Bienvenido, ${user.name}!`, "success");
        closeLogin();
        updateLoginButton();
      } else {
        // Demo login - accept any credentials
        const demoUser = { name: email.split("@")[0], email: email };
        localStorage.setItem("grupolloCurrentUser", JSON.stringify(demoUser));
        showToast(`Bienvenido, ${demoUser.name}!`, "success");
        closeLogin();
        updateLoginButton();
      }
    });
  }

  // Register form submission
  if (registerForm) {
    registerForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const inputs = registerForm.querySelectorAll("input");
      const name = inputs[0].value;
      const email = inputs[1].value;
      const phone = inputs[2].value;
      const password = inputs[3].value;
      const confirm = inputs[4].value;

      if (!name || !email || !password || !confirm) {
        showToast("Por favor completa todos los campos obligatorios", "error");
        return;
      }

      if (password !== confirm) {
        showToast("Las contraseñas no coinciden", "error");
        return;
      }

      if (password.length < 4) {
        showToast("La contraseña debe tener al menos 4 caracteres", "error");
        return;
      }

      // Save to localStorage
      const users = JSON.parse(localStorage.getItem("grupolloUsers")) || [];
      if (users.find((u) => u.email === email)) {
        showToast("Este correo ya está registrado", "error");
        return;
      }

      const newUser = {
        name,
        email,
        phone,
        password,
        discount: 10,
        discountCode: "BIENVENIDA10",
      };
      users.push(newUser);
      localStorage.setItem("grupolloUsers", JSON.stringify(users));
      localStorage.setItem(
        "grupolloCurrentUser",
        JSON.stringify({
          name,
          email,
          phone,
          discount: 10,
          discountCode: "BIENVENIDA10",
        }),
      );

      showToast(
        `🎉 Cuenta creada! Tienes 10% de descuento. Cupón: BIENVENIDA10`,
        "success",
      );
      applyDiscount();
      closeLogin();
      updateLoginButton();
      registerForm.reset();
    });
  }

  // Update login button based on session
  function updateLoginButton() {
    const user = JSON.parse(localStorage.getItem("grupolloCurrentUser"));
    const loginBtnEl = document.getElementById("loginBtn");
    if (!loginBtnEl) return;

    if (user) {
      loginBtnEl.textContent = user.name;
      loginBtnEl.removeEventListener("click", openLogin);
      loginBtnEl.addEventListener("click", handleUserMenu);
    } else {
      loginBtnEl.textContent = "Login";
      loginBtnEl.removeEventListener("click", handleUserMenu);
      loginBtnEl.addEventListener("click", openLogin);
    }
  }

  function handleUserMenu() {
    const user = JSON.parse(localStorage.getItem("grupolloCurrentUser"));
    if (
      user &&
      confirm(`Sesión activa: ${user.name}\n\n¿Deseas cerrar sesión?`)
    ) {
      localStorage.removeItem("grupolloCurrentUser");
      showToast("Sesión cerrada correctamente", "success");
      updateLoginButton();
      updateCartUI(); // Recalculate cart without discount
    }
  }

  updateLoginButton();

  // ================================================================
  // 5. PRODUCT FILTERS (producto.html)
  // ================================================================

  function productHtml(product) {
    if (!product) return "";
    let labelHtml = "";
    if (product.label) {
      labelHtml = `<div
      class="absolute -top-6 right-0 z-[100] shadow-xl text-white px-4 py-1.5 rounded-xl text-[0.7rem] font-black uppercase tracking-wider transform rotate-[8deg] border-2 border-white whitespace-nowrap ${product.label_fondo ? product.label_fondo : "bg-brandRed"}"
      > ${product.label}
      </div>`;
    }
    return `<div
                class="bg-brandDarkGray rounded-[35px] p-6 relative pt-24 mt-20 shadow-xl product-card border border-white/5 hover:border-brandGold/50"
                data-category="${product.category}"
                data-id="${product.id}"
                data-name="${product.name}"
                data-price="${product.price}"
              >
                ${labelHtml}
                <img
                  src="img/Productos/Molida_de_Pollo.png"
                  alt="${product.name}"
                  class="product-img-3d w-40 md:w-48 h-auto"
                />
                <h3
                  class="text-xl font-fredoka text-white text-center mb-1 mt-2"
                >
                ${product.name}
                </h3>
                <p class="text-center text-brandGold mb-4 text-sm">
                  Versátil y saludable
                </p>
                <div class="grid grid-cols-1 space-y-6 items-center">
                  <span class="text-xl text-center font-extrabold text-brandRed"
                    >$${product.price}<span class="text-xs font-normal text-gray-400"
                      >/kg</span
                    ></span
                  >
                </div>
                <div class="flex gap-2">
                  <button
                    class="btn-primary text-sm px-4 py-2 add-to-cart"
                    data-id="${product.id}"
                    data-name="${product.name}"
                    data-price="${product.price}"
                  >
                    Añadir
                  </button>
                  <div
                    class="flex items-center gap-3 bg-white p-1 rounded-full shadow-inner border-2 border-[#F2B50F] container-qty"
                  >
                    <button
                      class="w-10 h-10 rounded-full bg-[#FFF4D2] text-brandBlack font-black flex items-center justify-center hover:bg-[#111111] hover:text-[#F2B50F] transition-colors qty-minus"
                    >
                      −
                    </button>
                    <input
                      type="text"
                      class="font-black text-brandBlack w-8 text-center text-lg grow"
                      value="1"
                    />
                    <button
                      class="w-10 h-10 rounded-full bg-[#FFF4D2] text-brandBlack font-black flex items-center justify-center hover:bg-[#111111] hover:text-[#F2B50F] transition-colors qty-plus"
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>`;
  }

  function botonesFiltro(filterBtns, productsGrid) {
    filterBtns.forEach((btn) => {
      btn.addEventListener("click", () => {
        const filter = btn.dataset.filter;

        // Update active state
        filterBtns.forEach((b) => {
          b.classList.remove("active", "bg-[#D15E1D]", "text-white");
          b.classList.add("bg-white", "text-[#4A2C10]");
        });
        btn.classList.add("active", "bg-[#D15E1D]", "text-white");
        btn.classList.remove("bg-white", "text-[#4A2C10]");

        // Filter products with animation
        const cards = productsGrid.querySelectorAll(".product-card");
        cards.forEach((card) => {
          const category = card.dataset.category;
          if (filter === "all" || category === filter) {
            gsap.to(card, {
              opacity: 1,
              scale: 1,
              y: 0,
              duration: 0.4,
              ease: "back.out(1.2)",
              display: "block",
            });
            card.style.display = "";
          } else {
            gsap.to(card, {
              opacity: 0,
              scale: 0.8,
              y: 20,
              duration: 0.3,
              ease: "power2.in",
              onComplete: () => {
                card.style.display = "none";
              },
            });
          }
        });
      });
    });
  }

  const filterBtns = document.querySelectorAll(".filter-btn");
  const productsGridFrescos = document.getElementById("productsGridFrescos");
  const productsGridCongelados = document.getElementById(
    "productsGridCongelados",
  );

  const productsFrescos = [
    {
      id: 1,
      name: "Filete de Tilapia",
      category: "pescado / camarones",
      price: 98,
      label: "✨ Nuevo",
      label_fondo: "bg-brandGold",
    },
    {
      id: 2,
      name: "Camarones",
      category: "pescado / camarones",
      price: 98,
      label: "🔥 Popular",
      label_fondo: "bg-brandRed",
    },
    {
      id: 3,
      name: "Pescado Empanizado",
      category: "pescado / camarones",
      price: 98,
      label: "⭐ Familiar",
      label_fondo: "bg-brandBlack",
    },
    {
      id: 4,
      name: "Dedos de Pescado",
      category: "pescado / camarones",
      price: 98,
      label: "❄️ Congelado",
      label_fondo: "bg-blue-600",
    },
    {
      id: 5,
      name: "Dedos de Queso",
      category: "pescado / camarones",
      price: 98,
      label: "🔥 Mayoreo",
      label_fondo: "bg-brandRed",
    },

    { id: 20, name: "Pierna de Cerdo", category: "cerdo y res", price: 98 },
    {
      id: 21,
      name: "Hamburguesa de Sirloin",
      category: "cerdo y res",
      price: 98,
    },
    { id: 22, name: "Arrachera", category: "cerdo y res", price: 98 },

    {
      id: 40,
      name: "Nuggets de Pollo",
      category: "pollo y nuggets",
      price: 98,
    },
    {
      id: 41,
      name: "Tenders de Pollo",
      category: "pollo y nuggets",
      price: 98,
    },
    {
      id: 42,
      name: "Condon Blue / Pechuga Rellena",
      category: "pollo y nuggets",
      price: 98,
    },
    {
      id: 43,
      name: "Milanesa de Pollo",
      category: "pollo y nuggets",
      price: 98,
    },
    {
      id: 44,
      name: "Hamburguesa de Pollo",
      category: "pollo y nuggets",
      price: 98,
    },
    {
      id: 45,
      name: "Medallon de Pollo",
      category: "pollo y nuggets",
      price: 98,
    },
    { id: 46, name: "Nuggetsaurio", category: "pollo y nuggets", price: 98 },
  ];
  const productsCongelados = [
    { id: 60, name: "Aros de Cebolla", category: "papas y snacks", price: 98 },
    {
      id: 61,
      name: "Camote a la Francesa",
      category: "papas y snacks",
      price: 98,
    },
    { id: 62, name: "Papas Gajo", category: "papas y snacks", price: 98 },
    {
      id: 63,
      name: "Papas a la Francesa Crunch",
      category: "papas y snacks",
      price: 98,
    },
    { id: 64, name: "Tortita de Papa", category: "papas y snacks", price: 98 },
    { id: 65, name: "Papa Wafle", category: "papas y snacks", price: 98 },

    {
      id: 80,
      name: "Trozos de Pechuga Empanizadas",
      category: "alitas y boneless",
      price: 98,
    },
    {
      id: 81,
      name: "Boneless Naturales",
      category: "alitas y boneless",
      price: 98,
    },
    {
      id: 82,
      name: "Boneless Pimienta Limón",
      category: "alitas y boneless",
      price: 98,
    },
    {
      id: 82,
      name: "Boneless Valentina",
      category: "alitas y boneless",
      price: 98,
    },
  ];

  let productsHtml = "";
  let producto = null;
  if (productsFrescos.length > 0 && productsGridFrescos) {
    for (let i = 0; i < productsFrescos.length; i++) {
      producto = productHtml(productsFrescos[i]);
      productsHtml += producto;
    }
    productsGridFrescos.innerHTML = productsHtml;
  }
  productsHtml = "";
  if (productsCongelados.length > 0 && productsGridCongelados) {
    for (let i = 0; i < productsCongelados.length; i++) {
      producto = productHtml(productsCongelados[i]);
      productsHtml += producto;
    }
    productsGridCongelados.innerHTML = productsHtml;
  }

  botonesAddToCart();
  if (filterBtns.length > 0 && productsGridFrescos) {
    botonesFiltro(filterBtns, productsGridFrescos);
  }

  // ================================================================
  // 6. FAQ ACCORDION (contacto.html)
  // ================================================================

  const faqQuestions = document.querySelectorAll(".faq-question");
  faqQuestions.forEach((question) => {
    question.addEventListener("click", () => {
      const answer = question.nextElementSibling;
      const icon = question.querySelector(".faq-icon");
      const isOpen = answer.style.maxHeight && answer.style.maxHeight !== "0px";

      // Close all
      document.querySelectorAll(".faq-answer").forEach((a) => {
        a.style.maxHeight = "0px";
      });
      document.querySelectorAll(".faq-icon").forEach((i) => {
        i.style.transform = "rotate(0deg)";
      });

      // Open clicked if it was closed
      if (!isOpen) {
        answer.style.maxHeight = answer.scrollHeight + "px";
        icon.style.transform = "rotate(180deg)";
      }
    });
  });

  // ================================================================
  // 7. CONTACT FORM (contacto.html)
  // ================================================================

  const contactForm = document.getElementById("contactForm");
  if (contactForm) {
    contactForm.addEventListener("submit", (e) => {
      e.preventDefault();
      showToast(
        "Mensaje enviado correctamente. Te contactaremos pronto.",
        "success",
      );
      contactForm.reset();

      // Success animation
      gsap.fromTo(
        contactForm,
        { scale: 1 },
        {
          scale: 1.02,
          duration: 0.2,
          yoyo: true,
          repeat: 1,
          ease: "power2.inOut",
        },
      );
    });
  }

  // ================================================================
  // 8. TOAST NOTIFICATIONS
  // ================================================================

  function showToast(message, type = "success") {
    const container = document.getElementById("toastContainer");
    if (!container) return;

    const toast = document.createElement("div");
    const bgColor = type === "success" ? "bg-[#4A2C10]" : "bg-[#D15E1D]";
    const icon =
      type === "success"
        ? '<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" /></svg>'
        : '<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clip-rule="evenodd" /></svg>';

    toast.className = `toast ${bgColor} text-white px-5 py-3 rounded-2xl shadow-xl flex items-center gap-3 max-w-sm`;
    toast.innerHTML = `${icon}<span class="text-sm font-semibold">${message}</span>`;

    container.appendChild(toast);

    // Auto remove
    setTimeout(() => {
      toast.classList.add("hide");
      setTimeout(() => toast.remove(), 300);
    }, 3500);
  }

  // Refresh ScrollTrigger at the end to ensure all positions are correct
  ScrollTrigger.refresh();
});

// =================================================================
// GRUPOLLO EXTENSIONS — Seasonal Themes · WhatsApp · Scroll Reveals
// =================================================================

// ── WhatsApp contact number (Mexico: +52 55854094)
var GRUPOLLO_WA = "525628328887";

// ── Seasonal Themes Config
var SEASONAL_THEMES_CONFIG = {
  mundial: {
    banner:
      "⚽ ¡Copa del Mundo 2026 • USA · México · Canadá! Celebra con el mejor pollo 🇲🇽🏆",
    bg: "linear-gradient(90deg, #006847 0%, #1a1a1a 50%, #CE1126 100%)",
    heroTag: "⚽ Especial Copa del Mundo 2026",
    ranges: [{ start: [4, 1], end: [7, 19] }],
    decos: [
      { emoji: "⚽", left: "5%", top: "30%", delay: "0s", size: "4rem" },
      { emoji: "🏆", left: "88%", top: "55%", delay: "2s", size: "3.5rem" },
      { emoji: "🇲🇽", left: "50%", top: "18%", delay: "4.5s", size: "3rem" },
      { emoji: "⚽", left: "75%", top: "78%", delay: "1.5s", size: "5rem" },
    ],
  },
  madres: {
    banner: "🌸 ¡Feliz Día de las Madres! El mejor sabor para mamá 💖",
    bg: "linear-gradient(90deg, #e91e8c 0%, #ff69b4 50%, #e91e8c 100%)",
    heroTag: "🌸 ¡Celebra a Mamá!",
    ranges: [{ start: [5, 8], end: [5, 12] }],
    decos: [
      { emoji: "🌸", left: "6%", top: "32%", delay: "0s", size: "3.5rem" },
      { emoji: "💐", left: "85%", top: "52%", delay: "2s", size: "4rem" },
      { emoji: "❤️", left: "46%", top: "20%", delay: "3.5s", size: "2.5rem" },
    ],
  },
  san_valentin: {
    banner: "❤️ ¡Feliz San Valentín! Comparte el mejor sabor con quien amas 💕",
    bg: "linear-gradient(90deg, #e53e3e 0%, #ed64a6 50%, #e53e3e 100%)",
    heroTag: "❤️ San Valentín",
    ranges: [{ start: [2, 12], end: [2, 16] }],
    decos: [
      { emoji: "❤️", left: "7%", top: "35%", delay: "0s", size: "3.5rem" },
      { emoji: "💕", left: "87%", top: "55%", delay: "2s", size: "3rem" },
      { emoji: "🌹", left: "42%", top: "20%", delay: "4s", size: "2.5rem" },
    ],
  },
  halloween: {
    banner: "🎃 ¡Halloween en Grupollo! Ofertas de... ¡miedo! 👻🕸️",
    bg: "linear-gradient(90deg, #d97706 0%, #111111 50%, #d97706 100%)",
    heroTag: "🎃 Halloween",
    ranges: [{ start: [10, 28], end: [10, 31] }],
    decos: [
      { emoji: "🎃", left: "5%", top: "30%", delay: "0s", size: "4rem" },
      { emoji: "👻", left: "85%", top: "48%", delay: "2s", size: "3.5rem" },
      { emoji: "🕸️", left: "46%", top: "22%", delay: "4s", size: "2.5rem" },
    ],
  },
  muertos: {
    banner: "💀 ¡Día de Muertos! El sabor que nunca muere 🌼🕯️",
    bg: "linear-gradient(90deg, #7c3aed 0%, #ea580c 50%, #7c3aed 100%)",
    heroTag: "🌼 Día de Muertos",
    ranges: [{ start: [11, 1], end: [11, 3] }],
    decos: [
      { emoji: "💀", left: "6%", top: "30%", delay: "0s", size: "3.5rem" },
      { emoji: "🌼", left: "85%", top: "50%", delay: "2.5s", size: "4rem" },
      { emoji: "🕯️", left: "47%", top: "22%", delay: "4.5s", size: "2.5rem" },
    ],
  },
  independencia: {
    banner: "🇲🇽 ¡Viva México! Celebra la Independencia con Grupollo 🦅🎉",
    bg: "linear-gradient(90deg, #166534 0%, #dc2626 50%, #166534 100%)",
    heroTag: "🇲🇽 ¡Viva México!",
    ranges: [{ start: [9, 13], end: [9, 17] }],
    decos: [
      { emoji: "🇲🇽", left: "5%", top: "28%", delay: "0s", size: "3.5rem" },
      { emoji: "🦅", left: "86%", top: "50%", delay: "2.5s", size: "4rem" },
      { emoji: "🎉", left: "46%", top: "20%", delay: "5s", size: "3rem" },
    ],
  },
  navidad: {
    banner: "🎄 ¡Feliz Navidad! Los mejores sabores para tu cena navideña 🎅⭐",
    bg: "linear-gradient(90deg, #15803d 0%, #dc2626 50%, #15803d 100%)",
    heroTag: "🎄 Navidad",
    ranges: [{ start: [12, 20], end: [12, 31] }],
    decos: [
      { emoji: "🎄", left: "5%", top: "28%", delay: "0s", size: "4rem" },
      { emoji: "⭐", left: "86%", top: "48%", delay: "2s", size: "3.5rem" },
      { emoji: "❄️", left: "47%", top: "20%", delay: "4.5s", size: "2.5rem" },
    ],
  },
};

// ── Theme detection
function getActiveSeasonalTheme() {
  var now = new Date();
  var m = now.getMonth() + 1;
  var d = now.getDate();
  for (var key in SEASONAL_THEMES_CONFIG) {
    var theme = SEASONAL_THEMES_CONFIG[key];
    for (var i = 0; i < theme.ranges.length; i++) {
      var r = theme.ranges[i];
      var afterStart = m > r.start[0] || (m === r.start[0] && d >= r.start[1]);
      var beforeEnd = m < r.end[0] || (m === r.end[0] && d <= r.end[1]);
      if (afterStart && beforeEnd) return theme;
    }
  }
  return null;
}

// ── Apply seasonal theme to page
function applySeasonalTheme() {
  var theme = getActiveSeasonalTheme();
  if (!theme) return;

  var banner = document.getElementById("seasonalBanner");
  if (banner) {
    banner.innerHTML = theme.banner;
    banner.style.background = theme.bg;
    banner.style.color = "white";
    banner.classList.remove("hidden");
    document.body.classList.add("has-banner");
    gsap.from(banner, {
      y: -50,
      opacity: 0,
      duration: 1,
      ease: "back.out(1.7)",
      delay: 0.3,
    });

    // Recalculate navbar offset right after banner render/animation starts.
    requestAnimationFrame(() => {
      if (typeof adjustNavbar === "function") adjustNavbar();
    });
    setTimeout(() => {
      if (typeof adjustNavbar === "function") adjustNavbar();
    }, 350);
  }

  // Floating decorations
  if (theme.decos) {
    theme.decos.forEach(function (deco) {
      var el = document.createElement("div");
      el.className = "theme-deco-fixed";
      el.textContent = deco.emoji;
      el.style.cssText =
        "left:" +
        deco.left +
        ";top:" +
        deco.top +
        ";animation-delay:" +
        deco.delay +
        ";font-size:" +
        deco.size +
        ";";
      document.body.appendChild(el);
    });
  }

  // Hero tag
  var heroTag = document.getElementById("heroSeasonTag");
  if (heroTag) {
    heroTag.textContent = theme.heroTag;
    heroTag.classList.remove("hidden");
    gsap.from(heroTag, {
      x: -40,
      opacity: 0,
      duration: 0.9,
      ease: "back.out(1.5)",
      delay: 1.2,
    });
  }
}

// ── Directional GSAP scroll reveals (data-reveal attribute)
function initScrollReveals() {
  document.querySelectorAll("[data-reveal]").forEach(function (el) {
    var dir = el.getAttribute("data-reveal");
    var delay = parseFloat(el.getAttribute("data-delay") || "0");
    var dur = parseFloat(el.getAttribute("data-dur") || "0.9");

    var from = { opacity: 0, duration: dur, delay: delay, ease: "power3.out" };

    switch (dir) {
      case "left":
        from.x = -110;
        break;
      case "right":
        from.x = 110;
        break;
      case "up":
        from.y = 90;
        break;
      case "down":
        from.y = -60;
        break;
      case "rotate":
        from.rotation = -20;
        from.scale = 0.75;
        break;
      case "zoom":
        from.scale = 0.5;
        break;
      case "flip-y":
        from.rotationY = -90;
        from.transformPerspective = 800;
        break;
    }

    from.scrollTrigger = { trigger: el, start: "top 88%", once: true };
    gsap.from(el, from);
  });
}

// ── Copa del Mundo 2026 section animations
function initMundialAnimations() {
  var section = document.getElementById("mundial2026");
  if (!section) return;

  // Spin + float soccer balls
  gsap.utils.toArray(".mundial-ball").forEach(function (ball, i) {
    gsap.to(ball, {
      y: -(30 + i * 14),
      rotation: 360,
      duration: 7 + i * 2.5,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
      delay: i * 1.5,
    });
  });

  // Section parallax
  gsap.to(section, {
    backgroundPositionY: "30%",
    ease: "none",
    scrollTrigger: {
      trigger: section,
      start: "top bottom",
      end: "bottom top",
      scrub: 1.5,
    },
  });
}

// ── Boot all extensions
document.addEventListener("DOMContentLoaded", function () {
  applySeasonalTheme();
  initScrollReveals();
  initMundialAnimations();
  initPageLoader();
  initScrollProgress();
  initProEntrance();

  // WhatsApp cart button listener

  setTimeout(function () {
    if (typeof ScrollTrigger !== "undefined") ScrollTrigger.refresh();
  }, 600);
});

// ── Page Loader (index.html only)
function initPageLoader() {
  var loader = document.getElementById("pageLoader");
  if (!loader) return;

  document.body.classList.add("loading");

  var fill = loader.querySelector(".loader-bar-fill");
  var logo = loader.querySelector(".loader-logo");

  var tl = gsap.timeline({
    onComplete: function () {
      document.body.classList.remove("loading");
    },
  });

  tl.from(
    logo,
    { scale: 0.6, opacity: 0, duration: 0.6, ease: "back.out(1.8)" },
    0,
  )
    .from(fill, { opacity: 0, duration: 0.2 }, 0.3)
    .to(fill, { width: "100%", duration: 0.7, ease: "power2.out" }, 0.4)
    .to(loader, {
      opacity: 0,
      duration: 0.45,
      delay: 0.15,
      ease: "power2.inOut",
      onComplete: function () {
        loader.style.display = "none";
      },
    });
}

// ── Scroll Progress Bar
function initScrollProgress() {
  var bar = document.getElementById("scrollProgress");
  if (!bar) return;

  window.addEventListener(
    "scroll",
    function () {
      var scrolled = window.scrollY;
      var total = document.body.scrollHeight - window.innerHeight;
      var pct = total > 0 ? Math.min(scrolled / total, 1) : 0;
      bar.style.transform = "scaleX(" + pct + ")";
    },
    { passive: true },
  );
}

// ── Pro entrance: hero word-split
function initProEntrance() {
  var hasLoader = !!document.getElementById("pageLoader");
  var startDelay = hasLoader ? 1.4 : 0.2;

  // Scroll progress bar entrance
  var bar = document.getElementById("scrollProgress");
  if (bar) gsap.from(bar, { opacity: 0, duration: 0.5, delay: startDelay });

  // Hero word-split animation
  var heroWords = document.querySelectorAll(".hero-word");
  if (heroWords.length > 0) {
    // Se sincroniza con el startDelay calculado en el navbar entrance (aprox 1.4s + 0.35s)
    gsap.from(heroWords, {
      y: "110%",
      opacity: 0,
      duration: 0.75,
      stagger: 0.1,
      ease: "power3.out",
      delay: startDelay + 0.35,
    });
  }

  // Hero subtitle
  var heroSubtitle = document.querySelector(".hero-subtitle-pro");
  if (heroSubtitle) {
    gsap.from(heroSubtitle, {
      y: 20,
      opacity: 0,
      duration: 0.8,
      ease: "power2.out",
      delay: startDelay + 0.7,
    });
  }

  // Hero CTA group
  var heroCta = document.querySelector(".hero-cta-group");
  if (heroCta) {
    gsap.from(heroCta, {
      y: 30,
      opacity: 0,
      duration: 0.65,
      ease: "back.out(1.3)",
      delay: startDelay + 0.65,
    });
  }

  // Hero phone info
  var heroPhone = document.querySelector(".hero-phone");
  if (heroPhone) {
    gsap.from(heroPhone, {
      x: -30,
      opacity: 0,
      duration: 0.5,
      ease: "power2.out",
      delay: startDelay + 0.8,
    });
  }

  var wa = document.getElementById("whatsappFloat");
  if (wa) {
    gsap.set(wa, { autoAlpha: 1, clearProps: "transform" });
  }

  // Mobile menu links stagger (triggered on open)
  var mobileLinks = document.querySelectorAll(".mobile-nav-link");
  var mobileMenuBtn = document.getElementById("mobileMenuBtn");
  if (mobileMenuBtn && mobileLinks.length > 0) {
    mobileMenuBtn.addEventListener("click", function () {
      var menu = document.getElementById("mobileMenu");
      if (menu && menu.classList.contains("open")) {
        gsap.from(mobileLinks, {
          x: -60,
          opacity: 0,
          stagger: 0.08,
          duration: 0.5,
          ease: "power2.out",
          delay: 0.2,
        });
      }
    });
  }
}

// ================================================================
// 6. LÓGICA DE TABS (FRESCOS / CONGELADOS / HUEVO)
// ================================================================
window.switchPanel = function (panelId, btn) {
  // Quita la clase activa de todos los botones
  document
    .querySelectorAll(".section-tab")
    .forEach((b) => b.classList.remove("active"));
  // Activa el botón clickeado
  btn.classList.add("active");

  // Oculta todos los paneles
  document
    .querySelectorAll(".product-panel")
    .forEach((p) => p.classList.remove("active"));

  // Muestra el panel seleccionado con una suave animación
  const targetPanel = document.getElementById("panel-" + panelId);
  if (targetPanel) {
    targetPanel.classList.add("active");
    gsap.from(targetPanel, { opacity: 0, y: 20, duration: 0.4 });
  }
};
// Filtro de marcas
document.addEventListener("click", function (e) {
  const btn = e.target.closest(".filter-btn-marca");
  if (!btn) return;
  document.querySelectorAll(".filter-btn-marca").forEach((b) => {
    b.classList.remove("active", "bg-brandRed", "text-white");
    b.classList.add("bg-brandDarkGray", "text-white");
  });
  btn.classList.add("active", "bg-brandRed");
  const marca = btn.dataset.marca;
  document.querySelectorAll("#marcasGrid .product-card").forEach((card) => {
    card.style.display =
      marca === "all" || card.dataset.marca === marca ? "" : "none";
  });
});

// ================================================================
// 7. AJUSTE DINÁMICO DEL NAVBAR CON EL TICKER
// ================================================================
function adjustNavbar() {
  const ticker = document.querySelector(".ticker-wrap");
  const banner = document.getElementById("seasonalBanner");
  const navbar = document.getElementById("navbar");
  if (!navbar || !ticker) return;

  if (document.body.classList.contains("cart-open")) {
    navbar.style.top = "0";
    return;
  }

  const bannerHeight =
    banner && !banner.classList.contains("hidden") ? banner.offsetHeight : 0;
  const baseOffset = bannerHeight + ticker.offsetHeight;

  const scrolled = window.scrollY > 10;
  navbar.style.top = scrolled ? "0" : baseOffset + "px";
}

window.addEventListener("scroll", adjustNavbar);
window.addEventListener("resize", adjustNavbar);

const seasonalBannerEl = document.getElementById("seasonalBanner");
if (seasonalBannerEl) {
  const seasonalObserver = new MutationObserver(() => adjustNavbar());
  seasonalObserver.observe(seasonalBannerEl, {
    attributes: true,
    attributeFilter: ["class", "style"],
  });
}

// Ejecutar inmediatamente al cargar
adjustNavbar();

// ================================================================
// CAROUSEL AUTO-ROTATION - MODERNO Y DINÁMICO
// ================================================================
(function () {
  const carouselTrack = document.getElementById("carouselTrack");
  const carouselDots = document.querySelectorAll(".carousel-dot");
  const carouselBtnPrev = document.getElementById("carouselPrev");
  const carouselBtnNext = document.getElementById("carouselNext");
  const carouselWrapper = document.querySelector(".carousel-wrapper");

  if (!carouselTrack) return;

  let currentIndex = 0;
  const totalSlides = document.querySelectorAll(".carousel-slide").length;
  let autoRotateTimer = null;
  const autoRotateInterval = 6000; // 6 segundos entre slides

  function updateCarousel() {
    const offset = -currentIndex * 100;
    carouselTrack.style.transform = `translateX(${offset}%)`;

    // Actualizar dots
    carouselDots.forEach((dot, idx) => {
      dot.classList.toggle("active", idx === currentIndex);
    });

    // Animación especial para el slide del Mundial
    const slides = document.querySelectorAll(".carousel-slide");
    slides.forEach((slide, idx) => {
      if (
        idx === currentIndex &&
        slide.classList.contains("mundial-highlight-ring")
      ) {
        slide.style.animation = "none";
        setTimeout(() => {
          slide.style.animation = "mundialSlideEntry 0.8s ease-out forwards";
        }, 10);
      }
    });
  }

  function nextSlide() {
    currentIndex = (currentIndex + 1) % totalSlides;
    updateCarousel();
    resetAutoRotate();
  }

  function prevSlide() {
    currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
    updateCarousel();
    resetAutoRotate();
  }

  function goToSlide(idx) {
    currentIndex = idx % totalSlides;
    updateCarousel();
    resetAutoRotate();
  }

  function startAutoRotate() {
    autoRotateTimer = setInterval(() => {
      nextSlide();
    }, autoRotateInterval);
  }

  function resetAutoRotate() {
    clearInterval(autoRotateTimer);
    startAutoRotate();
  }

  function stopAutoRotate() {
    clearInterval(autoRotateTimer);
  }

  // Event listeners para botones
  if (carouselBtnNext) {
    carouselBtnNext.addEventListener("click", nextSlide);
  }
  if (carouselBtnPrev) {
    carouselBtnPrev.addEventListener("click", prevSlide);
  }

  // Event listeners para dots
  carouselDots.forEach((dot, idx) => {
    dot.addEventListener("click", () => goToSlide(idx));
  });

  // Pausar autorotación cuando el mouse está en el carrusel
  if (carouselWrapper) {
    carouselWrapper.addEventListener("mouseenter", stopAutoRotate);
    carouselWrapper.addEventListener("mouseleave", startAutoRotate);
  }

  // Inicializar
  updateCarousel();
  startAutoRotate();

  // Teclado: flecha izquierda/derecha
  document.addEventListener("keydown", (e) => {
    if (e.key === "ArrowLeft") prevSlide();
    if (e.key === "ArrowRight") nextSlide();
  });
})();

// ================================================================
// INDICADOR VISUAL DE AUTOROTACIÓN
// ================================================================
(function () {
  const carouselWrapper = document.querySelector(".carousel-wrapper");
  if (!carouselWrapper) return;

  // Agregar indicador de autorotación
  const autoPlayIndicator = document.createElement("div");
  autoPlayIndicator.style.cssText = `
        position: absolute;
        bottom: 20px;
        right: 20px;
        display: flex;
        align-items: center;
        gap: 8px;
        background: rgba(255, 255, 255, 0.9);
        padding: 8px 14px;
        border-radius: 20px;
        font-size: 0.75rem;
        font-weight: 600;
        color: #D15E1D;
        z-index: 5;
        backdrop-filter: blur(10px);
        box-shadow: 0 4px 12px rgba(0,0,0,0.1);
    `;

  const autoPlayDot = document.createElement("span");
  autoPlayDot.innerHTML = "●";
  autoPlayDot.style.cssText = `
        color: #D15E1D;
        animation: pulse 2s ease-in-out infinite;
        font-size: 0.9rem;
    `;

  const autoPlayText = document.createElement("span");
  autoPlayText.textContent = "Auto";

  autoPlayIndicator.appendChild(autoPlayDot);
  autoPlayIndicator.appendChild(autoPlayText);

  // Crear estilo para la animación del pulso
  if (!document.getElementById("carousel-pulse-style")) {
    const style = document.createElement("style");
    style.id = "carousel-pulse-style";
    style.textContent = `
            @keyframes pulse {
                0%, 100% { opacity: 1; }
                50% { opacity: 0.4; }
            }
        `;
    document.head.appendChild(style);
  }

  carouselWrapper.appendChild(autoPlayIndicator);
})();

// ================================================================
// EFECTO ESPECIAL PARA SLIDE DEL MUNDIAL
// ================================================================
(function () {
  const mundialSlide = document.querySelector(".mundial-highlight-ring");
  if (!mundialSlide) return;

  // Crear efecto de "spotlight" en el slide del mundial
  const spotlight = document.createElement("div");
  spotlight.style.cssText = `
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 400%;
        height: 400%;
        background: radial-gradient(circle, rgba(255, 215, 0, 0.15) 0%, rgba(255, 215, 0, 0) 70%);
        pointer-events: none;
        animation: mundialSpotlight 8s ease-in-out infinite;
        z-index: 0;
    `;

  // Crear estilos para la animación
  if (!document.getElementById("mundial-spotlight-style")) {
    const style = document.createElement("style");
    style.id = "mundial-spotlight-style";
    style.textContent = `
            @keyframes mundialSpotlight {
                0%, 100% { opacity: 0.3; transform: translate(-50%, -50%) scale(1); }
                50% { opacity: 0.6; transform: translate(-50%, -50%) scale(1.1); }
            }
        `;
    document.head.appendChild(style);
  }

  // Insertar al inicio del slide
  mundialSlide.style.position = "relative";
  mundialSlide.insertBefore(spotlight, mundialSlide.firstChild);
})();

// ================================================================
// EFECTO PARALLAX PATRÓN GEOMÉTRICO (MUNDIAL 2026) - CORREGIDO
// ================================================================
window.addEventListener("scroll", () => {
  const bgGeometricElements = document.querySelectorAll(
    ".bg-mundial-geometric",
  );

  bgGeometricElements.forEach((element) => {
    let scrollValue = window.scrollY;
    // Se define tanto X como Y para no romper el centro de la cuadrícula
    element.style.backgroundPosition = `center ${scrollValue * 0.1}px`;
  });
});
