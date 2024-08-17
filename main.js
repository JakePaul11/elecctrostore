function loadProductDetails() {
    const urlParams = new URLSearchParams(window.location.search);
    const type = urlParams.get('type');
    const productId = urlParams.get('id');

    if (type === 'phone') {
        // Simulated data for phone
        const product = {
          name: 'Phone 13',
            description: 'The iPhone is a series of smartphones made by Apple Inc since 2007. It is a mobile phone, meaning that it makes calls and sends text messages without wires. There are many types of iPhones. The iPhone can access the Internet as well, either using a cellular network or over Wi-Fi. Like an iPod, it can play music and videos that have been downloaded from the Internet directly, or which have been put on it by connecting it to a personal computer.The iPhone doesnt have as many buttons as other phones, such as those made by companies like Motorola and Nokia. Instead, it has a touch screen that covers much of the front of the phone. People control the phone by touching the screen.All iPhones run on a mobile operating system which Apple calls "iOS". A new version of iOS comes out every year, each having more features than the one before. Each new iPhone comes with the latest version of iOS, and older iPhones usually also get a software update to the latest version.',
            image: 'https://th.bing.com/th/id/OIP.MOcfaj0mdHeSJ6VI-G4FJwHaMK?w=116&h=191&c=7&r=0&o=5&dpr=1.3&pid=1.7',
            price: '$999'
        };

        displayProductDetails(product);
    } else if (type === 'laptop') {
        // Simulated data for laptop
        const product = {
            name: 'Laptop 1',
            description: 'A laptop is a computer which is easy to carry around. A modern laptop is self-contained, with a screen, keyboard and pointing device (like a touchpad or pointing stick), plus usually, speakers, a microphone and a camera (webcam). This is all powered by a built-in rechargeable battery, however, the user can also plug the laptop in, to use it and recharge the battery at the same time. Also, most other external devices can be attached if required. The laptop screen folds down over the keyboard, along a hinge, for carrying.',
            image: 'https://th.bing.com/th/id/OIP.1Q0Ef3QkiPc-2Ux_Usj7lgHaFb?w=246&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7',
            price: '$1499'
        };

        displayProductDetails(product);
    } else if (type === 'tv') {
        // Simulated data for TV
        const product = {
            name: 'TV 1',
            description: 'A television set (also known as a television receiver or televisor or simply a television, TV set, TV receiver or TV) is a machine with a screen or set of lenses. Televisions receive broadcasting signals and change them into pictures and sound. The word "television" comes from the words tele (Greek for far away) and vision (sight).Sometimes a television can look like a box. Older TVs had a large cathode ray tube in a large wooden frame and sat on the floor like furniture. Newer TVs are much lighter and flatter.A TV can show pictures from many television networks. Computers and mobile devices also can be used for watching television programs.The television was invented in the 1920s but the equipment was expensive and the pictures were poor. By the 1950s, these problems had been fixed and TVs became widespread.',
            image: 'https://th.bing.com/th/id/OIP.JqOcV3CQFg1MFN-qfLHh_AAAAA?w=216&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7',
            price: '$1999'
        };

        displayProductDetails(product);
    } else {
        // Handle unknown product type
        console.error('Unknown product type');
    }
}

// Function to display product details on the product detail page
function displayProductDetails(product) {
    const productInfoDiv = document.getElementById('product-info');

    const productHTML = `
        <div class="product-detail">
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>${product.description}</p>
            <p><strong>Price:</strong> ${product.price}</p>
        </div>
    `;

    productInfoDiv.innerHTML = productHTML;
}

// Load product details when the page is loaded
document.addEventListener('DOMContentLoaded', loadProductDetails);