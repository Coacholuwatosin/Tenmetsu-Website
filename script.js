<script src="https://kit.fontawesome.com/1d08d3a6b1.js" crossorigin="anonymous"></script>


    // FAQ Toggle Functionality
    function toggleFAQ(faqElement) {
        const faqItem = faqElement.parentElement;
        const faqAnswer = faqItem.querySelector('.faqAnswer');
        const faqArrow = faqItem.querySelector('.faqArrow');
        
        // Toggle the FAQ answer visibility and arrow icon
        if (faqAnswer.style.display === 'block') {
            faqAnswer.style.display = 'none';
            faqArrow.innerHTML = '&#9660;'; 
        } else {
            faqAnswer.style.display = 'block';
            faqArrow.innerHTML = '&#9650;'; 
        }

        // Close all other FAQ items
        const allFAQItems = document.querySelectorAll('.faqItem');
        allFAQItems.forEach(item => {
            if (item !== faqItem) {
                item.querySelector('.faqAnswer').style.display = 'none';
                item.querySelector('.faqArrow').innerHTML = '&#9660;'; 
            }
        });
    }

    // Initialize the first active FAQ item to be open on page load
    document.querySelector('.faqItem.active .faqAnswer').style.display = 'block';
    document.querySelector('.faqItem.active .faqArrow').innerHTML = '&#9650;';



    
    // Tab Selection Functionality
    function selectTab(tabName) {
        const tabs = document.querySelectorAll('.tab');
        tabs.forEach(tab => {
            tab.classList.remove('active');
        });

        // Add 'active' class to the selected tab
        const selectedTab = document.getElementById(`tab${tabName}`);
        selectedTab.classList.add('active');
    }

    
    
    // Sidebar Toggle Functionality
    function toggleSidebar() {
        const sidebar = document.getElementById('sidebar');
        sidebar.classList.toggle('open'); 
    }
