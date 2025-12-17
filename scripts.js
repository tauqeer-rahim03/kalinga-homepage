
// --- Filter Pill Toggle ---
const filterPills = document.querySelectorAll(".filter-pill");

filterPills.forEach((pill) => {
    pill.addEventListener("click", function () {
        // Remove active class from all siblings
        const parent = this.parentElement;
        parent
            .querySelectorAll(".filter-pill")
            .forEach((p) => p.classList.remove("active"));
        // Add active class to clicked
        this.classList.add("active");
    });
});

// --- 4. Color Swatch Selection (Visual Only) ---
const swatches = document.querySelectorAll(".swatch");

swatches.forEach((swatch) => {
    swatch.addEventListener("click", function (e) {
        e.preventDefault(); // Prevent link jumps if wrapped
        const parent = this.parentElement;
        parent
            .querySelectorAll(".swatch")
            .forEach((s) => s.classList.remove("selected"));
        this.classList.add("selected");
    });
});
