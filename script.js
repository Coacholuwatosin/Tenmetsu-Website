src="https://kit.fontawesome.com/1d08d3a6b1.js"; crossorigin="anonymous">





    function toggleFAQ(faqElement) {
        const faqItem = faqElement.parentElement;
        const faqAnswer = faqItem.querySelector('.faqAnswer');
        const faqArrow = faqItem.querySelector('.faqArrow');
        
        if (faqAnswer.style.display === 'block') {
            faqAnswer.style.display = 'none';
            faqArrow.innerHTML = '&#9660;';
        } else {
            faqAnswer.style.display = 'block';
            faqArrow.innerHTML = '&#9650;';
        }

        const allFAQItems = document.querySelectorAll('.faqItem');
        allFAQItems.forEach(item => {
            if (item !== faqItem) {
                item.querySelector('.faqAnswer').style.display = 'none';
                item.querySelector('.faqArrow').innerHTML = '&#9660;';
            }
        });
    }

    document.querySelector('.faqItem.active .faqAnswer').style.display = 'block';
    document.querySelector('.faqItem.active .faqArrow').innerHTML = '&#9650;';


    function selectTab(tabName) {
        const tabs = document.querySelectorAll('.tab');
        tabs.forEach(tab => {
            tab.classList.remove('active');
        });

        const selectedTab = document.getElementById(tab$,{tabName});
        selectedTab.classList.add('active');
    }




    function toggleSidebar() {
        const sidebar = document.getElementById('sidebar');
        sidebar.classList.toggle('open');
    }
