    // Sample data for slider
    const slides = [
        {
            id: 1,
            title: "Easy Carbon Accounting",
            description: "Measure your emissions with our simple platform",
            image: "https://ww2.eagle.org/content/eagle/en/Products-and-Services/sustainability/carbon-accounting/_jcr_content/root/container/par/image_copy.img.jpg/1647297828598.jpg"
        },
        {
            id: 2,
            title: "Detailed Analytics",
            description: "Get insights into your carbon footprint",
            image: "data:image/jpeg;base64,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"
        },
        {
            id: 3,
            title: "Regulatory Compliance",
            description: "Stay compliant with all regulations",
            image: "https://blog.dclimate.net/content/images/size/w2000/2024/10/dClimate-Newsletter-Data-ReFined-43-VCM-credits-compliance-675px.jpg"
        }
    ];

    // Create 3D slider
    document.addEventListener('DOMContentLoaded', function() {
        const dashboardImage = document.querySelector('.dashboard-image');
        const sliderContainer = document.createElement('div');
        sliderContainer.className = 'slider-container';
        
        const slider = document.createElement('div');
        slider.className = 'slider';
        
        // Create slides
        slides.forEach((slide, index) => {
            const slideElement = document.createElement('div');
            slideElement.className = `slide ${index === 0 ? 'active' : index === 1 ? 'next' : 'prev'}`;
            
            const img = document.createElement('img');
            img.src = slide.image;
            img.alt = slide.title;
            img.style.width = '100%';
            img.style.height = '100%';
            img.style.objectFit = 'cover';
            
            slideElement.appendChild(img);
            slider.appendChild(slideElement);
        });
        
        sliderContainer.appendChild(slider);
        dashboardImage.appendChild(sliderContainer);
        
        // Automatic slider
        let currentSlide = 0;
        
        function nextSlide() {
            const slideElements = document.querySelectorAll('.slide');
            
            // Remove all classes
            slideElements.forEach(slide => {
                slide.classList.remove('active', 'prev', 'next');
            });
            
            // Calculate the prev and next indices
            currentSlide = (currentSlide + 1) % slides.length;
            const prevSlide = (currentSlide - 1 + slides.length) % slides.length;
            const nextSlide = (currentSlide + 1) % slides.length;
            
            // Apply the appropriate classes
            slideElements[currentSlide].classList.add('active');
            slideElements[prevSlide].classList.add('prev');
            slideElements[nextSlide].classList.add('next');
        }
        
        // Change slide every 5 seconds
        setInterval(nextSlide, 5000);
        
        // Add mouse interaction for 3D effect
        const sliderElement = document.querySelector('.slider');
        
        sliderElement.addEventListener('mousemove', (e) => {
            const xAxis = (window.innerWidth / 2 - e.pageX) / 25;
            const yAxis = (window.innerHeight / 2 - e.pageY) / 25;
            
            sliderElement.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
        });
        
        sliderElement.addEventListener('mouseleave', () => {
            sliderElement.style.transform = 'rotateY(0deg) rotateX(0deg)';
            sliderElement.style.transition = 'all 0.5s ease';
        });
        
        sliderElement.addEventListener('mouseenter', () => {
            sliderElement.style.transition = 'none';
        });
    });