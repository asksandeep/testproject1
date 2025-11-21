
/*=============================================
  =             Mobile menu                  =
=============================================*/

$(function(){
  $('.menu-toggle, nav.mobilemenu a').on('click', function(){
    $('nav.mobilemenu').toggleClass('open');
    $('main').toggleClass('back').toggleClass('blur');
    $('.mobile-blur-bg').fadeToggle();
  });

  $('.mobile-blur-bg').on('click', function(){
    $('nav.mobilemenu').removeClass('open');
    $('main').removeClass('back blur');
    $(this).fadeOut();
  });
});




const header = document.querySelector(".page-header");
const toggleClass = "is-sticky";

window.addEventListener("scroll", () => {
  const currentScroll = window.pageYOffset;
  if (currentScroll > 50) {
    header.classList.add(toggleClass);
  } else {
    header.classList.remove(toggleClass);
  }
});



/*=============================================
  =             Scrolled fixed  menu         =
=============================================*/

//window.addEventListener('scroll', function() {
  //let header = document.querySelector('.header');
  //header.classList.toggle('sticky', window.scrollY > 0);
//});

/*=============================================
  =          Data Background               =
=============================================*/

$("[data-background]").each(function() {
  $(this).css("background-image", "url(" + $(this).attr("data-background") + ")")
})

/*=============================================
  =                    Form                   =
=============================================*/


document.addEventListener("DOMContentLoaded", function () {
  const overlay = document.querySelector(".overlay-popup");
  const popup = document.querySelector(".thankyou-popup");
  const form = document.querySelector("form");
  const closeBtn = document.querySelector(".close-popup");

  function closePopup() {
    if (overlay) overlay.style.display = "none";
    if (popup) popup.style.display = "none";
    if (form) form.reset();
  }

  if (overlay) {
    overlay.addEventListener("click", closePopup);
  }

  if (closeBtn) {
    closeBtn.addEventListener("click", closePopup);
  }
});

function handleFormSubmit() {
  setTimeout(() => {
    const overlay = document.querySelector(".overlay-popup");
    const popup = document.querySelector(".thankyou-popup");
    if (overlay && popup) {
      overlay.style.display = "block";
      popup.style.display = "flex";
    }
  }, 100);
  return true;
}

/*=============================================
  =                Owl slider               =
=============================================*/



$('.testimonialsslide').owlCarousel({
      loop: true,
      margin: 20,
      autoplay:true,
      dot:false,
      nav: false,
      //navText : ["<i class='fa fa-chevron-left'></i>","<i class='fa fa-chevron-right'></i>"],
      responsive: {
          0: {
              items: 2
          },
          600: {
              items: 3
          },
          1000: {
              items: 5
          },
          1200: {
              items: 6
          }
      }
})


$('.clients').owlCarousel({
      loop: true,
      margin: 20,
      autoplay:true,
      dot:false,
      nav: false,
      //navText : ["<i class='fa fa-chevron-left'></i>","<i class='fa fa-chevron-right'></i>"],
      responsive: {
          0: {
              items: 2
          },
          600: {
              items: 3
          },
          1000: {
              items: 5
          },
          1200: {
              items: 5
          }
      }
})




$('.portfolio').owlCarousel({
      loop: true,
      margin: 20,
      autoplay:true,
      dot:true,
      nav: false,
      //navText : ["<i class='fa fa-chevron-left'></i>","<i class='fa fa-chevron-right'></i>"],
      responsive: {
          0: {
              items: 1
          },
          600: {
              items: 1
          },
          1000: {
              items: 1
          },
          1200: {
              items: 1
          }
      }
})




$('.service-slider').owlCarousel({
      loop: true,
      margin: 20,
      autoplay:true,
      dot:false,
      nav: false,
      //navText : ["<i class='fa fa-chevron-left'></i>","<i class='fa fa-chevron-right'></i>"],
      responsive: {
          0: {
              items: 3
          },
          600: {
              items: 5
          },
          1000: {
              items: 6
          },
          1200: {
              items: 8
          }
      }
})





// WhatsApp

document.addEventListener('DOMContentLoaded', () => {
  const allAccordionItems = document.querySelectorAll('.accordion-item');

  allAccordionItems.forEach(item => {
    const button = item.querySelector('.accordion-button');

    button.addEventListener('click', () => {
      const clickedItem = button.closest('.accordion-item');
      const isCurrentlyExpanded = button.getAttribute('aria-expanded') === 'true';

      // --- This is the new logic ---
      // First, close all accordion items.
      allAccordionItems.forEach(otherItem => {
        const otherButton = otherItem.querySelector('.accordion-button');
        otherButton.setAttribute('aria-expanded', 'false');
        const otherContent = otherButton.nextElementSibling;
        otherContent.style.maxHeight = '0px';
      });
      // --- End of new logic ---

      // If the clicked item was not already open, then open it.
      if (!isCurrentlyExpanded) {
        button.setAttribute('aria-expanded', 'true');
        const content = button.nextElementSibling;
        content.style.maxHeight = content.scrollHeight + 'px';
      }
      // If it was already open, the loop above has already closed it.
    });
  });
});


// WhatsApp
document.addEventListener("DOMContentLoaded", function () {
  console.log("WhatsApp widget script loaded");

  const whatsappWidget = document.querySelector(".whatsapp-widget");
  const whatsappButton = whatsappWidget.querySelector(".whatsapp-button");
  const whatsappPopup = whatsappWidget.querySelector(".whatsapp-popup");
  const whatsappClose = whatsappWidget.querySelector(".whatsapp-close");
  const startChatBtn = whatsappWidget.querySelector(".whatsapp-start-btn");

  if (!whatsappButton) console.error("WhatsApp button not found");
  if (!whatsappPopup) console.error("WhatsApp popup not found");
  if (!whatsappClose) console.error("Close button not found");
  if (!startChatBtn) console.error("Start chat button not found");

  // Toggle popup event handling
  whatsappButton.addEventListener("click", function (e) {
    e.stopPropagation();
    console.log("WhatsApp button clicked");

    whatsappPopup.classList.toggle("active");

    console.log(
      "Popup state:",
      whatsappPopup.classList.contains("active") ? "visible" : "hidden"
    );

    // Add animation class to message when popup opens
    if (whatsappPopup.classList.contains("active")) {
      const message = whatsappPopup.querySelector(".whatsapp-message");
      message.style.animation = "none";
      void message.offsetWidth;
      message.style.animation = "fadeIn 0.3s ease forwards";
    }
  });

  // Close popup when clicking close button
  whatsappClose.addEventListener("click", function (e) {
    e.stopPropagation();
    console.log("Close button clicked");
    whatsappPopup.classList.remove("active");
  });

  // Start chat button action
  startChatBtn.addEventListener("click", function (e) {
    e.preventDefault();
    console.log("Start chat button clicked");
    window.open("https://wa.me/9096300320", "_blank");
    whatsappPopup.classList.remove("active");
  });

  // Close popup when clicking outside
  document.addEventListener("click", function (e) {
    if (!whatsappPopup.contains(e.target) && e.target !== whatsappButton) {
      console.log("Clicked outside - closing popup");
      whatsappPopup.classList.remove("active");
    }
  });

  // Prevent popup from closing when clicking inside it
  whatsappPopup.addEventListener("click", function (e) {
    e.stopPropagation();
  });
});

// WhatsApp Typing Animation with Message Transition
function initWhatsAppTyping() {
  const whatsappWidget = document.querySelector(".whatsapp-widget");
  if (!whatsappWidget) return;

  const whatsappButton = whatsappWidget.querySelector(".whatsapp-button");
  const whatsappPopup = whatsappWidget.querySelector(".whatsapp-popup");
  const typingIndicator = whatsappWidget.querySelector(".typing-indicator");
  const whatsappMessage = whatsappWidget.querySelector(".whatsapp-message");

  let animationTimeout;

  function startChatSequence() {
    typingIndicator.style.opacity = "0";
    typingIndicator.style.transform = "translateY(5px)";
    whatsappMessage.style.opacity = "0";
    whatsappMessage.style.transform = "translateY(5px)";
    whatsappMessage.style.animation = "none";

    // Start typing animation after slight delay
    setTimeout(() => {
      typingIndicator.style.opacity = "1";
      typingIndicator.style.transform = "translateY(0)";

      // After typing completes, show message
      animationTimeout = setTimeout(() => {
        typingIndicator.style.opacity = "0";
        typingIndicator.style.transform = "translateY(5px)";

        void whatsappMessage.offsetWidth;
        whatsappMessage.style.animation = "messageAppear 0.5s ease forwards";
      }, 2000);
    }, 300);
  }

  function resetAnimation() {
    clearTimeout(animationTimeout);
    typingIndicator.style.opacity = "0";
    whatsappMessage.style.opacity = "0";
  }

  // Toggle animation when popup opens
  whatsappButton.addEventListener("click", function (e) {
    if (whatsappPopup.classList.contains("active")) {
      startChatSequence();
    } else {
      resetAnimation();
    }
  });

  // Reset when closing popup
  document.addEventListener("click", function (e) {
    if (!whatsappPopup.contains(e.target) && e.target !== whatsappButton) {
      resetAnimation();
    }
  });
}

// Initialize when DOM is ready
document.addEventListener("DOMContentLoaded", initWhatsAppTyping);

document.addEventListener("DOMContentLoaded", function () {
  initWhatsAppTyping();
});

function initAnalytics() {
  console.log("Analytics initialized");
}

// Smooth Scrolling
function initSmoothScrolling() {
  const links = document.querySelectorAll('a[href^="#"]');

  links.forEach((link) => {
    link.addEventListener("click", function (e) {
      const href = this.getAttribute("href");

      if (href === "#") {
        e.preventDefault();
        return;
      }

      const target = document.querySelector(href);

      if (target) {
        e.preventDefault();

        const headerHeight = document.querySelector(".header").offsetHeight;
        const targetPosition = target.offsetTop - headerHeight - 20;

        window.scrollTo({
          top: targetPosition,
          behavior: "smooth",
        });
      }
    });
  });
}