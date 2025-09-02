document.addEventListener('DOMContentLoaded', function() {
            // Elements
            const navItems = document.querySelectorAll('.nav-item[data-tab]');
            const tabContents = document.querySelectorAll('.tab-content');
            const postButton = document.getElementById('post-button');
            const modalOverlay = document.getElementById('modal-overlay');
            const closeModalButton = document.getElementById('close-modal');
            const upgradeNotification = document.getElementById('upgrade-notification');
            const searchToggle = document.getElementById('search-toggle');
            const searchBar = document.getElementById('search-bar');
            const sectorTabs = document.querySelectorAll('.sector-tab');
            const backButtons = document.querySelectorAll('.back-button');
            
            // Switch tabs
            navItems.forEach(item => {
                item.addEventListener('click', function() {
                    const targetTab = this.getAttribute('data-tab');
                    
                    // Update navigation
                    navItems.forEach(navItem => navItem.classList.remove('active'));
                    this.classList.add('active');
                    
                    // Update content
                    tabContents.forEach(content => {
                        content.classList.remove('active');
                        content.classList.remove('tab-transition');
                    });
                    
                    setTimeout(() => {
                        document.getElementById(targetTab).classList.add('active');
                        document.getElementById(targetTab).classList.add('tab-transition');
                    }, 50);
                });
            });
            
            // Toggle search bar
            searchToggle.addEventListener('click', function() {
                searchBar.style.display = searchBar.style.display === 'none' ? 'block' : 'none';
            });
            
            // Show post modal
            postButton.addEventListener('click', function() {
                modalOverlay.style.display = 'flex';
            });
            
            // Close modal
            closeModalButton.addEventListener('click', function() {
                modalOverlay.style.display = 'none';
            });
            
            // Sector tabs
            sectorTabs.forEach(tab => {
                tab.addEventListener('click', function() {
                    sectorTabs.forEach(t => t.classList.remove('active'));
                    this.classList.add('active');
                    
                    // In a real app, this would filter content by sector
                });
            });
            
            // Back buttons
            backButtons.forEach(button => {
                button.addEventListener('click', function() {
                    // Go back to home tab
                    tabContents.forEach(content => {
                        content.classList.remove('active');
                        content.classList.remove('tab-transition');
                    });
                    
                    setTimeout(() => {
                        document.getElementById('home-tab').classList.add('active');
                        document.getElementById('home-tab').classList.add('tab-transition');
                    }, 50);
                    
                    navItems.forEach(navItem => navItem.classList.remove('active'));
                    document.querySelector('.nav-item[data-tab="home-tab"]').classList.add('active');
                });
            });
            
            // Close modal when clicking outside
            modalOverlay.addEventListener('click', function(e) {
                if (e.target === modalOverlay) {
                    modalOverlay.style.display = 'none';
                }
            });
            
            // Simulate posting success
            const modalOptions = document.querySelectorAll('.modal-option');
            modalOptions.forEach(option => {
                option.addEventListener('click', function() {
                    modalOverlay.style.display = 'none';
                    
                    // Show success notification
                    upgradeNotification.style.display = 'block';
                    
                    // Hide after 3 seconds
                    setTimeout(function() {
                        upgradeNotification.style.display = 'none';
                    }, 3000);
                });
            });
        });