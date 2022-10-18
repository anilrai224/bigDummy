const sr = ScrollReveal({
    origin:'top',
    distance:'90px',
    duration:2400,
    delay:1, 
})
sr.reveal(`#services .service:nth-child(2)`,{origin:'left'})
sr.reveal(`#services .service:nth-child(3)`,{origin:'right'})
sr.reveal(`#services .service:nth-child(4)`,{origin:'left'})
sr.reveal(`.right-contact`,{origin:'right'})
sr.reveal(`.left-contact`,{origin:'left'})