const observer = new IntersectionObserver(entries => {
    entries.forEach(elm => {
        elm.target.classList.toggle('show', elm.isIntersecting);
        if(elm.isIntersecting) observer.unobserve(elm.target);
    })
}, {
    threshold: 0.3,
})

document.querySelectorAll('section').forEach(elm => {
    observer.observe(elm)
})