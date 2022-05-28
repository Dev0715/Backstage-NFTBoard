jQuery(window).on("load", function () {
    $('#preloader').fadeOut(500);
    $('#main-wrapper').addClass('show');
});


jQuery(document).ready(function () {

    $(function () {
        // for (var nk = window.location,
        //     o = $(".menu a, .settings-menu a").filter(function () {
        //         return this.href == nk;
        //     })
        //         .addClass("active")
        //         .parent()
        //         .addClass("active"); ;) {
        //     // console.log(o)
        //     if (!o.is("li")) break;
        //     o = o.parent()
        //         .addClass("show")
        //         .parent()
        //         .addClass("active");
        // }

        // let onpageLoad = localStorage.getItem("theme") || "light";
        // let element = document.body;
        // element.classList.add(onpageLoad);
        // document.getElementById("theme").textContent = localStorage.getItem("theme") || "light";

        let element = document.body;
        // element.classList.toggle("dark-theme");

        let theme = localStorage.getItem("theme");
        if (theme === "dark-theme") {
            element.classList.add("dark-theme");
        }
        else {
            element.classList.remove("dark-theme");
        }
    });
});







