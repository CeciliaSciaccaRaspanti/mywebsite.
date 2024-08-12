document.addEventListener('DOMContentLoaded', function() {
    const links = document.querySelectorAll('#navbar .link');
    const aboutMeLink = document.getElementById('aboutMeLink');
    const contents = document.querySelectorAll('#content-area .content');
    const aboutContent = document.getElementById('about');
    
    function showContent(targetId) {
        contents.forEach(content => {
            if (content.id === targetId) {
                content.classList.remove('hidden');
            } else {
                content.classList.add('hidden');
            }
        });
    }

    // Event listener for navbar links
    links.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            const targetId = link.getAttribute('data-target');
            showContent(targetId);
        });
    });

    // Event listener for the "Cecilia Sciacca Raspanti" link
    aboutMeLink.addEventListener('click', function(event) {
        event.preventDefault();
        showContent('about');
    });

     // Event listener for the "Cecilia Sciacca Raspanti" link
    LinkHome.addEventListener('click', function(event) {
        event.preventDefault();
        showContent('home');
    });

});


//COOL TECT H2
document.addEventListener('DOMContentLoaded', () => {
    const headers = document.querySelectorAll('.content h2');

    headers.forEach(header => {
        header.style.position = 'relative';
        header.style.fontSize = '2.5em';
        header.style.fontWeight = 'bold';
        header.style.textAlign = 'center';
        header.style.color = '#333';
        header.style.margin = '20px 0';
        header.style.background = 'linear-gradient(to right, #f8f9fa, #e9ecef)';
        header.style.padding = '15px';
        header.style.borderRadius = '8px';
        header.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.2)';
        header.style.transition = 'color 0.3s ease, transform 0.3s ease';

        // Optional: Add additional styles or effects dynamically
    });
});


//SECTIONS

document.addEventListener('DOMContentLoaded', () => {
    // Select all h4 elements within section elements
    const sectionTitles = document.querySelectorAll('section');

    sectionTitles.forEach(title => {
        title.style.position = 'relative';
        title.style.fontSize = '16px'; // Adjust size as needed
        title.style.fontFamily ='Arial, sans-serif;'
        title.style.textAlign = 'center';
        title.style.color = '#333';
        title.style.margin = '20px 0';
        title.style.background = 'rgba(255, 255, 255, 0.9)';
        title.style.padding = '15px';
        title.style.borderRadius = '8px';
        title.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.2)';
        title.style.transition = 'color 0.3s ease, transform 0.3s ease';
    });
});

        document.getElementById('HomeLinkPic').addEventListener('click', function(event) {
            event.preventDefault(); // Prevent the default link behavior
            const homeLink = document.getElementById('HomeLink');
            const target = homeLink.getAttribute('data-target');
            if (target) {
                window.location.href = target;
            }
        });

        
        
        

}