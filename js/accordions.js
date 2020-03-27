// Careers page accordion

function toggleAccordion(element) {
    let header = element.children[0];
    let text = element.children[1];
    let arrow = header.getElementsByTagName('img')[0];

    header.classList.toggle('accordion__header--open');
    text.classList.toggle('accordion__text--visible');
    arrow.classList.toggle('accordion__arrow--open');

    setTimeout(function() {
        text.classList.toggle('accordion__text--fade');
    }, 80);
}