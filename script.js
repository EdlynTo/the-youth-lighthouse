document.addEventListener("DOMContentLoaded", () => {
    const banner = document.querySelector(".banner");

    let sparkleCursor = null;

    banner.addEventListener("mouseenter", () => {
        // Start Cursorly when entering banner
        sparkleCursor = Cursorly.init({
            element: banner,     // Attach only to banner
            effect: { 
                name: "sparkle", 
                color: "#E6E0D2", 
                density: 5,
                decay: 0.92,
            }
        });
    });

    banner.addEventListener("mouseleave", () => {
        // Stop Cursorly when leaving banner
        if (sparkleCursor) {
            sparkleCursor.disable();
            sparkleCursor = null;
        }
    });
});
