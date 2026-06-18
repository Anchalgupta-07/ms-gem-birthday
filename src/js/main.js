// =========================================
// ELEMENTS
// =========================================

const loader = document.getElementById("loader");
const mainContent = document.getElementById("main-content");

const navbar =
    document.getElementById("navbar");

const portalSection =
    document.getElementById("portal-section");

const giftSection =
    document.getElementById("gift-section");

const heroSection =
    document.getElementById("hero-section");

const unlockBtn =
    document.getElementById("unlockBtn");

const nameInput =
    document.getElementById("nameInput");

const errorText =
    document.getElementById("errorText");

const giftBox =
    document.getElementById("giftBox");

const music =
    document.getElementById("birthdayMusic");

const musicToggle =
    document.getElementById("musicToggle");

const startJourney =
    document.getElementById("startJourney");

const cursorGlow =
    document.getElementById("cursor-glow");

const particles =
    document.getElementById("particles");

// =========================================
// LOADER
// =========================================

window.addEventListener("load", () => {

    setTimeout(() => {

        loader.classList.add("hidden");

        mainContent.classList.remove("hidden");

    }, 1800);

});

// =========================================
// CURSOR GLOW
// =========================================

document.addEventListener("mousemove", (e) => {

    if (!cursorGlow) return;

    cursorGlow.style.left =
        e.clientX + "px";

    cursorGlow.style.top =
        e.clientY + "px";

});

// =========================================
// PARTICLES
// =========================================

for (let i = 0; i < 40; i++) {

    const particle =
        document.createElement("div");

    particle.classList.add("particle");

    const size =
        Math.random() * 6 + 2;

    particle.style.width =
        size + "px";

    particle.style.height =
        size + "px";

    particle.style.left =
        Math.random() * 100 + "%";

    particle.style.top =
        Math.random() * 100 + "%";

    particle.style.opacity =
        Math.random();

    particles.appendChild(
        particle
    );

}

// =========================================
// VALID NAMES
// =========================================

const validNames = [
    "ms gem",
    "ms. gem",
    "disha",
    "disha kadu",
    "disha ji",
    "dev ji",
    "xtra"
];

// =========================================
// VERIFY NAME
// =========================================

function verifyName() {

    const enteredName =
        nameInput.value
            .trim()
            .toLowerCase();

    if (
        validNames.includes(
            enteredName
        )
    ) {

        portalSection.classList.add(
            "hidden"
        );

        giftSection.classList.remove(
            "hidden"
        );

    } else {

        errorText.classList.remove(
            "hidden"
        );

        errorText.innerHTML =
            "🎂 This surprise is reserved for a very special person.";

    }

}

unlockBtn.addEventListener(
    "click",
    verifyName
);

nameInput.addEventListener(
    "keypress",
    (e) => {

        if (e.key === "Enter") {

            verifyName();

        }

    }
);

// =========================================
// GIFT OPENING
// =========================================

giftBox.addEventListener(
    "click",
    () => {

        giftBox.innerHTML =
            "✨";

        giftBox.classList.add(
            "scale-125"
        );

        setTimeout(() => {

            giftSection.classList.add(
                "hidden"
            );

            heroSection.classList.remove(
                "hidden"
            );

            if (navbar) {

                navbar.classList.remove(
                    "hidden"
                );

                navbar.classList.add(
                    "navbar-show"
                );

            }

        }, 1000);

    }
);

// =========================================
// MUSIC
// =========================================

let musicPlaying =
    false;

musicToggle.addEventListener(
    "click",
    async () => {

        try {

            if (
                !musicPlaying
            ) {

                await music.play();

                musicPlaying = true;

                musicToggle.innerHTML =
                    "🔇 Music Off";

            } else {

                music.pause();

                musicPlaying = false;

                musicToggle.innerHTML =
                    "🎹 Music";

            }

        } catch (error) {

            console.error(
                "Music Error:",
                error
            );

            alert(
                "Unable to load music. Check birthday.mp3 path."
            );

        }

    }
);

// =========================================
// HERO BUTTON
// =========================================

startJourney.addEventListener(
    "click",
    () => {

        const gallery =
            document.getElementById(
                "gallery-section"
            );

        if (gallery) {

            gallery.scrollIntoView({
                behavior: "smooth"
            });

        } else {

            alert(
                "Memory Wall coming next 💙"
            );

        }

    }
);

// =========================================
// FINAL CELEBRATION
// =========================================

const celebrateBtn =
    document.getElementById(
        "celebrateBtn"
    );

const celebrationMessage =
    document.getElementById(
        "celebrationMessage"
    );

if (
    celebrateBtn
) {

    celebrateBtn.addEventListener(
        "click",
        () => {

            celebrationMessage.classList.remove(
                "hidden"
            );

            celebrateBtn.innerHTML =
                "🎂 Happy Birthday Ms. Gem";

            celebrateBtn.disabled =
                true;

        }
    );

}