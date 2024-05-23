// Brand Carousel
$(document).ready(function () {
    $(".brand-carousel").owlCarousel({
        loop: true,
        margin: 10,
        nav: false,
        autoplay: true,
        autoplayTimeout: 3000,
        responsive: {
            0: {
                items: 2
            },
            600: {
                items: 4
            },
            1000: {
                items: 5
            }
        }
    });

});

// Pricing Change
document.addEventListener("DOMContentLoaded", function () {
    const monthlyRadio = document.getElementById('switchMonthly');
    const yearlyRadio = document.getElementById('switchYearly');
    const monthlyPrice = document.getElementById('price-monthly');
    const monthlyPrice2 = document.getElementById('price-monthly2');
    const monthlyPrice3 = document.getElementById('price-monthly3');
    const yearlyPrice = document.getElementById('price-yearly');
    const yearlyPrice2 = document.getElementById('price-yearly2');
    const yearlyPrice3 = document.getElementById('price-yearly3');
    
    function updatePrice() {
        if (monthlyRadio.checked) {
            monthlyPrice.style.display = 'block';
            monthlyPrice2.style.display = 'block';
            monthlyPrice3.style.display = 'block';
            yearlyPrice.style.display = 'none';
            yearlyPrice2.style.display = 'none';
            yearlyPrice3.style.display = 'none';
        } else {
            monthlyPrice.style.display = 'none';
            monthlyPrice2.style.display = 'none';
            monthlyPrice3.style.display = 'none';
            yearlyPrice.style.display = 'block';
            yearlyPrice2.style.display = 'block';
            yearlyPrice3.style.display = 'block';
        }
    }

    // Initial call to set the correct price on page load
    updatePrice();

    // Add event listeners to radio buttons to switch prices
    monthlyRadio.addEventListener('change', updatePrice);
    yearlyRadio.addEventListener('change', updatePrice);
});
