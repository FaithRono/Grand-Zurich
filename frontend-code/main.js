document.addEventListener("DOMContentLoaded", () => {
    const loginBtn = document.getElementById('loginBtn');
    const loginModal = document.getElementById('loginModal');
    const closeModal = document.getElementById('closeModal');

    // Show the login modal
    loginBtn.addEventListener('click', (e) => {
        e.preventDefault();
        loginModal.style.display = 'block';
    });

    // Hide the login modal
    closeModal.addEventListener('click', () => {
        loginModal.style.display = 'none';
    });

    // Close the modal if clicked outside of it
    window.addEventListener('click', (event) => {
        if (event.target === loginModal) {
            loginModal.style.display = 'none';
        }
    });
});
// JavaScript for handling room details modal
document.querySelectorAll(".book-btn").forEach(button => {
    button.addEventListener("click", function () {
        const roomDetails = `
            <p><strong>Room Name:</strong> Deluxe Room</p>
            <p><strong>Beds:</strong> 2 Queen Size Beds</p>
            <p><strong>Bathrooms:</strong> 1 Bathroom with Shower</p>
            <p><strong>Toilets:</strong> 1 Toilet</p>
            <p><strong>Balcony:</strong> Private Balcony with Sea View</p>
            <!-- Add more details as needed -->
        `;
        document.getElementById("roomDetails").innerHTML = roomDetails;
        document.getElementById("roomDetailsModal").style.display = "block";
    });
});

// JavaScript to close the modal
document.querySelector(".close").addEventListener("click", function () {
    document.getElementById("roomDetailsModal").style.display = "none";
});

// JavaScript to handle payment option selection
const paymentOptions = document.querySelectorAll('input[name="paymentMethod"]');
paymentOptions.forEach(option => {
    option.addEventListener('change', function() {
        // Hide all payment details
        document.getElementById("creditCardDetails").style.display = 'none';
        
        // Show selected payment details
        if (this.value === "Credit Card") {
            document.getElementById("creditCardDetails").style.display = 'block';
        }
        // You can add more conditions here for other payment options if needed
    });
});
