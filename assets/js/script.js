!function (a) { "use strict"; var e = a(window), t = (a(document), a("body")); a(".navbar"); function i() { return e.width() } a.fn.andSelf = function () { return this.addBack.apply(this, arguments) }, "ontouchstart" in document.documentElement || t.addClass("no-touch"); i(); e.on("resize", function () { i() }); var s = a(".is-sticky"); if (s.length > 0) { var l = a("#mainnav").offset(); e.on("scroll", function () { var a = e.scrollTop(); e.width() > 991 && a > l.top ? s.hasClass("has-fixed") || s.addClass("has-fixed") : s.hasClass("has-fixed") && s.removeClass("has-fixed") }) } var n = window.location.href, o = n.split("#"), r = a(".nav li a"); r.length > 0 && r.each(function () { n === this.href && "" !== o[1] && a(this).closest("li").addClass("active").parent().closest("li").addClass("active") }), e.on("resize", function () { a(".navbar-collapse").removeClass("in"), $dropdown_menu.children(".dropdown-menu").fadeOut("400") }); var d = a("#subscribe-form"); if (d.length > 0) { if (!a().validate || !a().ajaxSubmit) return console.log("contactForm: jQuery Form or Form Validate not Defined."), !0; if (d.length > 0) { var c = d.find(".subscribe-results"); d.validate({ invalidHandler: function () { c.slideUp(400) }, submitHandler: function (e) { c.slideUp(400), a(e).ajaxSubmit({ target: c, dataType: "json", success: function (t) { var i = "error" === t.result ? "alert-danger" : "alert-success"; c.removeClass("alert-danger alert-success").addClass("alert " + i).html(t.message).slideDown(400), "error" !== t.result && a(e).clearForm() } }) } }) } } var m = a(".animated"); a().waypoint && m.length > 0 && e.on("load", function () { m.each(function () { var e = a(this), t = e.data("animate"), i = e.data("duration"), s = e.data("delay"); e.waypoint(function () { e.addClass("animated " + t).css("visibility", "visible"), i && e.css("animation-duration", i + "s"), s && e.css("animation-delay", s + "s") }, { offset: "93%" }) }) }); var h = a(".navbar-toggler"); h.length > 0 && h.on("click", function () { a(".remove-animation").removeClass("animated") }); var f = a("#preloader"), u = a("#loader"); f.length > 0 && e.on("load", function () { u.fadeOut(300), t.addClass("loaded"), f.delay(700).fadeOut(300) }); var v = a(".has-carousel"); v.length > 0 && v.each(function () { var e = a(this), t = e.data("items") ? e.data("items") : 4, i = t >= 3 ? 3 : t, s = i >= 2 ? 2 : i, l = e.data("delay") ? e.data("delay") : 4e3, n = !!e.data("auto"), o = !!e.data("loop"), r = !!e.data("dots"), d = !!e.data("navs"), c = e.data("margin") ? e.data("margin") : 30; e.owlCarousel({ navText: ["<i class='fa fa-chevron-left'></i>", "<i class='fa fa-chevron-right'></i>"], items: t, loop: o, nav: d, dots: r, margin: c, autoplay: n, autoplayTimeout: l, autoplaySpeed: 700, responsive: { 0: { items: 1 }, 480: { items: s }, 768: { items: i }, 1170: { items: t } } }) }); var p = a(".panel-collapse"); p.length > 0 && (p.on("show.bs.collapse", function () { a(this).siblings(".panel-heading").addClass("active") }), p.on("hide.bs.collapse", function () { a(this).siblings(".panel-heading").removeClass("active") })), t.append('') }(jQuery);