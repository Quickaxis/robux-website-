document.addEventListener('DOMContentLoaded', () => {
    const modal = document.getElementById('checkout-modal');
    const closeBtn = document.querySelector('.close');
    const packButtons = document.querySelectorAll('.select-pack');
    const checkoutForm = document.getElementById('checkout-form');
    const packInfoContainer = document.getElementById('selected-pack-info');

    // WhatsApp Integration
    window.buyPack = (pack, price) => {
        const phoneNumber = "918011253699";
        const message = `Hi, I want to purchase ${pack} Robux for ${price}`;
        const encodedMessage = encodeURIComponent(message);
        const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

        window.open(whatsappUrl, '_blank');
    };

    // Handle Pack Selection
    packButtons.forEach(button => {
        button.addEventListener('click', () => {
            const card = button.closest('.pack-card');
            const amount = card.dataset.amount;
            const price = card.querySelector('.pack-price').textContent;

            // Redirect to WhatsApp
            buyPack(amount, price);
        });
    });

    // Close Modal
    closeBtn.onclick = () => {
        modal.style.display = 'none';
    }

    window.onclick = (event) => {
        if (event.target == modal) {
            modal.style.display = 'none';
        }
    }

    // Handle Form Submission
    checkoutForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const username = e.target.querySelector('input[type="text"]').value;

        // Simulating processing
        const submitBtn = checkoutForm.querySelector('button');
        const originalText = submitBtn.textContent;
        submitBtn.textContent = 'Processing...';
        submitBtn.disabled = true;

        setTimeout(() => {
            alert(`Success! Robux are being sent to "${username}". Order ID: RBX-${Math.floor(Math.random() * 1000000)}`);
            modal.style.display = 'none';
            submitBtn.textContent = originalText;
            submitBtn.disabled = false;
            checkoutForm.reset();
        }, 2000);
    });

    // Smooth scroll for nav links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});
