var link = document.querySelector('.mainblock__arrow');
link.addEventListener('click', scrollMain);

var link2 = document.querySelector('.mainblock__btn');
link2.addEventListener('click', scrollMain);


function scrollMain(e) {
    e.preventDefault();
    var container = this.closest('.mainblock');
    var style = window.getComputedStyle(container);
    window.scroll({
        top: style.height.replace(/[^0-9]/g, ''),
        behavior: 'smooth'
    });
}

$('.filter__item').click(function (event) {
    var i = $(this).data('filter');
    if (i == 1) {
        $('.portfolio__column').show();
    } else {
        $('.portfolio__column').hide();
        $('.portfolio__column.f_' + i).show();
    }
    return false;
});