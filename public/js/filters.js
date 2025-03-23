let taxSwitch = document.getElementById("flexSwitchCheckDefault");
        const navbar = document.getElementById('filter-container');
        const scrollLeftButton = document.getElementById('scroll-left');
        const scrollRightButton = document.getElementById('scroll-right');
        function updateScrollButtons() {
            if (navbar.scrollLeft <= 0) {
                scrollLeftButton.style.visibility = 'hidden';
            } else {
                scrollLeftButton.style.visibility = 'visible';
            }
            if (navbar.scrollLeft + navbar.clientWidth >= navbar.scrollWidth) {
                scrollRightButton.style.visibility = 'hidden';
            } else {
                scrollRightButton.style.visibility = 'visible';
            }
        }


    
    scrollLeftButton.addEventListener('click', () => {
      navbar.scrollBy({
        left: -200,
        behavior: 'smooth'
      });
      setTimeout(updateScrollButtons, 300);
    });

    scrollRightButton.addEventListener('click', () => {
      navbar.scrollBy({
        left: 200, 
        behavior: 'smooth'
      });
      setTimeout(updateScrollButtons, 300);
    });
    
    navbar.addEventListener('scroll', updateScrollButtons);
    updateScrollButtons();
    taxSwitch.addEventListener("click", () => {
        let taxInfo = document.getElementsByClassName("tax-info");
        for(let info of taxInfo){
            if(info.style.display != "inline"){
                info.style.display = "inline";
            }else{
                info.style.display = "none";
            }
        }
    });
