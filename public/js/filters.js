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

    document.querySelectorAll('.filter').forEach(filter => {
        filter.addEventListener('click', () => {
            const filterName = filter.getAttribute('data-filter'); // Get the filter name
            console.log(`Filter clicked: ${filterName}`);
    
            // Redirect based on the clicked filter
            let targetUrl = '';
            switch (filterName) {
                case 'Amazing Pool':
                targetUrl = '/amazing-pool';
                break;
            case 'Farms':
                targetUrl = '/farms';
                break;
            case 'Design':
                targetUrl = '/design';
                break;
            case 'Rooms':
                targetUrl = '/rooms';
                break;
            case 'Treehouses':
                targetUrl = '/treehouses';
                break;
            case 'Beach':
                targetUrl = '/beach';
                break;
            case 'Domes':
                targetUrl = '/domes';
                break;
            case 'Top of the world':
                targetUrl = '/top-of-the-world';
                break;
            case 'Trending':
                targetUrl = '/trending';
                break;
            case 'Top cities':
                targetUrl = '/top-cities';
                break;
            case 'Camping':
                targetUrl = '/camping';
                break;
            case 'Arctic':
                targetUrl = '/arctic';
                break;
            case 'Boats':
                targetUrl = '/boats';
                break;
            case 'Creative spaces':
                targetUrl = '/creative-spaces';
                break;
            case 'Skiing':
                targetUrl = '/skiing';
                break;
            case 'Towers':
                targetUrl = '/towers';
                break;
            case 'Camper vans':
                targetUrl = '/camper-vans';
                break;
            default:
                targetUrl = '/'; 
            }
            window.location.href = targetUrl;
        });
    });
    
    