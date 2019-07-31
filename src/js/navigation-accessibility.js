$(document).ready(function() {
    // Setup the a11y nav
    $(".menu .nav").setup_navigation();

    // RWD Nav Pattern
    $("body").addClass("js");

    var $menu = $("#menu"),
        $menulink = $(".menu-link"),
        $menuTrigger = $(".has-subnav > a");

    $menulink.click(function(e) {
        // e.preventDefault();
        $menulink.toggleClass("active");
        $menu.toggleClass("active");
    });

    $menuTrigger.click(function(e) {
        // e.preventDefault();
        var $this = $(this);
        $this
            .toggleClass("active")
            .siblings("ul")
            .toggleClass("active");
    });
});

$.fn.setup_navigation = function(settings) {
    settings = jQuery.extend(
        {
            menuHoverClass: "show-menu"
        },
        settings
    );

    var top_level_links = $(this).find("> li > a"), 
        second_level_links = $(this).find(".level-2 > li > a");

    // Set tabIndex to -1 so that top_level_links can't receive focus until menu is open
    $(top_level_links)
        .siblings("ul")
        .attr("data-test", "true")
        .attr({ "aria-hidden": "true" })
        .find("a")
        .attr("tabIndex", -1);

    // Adding aria-haspopup for appropriate items
    $(top_level_links).each(function() {
        if ($(this).siblings("ul").length > 0)
            $(this)
                .parent("li")
                .attr("aria-haspopup", "true");
    });

    $(top_level_links).hover(function() {
        $(this)
            .closest("ul")
            .attr("aria-hidden", "false")
            .find("." + settings.menuHoverClass)
            .attr("aria-hidden", "true")
            .removeClass(settings.menuHoverClass)
            .find("a")
            .attr("tabIndex", -1);
        $(this)
            .siblings("ul")
            .attr("aria-hidden", "false")
            .addClass(settings.menuHoverClass)
            .find("a")
            .attr("tabIndex", 0);
    });

    $(top_level_links).focus(function() {
        $(this)
            .closest("ul")
            .find("." + settings.menuHoverClass)
            .attr("aria-hidden", "true")
            .removeClass(settings.menuHoverClass)
            .find("a")
            .attr("tabIndex", -1);

        $(this)
            .siblings("ul")
            .attr("aria-hidden", "false")
            .addClass(settings.menuHoverClass)
            .find("a")
            .attr("tabIndex", 0);
    });

    // Set tabIndex to -1 so that top_level_links can't receive focus until menu is open
    $(second_level_links)
    .siblings("ul")
    .attr("data-test", "true")
    .attr({ "aria-hidden": "true" })
    .find("a")
    .attr("tabIndex", -1);

    // Adding aria-haspopup for appropriate items
    $(second_level_links).each(function() {
        if ($(this).siblings("ul").length > 0)
            $(this)
                .parent("li")
                .attr("aria-haspopup", "true");
    });

    $(second_level_links).hover(function() {
        $(this)
            .closest("ul")
            .attr("aria-hidden", "false")
            .find("." + settings.menuHoverClass)
            .attr("aria-hidden", "true")
            .removeClass(settings.menuHoverClass)
            .find("a")
            .attr("tabIndex", -1);
        $(this)
            .siblings("ul")
            .attr("aria-hidden", "false")
            .addClass(settings.menuHoverClass)
            .find("a")
            .attr("tabIndex", 0);
    });

    $(second_level_links).focus(function() {
        $(this)
            .closest("ul")
            .find("." + settings.menuHoverClass)
            .attr("aria-hidden", "true")
            .removeClass(settings.menuHoverClass)
            .find("a")
            .attr("tabIndex", -1);

        $(this)
            .siblings("ul")
            .attr("aria-hidden", "false")
            .addClass(settings.menuHoverClass)
            .find("a")
            .attr("tabIndex", 0);
    });

    // Hide menu if click or focus occurs outside of navigation
    $(this)
        .find("a")
        .last()
        .keydown(function(e) {
            if (e.keyCode == 9) {
                // If the user tabs out of the navigation hide all menus
                $("." + settings.menuHoverClass)
                    .attr("aria-hidden", "true")
                    .removeClass(settings.menuHoverClass)
                    .find("a")
                    .attr("tabIndex", -1);
            }
        });

    $(document).click(function() {
        $("." + settings.menuHoverClass)
            .attr("aria-hidden", "true")
            .removeClass(settings.menuHoverClass)
            .find("a")
            .attr("tabIndex", -1);
    });

    $(this).click(function(e) {
        e.stopPropagation();
    });
};
