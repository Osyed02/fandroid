function toggle_menu() {
    $('#menu-burger').toggleClass('menu-burger--open');
    $('body').toggleClass('body--locked')
}

function toggle_filter() {
    $('#filter-toggle').toggleClass('is-hidden');
    $('body').toggleClass('body--locked')
}

function toggle_search() {
    $('#search-modal').toggleClass('search-modal--open');
    $('body').toggleClass('body--locked')
}