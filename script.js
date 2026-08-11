/* =========================================================
   HEALTHCARE HOSPITAL
   MAIN WEBSITE JAVASCRIPT
========================================================= */

"use strict";


/* ================= PRELOADER ================= */

window.addEventListener("load", function () {

    const preloader = document.getElementById("preloader");

    if (preloader) {
        setTimeout(function () {
            preloader.classList.add("hide");
        }, 600);
    }

});


/* ================= MOBILE MENU ================= */

document.addEventListener("DOMContentLoaded", function () {

    const menuToggle = document.getElementById("menuToggle");
    const navbar = document.getElementById("navbar");

    if (menuToggle && navbar) {

        menuToggle.addEventListener("click", function () {

            navbar.classList.toggle("active");

            const icon = menuToggle.querySelector("i");

            if (navbar.classList.contains("active")) {

                icon.classList.remove("fa-bars");
                icon.classList.add("fa-xmark");

            } else {

                icon.classList.remove("fa-xmark");
                icon.classList.add("fa-bars");

            }

        });


        /* Close menu after clicking a link */

        const navLinks = navbar.querySelectorAll("a");

        navLinks.forEach(function (link) {

            link.addEventListener("click", function () {

                navbar.classList.remove("active");

                const icon = menuToggle.querySelector("i");

                icon.classList.remove("fa-xmark");
                icon.classList.add("fa-bars");

            });

        });

    }

});


/* ================= HEADER SCROLL EFFECT ================= */

window.addEventListener("scroll", function () {

    const header = document.getElementById("header");

    if (header) {

        if (window.scrollY > 50) {
            header.classList.add("scrolled");
        } else {
            header.classList.remove("scrolled");
        }

    }

});


/* ================= SCROLL TOP BUTTON ================= */

document.addEventListener("DOMContentLoaded", function () {

    const scrollTop = document.getElementById("scrollTop");

    if (!scrollTop) return;


    window.addEventListener("scroll", function () {

        if (window.scrollY > 400) {

            scrollTop.classList.add("show");

        } else {

            scrollTop.classList.remove("show");

        }

    });


    scrollTop.addEventListener("click", function () {

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    });

});


/* ================= REVEAL ANIMATION ================= */

function revealElements() {

    const elements = document.querySelectorAll(".reveal");

    const windowHeight = window.innerHeight;

    elements.forEach(function (element) {

        const elementTop = element.getBoundingClientRect().top;

        if (elementTop < windowHeight - 80) {
            element.classList.add("active");
        }

    });

}


window.addEventListener("scroll", revealElements);
window.addEventListener("load", revealElements);


/* ================= COUNTER ANIMATION ================= */

function animateCounter(counter) {

    const target = Number(counter.getAttribute("data-target"));

    if (!target) return;

    let current = 0;

    const duration = 1800;

    const stepTime = 20;

    const steps = duration / stepTime;

    const increment = target / steps;


    const timer = setInterval(function () {

        current += increment;

        if (current >= target) {

            current = target;
            clearInterval(timer);

        }

        counter.textContent = Math.floor(current).toLocaleString("en-IN");

    }, stepTime);

}


function startCounters() {

    const counters = document.querySelectorAll(".counter");

    if (!counters.length) return;


    const statsSection = document.querySelector(".stats-section");

    if (!statsSection) return;


    const sectionTop = statsSection.getBoundingClientRect().top;

    const windowHeight = window.innerHeight;


    if (
        sectionTop < windowHeight - 100 &&
        !statsSection.classList.contains("counter-started")
    ) {

        statsSection.classList.add("counter-started");

        counters.forEach(function (counter) {
            animateCounter(counter);
        });

    }

}


window.addEventListener("scroll", startCounters);
window.addEventListener("load", startCounters);


/* ================= TOAST NOTIFICATION ================= */

document.addEventListener("DOMContentLoaded", function () {

    const toast = document.getElementById("toast");
    const closeToast = document.getElementById("closeToast");

    if (!toast) return;


    /* Show welcome message after page loads */

    setTimeout(function () {

        toast.classList.add("show");

    }, 2200);


    /* Close button */

    if (closeToast) {

        closeToast.addEventListener("click", function () {

            toast.classList.remove("show");

        });

    }


    /* Automatically hide */

    setTimeout(function () {

        toast.classList.remove("show");

    }, 7000);

});


/* ================= BUTTON RIPPLE EFFECT ================= */

document.addEventListener("DOMContentLoaded", function () {

    const buttons = document.querySelectorAll(".btn, .nav-appointment");

    buttons.forEach(function (button) {

        button.addEventListener("click", function (event) {

            const ripple = document.createElement("span");

            ripple.style.position = "absolute";
            ripple.style.width = "10px";
            ripple.style.height = "10px";
            ripple.style.borderRadius = "50%";
            ripple.style.background = "rgba(255,255,255,0.45)";
            ripple.style.transform = "translate(-50%, -50%)";
            ripple.style.pointerEvents = "none";

            const rect = button.getBoundingClientRect();

            ripple.style.left = (event.clientX - rect.left) + "px";
            ripple.style.top = (event.clientY - rect.top) + "px";

            button.style.position = "relative";
            button.style.overflow = "hidden";

            button.appendChild(ripple);


            ripple.animate(
                [
                    {
                        width: "10px",
                        height: "10px",
                        opacity: 0.8
                    },
                    {
                        width: "400px",
                        height: "400px",
                        opacity: 0
                    }
                ],
                {
                    duration: 600,
                    easing: "ease-out"
                }
            );


            setTimeout(function () {

                ripple.remove();

            }, 650);

        });

    });

});


/* ================= IMAGE ERROR HANDLER ================= */

document.addEventListener("DOMContentLoaded", function () {

    const images = document.querySelectorAll("img");

    images.forEach(function (image) {

        image.addEventListener("error", function () {

            /*
                If an online image fails, replace it with
                a simple healthcare placeholder.
            */

            image.src =
                "https://placehold.co/900x600/eaf9fa/087f8c?text=HealthCare+Hospital";

        });

    });

});


/* ================= ACTIVE PAGE ================= */

document.addEventListener("DOMContentLoaded", function () {

    const currentPage =
        window.location.pathname.split("/").pop() || "index.html";

    const navLinks = document.querySelectorAll(".nav-link");

    navLinks.forEach(function (link) {

        const linkPage =
            link.getAttribute("href").split("/").pop();

        if (linkPage === currentPage) {

            navLinks.forEach(function (item) {
                item.classList.remove("active");
            });

            link.classList.add("active");

        }

    });

});


/* ================= ACCESSIBILITY ================= */

document.addEventListener("keydown", function (event) {

    /* Escape key closes mobile navigation */

    if (event.key === "Escape") {

        const navbar = document.getElementById("navbar");
        const menuToggle = document.getElementById("menuToggle");

        if (navbar && navbar.classList.contains("active")) {

            navbar.classList.remove("active");

            if (menuToggle) {

                const icon = menuToggle.querySelector("i");

                icon.classList.remove("fa-xmark");
                icon.classList.add("fa-bars");

            }

        }

    }

});
/* =====================================================
   DOCTOR SEARCH & FILTER
===================================================== */

document.addEventListener("DOMContentLoaded", function () {

    const doctorSearch = document.getElementById("doctorSearch");
    const specializationFilter =
        document.getElementById("specializationFilter");

    const doctorSearchBtn =
        document.getElementById("doctorSearchBtn");

    const doctorCards =
        document.querySelectorAll(".doctor-card");

    const doctorNoResults =
        document.getElementById("doctorNoResults");


    function filterDoctors() {

        if (!doctorSearch || !specializationFilter) {
            return;
        }

        const searchValue =
            doctorSearch.value.toLowerCase().trim();

        const selectedSpecialization =
            specializationFilter.value;

        let visibleDoctors = 0;


        doctorCards.forEach(function (card) {

            const doctorName =
                card.dataset.name.toLowerCase();

            const specialization =
                card.dataset.specialization.toLowerCase();


            const searchMatch =
                doctorName.includes(searchValue) ||
                specialization.includes(searchValue);


            const categoryMatch =
                selectedSpecialization === "all" ||
                specialization === selectedSpecialization;


            if (searchMatch && categoryMatch) {

                card.style.display = "";

                visibleDoctors++;

            } else {

                card.style.display = "none";

            }

        });


        if (doctorNoResults) {

            doctorNoResults.style.display =
                visibleDoctors === 0 ? "block" : "none";

        }

    }


    if (doctorSearchBtn) {

        doctorSearchBtn.addEventListener(
            "click",
            filterDoctors
        );

    }


    if (doctorSearch) {

        doctorSearch.addEventListener(
            "input",
            filterDoctors
        );

    }


    if (specializationFilter) {

        specializationFilter.addEventListener(
            "change",
            filterDoctors
        );

    }

});


/* =====================================================
   MEDICINE SEARCH & FILTER
===================================================== */

document.addEventListener("DOMContentLoaded", function () {

    const medicineSearch =
        document.getElementById("medicineSearch");

    const medicineCategory =
        document.getElementById("medicineCategory");

    const medicineSearchBtn =
        document.getElementById("medicineSearchBtn");

    const medicineCards =
        document.querySelectorAll(".medicine-card");

    const medicineNoResults =
        document.getElementById("medicineNoResults");


    function filterMedicines() {

        if (!medicineSearch || !medicineCategory) {
            return;
        }


        const searchValue =
            medicineSearch.value.toLowerCase().trim();


        const selectedCategory =
            medicineCategory.value;


        let visibleMedicines = 0;


        medicineCards.forEach(function (card) {

            const medicineName =
                card.dataset.name.toLowerCase();


            const category =
                card.dataset.category.toLowerCase();


            const searchMatch =
                medicineName.includes(searchValue);


            const categoryMatch =
                selectedCategory === "all" ||
                category === selectedCategory;


            if (searchMatch && categoryMatch) {

                card.style.display = "";

                visibleMedicines++;

            } else {

                card.style.display = "none";

            }

        });


        if (medicineNoResults) {

            medicineNoResults.style.display =
                visibleMedicines === 0 ? "block" : "none";

        }

    }


    if (medicineSearchBtn) {

        medicineSearchBtn.addEventListener(
            "click",
            filterMedicines
        );

    }


    if (medicineSearch) {

        medicineSearch.addEventListener(
            "input",
            filterMedicines
        );

    }


    if (medicineCategory) {

        medicineCategory.addEventListener(
            "change",
            filterMedicines
        );

    }

});


/* =====================================================
   MEDICINE INFORMATION BUTTONS
===================================================== */

document.addEventListener("DOMContentLoaded", function () {

    const medicineButtons =
        document.querySelectorAll(".medicine-btn");


    medicineButtons.forEach(function (button) {

        button.addEventListener("click", function () {

            const medicineName =
                this.dataset.medicine || "Medicine";


            alert(
                medicineName +
                "\n\nPlease consult a qualified doctor or pharmacist for appropriate dosage, suitability, interactions and usage instructions."
            );

        });

    });

});
/* =====================================================
   LABORATORY TEST SEARCH & FILTER
===================================================== */

document.addEventListener("DOMContentLoaded", function () {

    const testSearch =
        document.getElementById("testSearch");

    const testCategory =
        document.getElementById("testCategory");

    const testSearchBtn =
        document.getElementById("testSearchBtn");

    const testCards =
        document.querySelectorAll(".test-card");

    const testNoResults =
        document.getElementById("testNoResults");


    function filterTests() {

        if (!testSearch || !testCategory) {
            return;
        }


        const searchValue =
            testSearch.value.toLowerCase().trim();


        const selectedCategory =
            testCategory.value;


        let visibleTests = 0;


        testCards.forEach(function (card) {

            const testName =
                card.dataset.name.toLowerCase();


            const category =
                card.dataset.category.toLowerCase();


            const searchMatch =
                testName.includes(searchValue);


            const categoryMatch =
                selectedCategory === "all" ||
                category === selectedCategory;


            if (searchMatch && categoryMatch) {

                card.style.display = "";

                visibleTests++;

            } else {

                card.style.display = "none";

            }

        });


        if (testNoResults) {

            testNoResults.style.display =
                visibleTests === 0 ? "block" : "none";

        }

    }


    if (testSearchBtn) {

        testSearchBtn.addEventListener(
            "click",
            filterTests
        );

    }


    if (testSearch) {

        testSearch.addEventListener(
            "input",
            filterTests
        );

    }


    if (testCategory) {

        testCategory.addEventListener(
            "change",
            filterTests
        );

    }

});


/* =====================================================
   BOOK TEST BUTTON
===================================================== */

document.addEventListener("DOMContentLoaded", function () {

    const testButtons =
        document.querySelectorAll(".test-book-btn");


    const testSelect =
        document.getElementById("testSelect");


    const bookingSection =
        document.getElementById("test-booking");


    testButtons.forEach(function (button) {

        button.addEventListener("click", function () {

            const selectedTest =
                this.dataset.test;


            if (testSelect) {

                testSelect.value = selectedTest;

            }


            if (bookingSection) {

                bookingSection.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });

            }

        });

    });

});


/* =====================================================
   HEALTH PACKAGE BUTTON
===================================================== */

document.addEventListener("DOMContentLoaded", function () {

    const packageButtons =
        document.querySelectorAll(".package-btn");


    const packageSelect =
        document.getElementById("packageSelect");


    const bookingSection =
        document.getElementById("test-booking");


    packageButtons.forEach(function (button) {

        button.addEventListener("click", function () {

            const selectedPackage =
                this.dataset.package;


            if (packageSelect) {

                packageSelect.value =
                    selectedPackage;

            }


            if (bookingSection) {

                bookingSection.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });

            }

        });

    });

});


/* =====================================================
   LAB BOOKING FORM
===================================================== */

document.addEventListener("DOMContentLoaded", function () {

    const labForm =
        document.getElementById("labBookingForm");


    const modal =
        document.getElementById("labSuccessModal");


    const closeModal =
        document.getElementById("closeLabModal");


    const okayButton =
        document.getElementById("modalOkayBtn");


    const successText =
        document.getElementById("bookingSuccessText");


    const testDate =
        document.getElementById("testDate");


    /* Prevent selecting past date */

    if (testDate) {

        const today =
            new Date().toISOString().split("T")[0];

        testDate.min = today;

    }


    if (!labForm) {
        return;
    }


    labForm.addEventListener("submit", function (event) {

        event.preventDefault();


        const patientName =
            document.getElementById("patientName").value.trim();


        const patientPhone =
            document.getElementById("patientPhone").value.trim();


        const selectedTest =
            document.getElementById("testSelect").value;


        const selectedDate =
            document.getElementById("testDate").value;


        const selectedTime =
            document.getElementById("testTime").value;


        if (!patientName ||
            !patientPhone ||
            !selectedTest ||
            !selectedDate ||
            !selectedTime) {

            alert(
                "Please fill all required fields."
            );

            return;

        }


        if (!/^[0-9]{10}$/.test(patientPhone)) {

            alert(
                "Please enter a valid 10-digit phone number."
            );

            return;

        }


        if (successText) {

            successText.innerHTML =
                "Thank you, <strong>" +
                patientName +
                "</strong>! Your <strong>" +
                selectedTest +
                "</strong> booking request for <strong>" +
                selectedDate +
                "</strong> at <strong>" +
                selectedTime +
                "</strong> has been submitted successfully.";

        }


        if (modal) {

            modal.classList.add("show");

            document.body.style.overflow = "hidden";

        }


        labForm.reset();


        if (testDate) {

            const today =
                new Date().toISOString().split("T")[0];

            testDate.min = today;

        }

    });


    function closeLabSuccessModal() {

        if (modal) {

            modal.classList.remove("show");

            document.body.style.overflow = "";

        }

    }


    if (closeModal) {

        closeModal.addEventListener(
            "click",
            closeLabSuccessModal
        );

    }


    if (okayButton) {

        okayButton.addEventListener(
            "click",
            closeLabSuccessModal
        );

    }


    if (modal) {

        modal.addEventListener(
            "click",
            function (event) {

                if (event.target === modal) {

                    closeLabSuccessModal();

                }

            }
        );

    }


    document.addEventListener(
        "keydown",
        function (event) {

            if (event.key === "Escape") {

                closeLabSuccessModal();

            }

        }
    );

});