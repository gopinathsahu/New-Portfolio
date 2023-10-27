
    const headerBtn = document.querySelector('.header__bars');
    const mobileNav = document.querySelector('.mobile-nav');
    const mobileLinks = document.querySelectorAll('.mobile-nav__link');
  
    // State
    let isMobileNavOpen = false;
  
    headerBtn.addEventListener('click', () => {
      isMobileNavOpen = !isMobileNavOpen;
      if (isMobileNavOpen) {
        mobileNav.style.display = 'flex';
        document.body.style.overflowY = 'hidden';
      } else {
        mobileNav.style.display = 'none';
        document.body.style.overflowY = 'auto';
      }
    });
  
    mobileLinks.forEach(link => {
      link.addEventListener('click', () => {
        isMobileNavOpen = false;
        mobileNav.style.display = 'none';
        document.body.style.overflowY = 'auto';
      });
    });
  
  


    //  dark-mode
    const themeToggleBtns = document.querySelectorAll('#theme-toggle');

  // State
  const theme = localStorage.getItem('theme');

  // On mount
  theme && document.body.classList.add(theme);

  // Handlers
  const handleThemeToggle = () => {
    document.body.classList.toggle('light-mode');
    if (document.body.classList.contains('light-mode')) {
      localStorage.setItem('theme', 'light-mode');
    } else {
      localStorage.removeItem('theme');
      document.body.removeAttribute('class');
    }
  };

  // Events
  themeToggleBtns.forEach(btn =>
    btn.addEventListener('click', handleThemeToggle)
  );
  


  