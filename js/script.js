document.addEventListener("DOMContentLoaded", function () {
    console.log("Script Loaded"); // Check if script.js is running

    const themeToggle = document.getElementById("theme-toggle");
    const currentTheme = localStorage.getItem("theme");

    if (currentTheme === "dark") {
        document.body.classList.add("dark-mode");
        themeToggle.textContent = "🌞"; // Sun for light mode
    } else {
        themeToggle.textContent = "🌙"; // Moon for dark mode
    }

    themeToggle.addEventListener("click", function () {
        document.body.classList.toggle("dark-mode");

        if (document.body.classList.contains("dark-mode")) {
            themeToggle.textContent = "🌞";
            localStorage.setItem("theme", "dark");
        } else {
            themeToggle.textContent = "🌙";
            localStorage.setItem("theme", "light");
        }
    });


    // Fix Navbar Swapping Issue
    const navbar = document.querySelector(".navbar");
    const links = navbar.querySelectorAll("a");

    links.forEach(link => {
        link.addEventListener("click", function (event) {
            event.preventDefault();

            // Ensure the clicked link works correctly
            const targetPage = this.getAttribute("href");
            window.location.href = targetPage; // Redirect to the correct page
            
            // Swap clicked icon with home (index.html)
            const homeLink = navbar.querySelector("a[href='index.html']");
            if (this !== homeLink) {
                navbar.insertBefore(this, homeLink.nextSibling);
            }
        });
    });

        // FAQ Expand/Collapse
         // FAQ Read Answer Button Functionality
    const answerButtons = document.querySelectorAll(".read-answer-btn");

    if (answerButtons.length === 0) {
        console.error("❌ No Read Answer buttons found!");
    } else {
        console.log(`✅ Found ${answerButtons.length} Read Answer buttons`);
    }

    answerButtons.forEach(button => {
        button.addEventListener("click", function () {
            console.log("🟡 Button clicked:", this.textContent);

            const parentDiv = this.closest(".faq-item"); // Find the closest FAQ div
            const answer = parentDiv.querySelector(".faq-answer"); // Get the answer

            console.log("🔹 Found .faq-answer:", answer);

            if (answer) {
                if (window.getComputedStyle(answer).display === "none") {
                    answer.style.display = "block";  
                    this.textContent = "Hide Answer"; 
                    console.log("🔹 Answer is now VISIBLE");
                } else {
                    answer.style.display = "none";  
                    this.textContent = "Read Answer"; 
                    console.log("🔹 Answer is now HIDDEN");
                }
            } else {
                console.error("❌ No .faq-answer found near Read Answer button.");
            }
        });
    });
        

    // Read More Button Toggle
        const readMoreButtons = document.querySelectorAll(".read-more-btn");

        if (readMoreButtons.length === 0) {
            console.error("Error: No Read More buttons found!");
        }
    
        readMoreButtons.forEach(button => {
            button.addEventListener("click", function () {
                console.log("Button clicked:", this.textContent); // Confirm button is clicked   

                const info = this.previousElementSibling; // Get .more-info above button  
                console.log("Found element:", info); // Log what is found
                        // Get the .more-info paragraph
                /*const parentDiv = this.closest(".team-member"); // Find the closest team-member div
                const info = parentDiv.querySelector(".more-info"); // Select the correct .more-info */
    
                if (info && info.classList.contains("more-info")) { // Check if the element exists
                    if (info.style.display === "none" || info.style.display === "") {
                        info.style.display = "block";  
                        this.textContent = "Read Less"; 
                        console.log("Text is now visible"); 
                    } else {
                        info.style.display = "none";  
                        this.textContent = "Read More"; 
                        console.log("Text is now hidden"); 
                    }
                } else {
                    console.error("Error: No .more-info found near Read More button.");
                }
            });
        });


        //readore function for about.html
        const readAboutMoreButtons = document.querySelectorAll(".read-more");

        if (readAboutMoreButtons.length === 0) {
            console.error("Error: No Read about More buttons found!");
        }
    
        readAboutMoreButtons.forEach(button => {
            button.addEventListener("click", function () {
                console.log("Button clicked:", this.textContent); // Confirm button is clicked   

                // Find the corresponding card (the closest parent div with class "card")
                const hiddenContent = this.previousElementSibling;
 
    
                if (hiddenContent && hiddenContent.classList.contains("hidden-content")) { // Check if the element exists
                    if (hiddenContent.style.display === "none" || hiddenContent.style.display === "") {
                        hiddenContent.style.display = "block";  
                        this.textContent = "Read Less"; 
                        console.log("Text is now visible"); 
                    } else {
                        hiddenContent.style.display = "none";  
                        this.textContent = "Read More"; 
                        console.log("Text is now hidden"); 
                    }
                } else {
                    console.error("Error: No .card found near Read More button.");
                }
            });
        });

    });

   

    