document.addEventListener('DOMContentLoaded', (event) => {
    navigate('home'); // Load home page content by default
});

function navigate(section) {
    const contentDiv = document.getElementById('content');
    contentDiv.innerHTML = "";  // Clear existing content

    switch (section) {
        case 'home':
            contentDiv.innerHTML = `
                <section id="home">
                    <div class="slideshow-container">
                        <div class="mySlides fade">
                            <img src="d1.jpg" style="width:100%">
                        </div>
                        <div class="mySlides fade">
                            <img src="d2.jpg" style="width:100%">
                        </div>
                        <div class="mySlides fade">
                            <img src="d3.jpg" style="width:100%">
                        </div>
                        <div class="mySlides fade">
                            <img src="d4.jpg" style="width:100%">
                        </div>
                        <div class="mySlides fade">
                            <img src="d4.jpg" style="width:100%">
                        </div>
                        <div class="mySlides fade">
                            <img src="d5.jpg" style="width:100%">
                        </div>
                        <div class="mySlides fade">
                            <img src="d6.jpg" style="width:100%">
                        </div>
                        <div class="mySlides fade">
                            <img src="d7.jpg" style="width:100%">
                        </div>
                        <div class="mySlides fade">
                            <img src="d8.jpg" style="width:100%">
                        </div>
                        <div class="mySlides fade">
                            <img src="d9.jpg" style="width:100%">
                        </div>
                        <div class="mySlides fade">
                            <img src="d10.jpg" style="width:100%">
                        </div>
                    </div>
                </section>
            `;
            showSlides();
            break;
           
        case 'about':
            
            contentDiv.innerHTML = `
                <section id="about" class="content-section">
                    <div class="abouthead">
                        <h2>About US</h2>
                    </div>
                    <div class="about-container">
                        <div class="about-text">
                            <h2 class="aboutheadline">Who We Are</h2>
                            <p class="aboutp">
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                            </p>
                        </div>
                        <div class="missionvision-container">
                            <div class="mission">
                                <h3>Mission</h3>
                                <p class="missionp">
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                                </p>
                            </div>
                            <div class="vision">
                                <h3>Vision</h3>
                                <p class="visionp">
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                                </p>

                            </div>
                            
                        </div>
                    </div>
                </section>
            `;
            break;
        case 'gallery':
            contentDiv.innerHTML = `
                <section id="gallery">
                    <div class="gallery-container">
                        
                            <div class="image-row" id="image-row">
                                <img src="d1.jpg" class="gallery-image" alt="Image 1" data-title="Image Title 1" data-description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.">
                                <img src="d2.jpg" class="gallery-image" alt="Image 2" data-title="Image Title 2" data-description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.">
                                <img src="d3.jpg" class="gallery-image" alt="Image 3" data-title="Image Title 3" data-description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.">
                                <img src="d4.jpg" class="gallery-image" alt="Image 3" data-title="Image Title 3" data-description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.">
                                <img src="d5.jpg" class="gallery-image" alt="Image 3" data-title="Image Title 3" data-description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.">
                            </div>
                        
                            <div id="popup" class="popup">
                                <span class="close">&times;</span>
                                <img class="popup-content" id="popup-img">
                                <div class="popup-details">
                                <h2></h2> <p></p> <button type="button" class="enquiry-button" onclick="navigate('enquiry')">Enquiry</button>
                            </div>
                    </div>
                </section>

            `;
            setupGallery();
            
            break;
            
        case 'location':
            contentDiv.innerHTML = `
            
                <section id="location">
                
                
                <div class="locationhead">
                        <h2>Our Location</h2>
                    </div>
                <div id="frame">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3928.8752307988566!2d76.30560531078649!3d10.027153572525226!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b080dafbed183bf%3A0x5951f316ba13a37e!2sLuLu%20International%20Shopping%20Mall!5e0!3m2!1sen!2sin!4v1721025619237!5m2!1sen!2sin" 
                        width=100% height="450" style="border:0;" allowfullscreen="" loading="lazy">
                    </iframe>"
                    
                </div>

            </section>
            `;
            break;
        case 'enquiry':
            contentDiv.innerHTML = `
                 <section id="enquiry">
                  <a href="https://wa.me/9539883104"><img class="icon1" src="whatsapp-logo-DDC3F9A34F-seeklogo.com.png"></a>
                    <div id="enquiry-form-container">
                        <div class="enquiry-section">
                            <p class="info">Fill out the information and an Futureo Solution representative will reach out to You!!</p>
                            <h2>Give Us a message</h2>
                            <button class="enquirybutton" type="button" id="enquiry-button">Enquiry</button>
                            
                        </div>
                        <div class="enquiry-section">
                            <h2>CONTACT US</h2>
                            <ul class="contactinfo">
                                <li><i class="fas fa-phone-alt"></i> +91-7356645787</li>
                                <li><i class="fab fa-instagram"></i> @futureosolutions</li>
                                <li><i class="fas fa-envelope"></i> jithingeorge@gmail.com</li>
                                <li><i class="fab fa-youtube"></i> Futureo Solutions</li>
                            </ul>

                        </div>
                   
                </div>
                
            </section>
            `;
            enquiryfunction();
            break;
        default:
            contentDiv.innerHTML = `<p>Section not found.</p>`;
            break;
    }
    // Scroll to the top of the content
    contentDiv.scrollTop = 0;
    
    

    updateActiveLink(section);
}

function updateActiveLink(section) {
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach((link) => {
        if (link.getAttribute('href') === `#${section}`) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
}

let slideIndex = 0;
    

    function showSlides() {
        let slides = document.getElementsByClassName("mySlides");
        for (let i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";  
        }
        slideIndex++;
        if (slideIndex > slides.length) { slideIndex = 1 }
        if (slides[slideIndex - 1]) {
            slides[slideIndex - 1].style.display = "block";  
        }
        setTimeout(showSlides, 5000); // Change image every 5 seconds
    }
    function enquiryfunction(){
        const enquiryButton = document.getElementById('enquiry-button');
        const enquiryFormContainer = document.getElementById('enquiry-form-container');
        
        if(enquiryButton) {
            enquiryButton.addEventListener('click', (event) => {
                 // Prevent default form submission
                 
                const formUrl = 'https://docs.google.com/forms/d/e/1FAIpQLSdqT0y_uhEHwicemJwwHoyWC6nKYSvXmleD0X24L0mkmD87hw/viewform';
                const iframe = document.createElement('iframe');
                iframe.src = formUrl;
                iframe.width = '100%';
                iframe.height = '500px';
                enquiryFormContainer.innerHTML = '';
                enquiryFormContainer.appendChild(iframe);
            });
        }
    }
    function setupGallery(){
        

        const leftArrow = document.getElementById('left-arrow');
        const rightArrow = document.getElementById('right-arrow');
        const imageRow = document.getElementById('image-row');
        const galleryImages = document.querySelectorAll('.gallery-image');
        const imageWidth = galleryImages.length > 0 ? galleryImages[0].offsetWidth * 3 + 20 : 0; // 3 image width + 20px margin

        let scrollAmount = 0;

        if (rightArrow && leftArrow && imageRow && galleryImages.length > 0) {
            rightArrow.addEventListener('click', () => {
                if (scrollAmount < imageRow.scrollWidth - imageWidth * 3) { // Ensure only 3 images are in view
                    scrollAmount += imageWidth;
                    imageRow.style.transform = `translateX(-${scrollAmount}px)`;
                }
            });

        leftArrow.addEventListener('click', () => {
            if (scrollAmount > 0) {
                scrollAmount -= imageWidth;
                imageRow.style.transform = `translateX(-${scrollAmount}px)`;
            }
        });
    }

    // Popup functionality
    const popup = document.getElementById("popup");
    const popupImg = document.getElementById("popup-img");
    const closePopup = document.querySelector(".close");
    const enquiryButton = document.querySelector(".enquiry-button"); 
    if (popup && popupImg && closePopup && enquiryButton) {
        galleryImages.forEach(image => {
          image.addEventListener('click', () => {
            popup.style.display = "block";
            popupImg.src = image.src;
            // Add logic to fetch and display image details here (replace with your actual logic)
            popup.querySelector(".popup-details h2").textContent=image.dataset.title;
            popup.querySelector(".popup-details p").textContent=image.dataset.description;
          });
        });

        closePopup.addEventListener('click', () => {
            popup.style.display = "none";
        });

        window.addEventListener('click', (e) => {
            if (e.target == popup) {
                popup.style.display = "none";
            }
        });
    } else {
        console.error("Popup elements not found");
    }


}
