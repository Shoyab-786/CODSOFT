const accordionTitle = document.querySelectorAll('.accordion_title');

accordionTitle.forEach((question) => {
    question.addEventListener('click', () => {
        const content = question.nextElementSibling;
        const icon = question.querySelector('.faqs_icon');
        content.classList.toggle("show");
        icon.classList.toggle("cross");
        
        // nested function for closing other question if one already opned.
        accordionTitle.forEach((item) => {
            if (item !== question) {
                item.nextElementSibling.classList.remove("show");
                item.querySelector('.faqs_icon').classList.remove("cross");
            }
        })
    })
})