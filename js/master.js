let nums = document.querySelectorAll(".num");
let secition = document.querySelector(".fan-facts-area");
let started = false;

window.onscroll = () => {
  if (window.scrollY >= secition.offsetTop - 500) {
    if (!started) {
      nums.forEach((counter) => {
        counter.innerHTML = 0;
        let updateCounter = () => {
          let targetCount = +counter.getAttribute("data-goal");
          let startingCount = +counter.innerHTML;
          let increase = targetCount / 100;
          if (startingCount < targetCount) {
            counter.innerHTML = `${Math.round(startingCount + increase)}`;
            setTimeout(updateCounter, 10);
          } else {
            counter.innerHTML = targetCount;
          }
        };
        updateCounter();
      });
    }
    started = true;
  }
  // Scroll Top
  if (window.scrollY >= 1000) {
    scroll.style.display = "block";
  } else {
    scroll.style.display = "none";
  }
};

// //

// function show(el) {
//   if (el.value === "") {
//     el.nextElementSibling.style.display = "block";
//     el.nextElementSibling.style.color = "red";
//   } else {
//     if (el.type == "email") {
//       if (! el.value.includes("@")) {
//         el.nextElementSibling.style.display = "block";
//         el.nextElementSibling.style.color = "red";
//       }else {
//         el.nextElementSibling.style.display = "none";
//       }
//     } else {
//       el.nextElementSibling.style.display = "none";
//     }
//   }
// }

function show(el) {
  if (el.type == "email" || el.value === "") {
    if (!el.value.includes("@")) {
      el.nextElementSibling.style.display = "block";
      el.nextElementSibling.style.color = "red";
    } else {
      el.nextElementSibling.style.display = "none";
    }
  } else {
    el.nextElementSibling.style.display = "none";
  }
}

// animation type
let typed = new Typed("#element", {
  strings: ["Developer", "Designer"],
  typeSpeed: 100,
  backSpeed: 50,
  loop: true,
  loopCount: Infinity,
});

// Scroll Top
let scroll = document.querySelector(".scroll-top");
scroll.onclick = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

// magnificPopup
$(".img-poppu").magnificPopup({
  type: "image",
  gallery: {
    enabled: true,
  },
});

//shuffel

jQuery(function ($) {
  var Shuffle = window.Shuffle,
    filterVal = "";

  var myShuffle = new Shuffle(document.querySelector(".my-shuffle"), {
    itemSelector: ".js-item",
    sizer: ".my-sizer-element",
    buffer: 1,
  });

  $(".js-filter").on("click", function () {
    var $this = $(this);

    $(".portfolio-menu .active").removeClass("active");
    $this.addClass("active");

    filterVal = $this.attr("data-filter-name");
    if (filterVal === "all") {
      filterVal = "";
    }

    galleryFiltering(myShuffle, filterVal);
  });
}); //End Of siaf!

function galleryFiltering(galleryObj, val) {
  galleryObj.filter(val);
}


