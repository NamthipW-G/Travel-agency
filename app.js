// --- Travel Card Carousel ---
const travelCards = [
  {img: 'images/Santorini.jpg', title: 'Santorini, Greece'},
  {img: 'images/Kyoto.jpg', title: 'Kyoto, Japan'},
  {img: 'images/paris.jpg', title: 'Paris, France'},
  {img: 'images/Bali.jpg', title: 'Bali, Indonesia'},
  {img: 'images/Maldives.jpeg', title: 'Maldives'},
  {img: 'images/Rome.jpeg', title: 'Rome, Italy'},
  {img: 'images/NewYork.jpeg', title: 'New York, USA'},
  {img: 'images/Sydney.jpg', title: 'Sydney, Australia'},
  {img: 'images/CapeTown.jpg', title: 'Cape Town, South Africa'},
  {img: 'images/Dubai.jpeg', title: 'Dubai, UAE'},
  {img: 'images/Bangkok.jpg', title: 'Bangkok, Thailand'},
  {img: 'images/Zurich.jpg', title: 'Zurich, Switzerland'},
  {img: 'images/Barcelona.jpg', title: 'Barcelona, Spain'},
  {img: 'images/London.jpeg', title: 'London, UK'},
  {img: 'images/Istanbul.jpg', title: 'Istanbul, Turkey'},
  {img: 'images/Prague.jpg', title: 'Prague, Czechia'},
  {img: 'images/Vienna.jpg', title: 'Vienna, Austria'},
  {img: 'images/Marrakech.jpg', title: 'Marrakech, Morocco'},
  {img: 'images/Queenstown.jpg', title: 'Queenstown, NZ'},
  {img: 'images/Banff.jpg', title: 'Banff, Canada'}
];
// --- Add to Cart Function ---
// --- Hotel+flight Page: Book Now buttons add to cart logic ---
document.addEventListener('DOMContentLoaded', function () {
  // Only run on flight-hotel.html
  if (window.location.pathname.includes('flight-hotel.html')) {
    const hotelCards = document.querySelectorAll('.hotel-suggestion-card');
    hotelCards.forEach(card => {
      const bookBtn = card.querySelector('.btn-primary');
      if (bookBtn) {
        bookBtn.addEventListener('click', function (e) {
          e.preventDefault();
          // Extract hotel+flight info from card
          const name = card.querySelector('strong')?.innerText || '';
          const priceText = card.innerHTML.match(/Price per person:.*?\$(\d+(?:\.\d+)?)/);
          const price = priceText ? parseFloat(priceText[1]) : 0;
          const img = card.querySelector('img')?.getAttribute('src') || '';
          // Use global addToCart function for consistency
          if (typeof window.addToCart === 'function') {
            window.addToCart({
              id: 'hotel-flight-' + name.replace(/\s+/g, '-').toLowerCase(),
              type: 'hotel-flight',
              title: name,
              name: name,
              price: price,
              image: img,
              quantity: 1
            });
            // Optionally open cart overlay for feedback
            if (window.openCart) window.openCart();
          }
        });
      }
    });
  }
});

// --- car-rental Page: Book Now buttons add to cart logic ---
document.addEventListener('DOMContentLoaded', function () {
  // Only run on car-rentals.html
  if (window.location.pathname.includes('car-rentals.html')) {
    const hotelCards = document.querySelectorAll('.hotel-suggestion-card');
    hotelCards.forEach(card => {
      const bookBtn = card.querySelector('.btn-primary');
      if (bookBtn) {
        bookBtn.addEventListener('click', function (e) {
          e.preventDefault();
          // Extract car rental info from card
          const name = card.querySelector('strong')?.innerText || '';
          const priceText = card.innerHTML.match(/Price per day:.*?\$(\d+(?:\.\d+)?)/);
          const price = priceText ? parseFloat(priceText[1]) : 0;
          const img = card.querySelector('img')?.getAttribute('src') || '';
          // Use global addToCart function for consistency
          if (typeof window.addToCart === 'function') {
            window.addToCart({
              id: 'Car-rental-' + name.replace(/\s+/g, '-').toLowerCase(),
              type: 'car-rental',
              title: name,
              name: name,
              price: price,
              image: img,
              quantity: 1
            });
            // Optionally open cart overlay for feedback
            if (window.openCart) window.openCart();
          }
        });
      }
    });
  }
});

// --- Insurance Page: Book Now buttons add to cart logic ---
document.addEventListener('DOMContentLoaded', function () {
  // Only run on insurance.html
  if (window.location.pathname.includes('insurance.html')) {
    const hotelCards = document.querySelectorAll('.hotel-suggestion-card');
    hotelCards.forEach(card => {
      const bookBtn = card.querySelector('.btn-primary');
      if (bookBtn) {
        bookBtn.addEventListener('click', function (e) {
          e.preventDefault();
          // Extract car rental info from card
          const name = card.querySelector('strong')?.innerText || '';
          const priceText = card.innerHTML.match(/Price:.*?\$(\d+(?:\.\d+)?)/);
          const price = priceText ? parseFloat(priceText[1]) : 0;
          const img = card.querySelector('img')?.getAttribute('src') || '';
          // Use global addToCart function for consistency
          if (typeof window.addToCart === 'function') {
            window.addToCart({
              id: 'Insurance-' + name.replace(/\s+/g, '-').toLowerCase(),
              type: 'insurance',
              title: name,
              name: name,
              price: price,
              image: img,
              quantity: 1
            });
            // Optionally open cart overlay for feedback
            if (window.openCart) window.openCart();
          }
        });
      }
    });
  }
});

// --- public transport Page: Book Now buttons add to cart logic ---
document.addEventListener('DOMContentLoaded', function () {
  // Only run on public-transport.html
  if (window.location.pathname.includes('public-transport.html')) {
    const hotelCards = document.querySelectorAll('.hotel-suggestion-card');
    hotelCards.forEach(card => {
      const bookBtn = card.querySelector('.btn-primary');
      if (bookBtn) {
        bookBtn.addEventListener('click', function (e) {
          e.preventDefault();
          // Extract public transport info from card
          const name = card.querySelector('strong')?.innerText || '';
          const priceText = card.innerHTML.match(/Price:.*?\$(\d+(?:\.\d+)?)/);
          const price = priceText ? parseFloat(priceText[1]) : 0;
          const img = card.querySelector('img')?.getAttribute('src') || '';
          // Use global addToCart function for consistency
          if (typeof window.addToCart === 'function') {
            window.addToCart({
              id: 'Transport-' + name.replace(/\s+/g, '-').toLowerCase(),
              type: 'public-transport',
              title: name,
              name: name,
              price: price,
              image: img,
              quantity: 1
            });
            // Optionally open cart overlay for feedback
            if (window.openCart) window.openCart();
          }
        });
      }
    });
  }
});

// --- airport-transfer Page: Book Now buttons add to cart logic ---
document.addEventListener('DOMContentLoaded', function () {
  // Only run on airport-transfer.html
  if (window.location.pathname.includes('airport-transfers.html')) {
    const hotelCards = document.querySelectorAll('.hotel-suggestion-card');
    hotelCards.forEach(card => {
      const bookBtn = card.querySelector('.btn-primary');
      if (bookBtn) {
        bookBtn.addEventListener('click', function (e) {
          e.preventDefault();
          // Extract airport transfer info from card
          const name = card.querySelector('strong')?.innerText || '';
          const priceText = card.innerHTML.match(/Price:.*?\$(\d+(?:\.\d+)?)/);
          const price = priceText ? parseFloat(priceText[1]) : 0;
          const img = card.querySelector('img')?.getAttribute('src') || '';
          // Use global addToCart function for consistency
          if (typeof window.addToCart === 'function') {
            window.addToCart({
              id: 'airport-transfer-' + name.replace(/\s+/g, '-').toLowerCase(),
              type: 'airport-transfer',
              title: name,
              name: name,
              price: price,
              image: img,
              quantity: 1
            });
            // Optionally open cart overlay for feedback
            if (window.openCart) window.openCart();
          }
        });
      }
    });
  }
});

function createTravelCard(card) {
  const div = document.createElement('div');
  div.className = 'travel-card';
  // Increased transparency: set background to rgba with lower alpha (e.g., 0.35)
  div.style = 'background:rgba(255,255,255,0.35); border-radius:18px; box-shadow:0 2px 16px rgba(0,0,0,0.08); overflow:hidden; width:220px; min-width:220px; max-width:220px; display:flex; flex-direction:column; align-items:center;';
  div.innerHTML = `
    <img src="${card.img}" alt="${card.title}" style="width:100%; height:140px; object-fit:cover;">
    <div style="padding:12px 10px; font-weight:600; font-size:1.1rem; text-align:center;">${card.title}</div>
  `;
  return div;
}

function renderCarousel(startIdx) {
  const track = document.querySelector('.carousel-track');
  if (!track) return;
  track.innerHTML = '';
  for (let i = 0; i < 3; i++) {
    let idx = (startIdx + i) % travelCards.length;
    track.appendChild(createTravelCard(travelCards[idx]));
  }
}

let carouselIdx = 0;
document.addEventListener('DOMContentLoaded', function() {
  renderCarousel(carouselIdx);
  const leftBtn = document.querySelector('.carousel-btn-left');
  const rightBtn = document.querySelector('.carousel-btn-right');
  if (leftBtn && rightBtn) {
    leftBtn.onclick = function() {
      carouselIdx = (carouselIdx - 1 + travelCards.length) % travelCards.length;
      renderCarousel(carouselIdx);
    };
    rightBtn.onclick = function() {
      carouselIdx = (carouselIdx + 1) % travelCards.length;
      renderCarousel(carouselIdx);
    };
  }
});
// --- Public Transport Page: Search & Booking Logic ---
document.addEventListener('DOMContentLoaded', function () {
  // --- Flights Page: Book Now buttons add to cart logic ---
  if (window.location.pathname.includes('flights.html')) {
    const flightCards = document.querySelectorAll('.flight-suggestion-card');
    flightCards.forEach(card => {
      const bookBtn = card.querySelector('.btn-primary');
      if (bookBtn) {
        bookBtn.addEventListener('click', function (e) {
          e.preventDefault();
          // Extract flight info from card
          const route = card.querySelector('strong')?.innerText || '';
          const airline = card.querySelector('div:nth-child(2)')?.innerText || '';
          const time = card.innerHTML.match(/Flight time: ([^<]+)/)?.[1] || '';
          const priceText = card.innerHTML.match(/Price:.*?\$(\d+(?:\.\d+)?)/);
          const price = priceText ? parseFloat(priceText[1]) : 0;
          const img = card.querySelector('img')?.getAttribute('src') || '';
          // Use global addToCart function for consistency
          if (typeof window.addToCart === 'function') {
            window.addToCart({
              id: 'flight-' + route.replace(/\s+/g, '-').toLowerCase(),
              type: 'flight',
              title: route,
              name: route,
              airline: airline,
              time: time,
              price: price,
              image: img,
              quantity: 1
            });
            // Optionally open cart overlay for feedback
            if (window.openCart) window.openCart();
          }
        });
      }
    });
  }
  
  if (window.location.pathname.includes('public-transport.html')) {
    const form = document.getElementById('publicTransportSearchForm');
    const resultsDiv = document.getElementById('pt-search-results');
    if (!form || !resultsDiv) return;
    form.addEventListener('submit', function(e) {
      e.preventDefault();
      // Mock search results
      const dest = document.getElementById('pt-destination').value;
      const date = document.getElementById('pt-date').value;
      const type = document.getElementById('pt-type').value;
      if (!dest || !date || !type) return;
      // Example mock data
      const mockResults = [
        {
          name: `${type.charAt(0).toUpperCase() + type.slice(1)} Express to ${dest}`,
          time: '09:00 AM',
          price: 19.99,
          type: type
        },
        {
          name: `${type.charAt(0).toUpperCase() + type.slice(1)} Local to ${dest}`,
          time: '12:30 PM',
          price: 14.99,
          type: type
        }
      ];
      let html = '<h3>Available Options</h3>';
      mockResults.forEach((r, i) => {
        html += `<div class="search-result-item">
          <div><strong>${r.name}</strong> <span style="margin-left:1em;">${r.time}</span></div>
          <div>Type: ${r.type.charAt(0).toUpperCase() + r.type.slice(1)}</div>
          <div>Price: $${r.price.toFixed(2)}</div>
          <button class="btn-primary book-pt-btn" data-index="${i}" style="margin-top:0.5em;">Book Now</button>
        </div>`;
      });
      resultsDiv.innerHTML = html;
      // Attach booking logic
      document.querySelectorAll('.book-pt-btn').forEach(btn => {
        btn.addEventListener('click', function() {
          const idx = this.getAttribute('data-index');
          const selected = mockResults[idx];
          // Store booking info in localStorage
          localStorage.setItem('selectedBooking', JSON.stringify({
            type: 'Public Transport',
            name: selected.name,
            date: date,
            time: selected.time,
            price: selected.price,
            transportType: selected.type,
            destination: dest
          }));
          window.location.href = 'booking.html';
        });
      });
    });
  }
});
// --- Hotel Page: Book Now buttons add to cart logic ---
document.addEventListener('DOMContentLoaded', function () {
  // Only run on hotels.html
  if (window.location.pathname.includes('hotels.html')) {
    const hotelCards = document.querySelectorAll('.hotel-suggestion-card');
    hotelCards.forEach(card => {
      const bookBtn = card.querySelector('.btn-primary');
      if (bookBtn) {
        bookBtn.addEventListener('click', function (e) {
          e.preventDefault();
          // Extract hotel info from card
          const name = card.querySelector('strong')?.innerText || '';
          const priceText = card.innerHTML.match(/Price per night:.*?\$(\d+(?:\.\d+)?)/);
          const price = priceText ? parseFloat(priceText[1]) : 0;
          const img = card.querySelector('img')?.getAttribute('src') || '';
          // Use global addToCart function for consistency
          if (typeof window.addToCart === 'function') {
            window.addToCart({
              id: 'hotel-' + name.replace(/\s+/g, '-').toLowerCase(),
              type: 'hotel',
              title: name,
              name: name,
              price: price,
              image: img,
              quantity: 1
            });
            // Optionally open cart overlay for feedback
            if (window.openCart) window.openCart();
          }
        });
      }
    });
  }
});
// --- Hotels Page: Search, Suggestion, and Booking Logic ---
function initializeHotelsPage() {
  const form = document.getElementById('hotelSearchForm');
  const resultsDiv = document.getElementById('hotel-search-results');
  if (!form || !resultsDiv) return;

  // --- Show hotel suggestions on initial page load ---
  function renderHotelSuggestions(dest = 'Bali', checkin = '', checkout = '', guests = '') {
    // Default destination is 'Bali' for initial suggestions
    // --- Vibe categories ---
    const vibeCategories = [
      {
        title: 'City Vibe',
        hotels: [
          {
            name: 'Urban Luxe Hotel',
            stars: 5,
            price: 210.00,
            location: 'New York',
            image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=400',
            rating: 9.3,
            reviews: 1540,
            amenities: ['Free WiFi', 'Rooftop Bar', 'Gym', 'Breakfast included'],
            description: 'Experience the city lights in luxury and comfort.',
            link: 'https://www.agoda.com/',
          },
          {
            name: 'Downtown Suites',
            stars: 4,
            price: 145.00,
            location: 'London',
            image: 'https://images.unsplash.com/photo-1467269204594-9661b134dd2b?w=400',
            rating: 8.7,
            reviews: 980,
            amenities: ['Free WiFi', 'Breakfast', 'Business Center'],
            description: 'Modern suites in the heart of the city.',
            link: 'https://www.agoda.com/',
          },
          {
            name: 'Metropolitan Inn',
            stars: 4,
            price: 130.00,
            location: 'Tokyo',
            image: 'https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?w=400',
            rating: 8.5,
            reviews: 870,
            amenities: ['Free WiFi', 'Breakfast', 'Laundry'],
            description: 'Stay close to the action in a vibrant city.',
            link: 'https://www.agoda.com/',
          },
          {
            name: 'City Center Hotel',
            stars: 3,
            price: 99.00,
            location: 'Paris',
            image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=400',
            rating: 8.0,
            reviews: 650,
            amenities: ['Free WiFi', 'Parking'],
            description: 'Affordable comfort in the city center.',
            link: 'https://www.agoda.com/',
          },
          {
            name: 'Skyline View Hotel',
            stars: 5,
            price: 250.00,
            location: 'Dubai',
            image: 'https://images.unsplash.com/photo-1467269204594-9661b134dd2b?w=400',
            rating: 9.5,
            reviews: 2000,
            amenities: ['Free WiFi', 'Pool', 'Spa', 'Sky Bar'],
            description: 'Luxury with breathtaking skyline views.',
            link: 'https://www.agoda.com/',
          },
        ],
      },
      {
        title: 'Nature Vibe',
        hotels: [
          {
            name: 'Forest Retreat',
            stars: 5,
            price: 180.00,
            location: 'Bali',
            image: 'https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?w=400',
            rating: 9.1,
            reviews: 1200,
            amenities: ['Free WiFi', 'Nature Walks', 'Spa'],
            description: 'Relax in the heart of nature with luxury amenities.',
            link: 'https://www.agoda.com/',
          },
          {
            name: 'Mountain Escape',
            stars: 4,
            price: 140.00,
            location: 'Swiss Alps',
            image: 'https://images.unsplash.com/photo-1467269204594-9661b134dd2b?w=400',
            rating: 8.8,
            reviews: 900,
            amenities: ['Free WiFi', 'Breakfast', 'Hiking Trails'],
            description: 'Breathtaking mountain views and fresh air.',
            link: 'https://www.agoda.com/',
          },
          {
            name: 'Lakeside Lodge',
            stars: 4,
            price: 120.00,
            location: 'Canada',
            image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=400',
            rating: 8.6,
            reviews: 800,
            amenities: ['Free WiFi', 'Canoe Rental', 'Fireplace'],
            description: 'Peaceful lakeside retreat for nature lovers.',
            link: 'https://www.agoda.com/',
          },
          {
            name: 'Jungle Hideaway',
            stars: 3,
            price: 95.00,
            location: 'Costa Rica',
            image: 'https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?w=400',
            rating: 8.2,
            reviews: 600,
            amenities: ['Free WiFi', 'Guided Tours'],
            description: 'Immersed in the jungle, perfect for adventure.',
            link: 'https://www.agoda.com/',
          },
          {
            name: 'Eco Resort',
            stars: 5,
            price: 220.00,
            location: 'New Zealand',
            image: 'https://images.unsplash.com/photo-1467269204594-9661b134dd2b?w=400',
            rating: 9.4,
            reviews: 1100,
            amenities: ['Free WiFi', 'Eco Activities', 'Organic Food'],
            description: 'Sustainable luxury in a natural setting.',
            link: 'https://www.agoda.com/',
          },
        ],
      },
      // Add more vibe categories here if desired
    ];

    // HTML for hotel cards is now handled in hotels.html for design/demo only.
    // This function is intentionally left blank.
  }

  // Show suggestions on initial load
  renderHotelSuggestions();

  form.addEventListener('submit', function (e) {
    e.preventDefault();
    const dest = document.getElementById('hotel-destination').value.trim();
    const checkin = document.getElementById('hotel-checkin').value;
    const checkout = document.getElementById('hotel-checkout').value;
    const guests = document.getElementById('hotel-guests').value;
    if (!dest || !checkin || !checkout || !guests) {
      resultsDiv.innerHTML = `<div class="search-no-results">Please fill in all fields to search for hotels.</div>`;
      return;
    }
    renderHotelSuggestions(dest, checkin, checkout, guests);
  });
}
// Initialize Hotels page if present
document.addEventListener('DOMContentLoaded', function() {
  // Make sure the DOM is fully loaded and the elements exist
  if (window.location.pathname.includes('hotels.html')) {
    // Wait for the hotel search form and results div to exist before initializing
    function tryInitHotelsPage() {
      if (
        document.getElementById('hotelSearchForm') &&
        document.getElementById('hotel-search-results')
      ) {
        initializeHotelsPage();
      } else {
        setTimeout(tryInitHotelsPage, 100);
      }
    }
    tryInitHotelsPage();
  }
});
// --- Booking Page: Pre-fill summary from selectedBooking (for quick action booking) ---
document.addEventListener('DOMContentLoaded', function() {
    if (window.location.pathname.includes('booking.html')) {
        const selectedBooking = localStorage.getItem('selectedBooking');
        if (selectedBooking) {
            const booking = JSON.parse(selectedBooking);
            // Fill booking summary UI
            const userBookingDetails = document.getElementById('userBookingDetails');
            if (userBookingDetails) {
                userBookingDetails.innerHTML = `
                    <div class="selected-booking-info">
                        <strong>${booking.type}:</strong> ${booking.name}<br>
                        <span>Date: ${booking.date}</span><br>
                        <span>Time: ${booking.time || ''}</span><br>
                        <span>Destination: ${booking.destination || ''}</span><br>
                        <span>Price: $${booking.price ? booking.price.toFixed(2) : '0.00'}</span>
                    </div>
                `;
            }
            // Set price fields
            if (booking.price) {
                const price = booking.price;
                const packagePrice = document.getElementById('packagePrice');
                const subtotal = document.getElementById('subtotal');
                const totalAmount = document.getElementById('totalAmount');
                if (packagePrice) packagePrice.textContent = `$${price.toFixed(2)}`;
                if (subtotal) subtotal.textContent = `$${price.toFixed(2)}`;
                if (totalAmount) totalAmount.textContent = `$${price.toFixed(2)}`;
            }
        }
    }
});
// --- Payment Page: Payment method toggle and form logic ---
function initializePaymentPage() {
  const cardSection = document.querySelector('.card-section');
  const paypalSection = document.querySelector('.paypal-section');
  const applepaySection = document.querySelector('.applepay-section');
  const googlepaySection = document.querySelector('.googlepay-section');
  const bankSection = document.querySelector('.bank-section');
  function showSection(method) {
    if (cardSection) cardSection.style.display = (method === 'card') ? '' : 'none';
    if (paypalSection) paypalSection.style.display = (method === 'paypal') ? '' : 'none';
    if (applepaySection) applepaySection.style.display = (method === 'applepay') ? '' : 'none';
    if (googlepaySection) googlepaySection.style.display = (method === 'googlepay') ? '' : 'none';
    if (bankSection) bankSection.style.display = (method === 'bank') ? '' : 'none';
  }
  document.querySelectorAll('input[name="paymentMethod"]').forEach(function(radio) {
    radio.addEventListener('change', function() {
      showSection(this.value);
    });
  });
  // Set initial section
  const checked = document.querySelector('input[name="paymentMethod"]:checked');
  if (checked) showSection(checked.value);
  // Payment form submission
  const paymentForm = document.getElementById('paymentForm');
  if (paymentForm) {
    paymentForm.addEventListener('submit', function(e) {
      e.preventDefault();
      const payBtn = this.querySelector('.pay-btn');
      payBtn.disabled = true;
      payBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Processing...';
      setTimeout(function() {
        payBtn.disabled = false;
        payBtn.innerHTML = '<i class="fas fa-lock"></i> Pay Now';
        // Show confirmation modal
        if (!document.getElementById('paymentSuccessModal')) {
          const modal = document.createElement('div');
          modal.id = 'paymentSuccessModal';
          modal.innerHTML = `
            <div class="booking-modal-overlay" style="position:fixed;top:0;left:0;width:100vw;height:100vh;background:rgba(0,0,0,0.45);z-index:9999;display:flex;align-items:center;justify-content:center;">
                <div class="booking-modal-content" style="background:#fff;padding:2rem 2.5rem;border-radius:1rem;box-shadow:0 8px 32px rgba(0,0,0,0.18);text-align:center;max-width:90vw;">
                    <div style="font-size:2.5rem;color:#16a34a;margin-bottom:1rem;"><i class='fas fa-check-circle'></i></div>
                    <h2 style="margin-bottom:0.5rem;">Payment Successful!</h2>
                    <p style="margin-bottom:1.5rem;">Thank you for your payment.<br>Your booking is now complete.</p>
                    <a href="index.html" class="btn-primary" style="padding:0.7rem 2.2rem;font-size:1.1rem;">Back to Home</a>
                </div>
            </div>
          `;
          document.body.appendChild(modal);
          modal.querySelector('.btn-primary').addEventListener('click', function() {
            document.getElementById('paymentSuccessModal').remove();
          });
        }
      }, 2000);
    });
  }
}

// Packages Hero Slideshow (for packages.html only)
function initializePackagesHeroSlideshow() {
  const hero = document.querySelector('.packages-hero');
  const slideshow = document.querySelector('.packages-hero-slideshow');
  if (!hero || !slideshow) return;

  const images = [
    'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920&h=1080&fit=crop',
    'https://images.unsplash.com/photo-1506197603052-3cc9c3a201bd?w=1920&h=1080&fit=crop',
    'https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=1920&h=1080&fit=crop',
    'https://images.unsplash.com/photo-1518837695005-2083093ee35b?w=1920&h=1080&fit=crop',
    'https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=1920&h=1080&fit=crop',
  ];
  slideshow.innerHTML = '';
  images.forEach((url, i) => {
    const div = document.createElement('div');
    div.className = 'ph-slide' + (i === 0 ? ' active' : '');
    div.style.backgroundImage = `url('${url}')`;
    slideshow.appendChild(div);
  });
  let idx = 0;
  setInterval(() => {
    const slides = slideshow.querySelectorAll('.ph-slide');
    slides[idx].classList.remove('active');
    idx = (idx + 1) % images.length;
    slides[idx].classList.add('active');
  }, 7000);
}
// Main application JavaScript - handles global functionality


document.addEventListener("DOMContentLoaded", () => {
  // Initialize all global features
  initializeThemeToggle()
  initializeBackgroundSlideshow()
  initializePackagesHeroSlideshow()
  initializeSearchFunctionality()
  initializePackagesPageCartButtons()
  initializeAnimations()
  initializeNavbarEnhancements()
  initializeSearch()
  initializeCart()
  // Payment page logic
  if (window.location.pathname.includes('payment.html')) {
    initializePaymentPage();
    // Render booking summary from cart (same as booking.html)
    const userBookingDetails = document.getElementById('userBookingDetails');
    if (userBookingDetails) {
      // Render all cart items as summary (like booking.html)
      const cartItems = Array.isArray(window.AppState?.cartItems) ? window.AppState.cartItems : [];
      if (cartItems.length === 0) {
        userBookingDetails.innerHTML = `<div class="cart-empty"><i class="fas fa-shopping-cart"></i><h3>No bookings found</h3><p>Your booking summary will appear here after you add items to your cart.</p></div>`;
      } else {
        let total = 0;
        let summaryHtml = '<div class="booking-summary-list">';
        cartItems.forEach(item => {
          const itemTotal = (item.price || 0) * (item.quantity || 1);
          total += itemTotal;
          summaryHtml += `
            <div class="booking-summary-item">
              <img src="${item.image}" alt="${item.title}" class="booking-summary-img">
              <div class="booking-summary-details">
                <strong>${item.title}</strong><br>
                <span class="booking-summary-type">${item.type ? item.type.charAt(0).toUpperCase() + item.type.slice(1) : ''}</span><br>
                <span class="booking-summary-qty">Qty: ${item.quantity || 1}</span><br>
                <span class="booking-summary-price">Price: $${(item.price || 0).toFixed(2)}</span><br>
                <span class="booking-summary-total">Total: $${itemTotal.toFixed(2)}</span>
              </div>
            </div>
          `;
        });
        summaryHtml += '</div>';
        summaryHtml += `<div class="booking-summary-grandtotal"><strong>Grand Total: $${total.toFixed(2)}</strong></div>`;
        userBookingDetails.innerHTML = summaryHtml;
      }
    }
  }
})

// Add to Cart for Packages Page
function initializePackagesPageCartButtons() {
  // Only run on packages.html
  if (!document.querySelector('.packages-grid')) return;
  document.querySelectorAll('.book-now-btn').forEach(btn => {
    btn.addEventListener('click', function(e) {
      e.preventDefault();
      // Find the package card
      const card = btn.closest('.package-card');
      if (!card) return;
      // Extract package info
      const img = card.querySelector('.package-image img');
      const title = card.querySelector('.package-header h3')?.textContent?.trim() || 'Travel Package';
      const priceEl = card.querySelector('.current-price') || card.querySelector('.package-price span');
      const price = priceEl ? Number(priceEl.textContent.replace(/[^\d.]/g, '')) : 0;
      const duration = card.querySelector('.package-duration')?.textContent?.trim() || '';
      const id = title.replace(/\s+/g, '-').toLowerCase();
      // Add to cart
      window.addToCart({
        id: id,
        type: 'package',
        title: title,
        price: price,
        image: img ? img.src : '',
        duration: duration,
      });
      // Open cart overlay for feedback
      if (window.openCart) window.openCart();
    });
  });
}

// Theme Toggle Functionality
function initializeThemeToggle() {
  const themeToggle = document.getElementById("themeToggle")
  const body = document.body
  const icon = themeToggle?.querySelector("i")

  // Check for saved theme preference or default to light mode
  const currentTheme = localStorage.getItem("journii_theme") || "light"
  body.setAttribute("data-theme", currentTheme)

  if (currentTheme === "dark") {
    body.classList.add("dark-mode")
    if (icon) icon.className = "fas fa-sun"
  } else {
    if (icon) icon.className = "fas fa-moon"
  }

  // Theme toggle event listener
  themeToggle?.addEventListener("click", () => {
    const isDark = body.classList.contains("dark-mode")

    if (isDark) {
      body.classList.remove("dark-mode")
      body.setAttribute("data-theme", "light")
      localStorage.setItem("journii_theme", "light")
      if (icon) icon.className = "fas fa-moon"
    } else {
      body.classList.add("dark-mode")
      body.setAttribute("data-theme", "dark")
      localStorage.setItem("journii_theme", "dark")
      if (icon) icon.className = "fas fa-sun"
    }

    // Animate the toggle
    themeToggle.style.transform = "scale(0.8)"
    setTimeout(() => {
      themeToggle.style.transform = "scale(1)"
    }, 150)
  })
}

// Background Slideshow (Smooth Crossfade with Gradient Overlay)
function initializeBackgroundSlideshow() {
  const backgrounds = [
    "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920&h=1080&fit=crop", // Tropical beach
    "https://images.unsplash.com/photo-1506197603052-3cc9c3a201bd?w=1920&h=1080&fit=crop", // Mountain landscape
    "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=1920&h=1080&fit=crop", // Lake and mountains
    "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920&h=1080&fit=crop", // Desert sunset
    "https://images.unsplash.com/photo-1518837695005-2083093ee35b?w=1920&h=1080&fit=crop", // Ocean waves
  ];

  let currentBgIndex = 0;
  const heroSection = document.querySelector(".hero-section") || document.querySelector(".page-hero");
  if (!heroSection) return;

  // Remove any existing slideshow backgrounds
  heroSection.querySelectorAll(".bg-slideshow").forEach(el => el.remove());
  heroSection.querySelectorAll(".bg-gradient-overlay").forEach(el => el.remove());

  // Create background containers
  const bgContainer1 = document.createElement("div");
  const bgContainer2 = document.createElement("div");

  bgContainer1.className = "bg-slideshow active";
  bgContainer2.className = "bg-slideshow";

  // Add gradient overlay to background images
  function getBgWithGradient(url) {
    // You can adjust the gradient as needed
    return `linear-gradient(to bottom, rgba(0,0,0,0.45) 0%, rgba(0,0,0,0.65) 100%), url(${url})`;
  }

  bgContainer1.style.backgroundImage = getBgWithGradient(backgrounds[0]);
  bgContainer2.style.backgroundImage = getBgWithGradient(backgrounds[1]);

  // Add smooth crossfade styles and gradient overlay
  const styleId = "bg-slideshow-crossfade-style";
  if (!document.getElementById(styleId)) {
    const style = document.createElement("style");
    style.id = styleId;
    style.textContent = `
      .bg-slideshow {
        position: absolute;
        top: 0; left: 0; width: 100%; height: 100%;
        background-size: cover;
        background-position: center;
        opacity: 0;
        transition: opacity 3s cubic-bezier(.4,0,.2,1);
        z-index: 0;
        pointer-events: none;
      }
      .bg-slideshow.active {
        opacity: 1;
        z-index: 0;
      }
      .hero-section, .page-hero {
        position: relative;
        overflow: hidden;
      }
      .hero-section > *:not(.bg-slideshow):not(.bg-gradient-overlay),
      .page-hero > *:not(.bg-slideshow):not(.bg-gradient-overlay) {
        position: relative;
        z-index: 1;
      }
    `;
    document.head.appendChild(style);
  }

  heroSection.prepend(bgContainer2);
  heroSection.prepend(bgContainer1);

  let isBg1Active = true;

  function changeBackground() {
    const nextIndex = (currentBgIndex + 1) % backgrounds.length;
    if (isBg1Active) {
      bgContainer2.style.backgroundImage = getBgWithGradient(backgrounds[nextIndex]);
      bgContainer2.classList.add("active");
      bgContainer1.classList.remove("active");
    } else {
      bgContainer1.style.backgroundImage = getBgWithGradient(backgrounds[nextIndex]);
      bgContainer1.classList.add("active");
      bgContainer2.classList.remove("active");
    }
    currentBgIndex = nextIndex;
    isBg1Active = !isBg1Active;
  }

  // Start the slideshow
  changeBackground(); // Initial background
  setInterval(changeBackground, 10000);
}

// Search Functionality
function initializeSearchFunctionality() {
  const searchToggle = document.getElementById("searchToggle")
  const searchOverlay = document.getElementById("searchOverlay")
  const searchInput = document.getElementById("globalSearchInput")
  const searchResults = document.getElementById("searchResults")
  const searchClose = document.getElementById("searchClose")

  if (!searchToggle || !searchOverlay) return

  // Toggle search overlay
  searchToggle.addEventListener("click", () => {
    searchOverlay.classList.add("active")
    document.body.style.overflow = "hidden"
    setTimeout(() => searchInput?.focus(), 300)
  })

  // Close search overlay
  searchClose?.addEventListener("click", closeSearch)
  searchOverlay.addEventListener("click", (e) => {
    if (e.target === searchOverlay) closeSearch()
  })

  // Close on Escape key
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && searchOverlay.classList.contains("active")) {
      closeSearch()
    }
  })

  function closeSearch() {
    searchOverlay.classList.remove("active")
    document.body.style.overflow = "auto"
    searchInput.value = ""
    searchResults.innerHTML = ""
  }

  // Search functionality
  let searchTimeout
  searchInput?.addEventListener("input", (e) => {
    clearTimeout(searchTimeout)
    const query = e.target.value.trim()

    if (query.length < 2) {
      searchResults.innerHTML = ""
      return
    }

    searchTimeout = setTimeout(() => {
      performSearch(query)
    }, 300)
  })

  function performSearch(query) {
    const searchData = [
      {
        type: "destination",
        title: "Paris, France",
        description: "City of Light with iconic landmarks",
        url: "destinations.html",
        image: "https://media.cntraveler.com/photos/57d961ce3e6b32bf25f5ad0f/16:9/w_2580,c_limit/most-beautiful-paris-louvre-GettyImages-536267205.jpg",
      },
      {
        type: "destination",
        title: "Tokyo, Japan",
        description: "Modern metropolis with ancient traditions",
        url: "destinations.html",
        image: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=100&h=100&fit=crop",
      },
      {
        type: "destination",
        title: "Bali, Indonesia",
        description: "Tropical paradise with stunning beaches",
        url: "destinations.html",
        image: "https://images.unsplash.com/photo-1537953773345-d172ccf13cf1?w=100&h=100&fit=crop",
      },
      {
        type: "package",
        title: "European Grand Tour",
        description: "14-day cultural journey through Europe",
        url: "packages.html",
        image: "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?w=100&h=100&fit=crop",
      },
      {
        type: "package",
        title: "Tropical Paradise Escape",
        description: "8-day beach getaway",
        url: "packages.html",
        image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=100&h=100&fit=crop",
      },
      {
        type: "page",
        title: "About Us",
        description: "Learn about our travel expertise",
        url: "about.html",
        image: null,
      },
      {
        type: "page",
        title: "Contact",
        description: "Get in touch with our travel experts",
        url: "contact.html",
        image: null,
      },
    ]

    const results = searchData.filter(
      (item) =>
        item.title.toLowerCase().includes(query.toLowerCase()) ||
        item.description.toLowerCase().includes(query.toLowerCase()),
    )

    displaySearchResults(results, query)
  }

  function displaySearchResults(results, query) {
    if (results.length === 0) {
      searchResults.innerHTML = `
        <div class="search-no-results">
          <i class="fas fa-search"></i>
          <p>No results found for "${query}"</p>
          <small>Try searching for destinations, packages, or pages</small>
        </div>
      `
      return
    }

    const resultsHTML = results
      .map(
        (result) => `
      <div class="search-result-item" onclick="navigateToResult('${result.url}')">
        ${result.image ? `<img src="${result.image}" alt="${result.title}">` : `<div class="result-icon"><i class="fas fa-${getResultIcon(result.type)}"></i></div>`}
        <div class="result-content">
          <h4>${result.title}</h4>
          <p>${result.description}</p>
          <span class="result-type">${result.type}</span>
        </div>
        <i class="fas fa-arrow-right result-arrow"></i>
      </div>
    `,
      )
      .join("")

    searchResults.innerHTML = `
      <div class="search-results-header">
        <h3>Search Results (${results.length})</h3>
      </div>
      ${resultsHTML}
    `
  }

  function getResultIcon(type) {
    switch (type) {
      case "destination":
        return "map-marker-alt"
      case "package":
        return "suitcase"
      case "page":
        return "file-alt"
      default:
        return "search"
    }
  }

  window.navigateToResult = (url) => {
    closeSearch()
    window.location.href = url
  }
}

// (Legacy cart functionality removed)

// Enhanced Animations
function initializeAnimations() {
  // Intersection Observer for scroll animations
  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("animate-in")
      }
    })
  }, observerOptions)

  // Observe all animatable elements
  document.querySelectorAll(".animate-on-scroll").forEach((el) => {
    observer.observe(el)
  })

  // Add hover animations to cards
  document.querySelectorAll(".card, .destination-card, .package-card").forEach((card) => {
    card.addEventListener("mouseenter", () => {
      card.style.transform = "translateY(-10px) scale(1.02)"
    })

    card.addEventListener("mouseleave", () => {
      card.style.transform = "translateY(0) scale(1)"
    })
  })

  // Floating animation for hero elements
  const floatingElements = document.querySelectorAll(".floating-animation")
  floatingElements.forEach((element, index) => {
    element.style.animationDelay = `${index * 0.5}s`
  })

  // Parallax effect for background elements
  window.addEventListener("scroll", () => {
    const scrolled = window.pageYOffset
    const parallaxElements = document.querySelectorAll(".parallax")

    parallaxElements.forEach((element) => {
      const speed = element.dataset.speed || 0.5
      element.style.transform = `translateY(${scrolled * speed}px)`
    })
  })
}

// Enhanced Navbar
function initializeNavbarEnhancements() {
  const navbar = document.querySelector(".navbar")
  let lastScrollTop = 0

  // Navbar scroll behavior
  window.addEventListener("scroll", () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop

    if (scrollTop > 100) {
      navbar?.classList.add("scrolled")
    } else {
      navbar?.classList.remove("scrolled")
    }

    // Hide/show navbar on scroll
    if (scrollTop > lastScrollTop && scrollTop > 200) {
      navbar?.classList.add("hidden")
    } else {
      navbar?.classList.remove("hidden")
    }

    lastScrollTop = scrollTop
  })

  // Mobile menu toggle with animation
  const mobileToggle = document.querySelector(".mobile-menu-toggle")
  const mobileMenu = document.querySelector(".mobile-menu")

  mobileToggle?.addEventListener("click", () => {
    mobileMenu?.classList.toggle("active")
    mobileToggle.classList.toggle("active")
  })

  // Active page highlighting
  const currentPage = window.location.pathname.split("/").pop() || "index.html"
  const navLinks = document.querySelectorAll(".nav-link")

  navLinks.forEach((link) => {
    if (link.getAttribute("href") === currentPage) {
      link.classList.add("active")
    }
  })
}

// Utility function for smooth scrolling
window.smoothScrollTo = (target) => {
  document.querySelector(target)?.scrollIntoView({
    behavior: "smooth",
    block: "start",
  })
}

// Global cart functions for other pages to use
window.addDestinationToCart = (destination) => {
  window.addToCart({
    id: destination.id,
    type: "destination",
    name: destination.name,
    price: destination.price,
    image: destination.image,
    duration: destination.duration,
  })
}

window.addPackageToCart = (pkg) => {
  window.addToCart({
    id: pkg.id,
    type: "package",
    name: pkg.name,
    price: pkg.price,
    image: pkg.image,
    duration: pkg.duration,
  })
}

// Global state management
window.AppState = {
  currentTheme: localStorage.getItem("theme") || "light",
  cartItems: JSON.parse(localStorage.getItem("cartItems")) || [],
  favorites: JSON.parse(localStorage.getItem("favorites")) || [],
  searchHistory: JSON.parse(localStorage.getItem("searchHistory")) || [],
  currentUser: JSON.parse(localStorage.getItem("currentUser")) || null,
  currentSlide: 0,
  isSearchOpen: false,
  isCartOpen: false,
  isMobileMenuOpen: false,
}

// Background images for slideshow (HOME PAGE)
const backgroundImages = [
  "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
  "https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
  "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
  "https://images.unsplash.com/photo-1488646953014-85cb44e25828?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
  "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
]

// Sample data for search functionality (ALL PAGES)
const searchData = [
  // Destinations
  {
    type: "destination",
    title: "Bali, Indonesia",
    description: "Tropical paradise with stunning beaches",
    image: "https://images.unsplash.com/photo-1537953773345-d172ccf13cf1?w=100",
    url: "/destinations.html#bali",
  },
  {
    type: "destination",
    title: "Tokyo, Japan",
    description: "Modern city with rich culture",
    image: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=100",
    url: "/destinations.html#tokyo",
  },
  {
    type: "destination",
    title: "Paris, France",
    description: "City of love and lights",
    image: "https://media.cntraveler.com/photos/57d961ce3e6b32bf25f5ad0f/16:9/w_2580,c_limit/most-beautiful-paris-louvre-GettyImages-536267205.jpg",
    url: "/destinations.html#paris",
  },
  {
    type: "destination",
    title: "New York, USA",
    description: "The city that never sleeps",
    image: "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?w=100",
    url: "/destinations.html#newyork",
  },
  {
    type: "destination",
    title: "Dubai, UAE",
    description: "Luxury and modern architecture",
    image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=100",
    url: "/destinations.html#dubai",
  },

  // Packages
  {
    type: "package",
    title: "Bali Adventure Package",
    description: "7 days of tropical bliss",
    image: "https://images.unsplash.com/photo-1537953773345-d172ccf13cf1?w=100",
    url: "/packages.html#bali-adventure",
  },
  {
    type: "package",
    title: "European Grand Tour",
    description: "14 days across 5 countries",
    image: "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?w=100",
    url: "/packages.html#europe-tour",
  },
  {
    type: "package",
    title: "Safari Adventure",
    description: "Wildlife experience in Africa",
    image: "https://images.unsplash.com/photo-1516426122078-c23e76319801?w=100",
    url: "/packages.html#safari",
  },

  // Pages
  {
    type: "page",
    title: "About Us",
    description: "Learn about our story",
    icon: "fas fa-info-circle",
    url: "/about.html",
  },
  {
    type: "page",
    title: "Contact",
    description: "Get in touch with us",
    icon: "fas fa-envelope",
    url: "/contact.html",
  },
  { type: "page", title: "Login", description: "Access your account", icon: "fas fa-sign-in-alt", url: "/login.html" },
]

// Debounce function for search
function debounce(func, wait) {
  let timeout
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout)
      func(...args)
    }
    clearTimeout(timeout)
    timeout = setTimeout(later, wait)
  }
}

// Format currency
function formatCurrency(amount) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(amount)
}

// Generate unique ID
function generateId() {
  return Date.now().toString(36) + Math.random().toString(36).substr(2)
}

// Show notification
function showNotification(message, type = "info") {
  const notification = document.createElement("div")
  notification.className = `notification notification-${type}`
  notification.innerHTML = `
    <div class="notification-content">
      <i class="fas fa-${type === "success" ? "check-circle" : type === "error" ? "exclamation-circle" : "info-circle"}"></i>
      <span>${message}</span>
    </div>
    <button class="notification-close" onclick="this.parentElement.remove()">
      <i class="fas fa-times"></i>
    </button>
  `

  // Add notification styles if not already present
  if (!document.querySelector("#notification-styles")) {
    const styles = document.createElement("style")
    styles.id = "notification-styles"
    styles.textContent = `
      .notification {
        position: fixed;
        top: 100px;
        right: 20px;
        background: var(--bg-primary);
        border: 1px solid var(--border-color);
        border-radius: var(--radius-lg);
        padding: 1rem;
        box-shadow: var(--shadow-xl);
        z-index: 10000;
        display: flex;
        align-items: center;
        gap: 1rem;
        min-width: 300px;
        animation: slideInFromRight 0.3s ease;
      }
      .notification-success { border-left: 4px solid var(--accent-color); }
      .notification-error { border-left: 4px solid var(--danger-color); }
      .notification-info { border-left: 4px solid var(--primary-color); }
      .notification-content { display: flex; align-items: center; gap: 0.5rem; flex: 1; }
      .notification-close { background: none; border: none; color: var(--text-muted); cursor: pointer; }
    `
    document.head.appendChild(styles)
  }

  document.body.appendChild(notification)

  // Auto remove after 5 seconds
  setTimeout(() => {
    if (notification.parentElement) {
      notification.remove()
    }
  }, 5000)
}

// Save to localStorage
function saveToStorage(key, data) {
  try {
    localStorage.setItem(key, JSON.stringify(data))
  } catch (error) {
    console.error("Error saving to localStorage:", error)
  }
}

// Get from localStorage
function getFromStorage(key, defaultValue = null) {
  try {
    const item = localStorage.getItem(key)
    return item ? JSON.parse(item) : defaultValue
  } catch (error) {
    console.error("Error reading from localStorage:", error)
    return defaultValue
  }
}

// Theme Management (ALL PAGES)
function initializeTheme() {
  const savedTheme = localStorage.getItem("theme") || "light"
  AppState.currentTheme = savedTheme
  document.documentElement.setAttribute("data-theme", savedTheme)

  if (savedTheme === "dark") {
    document.body.classList.add("dark-mode")
  }

  updateThemeToggle()
}

function toggleTheme() {
  const newTheme = AppState.currentTheme === "light" ? "dark" : "light"
  AppState.currentTheme = newTheme

  document.documentElement.setAttribute("data-theme", newTheme)
  document.body.classList.toggle("dark-mode", newTheme === "dark")

  localStorage.setItem("theme", newTheme)
  updateThemeToggle()

  showNotification(`Switched to ${newTheme} mode`, "success")
}

function updateThemeToggle() {
  const themeToggle = document.querySelector(".theme-toggle")
  if (themeToggle) {
    const icon = themeToggle.querySelector("i")
    if (icon) {
      icon.className = AppState.currentTheme === "light" ? "fas fa-moon" : "fas fa-sun"
    }
  }
}

// Navigation Functionality (ALL PAGES)
function initializeNavigation() {
  const navbar = document.querySelector(".navbar")
  const mobileToggle = document.querySelector(".mobile-menu-toggle")
  const mobileMenu = document.querySelector(".mobile-menu")
  let lastScrollY = window.scrollY

  // Navbar scroll behavior
  function handleScroll() {
    const currentScrollY = window.scrollY

    if (navbar) {
      // Add scrolled class for styling
      navbar.classList.toggle("scrolled", currentScrollY > 50)

      // Hide/show navbar on scroll
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        navbar.classList.add("hidden")
      } else {
        navbar.classList.remove("hidden")
      }
    }

    lastScrollY = currentScrollY
  }

  // Mobile menu toggle
  if (mobileToggle && mobileMenu) {
    mobileToggle.addEventListener("click", () => {
      AppState.isMobileMenuOpen = !AppState.isMobileMenuOpen
      mobileToggle.classList.toggle("active", AppState.isMobileMenuOpen)
      mobileMenu.classList.toggle("active", AppState.isMobileMenuOpen)
    })
  }

  // Close mobile menu when clicking outside
  document.addEventListener("click", (e) => {
    if (AppState.isMobileMenuOpen && !mobileMenu?.contains(e.target) && !mobileToggle?.contains(e.target)) {
      AppState.isMobileMenuOpen = false
      mobileToggle?.classList.remove("active")
      mobileMenu?.classList.remove("active")
    }
  })

  // Highlight active navigation link
  function updateActiveNavLink() {
    const currentPage = window.location.pathname.split("/").pop() || "index.html"
    const navLinks = document.querySelectorAll(".nav-link, .mobile-nav-link")

    navLinks.forEach((link) => {
      const href = link.getAttribute("href")
      if (href && (href.includes(currentPage) || (currentPage === "index.html" && href === "/"))) {
        link.classList.add("active")
      } else {
        link.classList.remove("active")
      }
    })
  }

  // Throttled scroll handler
  let scrollTimeout
  window.addEventListener("scroll", () => {
    if (!scrollTimeout) {
      scrollTimeout = setTimeout(() => {
        handleScroll()
        scrollTimeout = null
      }, 10)
    }
  })

  updateActiveNavLink()
}

// Search Functionality (ALL PAGES)
function initializeSearch() {
  const searchTrigger = document.querySelector(".search-trigger")
  const searchOverlay = document.querySelector(".search-overlay")
  const searchClose = document.querySelector(".search-close")
  const searchInput = document.querySelector("#globalSearchInput")
  const searchResults = document.querySelector(".search-results")

  if (!searchTrigger || !searchOverlay) return

  // Open search overlay
  searchTrigger.addEventListener("click", openSearch)

  // Close search overlay
  searchClose?.addEventListener("click", closeSearch)
  searchOverlay.addEventListener("click", (e) => {
    if (e.target === searchOverlay) closeSearch()
  })

  // Search input handler
  if (searchInput) {
    const debouncedSearch = debounce(performSearch, 300)
    searchInput.addEventListener("input", (e) => {
      debouncedSearch(e.target.value)
    })

    // Handle keyboard navigation
    searchInput.addEventListener("keydown", handleSearchKeyboard)
  }

  // Keyboard shortcuts
  document.addEventListener("keydown", (e) => {
    if ((e.ctrlKey || e.metaKey) && e.key === "k") {
      e.preventDefault()
      openSearch()
    }
    if (e.key === "Escape" && AppState.isSearchOpen) {
      closeSearch()
    }
  })
}

function openSearch() {
  const searchOverlay = document.querySelector(".search-overlay")
  const searchInput = document.querySelector("#globalSearchInput")

  if (searchOverlay) {
    AppState.isSearchOpen = true
    searchOverlay.classList.add("active")
    document.body.style.overflow = "hidden"

    setTimeout(() => {
      searchInput?.focus()
    }, 100)
  }
}

function closeSearch() {
  const searchOverlay = document.querySelector(".search-overlay")
  const searchInput = document.querySelector("#globalSearchInput")

  if (searchOverlay) {
    AppState.isSearchOpen = false
    searchOverlay.classList.remove("active")
    document.body.style.overflow = ""

    if (searchInput) {
      searchInput.value = ""
      clearSearchResults()
    }
  }
}

function performSearch(query) {
  const searchResults = document.querySelector(".search-results")
  if (!searchResults || !query.trim()) {
    clearSearchResults()
    return
  }

  const filteredResults = searchData.filter(
    (item) =>
      item.title.toLowerCase().includes(query.toLowerCase()) ||
      item.description.toLowerCase().includes(query.toLowerCase()),
  )

  displaySearchResults(filteredResults, query)

  // Save to search history
  if (query.trim() && !AppState.searchHistory.includes(query.trim())) {
    AppState.searchHistory.unshift(query.trim())
    AppState.searchHistory = AppState.searchHistory.slice(0, 10) // Keep only last 10
    saveToStorage("searchHistory", AppState.searchHistory)
  }
}

function displaySearchResults(results, query) {
  const searchResults = document.querySelector(".search-results")
  if (!searchResults) return

  if (results.length === 0) {
    searchResults.innerHTML = `
      <div class="search-no-results">
        <i class="fas fa-search"></i>
        <h4>No results found</h4>
        <p>Try searching for destinations, packages, or pages</p>
      </div>
    `
    return
  }

  searchResults.innerHTML = results
    .map(
      (item) => `
    <div class="search-result-item" onclick="navigateToResult('${item.url}')">
      ${
        item.image
          ? `<img src="${item.image}" alt="${item.title}" loading="lazy">`
          : `<div class="result-icon"><i class="${item.icon || "fas fa-map-marker-alt"}"></i></div>`
      }
      <div class="result-content">
        <h4>${highlightQuery(item.title, query)}</h4>
        <p>${highlightQuery(item.description, query)}</p>
      </div>
      <span class="result-type">${item.type}</span>
      <i class="fas fa-arrow-right result-arrow"></i>
    </div>
  `,
    )
    .join("")
}

function highlightQuery(text, query) {
  if (!query) return text
  const regex = new RegExp(`(${query})`, "gi")
  return text.replace(regex, "<mark>$1</mark>")
}

function clearSearchResults() {
  const searchResults = document.querySelector(".search-results")
  if (searchResults) {
    searchResults.innerHTML = ""
  }
}

function navigateToResult(url) {
  closeSearch()
  if (url.startsWith("#")) {
    // Scroll to section on current page
    const element = document.querySelector(url)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  } else {
    // Navigate to different page
    window.location.href = url
  }
}

function handleSearchKeyboard(e) {
  const results = document.querySelectorAll(".search-result-item")
  const currentActive = document.querySelector(".search-result-item.active")
  let activeIndex = Array.from(results).indexOf(currentActive)

  switch (e.key) {
    case "ArrowDown":
      e.preventDefault()
      activeIndex = Math.min(activeIndex + 1, results.length - 1)
      updateActiveResult(results, activeIndex)
      break
    case "ArrowUp":
      e.preventDefault()
      activeIndex = Math.max(activeIndex - 1, 0)
      updateActiveResult(results, activeIndex)
      break
    case "Enter":
      e.preventDefault()
      if (currentActive) {
        currentActive.click()
      }
      break
  }
}

function updateActiveResult(results, activeIndex) {
  results.forEach((result, index) => {
    result.classList.toggle("active", index === activeIndex)
  })
}

// Cart Functionality (ALL PAGES)
function initializeCart() {
  const cartTrigger = document.querySelector(".cart-trigger")
  const cartOverlay = document.querySelector(".cart-overlay")
  const cartClose = document.querySelector(".cart-close")

  if (!cartTrigger || !cartOverlay) return

  // Open cart overlay
  cartTrigger.addEventListener("click", openCart)

  // Close cart overlay
  cartClose?.addEventListener("click", closeCart)
  cartOverlay.addEventListener("click", (e) => {
    if (e.target === cartOverlay) closeCart()
  })

  // Initialize cart display
  updateCartDisplay()
  updateCartCount()
}

function openCart() {
  const cartOverlay = document.querySelector(".cart-overlay")

  if (cartOverlay) {
    AppState.isCartOpen = true
    cartOverlay.classList.add("active")
    document.body.style.overflow = "hidden"
    updateCartDisplay()
  }
}

function closeCart() {
  const cartOverlay = document.querySelector(".cart-overlay")

  if (cartOverlay) {
    AppState.isCartOpen = false
    cartOverlay.classList.remove("active")
    document.body.style.overflow = ""
  }
}

function addToCart(item) {
  const existingItem = AppState.cartItems.find((cartItem) => cartItem.id === item.id)

  if (existingItem) {
    existingItem.quantity += 1
  } else {
    AppState.cartItems.push({
      ...item,
      quantity: 1,
      addedAt: new Date().toISOString(),
    })
  }

  saveToStorage("cartItems", AppState.cartItems)
  updateCartCount()
  updateCartDisplay()

  showNotification(`${item.title} added to cart!`, "success")
}

function removeFromCart(itemId) {
  const itemIndex = AppState.cartItems.findIndex((item) => item.id === itemId)
  if (itemIndex > -1) {
    const removedItem = AppState.cartItems[itemIndex]
    AppState.cartItems.splice(itemIndex, 1)
    saveToStorage("cartItems", AppState.cartItems)
    updateCartCount()
    updateCartDisplay()

    showNotification(`${removedItem.title} removed from cart`, "info")
  }
}

function updateCartQuantity(itemId, newQuantity) {
  const item = AppState.cartItems.find((cartItem) => cartItem.id === itemId)
  if (item) {
    if (newQuantity <= 0) {
      removeFromCart(itemId)
    } else {
      item.quantity = newQuantity
      saveToStorage("cartItems", AppState.cartItems)
      updateCartDisplay()
      updateCartCount()
    }
  }
}

function updateCartCount() {
  const cartCount = document.querySelector(".cart-count")
  const totalItems = AppState.cartItems.reduce((sum, item) => sum + item.quantity, 0)

  if (cartCount) {
    cartCount.textContent = totalItems
    cartCount.style.display = totalItems > 0 ? "block" : "none"
  }
}

function updateCartDisplay() {
  const cartItems = document.querySelector(".cart-items")
  const cartTotal = document.querySelector(".cart-total .total-amount")

  if (!cartItems) return

  if (AppState.cartItems.length === 0) {
    cartItems.innerHTML = `
      <div class="cart-empty">
        <i class="fas fa-shopping-cart"></i>
        <h3>Your cart is empty</h3>
        <p>Add some amazing travel packages to get started!</p>
      </div>
    `
    if (cartTotal) cartTotal.textContent = "$0.00"
    return
  }

  const total = AppState.cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0)

  cartItems.innerHTML = AppState.cartItems
    .map(
      (item) => `
    <div class="cart-item">
      <img src="${item.image}" alt="${item.title}" loading="lazy">
      <div class="cart-item-details">
        <h4>${item.title}</h4>
        <p class="cart-item-type">${item.type}</p>
        <div class="cart-item-price">${formatCurrency(item.price)}</div>
      </div>
      <div class="cart-item-controls">
        <div class="quantity-controls">
          <button onclick="updateCartQuantity('${item.id}', ${item.quantity - 1})">
            <i class="fas fa-minus"></i>
          </button>
          <span>${item.quantity}</span>
          <button onclick="updateCartQuantity('${item.id}', ${item.quantity + 1})">
            <i class="fas fa-plus"></i>
          </button>
        </div>
        <button class="remove-item" onclick="removeFromCart('${item.id}')">
          <i class="fas fa-trash"></i>
        </button>
      </div>
    </div>
  `,
    )
    .join("")

  if (cartTotal) {
    cartTotal.textContent = formatCurrency(total)
  }
}

function clearCart() {
  AppState.cartItems = []
  saveToStorage("cartItems", AppState.cartItems)
  updateCartCount()
  updateCartDisplay()
  showNotification("Cart cleared", "info")
}

// Favorites Functionality (ALL PAGES)
function toggleFavorite(item) {
  const existingIndex = AppState.favorites.findIndex((fav) => fav.id === item.id)

  if (existingIndex > -1) {
    AppState.favorites.splice(existingIndex, 1)
    showNotification(`${item.title} removed from favorites`, "info")
  } else {
    AppState.favorites.push({
      ...item,
      addedAt: new Date().toISOString(),
    })
    showNotification(`${item.title} added to favorites!`, "success")
  }

  saveToStorage("favorites", AppState.favorites)
  updateFavoriteButtons()
}

function updateFavoriteButtons() {
  const favoriteButtons = document.querySelectorAll(".favorite-btn")

  favoriteButtons.forEach((button) => {
    const itemId = button.getAttribute("data-id")
    const isFavorited = AppState.favorites.some((fav) => fav.id === itemId)

    button.classList.toggle("favorited", isFavorited)
    const icon = button.querySelector("i")
    if (icon) {
      icon.className = isFavorited ? "fas fa-heart" : "far fa-heart"
    }
  })
}

// Scroll Animations (ALL PAGES)
function initializeScrollAnimations() {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("animate-fade-in-up")
        observer.unobserve(entry.target)
      }
    })
  }, observerOptions)

  // Observe elements for animation
  const animateElements = document.querySelectorAll(`
    .feature-card,
    .destination-card,
    .package-card,
    .testimonial-card,
    .value-card,
    .team-card,
    .contact-card,
    .stat-card,
    .about-section,
    .section-header
  `)

  animateElements.forEach((element, index) => {
    element.style.opacity = "0"
    element.style.transform = "translateY(30px)"
    element.style.animationDelay = `${index * 0.1}s`
    observer.observe(element)
  })
}

// Form Handling (CONTACT & AUTH PAGES)
function initializeForms() {
  // Contact form
  const contactForm = document.querySelector(".contact-form")
  if (contactForm) {
    contactForm.addEventListener("submit", handleContactForm)
  }

  // Auth forms
  const loginForm = document.querySelector("#loginForm")
  const signupForm = document.querySelector("#signupForm")

  if (loginForm) {
    loginForm.addEventListener("submit", handleLoginForm)
  }

  if (signupForm) {
    signupForm.addEventListener("submit", handleSignupForm)
  }

  // FAQ toggles
  const faqQuestions = document.querySelectorAll(".faq-question")
  faqQuestions.forEach((question) => {
    question.addEventListener("click", toggleFAQ)
  })
}

function handleContactForm(e) {
  e.preventDefault()

  const formData = new FormData(e.target)
  const data = Object.fromEntries(formData.entries())

  // Simulate form submission
  const submitButton = e.target.querySelector('button[type="submit"]')
  const originalText = submitButton.textContent

  submitButton.textContent = "Sending..."
  submitButton.disabled = true

  setTimeout(() => {
    showNotification("Message sent successfully! We'll get back to you soon.", "success")
    e.target.reset()
    submitButton.textContent = originalText
    submitButton.disabled = false
  }, 2000)
}

function handleLoginForm(e) {
  e.preventDefault()

  const formData = new FormData(e.target)
  const data = Object.fromEntries(formData.entries())

  // Simulate login
  const submitButton = e.target.querySelector('button[type="submit"]')
  const originalText = submitButton.textContent

  submitButton.textContent = "Signing in..."
  submitButton.disabled = true

  setTimeout(() => {
    // Simulate successful login
    AppState.currentUser = {
      id: generateId(),
      email: data.email,
      name: data.email.split("@")[0],
      loginAt: new Date().toISOString(),
    }

    saveToStorage("currentUser", AppState.currentUser)
    showNotification("Welcome back!", "success")

    // Redirect to home page
    setTimeout(() => {
      window.location.href = "/"
    }, 1000)
  }, 2000)
}

function handleSignupForm(e) {
  e.preventDefault()

  const formData = new FormData(e.target)
  const data = Object.fromEntries(formData.entries())

  // Basic validation
  if (data.password !== data.confirmPassword) {
    showNotification("Passwords do not match", "error")
    return
  }

  // Simulate signup
  const submitButton = e.target.querySelector('button[type="submit"]')
  const originalText = submitButton.textContent

  submitButton.textContent = "Creating account..."
  submitButton.disabled = true

  setTimeout(() => {
    // Simulate successful signup
    AppState.currentUser = {
      id: generateId(),
      email: data.email,
      name: `${data.firstName} ${data.lastName}`,
      firstName: data.firstName,
      lastName: data.lastName,
      signupAt: new Date().toISOString(),
    }

    saveToStorage("currentUser", AppState.currentUser)
    showNotification("Account created successfully! Welcome to Journii!", "success")

    // Redirect to home page
    setTimeout(() => {
      window.location.href = "/"
    }, 1000)
  }, 2000)
}

function toggleFAQ(e) {
  const question = e.currentTarget
  const answer = question.nextElementSibling
  const icon = question.querySelector("i")

  if (answer) {
    const isOpen = answer.classList.contains("active")

    // Close all other FAQs
    document.querySelectorAll(".faq-answer.active").forEach((openAnswer) => {
      openAnswer.classList.remove("active")
      openAnswer.style.display = "none"
    })

    document.querySelectorAll(".faq-question i").forEach((faqIcon) => {
      faqIcon.style.transform = "rotate(0deg)"
    })

    // Toggle current FAQ
    if (!isOpen) {
      answer.classList.add("active")
      answer.style.display = "block"
      if (icon) icon.style.transform = "rotate(180deg)"
    }
  }
}

// Page-Specific Functionality
// HOME PAGE - Counter animation
function initializeCounters() {
  const counters = document.querySelectorAll(".stat-number")

  const animateCounter = (counter) => {
    const target = Number.parseInt(counter.textContent.replace(/[^\d]/g, ""))
    const duration = 2000
    const step = target / (duration / 16)
    let current = 0

    const timer = setInterval(() => {
      current += step
      if (current >= target) {
        counter.textContent = target.toLocaleString() + (counter.textContent.includes("+") ? "+" : "")
        clearInterval(timer)
      } else {
        counter.textContent = Math.floor(current).toLocaleString()
      }
    }, 16)
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        animateCounter(entry.target)
        observer.unobserve(entry.target)
      }
    })
  })

  counters.forEach((counter) => observer.observe(counter))
}

// DESTINATIONS PAGE - Filter functionality
function initializeDestinationFilters() {
  const searchInput = document.querySelector("#destinationSearch")
  const categoryFilter = document.querySelector("#categoryFilter")
  const priceFilter = document.querySelector("#priceFilter")
  const loadMoreBtn = document.querySelector("#loadMoreDestinations")

  if (searchInput) {
    const debouncedFilter = debounce(filterDestinations, 300)
    searchInput.addEventListener("input", debouncedFilter)
  }

  if (categoryFilter) {
    categoryFilter.addEventListener("change", filterDestinations)
  }

  if (priceFilter) {
    priceFilter.addEventListener("change", filterDestinations)
  }

  if (loadMoreBtn) {
    loadMoreBtn.addEventListener("click", loadMoreDestinations)
  }
}

function filterDestinations() {
  const searchTerm = document.querySelector("#destinationSearch")?.value.toLowerCase() || ""
  const category = document.querySelector("#categoryFilter")?.value || ""
  const priceRange = document.querySelector("#priceFilter")?.value || ""

  const destinationCards = document.querySelectorAll(".destination-card-full")
  let visibleCount = 0

  destinationCards.forEach((card) => {
    const title = card.querySelector("h3")?.textContent.toLowerCase() || ""
    const cardCategory = card.getAttribute("data-category") || ""
    const price = Number.parseInt(card.getAttribute("data-price")) || 0

    let showCard = true

    // Search filter
    if (searchTerm && !title.includes(searchTerm)) {
      showCard = false
    }

    // Category filter
    if (category && category !== cardCategory) {
      showCard = false
    }

    // Price filter
    if (priceRange) {
      const [min, max] = priceRange.split("-").map(Number)
      if (price < min || (max && price > max)) {
        showCard = false
      }
    }

    card.style.display = showCard ? "block" : "none"
    if (showCard) visibleCount++
  })

  // Update results count
  const resultsCount = document.querySelector(".results-count")
  if (resultsCount) {
    resultsCount.textContent = `${visibleCount} destinations found`
  }
}

function loadMoreDestinations() {
  // Simulate loading more destinations
  const loadMoreBtn = document.querySelector("#loadMoreDestinations")
  if (loadMoreBtn) {
    loadMoreBtn.textContent = "Loading..."
    loadMoreBtn.disabled = true

    setTimeout(() => {
      showNotification("All destinations loaded!", "info")
      loadMoreBtn.style.display = "none"
    }, 1500)
  }
}

// --- Ensure AppState.cartItems is synced with localStorage on booking.html load ---
if (window.location.pathname.includes('booking.html')) {
  document.addEventListener('DOMContentLoaded', () => {
    // Always sync AppState.cartItems with localStorage
    window.AppState = window.AppState || {};
    window.AppState.cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    renderBookingSummaryFromCart();
    document.addEventListener('cartUpdated', renderBookingSummaryFromCart);
  });
  window.renderBookingSummaryFromCart = renderBookingSummaryFromCart;
}

// --- Booking page: Quantity selector functionality for number of people ---
if (window.location.pathname.includes('booking.html')) {
  document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('.qty-btn').forEach(function(btn) {
      btn.addEventListener('click', function() {
        const target = this.getAttribute('data-target');
        const input = document.getElementById(target);
        if (!input) return;
        const isPlus = this.classList.contains('plus');
        const currentValue = parseInt(input.value, 10);
        const min = parseInt(input.getAttribute('min'), 10);
        const max = parseInt(input.getAttribute('max'), 10);
        if (isPlus && currentValue < max) {
          input.value = currentValue + 1;
        } else if (!isPlus && currentValue > min) {
          input.value = currentValue - 1;
        }
        if (typeof updateBookingSummary === 'function') {
          updateBookingSummary();
        } else if (window.updateBookingSummary) {
          window.updateBookingSummary();
        }
      });
    });
  });
}

// Initialization (ALL PAGES)
document.addEventListener("DOMContentLoaded", () => {
  console.log("🌍 Journii Travel Website - Initializing...")

  // Core functionality (all pages)
  initializeTheme()
  initializeNavigation()
  initializeSearch()
  initializeCart()
  initializeForms()
  initializeScrollAnimations()

  // Page-specific functionality
  const currentPage = window.location.pathname.split("/").pop() || "index.html"

  switch (currentPage) {
    case "index.html":
    case "":
      initializeBackgroundSlideshow()
      initializeCounters()
      break

    case "destinations.html":
      initializeDestinationFilters()
      break

    case "packages.html":
      // Package-specific initialization would go here
      break

    case "about.html":
      // About-specific initialization would go here
      break

    case "contact.html":
      // Contact-specific initialization would go here
      break

    case "login.html":
    case "signup.html":
      // Auth-specific initialization would go here
      break
  }

  // --- Booking Confirm Button: Attach handler if on booking page ---
  if (window.location.pathname.includes('booking.html')) {
    const confirmBtn = document.getElementById('confirmBookingBtn');
    if (confirmBtn) {
      console.log('[Journii] Confirm button found, attaching event handler.');
      confirmBtn.addEventListener('click', function() {
        // Always update the summary before locking
        if (typeof updateBookingSummary === 'function') updateBookingSummary();
        if (typeof renderBookingSummaryFromCart === 'function') renderBookingSummaryFromCart();
        // Save price breakdown to localStorage for payment page
        try {
          const priceBreakdown = {
            packagePrice: document.getElementById('packagePrice')?.textContent || '',
            childrenPrice: document.getElementById('childrenPrice')?.textContent || '',
            insuranceCost: document.getElementById('insuranceCost')?.textContent || '',
            transferCost: document.getElementById('transferCost')?.textContent || '',
            subtotal: document.getElementById('subtotal')?.textContent || '',
            taxes: document.getElementById('taxes')?.textContent || '',
            totalAmount: document.getElementById('totalAmount')?.textContent || ''
          };
          localStorage.setItem('journii_priceBreakdown', JSON.stringify(priceBreakdown));
        } catch (e) { console.warn('Failed to save price breakdown:', e); }

        // Disable all booking form fields and interactive elements EXCEPT the Proceed to Payment button
        const form = document.getElementById('bookingForm');
        if (form) {
          // Lock all form fields except the Proceed to Payment button
          Array.from(form.elements).forEach(function(el) {
            // Do not disable the Proceed to Payment button (type=submit)
            if (el && el.type === 'submit' && el.id === 'proceedToPaymentBtn') {
              el.disabled = false;
              el.removeAttribute('readonly');
              el.removeAttribute('tabindex');
              return;
            }
            if (el && typeof el.disabled !== 'undefined') {
              el.disabled = true;
            }
            if (el && (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA')) {
              el.setAttribute('readonly', 'readonly');
            }
            el.setAttribute('tabindex', '-1');
          });
          // Also lock all buttons/selects/inputs/textareas except the Proceed to Payment button
          form.querySelectorAll('button, select, input, textarea').forEach(function(el) {
            if (el.type === 'submit' && el.id === 'proceedToPaymentBtn') {
              el.disabled = false;
              el.removeAttribute('readonly');
              el.removeAttribute('tabindex');
              return;
            }
            el.disabled = true;
            el.setAttribute('tabindex', '-1');
            if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
              el.setAttribute('readonly', 'readonly');
            }
          });
          form.classList.add('booking-form-final');
        }
        // Lock quantity buttons
        document.querySelectorAll('.qty-btn').forEach(function(btn) {
          btn.disabled = true;
          btn.classList.add('qty-btn-disabled');
          btn.setAttribute('tabindex', '-1');
        });
        const summarySection = document.querySelector('.booking-summary');
        if (summarySection) {
          summarySection.classList.add('booking-summary-final');
          let finalMsg = document.getElementById('finalSummaryMsg');
          if (!finalMsg) {
            finalMsg = document.createElement('div');
            finalMsg.id = 'finalSummaryMsg';
            finalMsg.style = 'color: #16a34a; font-weight: bold; margin-bottom: 1rem;';
            finalMsg.textContent = 'Booking confirmed! The summary below is now final.';
            summarySection.prepend(finalMsg);
          }
          summarySection.scrollIntoView({behavior:'smooth'});
        }
        if (!document.getElementById('bookingFinalStyle')) {
          const bookingFinalStyle = document.createElement('style');
          bookingFinalStyle.id = 'bookingFinalStyle';
          bookingFinalStyle.textContent = `
            .booking-form-final {
              opacity: 0.7;
              pointer-events: none;
            }
            .booking-summary-final {
              border: 2px solid #16a34a !important;
              box-shadow: 0 0 0 2px #16a34a33;
              opacity: 0.95;
            }
            .qty-btn-disabled {
              opacity: 0.5;
              pointer-events: none;
            }
            .booking-summary-final * {
              user-select: none !important;
            }
          `;
          document.head.appendChild(bookingFinalStyle);
        }
        setTimeout(function() {
          if (!document.getElementById('bookingConfirmedModal')) {
            const modal = document.createElement('div');
            modal.id = 'bookingConfirmedModal';
            modal.innerHTML = `
              <div class="booking-modal-overlay" style="position:fixed;top:0;left:0;width:100vw;height:100vh;background:rgba(0,0,0,0.45);z-index:9999;display:flex;align-items:center;justify-content:center;">
                <div class="booking-modal-content" style="background:#fff;padding:2rem 2.5rem;border-radius:1rem;box-shadow:0 8px 32px rgba(0,0,0,0.18);text-align:center;max-width:90vw;">
                  <div style="font-size:2.5rem;color:#16a34a;margin-bottom:1rem;"><i class='fas fa-check-circle'></i></div>
                  <h2 style="margin-bottom:0.5rem;">Booking Confirmed!</h2>
                  <p style="margin-bottom:1.5rem;">Your booking has been successfully confirmed.<br>The details are now final and locked.</p>
                  <button id="closeBookingModalBtn" style="background:#16a34a;color:#fff;padding:0.7rem 2.2rem;border:none;border-radius:0.5rem;font-size:1.1rem;cursor:pointer;">OK</button>
                </div>
              </div>
            `;
            document.body.appendChild(modal);
            document.getElementById('closeBookingModalBtn').addEventListener('click', function() {
              document.getElementById('bookingConfirmedModal').remove();
            });
          }
        }, 100);
      });
    } else {
      console.warn('[Journii] Confirm button NOT found in DOM!');
    }
  }

  // Update UI based on current state
  updateCartCount()
  updateFavoriteButtons()

  console.log("✅ Journii Travel Website - Initialized successfully!")
})

// Handle page visibility changes
document.addEventListener("visibilitychange", () => {
  if (document.hidden) {
    // Page is hidden - pause animations, etc.
    console.log("Page hidden - pausing background processes")
  } else {
    // Page is visible - resume animations, etc.
    console.log("Page visible - resuming background processes")
  }
})

// Handle online/offline status
window.addEventListener("online", () => {
  showNotification("Connection restored", "success")
})

window.addEventListener("offline", () => {
  showNotification("You are offline. Some features may not work.", "error")
})

// Expose global functions for HTML onclick handlers
window.toggleTheme = toggleTheme
window.addToCart = addToCart
window.removeFromCart = removeFromCart
window.updateCartQuantity = updateCartQuantity
window.toggleFavorite = toggleFavorite
window.clearCart = clearCart
window.openSearch = openSearch
window.closeSearch = closeSearch
window.openCart = openCart
window.closeCart = closeCart


        // Tab switching functionality
        document.querySelectorAll('.menu-item').forEach(item => {
            item.addEventListener('click', function(e) {
                e.preventDefault();
                
                // Remove active class from all menu items and tab contents
                document.querySelectorAll('.menu-item').forEach(mi => mi.classList.remove('active'));
                document.querySelectorAll('.tab-content').forEach(tc => tc.classList.remove('active'));
                
                // Add active class to clicked menu item
                this.classList.add('active');
                
                // Show corresponding tab content
                const tabId = this.getAttribute('data-tab');
                document.getElementById(tabId).classList.add('active');
            });
        });
        
        // Booking filter functionality
        document.querySelectorAll('.filter-btn').forEach(btn => {
            btn.addEventListener('click', function() {
                // Remove active class from all filter buttons
                document.querySelectorAll('.filter-btn').forEach(fb => fb.classList.remove('active'));
                this.classList.add('active');
                
                const filter = this.getAttribute('data-filter');
                const bookingCards = document.querySelectorAll('.booking-card');
                
                bookingCards.forEach(card => {
                    if (filter === 'all' || card.classList.contains(filter)) {
                        card.style.display = 'flex';
                    } else {
                        card.style.display = 'none';
                    }
                });
            });
        });
        
        // Wishlist remove functionality
        document.querySelectorAll('.wishlist-remove').forEach(btn => {
            btn.addEventListener('click', function() {
                const card = this.closest('.wishlist-card');
                card.style.animation = 'fadeOut 0.3s ease-out';
                setTimeout(() => {
                    card.remove();
                    showSuccessMessage('Item removed from wishlist');
                }, 300);
            });
        });
        
        // Profile form submission
        document.getElementById('profileForm').addEventListener('submit', function(e) {
            e.preventDefault();
            showSuccessMessage('Profile updated successfully!');
        });
        
        // User dropdown functionality
        document.querySelector('.user-avatar').addEventListener('click', function() {
            document.querySelector('.user-dropdown').classList.toggle('active');
        });
        
        // Close dropdown when clicking outside
        document.addEventListener('click', function(e) {
            if (!e.target.closest('.user-menu')) {
                document.querySelector('.user-dropdown').classList.remove('active');
            }
        });
        
        // Add fadeOut animation
        const style = document.createElement('style');
        style.textContent = `
            @keyframes fadeOut {
                from { opacity: 1; transform: scale(1); }
                to { opacity: 0; transform: scale(0.9); }
            }
        `;
        document.head.appendChild(style);

//booking//
        // Quantity selector functionality
        document.querySelectorAll('.qty-btn').forEach(btn => {
            btn.addEventListener('click', function() {
                const target = this.getAttribute('data-target');
                const input = document.getElementById(target);
                const isPlus = this.classList.contains('plus');
                const currentValue = parseInt(input.value);
                const min = parseInt(input.getAttribute('min'));
                const max = parseInt(input.getAttribute('max'));
                
                if (isPlus && currentValue < max) {
                    input.value = currentValue + 1;
                } else if (!isPlus && currentValue > min) {
                    input.value = currentValue - 1;
                }
                
                updateBookingSummary();
            });
        });
        
        // Update booking summary (live, including user info and price breakdown)
        function updateBookingSummary() {
            const form = document.getElementById('bookingForm');
            if (!form) return;
            const formData = new FormData(form);
            const adults = parseInt(formData.get('adults')) || 0;
            const children = parseInt(formData.get('children')) || 0;
            const infants = parseInt(formData.get('infants')) || 0;
            const insurance = formData.get('travelInsurance') ? true : false;
            const transfer = formData.get('airportTransfer') ? true : false;

            // Get total package price from cart (sum of all items)
            let packageCost = 0;
            const cartItems = (window.AppState && window.AppState.cartItems && window.AppState.cartItems.length)
                ? window.AppState.cartItems
                : JSON.parse(localStorage.getItem('cartItems') || '[]');
            if (cartItems.length > 0) {
                packageCost = cartItems.reduce((sum, item) => sum + (item.price * (item.quantity || 1)), 0);
            }

            // Calculate number of travelers
            const numTravelers = adults + children;
            const insurancePrice = 99;
            const transferPrice = 75;
            const insuranceCost = insurance ? numTravelers * insurancePrice : 0;
            const transferCost = transfer ? numTravelers * transferPrice : 0;
            const subtotal = packageCost + insuranceCost + transferCost;
            const taxes = Math.round(subtotal * 0.1);
            const total = subtotal + taxes;

            // Update summary price breakdown using new IDs
            document.getElementById('packagePrice').textContent = formatCurrency(packageCost);
            document.getElementById('insuranceCost').textContent = formatCurrency(insuranceCost);
            document.getElementById('transferCost').textContent = formatCurrency(transferCost);
            document.getElementById('subtotal').textContent = formatCurrency(subtotal);
            document.getElementById('taxes').textContent = formatCurrency(taxes);
            document.getElementById('totalAmount').textContent = formatCurrency(total);
            // Hide childrenPrice if not needed
            const childrenPriceEl = document.getElementById('childrenPrice');
            if (childrenPriceEl) childrenPriceEl.textContent = '';

            // Always save price breakdown to localStorage for payment page (live)
            try {
              const priceBreakdown = {
                packagePrice: document.getElementById('packagePrice')?.textContent || '',
                childrenPrice: document.getElementById('childrenPrice')?.textContent || '',
                insuranceCost: document.getElementById('insuranceCost')?.textContent || '',
                transferCost: document.getElementById('transferCost')?.textContent || '',
                subtotal: document.getElementById('subtotal')?.textContent || '',
                taxes: document.getElementById('taxes')?.textContent || '',
                totalAmount: document.getElementById('totalAmount')?.textContent || ''
              };
              localStorage.setItem('journii_priceBreakdown', JSON.stringify(priceBreakdown));
            } catch (e) { console.warn('Failed to save price breakdown:', e); }

            // Show user info in dedicated userBookingDetails div (above the price breakdown)
            const summaryItems = [];
            summaryItems.push(`<strong>Travel Dates:</strong> ${formData.get('departureDate') || ''} to ${formData.get('returnDate') || ''}`);
            summaryItems.push(`<strong>Adults:</strong> ${adults}`);
            summaryItems.push(`<strong>Children:</strong> ${children}`);
            summaryItems.push(`<strong>Infants:</strong> ${infants}`);
            summaryItems.push(`<strong>Name:</strong> ${(formData.get('firstName') || '') + ' ' + (formData.get('lastName') || '')}`);
            summaryItems.push(`<strong>Email:</strong> ${formData.get('email') || ''}`);
            summaryItems.push(`<strong>Phone:</strong> ${formData.get('phone') || ''}`);
            summaryItems.push(`<strong>Date of Birth:</strong> ${formData.get('dateOfBirth') || ''}`);
            summaryItems.push(`<strong>Nationality:</strong> ${formData.get('nationality') || ''}`);
            if (formData.get('specialRequests')) summaryItems.push(`<strong>Special Requests:</strong> ${formData.get('specialRequests')}`);
            if (insurance) summaryItems.push(`<strong>Travel Insurance:</strong> Yes`);
            if (transfer) summaryItems.push(`<strong>Airport Transfer:</strong> Yes`);
            if (formData.get('newsletter')) summaryItems.push(`<strong>Newsletter:</strong> Subscribed`);
            const userBookingDetails = document.getElementById('userBookingDetails');
            if (userBookingDetails) {
                userBookingDetails.innerHTML = `<div class=\"user-booking-details\" style=\"margin-bottom:1.5rem;\">${summaryItems.map(i => `<div style='margin-bottom:0.3rem;'>${i}</div>`).join('')}</div>`;
            }
        }
        
        // Insurance and transfer checkboxes: listen to both input and change for robust live update
        const travelInsuranceEl = document.getElementById('travelInsurance');
        const airportTransferEl = document.getElementById('airportTransfer');
        if (travelInsuranceEl) {
            travelInsuranceEl.addEventListener('change', updateBookingSummary);
            travelInsuranceEl.addEventListener('input', updateBookingSummary);
        }
        if (airportTransferEl) {
            airportTransferEl.addEventListener('change', updateBookingSummary);
            airportTransferEl.addEventListener('input', updateBookingSummary);
        }

        // Live update booking summary for all relevant fields
        [
            'adults',
            'children',
            'infants',
            'departureDate',
            'returnDate',
            'firstName',
            'lastName',
            'email',
            'phone',
            'dateOfBirth',
            'nationality',
            'specialRequests',
            'newsletter'
        ].forEach(function(id) {
            const el = document.getElementById(id);
            if (el) {
                el.addEventListener('input', updateBookingSummary);
                el.addEventListener('change', updateBookingSummary);
            }
        });
        
        // Date validation
        document.getElementById('departureDate').addEventListener('change', function() {
            const departureDate = new Date(this.value);
            const returnDateInput = document.getElementById('returnDate');
            const minReturnDate = new Date(departureDate);
            minReturnDate.setDate(minReturnDate.getDate() + 1);
            
            returnDateInput.min = minReturnDate.toISOString().split('T')[0];
            
            if (returnDateInput.value && new Date(returnDateInput.value) <= departureDate) {
                returnDateInput.value = minReturnDate.toISOString().split('T')[0];
            }
        });
        
        // Set minimum departure date to today
        const today = new Date().toISOString().split('T')[0];
        document.getElementById('departureDate').min = today;
        
        // Booking form submission
        document.getElementById('bookingForm').addEventListener('submit', function(e) {
            e.preventDefault();
            
            const submitBtn = document.querySelector('.booking-btn');
            const terms = document.getElementById('terms').checked;
            
            if (!terms) {
                showErrorMessage('Please accept the Terms and Conditions to proceed.');
                return;
            }
            
            if (validateForm('bookingForm')) {
                setLoadingState(submitBtn, true);
                
                // Simulate booking process
                setTimeout(() => {
                    setLoadingState(submitBtn, false);
                    showSuccessMessage('Booking details saved! Redirecting to payment...');
                    
                    // Simulate redirect to payment page
                    setTimeout(() => {
                        alert('Payment integration would be implemented here. For demo purposes, booking is complete!');
                        window.location.href = 'profile.html';
                    }, 1500);
                }, 2000);
            } else {
                showErrorMessage('Please fill in all required fields correctly.');
            }
        });
        
        // Initialize summary
        updateBookingSummary();

        // --- Booking Confirm Button: Show all info in summary and update price breakdown ---
        // --- Booking Confirm Button: Just scroll to summary (all info is already live) ---
        const confirmBtn = document.getElementById('confirmBookingBtn');
        if (confirmBtn) {
          confirmBtn.addEventListener('click', function() {
            // Always update the summary before locking
            if (typeof updateBookingSummary === 'function') updateBookingSummary();
            if (typeof renderBookingSummaryFromCart === 'function') renderBookingSummaryFromCart();

            // Disable all booking form fields and all interactive elements inside the form
            const form = document.getElementById('bookingForm');
            if (form) {
              // Disable all form elements (inputs, selects, textareas, buttons)
              Array.from(form.elements).forEach(function(el) {
                if (el && typeof el.disabled !== 'undefined') {
                  el.disabled = true;
                }
                // For text inputs/textareas, also set readonly
                if (el && (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA')) {
                  el.setAttribute('readonly', 'readonly');
                }
                el.setAttribute('tabindex', '-1');
              });
              // Also disable all buttons, selects, inputs, textareas inside the form (in case of custom controls)
              form.querySelectorAll('button, select, input, textarea').forEach(function(el) {
                el.disabled = true;
                el.setAttribute('tabindex', '-1');
                if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
                  el.setAttribute('readonly', 'readonly');
                }
              });
              form.classList.add('booking-form-final');
            }
            // Disable all quantity buttons (in case they are outside the form)
            document.querySelectorAll('.qty-btn').forEach(function(btn) {
              btn.disabled = true;
              btn.classList.add('qty-btn-disabled');
              btn.setAttribute('tabindex', '-1');
            });
            // Add a visual indicator to the summary (e.g., a class or message)
            const summarySection = document.querySelector('.booking-summary');
            if (summarySection) {
              summarySection.classList.add('booking-summary-final');
              // Optionally add a message
              let finalMsg = document.getElementById('finalSummaryMsg');
              if (!finalMsg) {
                finalMsg = document.createElement('div');
                finalMsg.id = 'finalSummaryMsg';
                finalMsg.style = 'color: #16a34a; font-weight: bold; margin-bottom: 1rem;';
                finalMsg.textContent = 'Booking confirmed! The summary below is now final.';
                summarySection.prepend(finalMsg);
              }
              summarySection.scrollIntoView({behavior:'smooth'});
            }
            // Add styles for disabled/locked state (only once)
            if (!document.getElementById('bookingFinalStyle')) {
              const bookingFinalStyle = document.createElement('style');
              bookingFinalStyle.id = 'bookingFinalStyle';
              bookingFinalStyle.textContent = `
                .booking-form-final {
                  opacity: 0.7;
                  pointer-events: none;
                }
                .booking-summary-final {
                  border: 2px solid #16a34a !important;
                  box-shadow: 0 0 0 2px #16a34a33;
                  opacity: 0.95;
                }
                .qty-btn-disabled {
                  opacity: 0.5;
                  pointer-events: none;
                }
                .booking-summary-final * {
                  user-select: none !important;
                }
              `;
              document.head.appendChild(bookingFinalStyle);
            }

            // Show a popup/modal for confirmation
            setTimeout(function() {
              if (!document.getElementById('bookingConfirmedModal')) {
                const modal = document.createElement('div');
                modal.id = 'bookingConfirmedModal';
                modal.innerHTML = `
                  <div class="booking-modal-overlay" style="position:fixed;top:0;left:0;width:100vw;height:100vh;background:rgba(0,0,0,0.45);z-index:9999;display:flex;align-items:center;justify-content:center;">
                    <div class="booking-modal-content" style="background:#fff;padding:2rem 2.5rem;border-radius:1rem;box-shadow:0 8px 32px rgba(0,0,0,0.18);text-align:center;max-width:90vw;">
                      <div style="font-size:2.5rem;color:#16a34a;margin-bottom:1rem;"><i class='fas fa-check-circle'></i></div>
                      <h2 style="margin-bottom:0.5rem;">Booking Confirmed!</h2>
                      <p style="margin-bottom:1.5rem;">Your booking has been successfully confirmed.<br>The details are now final and locked.</p>
                      <button id="closeBookingModalBtn" style="background:#16a34a;color:#fff;padding:0.7rem 2.2rem;border:none;border-radius:0.5rem;font-size:1.1rem;cursor:pointer;">OK</button>
                    </div>
                  </div>
                `;
                document.body.appendChild(modal);
                document.getElementById('closeBookingModalBtn').addEventListener('click', function() {
                  document.getElementById('bookingConfirmedModal').remove();
                });
              }
            }, 100);
          });
        }

        //contact//
        document.getElementById('contactForm').addEventListener('submit', function(e) {
            e.preventDefault();
            
            const submitBtn = document.querySelector('.submit-btn');
            
            if (validateForm('contactForm')) {
                setLoadingState(submitBtn, true);
                
                // Simulate form submission
                setTimeout(() => {
                    setLoadingState(submitBtn, false);
                    showSuccessMessage('Thank you! Your message has been sent successfully. We\'ll get back to you within 24 hours.');
                    this.reset();
                }, 2000);
            } else {
                showErrorMessage('Please fill in all required fields correctly.');
            }
        });
        
        // FAQ accordion functionality
        document.querySelectorAll('.faq-question').forEach(question => {
            question.addEventListener('click', function() {
                const faqItem = this.parentElement;
                const answer = faqItem.querySelector('.faq-answer');
                const icon = this.querySelector('i');
                
                // Close other open FAQ items
                document.querySelectorAll('.faq-item').forEach(item => {
                    if (item !== faqItem) {
                        item.classList.remove('active');
                        item.querySelector('.faq-answer').style.maxHeight = null;
                        item.querySelector('.faq-question i').style.transform = 'rotate(0deg)';
                    }
                });
                
                // Toggle current FAQ item
                faqItem.classList.toggle('active');
                
                if (faqItem.classList.contains('active')) {
                    answer.style.maxHeight = answer.scrollHeight + 'px';
                    icon.style.transform = 'rotate(180deg)';
                } else {
                    answer.style.maxHeight = null;
                    icon.style.transform = 'rotate(0deg)';
                }
            });
        });

        //login//
        document.getElementById('loginForm').addEventListener('submit', function(e) {
            e.preventDefault();
            
            const submitBtn = document.querySelector('.auth-btn');
            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;
            
            if (validateForm('loginForm')) {
                setLoadingState(submitBtn, true);
                
                // Simulate login process
                setTimeout(() => {
                    setLoadingState(submitBtn, false);
                    showSuccessMessage('Login successful! Redirecting to your dashboard...');
                    
                    // Simulate redirect to profile page
                    setTimeout(() => {
                        window.location.href = 'profile.html';
                    }, 1500);
                }, 2000);
            } else {
                showErrorMessage('Please enter valid email and password.');
            }
        });
        
        // Social login buttons
        document.querySelector('.google-btn').addEventListener('click', function() {
            showSuccessMessage('Google login integration coming soon!');
        });
        
        document.querySelector('.facebook-btn').addEventListener('click', function() {
            showSuccessMessage('Facebook login integration coming soon!');
        });
        
        // Password toggle function
        function togglePassword(inputId) {
            const input = document.getElementById(inputId);
            const toggle = input.parentElement.querySelector('.password-toggle i');
            
            if (input.type === 'password') {
                input.type = 'text';
                toggle.classList.remove('fa-eye');
                toggle.classList.add('fa-eye-slash');
            } else {
                input.type = 'password';
                toggle.classList.remove('fa-eye-slash');
                toggle.classList.add('fa-eye');
            }
        }
        
        // Forgot password functionality
        document.querySelector('.forgot-password').addEventListener('click', function(e) {
            e.preventDefault();
            showSuccessMessage('Password reset link will be sent to your email shortly.');
        });

        //signup//
        // Password strength for signup page
        window.updateStrengthBar = function() {
            var passwordInput = document.getElementById('password');
            var strengthBar = document.querySelector('.strength-fill');
            var strengthText = document.querySelector('.strength-text');
            if (!passwordInput || !strengthBar || !strengthText) return;
            var password = passwordInput.value;
            var strength = 0;
            var strengthLabel = '';
            if (password.length >= 8) strength++;
            if (/[a-z]/.test(password)) strength++;
            if (/[A-Z]/.test(password)) strength++;
            if (/[0-9]/.test(password)) strength++;
            if (/[^A-Za-z0-9]/.test(password)) strength++;
            switch (strength) {
                case 0:
                case 1:
                    strengthBar.style.width = '20%';
                    strengthBar.style.backgroundColor = '#ef4444';
                    strengthLabel = 'Very Weak';
                    break;
                case 2:
                    strengthBar.style.width = '40%';
                    strengthBar.style.backgroundColor = '#f97316';
                    strengthLabel = 'Weak';
                    break;
                case 3:
                    strengthBar.style.width = '60%';
                    strengthBar.style.backgroundColor = '#eab308';
                    strengthLabel = 'Fair';
                    break;
                case 4:
                    strengthBar.style.width = '80%';
                    strengthBar.style.backgroundColor = '#22c55e';
                    strengthLabel = 'Good';
                    break;
                case 5:
                    strengthBar.style.width = '100%';
                    strengthBar.style.backgroundColor = '#16a34a';
                    strengthLabel = 'Strong';
                    break;
            }
            strengthText.textContent = password ? strengthLabel : 'Password strength';
        }
        
        // Signup form submission
        document.getElementById('signupForm').addEventListener('submit', function(e) {
            e.preventDefault();
            
            const submitBtn = document.querySelector('.auth-btn');
            const password = document.getElementById('password').value;
            const confirmPassword = document.getElementById('confirmPassword').value;
            const terms = document.getElementById('terms').checked;
            
            // Check if passwords match
            if (password !== confirmPassword) {
                showErrorMessage('Passwords do not match.');
                return;
            }
            
            // Check if terms are accepted
            if (!terms) {
                showErrorMessage('Please accept the Terms of Service and Privacy Policy.');
                return;
            }
            
            if (validateForm('signupForm')) {
                setLoadingState(submitBtn, true);
                
                // Simulate signup process
                setTimeout(() => {
                    setLoadingState(submitBtn, false);
                    showSuccessMessage('Account created successfully! Welcome to Journii!');
                    
                    // Simulate redirect to profile page
                    setTimeout(() => {
                        window.location.href = 'profile.html';
                    }, 1500);
                }, 2000);
            } else {
                showErrorMessage('Please fill in all required fields correctly.');
            }
        });
        
        // Social signup buttons
        document.querySelector('.google-btn').addEventListener('click', function() {
            showSuccessMessage('Google signup integration coming soon!');
        });
        
        document.querySelector('.facebook-btn').addEventListener('click', function() {
            showSuccessMessage('Facebook signup integration coming soon!');
        });
        
        // Password toggle function
        function togglePassword(inputId) {
            const input = document.getElementById(inputId);
            const toggle = input.parentElement.querySelector('.password-toggle i');
            
            if (input.type === 'password') {
                input.type = 'text';
                toggle.classList.remove('fa-eye');
                toggle.classList.add('fa-eye-slash');
            } else {
                input.type = 'password';
                toggle.classList.remove('fa-eye-slash');
                toggle.classList.add('fa-eye');
            }
        }
/// Booking Summary Display (BOOKING PAGE)

function renderBookingSummaryFromCart() {
  // Try both containers: bookingSummaryItems (booking.html) and userBookingDetails (payment.html)
  const summaryContainer = document.getElementById('bookingSummaryItems') || document.getElementById('userBookingDetails');
  if (!summaryContainer) return;

  // Get cart items from AppState or localStorage
  const cartItems = (window.AppState && window.AppState.cartItems && window.AppState.cartItems.length)
    ? window.AppState.cartItems
    : JSON.parse(localStorage.getItem('cartItems') || '[]');

  if (!cartItems.length) {
    summaryContainer.innerHTML = `
      <div class="empty-summary">
        <i class="fas fa-shopping-cart"></i>
        <p>No items in your booking yet.</p>
      </div>
    `;
    return;
  }

  summaryContainer.innerHTML = cartItems.map(item => `
    <div class="summary-item booking-summary-item">
      <div class="summary-item-info">
        <h4>${item.title || item.name}</h4>
        <img src="${item.image || '/placeholder.svg?height=60&width=60'}" alt="${item.title || item.name}" class="summary-item-img">
        <div>
          <p class="summary-item-type"></p>
          ${item.duration ? `<small>Duration: ${item.duration}</small>` : ''}
          ${item.description ? `<div class="summary-item-desc">${item.description}</div>` : ''}
          ${item.details ? `<div class="summary-item-details-extra">${item.details}</div>` : ''}
        </div>
      </div>
      <div class="summary-item-details">
        <span class="summary-item-qty">x${item.quantity || 1}</span>
        <span class="summary-item-price">${typeof formatCurrency === 'function' ? formatCurrency(item.price * (item.quantity || 1)) : '$' + (item.price * (item.quantity || 1)).toLocaleString()}</span>
      </div>
    </div>
  `).join('');
}

// Call this function on DOMContentLoaded or after cart updates
if (window.location.pathname.includes('booking.html')) {
  document.addEventListener('DOMContentLoaded', () => {
    if (document.getElementById('bookingSummaryItems')) {
      renderBookingSummaryFromCart();
      document.addEventListener('cartUpdated', renderBookingSummaryFromCart);
    }
  });
  window.renderBookingSummaryFromCart = renderBookingSummaryFromCart;
}

// Payment page: render booking summary from cart
if (window.location.pathname.includes('payment.html')) {
  document.addEventListener('DOMContentLoaded', () => {
    if (document.getElementById('userBookingDetails')) {
      renderBookingSummaryFromCart();
      // Always load price breakdown from localStorage (from booking page)
      try {
        const breakdown = JSON.parse(localStorage.getItem('journii_priceBreakdown') || '{}');
        const setText = (id, val) => { const el = document.getElementById(id); if (el && val !== undefined && val !== null && val !== '') el.textContent = val; };
        setText('packagePrice', breakdown.packagePrice);
        setText('childrenPrice', breakdown.childrenPrice);
        setText('insuranceCost', breakdown.insuranceCost);
        setText('transferCost', breakdown.transferCost);
        setText('subtotal', breakdown.subtotal);
        setText('taxes', breakdown.taxes);
        setText('totalAmount', breakdown.totalAmount);
      } catch (e) { console.warn('Failed to load price breakdown:', e); }
    }
  });
  // Never overwrite with cart-only logic
  window.renderBookingSummaryFromCart = renderBookingSummaryFromCart;
}


    // Quantity selector logic booking page
    document.querySelectorAll('.qty-btn').forEach(function(btn) {
      btn.addEventListener('click', function() {
        var targetId = btn.getAttribute('data-target');
        var input = document.getElementById(targetId);
        if (!input) return;
        var min = parseInt(input.getAttribute('min'), 10) || 0;
        var max = parseInt(input.getAttribute('max'), 10) || 100;
        var value = parseInt(input.value, 10) || 0;

        if (btn.classList.contains('plus') && value < max) {
          input.value = value + 1;
          input.dispatchEvent(new Event('change'));
        }
        if (btn.classList.contains('minus') && value > min) {
          input.value = value - 1;
          input.dispatchEvent(new Event('change'));
        }
      });
    });
    // Destination page search and quick actions

    // Handle destination search form: filter destination cards based on input
    const destinationSearchForm = document.getElementById('destinationSearchForm');
    if (destinationSearchForm) {
      destinationSearchForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const dest = document.getElementById('likeDestination').value.trim().toLowerCase();
        const date = document.getElementById('likeDate').value;
        // Filter destination cards by name (and optionally by date if needed)
        document.querySelectorAll('.destination-card-full').forEach(card => {
          const title = card.querySelector('h3')?.textContent.toLowerCase() || '';
          // Show card if title includes search term, or show all if search is empty
          card.style.display = (!dest || title.includes(dest)) ? 'block' : 'none';
        });
        // Optionally, update a results count or show a message if no results
        const visible = Array.from(document.querySelectorAll('.destination-card-full')).filter(card => card.style.display !== 'none').length;
        const resultsCount = document.querySelector('.results-count');
        if (resultsCount) {
          resultsCount.textContent = `${visible} destinations found`;
        }
      });
    }

    // Handle quick action buttons: filter by category
    document.querySelectorAll('.quick-action-btn').forEach(btn => {
      btn.addEventListener('click', function() {
        const action = this.getAttribute('data-action');
        // Assume data-action matches data-category on cards
        document.querySelectorAll('.destination-card-full').forEach(card => {
          const category = card.getAttribute('data-category');
          card.style.display = (action === 'all' || category === action) ? 'block' : 'none';
        });
        // Optionally, update results count
        const visible = Array.from(document.querySelectorAll('.destination-card-full')).filter(card => card.style.display !== 'none').length;
        const resultsCount = document.querySelector('.results-count');
        if (resultsCount) {
          resultsCount.textContent = `${visible} destinations found`;
        }
      });
    });
