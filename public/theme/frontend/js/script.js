var CLICK = {
  fixedMenu: function () {
    /* Cài đặt chế độ menu */

    optionMenu = {
      hideOnScrollDown: false,

      delayShowOnScrollTop: 0 /* Delay hiển thị khi scroll top. Áp dụng khi hideOnScrollDown = true */,
    };

    hideOnScrollDown = optionMenu.hideOnScrollDown || false;

    delayShowOnScrollTop = optionMenu.delayShowOnScrollTop || 0;

    /* Khai báo header */

    var header = Tech.$(".header");

    var headerHeight = header.outerHeight();

    var headerTopHeight = Tech.$(".header-top").outerHeight();

    var bodyPage = Tech.$("body");

    var width_ = window.innerWidth;

    /* Function phụ trợ */

    /* Ẩn hiện menu khi scroll */

    var lastScrollTop = 0;

    window.addEventListener("scroll", function () {
      var st = window.pageYOffset || document.documentElement.scrollTop;

      if (st > lastScrollTop) {
        if (lastScrollTop > headerHeight) {
          header.css("top", `-` + headerTopHeight + `px`);
        }
      } else {
        header.css("top", "0px");
      }

      if (st > headerHeight) {
        header.addClass("scroll");
      } else {
        header.removeClass("scroll");
      }

      lastScrollTop = st <= 0 ? 0 : st;
    });
  },

  showMenu: function () {
    var buttonShowMenu = Tech.$(".show-menu");

    var closeMenu = Tech.$(".over-lay");

    if (typeof buttonShowMenu != "undefined") {
      buttonShowMenu.onClick(function () {
        Tech.$(".menu").addClass("active");

        Tech.$(".over-lay").addClass("show");

        Tech.$("body,html").addClass("show-menu");
      });
    }

    if (typeof closeMenu != "undefined") {
      closeMenu.onClick(function () {
        Tech.$(".menu").removeClass("active");

        Tech.$(".over-lay").removeClass("show");

        Tech.$("body,html").removeClass("show-menu");
      });
    }

    var width_ = window.innerWidth;

    if (width_ < 1024) {
      var listIitemLi = Tech.$(".menu").find("li");

      listIitemLi.forEach(function (element, index) {
        if (element.find(":scope > ul").length() > 0) {
          element.append(
            `<span class="btn-dropdown-menu"><i class="fa fa-angle-down" aria-hidden="true"></i></span>`
          );
        }
      });

      var listBtnDropdownMenu = Tech.$(".menu").find(".btn-dropdown-menu");

      var timeSlide = 300;

      listBtnDropdownMenu.onClick(function (event) {
        var _this = Tech.$(this);

        _this.css("pointer-events", "none");

        setTimeout(function () {
          _this.css("pointer-events", "all");
        }, timeSlide);

        // var parentLi = Tech.$(this.closest('li'));

        var listUlChild = Tech.$(this).prev("ul");

        _this.toggleClass("open");

        listUlChild.toggleSlide(timeSlide);
      });
    }
  },

  initAnimation: function () {
    var width_ = window.innerWidth;

    if (width_ > 1023) {
      var wow = new WOW();

      wow.init();
    }
  },

   initCountUp: function () {
    var listCountNumber = document.querySelectorAll(".statis-list")
    if (listCountNumber.length === 0) return false
    var capacityStatus = 0
    var heightWindow =
      window.innerHeight ||
      document.documentElement.clientHeight ||
      document.body.clientHeight
    window.addEventListener(
      "scroll",
      function () {
        if (
          capacityStatus === 0 &&
          window.pageYOffset > listCountNumber[0].offsetTop - heightWindow
        ) {
          const itemCounts = listCountNumber[0].querySelectorAll(".count")
          if (itemCounts.length === 0) return
          const animationDuration = 5000
          const frameDuration = 1000 / 30
          const totalFrames = Math.round(animationDuration / frameDuration)
          itemCounts.forEach(function (element, index) {
            const easeOutQuad = (t) => t * (2 - t)
            const animateCountUp = (el) => {
              let frame = 0
              const countTo = el.getAttribute("tech5s-number")
              const counter = setInterval(() => {
                frame++
                const countToNumber = parseInt(
                  countTo.replace(/([^0-9])+/i, ""),
                  10
                )
                const progress = easeOutQuad(frame / totalFrames)
                const currentCount = Math.round(countToNumber * progress)
                if (parseInt(el.textContent, 10) !== currentCount) {
                  var textTarget = currentCount
                  if (currentCount < 10) {
                    textTarget = "0" + textTarget
                  }
                  el.textContent = textTarget
                }
                if (frame === totalFrames) {
                  el.textContent = countTo
                  clearInterval(counter)
                }
              }, frameDuration)
            }
            animateCountUp(element)
          })
          capacityStatus = 1
        }
      },
      false
    )
  },
  loadMap: function () {
    var maps = Tech.$("#map");

    if (typeof maps !== "undefined") {
      var src = maps.attr("data-map");

      var frame = '<iframe src="' + src + '"></iframe>';

      var action = setTimeout(function () {
        maps.prepend(frame);
      }, 1000);
    }
  },



  init: function () {


    CLICK.showMenu();
    CLICK.initCountUp();
    CLICK.initAnimation();
  
  },
};

Tech.Query.ready(function () {
  setTimeout(function () {
    CLICK.init();
  }, 100);

  // BackToTop.create('.back-to-top', {

  //     threshold: 300,

  // })
});
