// Mobile Menu Toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking a link
document.querySelectorAll('.nav-menu a').forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// Active navigation highlighting
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.nav-menu a');

window.addEventListener('scroll', () => {
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });

     navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').slice(1) === current) {
            link.classList.add('active');
        }
     });
 });

// Menu Data
const menuData = {
    appetizers: [
        {
            name: "Bruschetta",
            description: "Toasted bread topped with fresh tomatoes, garlic, and basil",
            price: 8.99,
            image: "https://images.unsplash.com/photo-1572695157368-8a4b9e9e7b5c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
        },
        {
            name: "Calamari",
            description: "Crispy fried squid served with marinara sauce",
            price: 12.99,
            image: "https://images.unsplash.com/photo-1599483080-2b8f0b8f5b5c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
        },
        {
            name: "Stuffed Mushrooms",
            description: "Mushrooms filled with cream cheese and herbs",
            price: 10.99,
            image: "https://images.unsplash.com/photo-1605902396230-8625c9e5b1a6?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
        }
    ],
    mains: [
        {
            name: "Grilled Salmon",
            description: "Fresh salmon with lemon butter sauce and vegetables",
            price: 24.99,
            image: "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
        },
        {
            name: "Beef Tenderloin",
            description: "8oz tenderloin with mashed potatoes and red wine sauce",
            price: 29.99,
            image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
        },
        {
            name: "Chicken Parmesan",
            description: "Breaded chicken breast with marinara and melted mozzarella",
            price: 18.99,
            image: "https://images.unsplash.com/photo-1599597433059-3e6c1c0d5b4b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
        },
        {
            name: "Vegetable Lasagna",
            description: "Layers of pasta with seasonal vegetables and three cheeses",
            price: 16.99,
            image: "https://images.unsplash.com/photo-1574894709920-1b6c5f0b0f5c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
        }
    ],
    desserts: [
        {
            name: "Tiramisu",
            description: "Classic Italian dessert with coffee-soaked ladyfingers",
            price: 7.99,
            image: "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
        },
        {
            name: "Chocolate Lava Cake",
            description: "Warm chocolate cake with a molten center",
            price: 8.99,
            image: "https://images.unsplash.com/photo-1606892994921-96b3b5a5f5c5?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
        },
        {
            name: "Cheesecake",
            description: "New York style cheesecake with berry compote",
            price: 6.99,
            image: "https://images.unsplash.com/photo-1533134242443-d4fd215305ad?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
        }
    ],
    drinks: [
        {
            name: "Signature Cocktail",
            description: "House special blend of vodka, cranberry, and lime",
            price: 11.99,
            image: "https://images.unsplash.com/photo-1514362545857-3a2f1a6f9e8a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
        },
        {
            name: "Wine Selection",
            description: "Glass of red or white wine from our curated collection",
            price: 9.99,
            image: "https://images.unsplash.com/photo-1510812431401-41d1f4a7a3b5?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
        },
        {
            name: "Craft Beer",
            description: "Local craft beer on tap",
            price: 7.99,
            image: "https://images.unsplash.com/photo-1566633806327-68e152aaf26d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
        }
    ]
};

// Function to display menu items
function displayMenuItems(category = 'all') {
    const menuContainer = document.getElementById('menu-items');
    menuContainer.innerHTML = '';

    let items = [];
    if (category === 'all') {
        items = [...menuData.appetizers, ...menuData.mains, ...menuData.desserts, ...menuData.drinks];
    } else {
        items = menuData[category] || [];
    }

    items.forEach(item => {
        const menuCard = document.createElement('div');
        menuCard.className = 'menu-card';
        menuCard.innerHTML = `
            <img src="${item.image}" alt="${item.name}">
            <div class="menu-card-content">
                <h3>${item.name}</h3>
                <p>${item.description}</p>
                <div class="menu-footer">
                    <span class="price">$${item.price.toFixed(2)}</span>
                    <button class="add-to-cart" onclick="addToCart('${item.name}', ${item.price})">Add to Cart</button>
                </div>
            </div>
        `;
        menuContainer.appendChild(menuCard);
    });
}

// Menu tab functionality
document.querySelectorAll('.tab-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        // Remove active class from all tabs
        document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
        
        // Add active class to clicked tab
        btn.classList.add('active');
        
        // Get category and display items
        const category = btn.getAttribute('data-category');
        displayMenuItems(category);
    });
});

// Initialize menu display
displayMenuItems();

// Shopping cart functionality
let cart = [];

function addToCart(itemName, price) {
    cart.push({ name: itemName, price: price });
    updateCartCount();
    
    // Show feedback
    alert(`${itemName} added to cart!`);
}

function updateCartCount() {
    // You can display cart count somewhere in the header
    console.log(`Cart items: ${cart.length}`);
}

// Order special function
function orderSpecial() {
    addToCart('Grilled Salmon with Lemon Butter Sauce', 24.99);
}

// Contact form submission
document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Get form data
    const formData = new FormData(this);
    const data = Object.fromEntries(formData);
    
    // Here you would typically send the data to a server
    console.log('Form submitted:', data);
    
    // Show success message
    alert('Thank you for your message! We will get back to you soon.');
    this.reset();
});

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Add scroll effect to navbar
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.background = 'rgba(255, 255, 255, 0.95)';
        navbar.style.boxShadow = '0 2px 10px rgba(0,0,0,0.1)';
    } else {
        navbar.style.background = '#fff';
        navbar.style.boxShadow = '0 2px 10px rgba(0,0,0,0.1)';
    }
});

// Lazy loading for images
if ('loading' in HTMLImageElement.prototype) {
    const images = document.querySelectorAll('img[loading="lazy"]');
    images.forEach(img => {
        img.loading = 'lazy';
    });
}

// Animation on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe elements for animation
document.querySelectorAll('.menu-card, .testimonial-card, .feature, .about-content, .special-content').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});

// Add loading spinner or skeleton screens for better UX
window.addEventListener('load', () => {
    // Remove any loading indicators if they exist
    document.body.classList.add('loaded');
});