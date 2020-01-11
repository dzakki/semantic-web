$(document).ready(function () {
    const aboutArticle = $('#about-article')
    const blogArticle = $('#skill-article')
    const projectsArticle = $('#projects-article')
    const contactArticle = $('#contact-article')

    $('#about').click(function (e) { 
        e.preventDefault();
        blogArticle.hide()
        aboutArticle.show('show')
        projectsArticle.hide()
        contactArticle.hide()
    });
    $('#skill').click(function (e) { 
        e.preventDefault();
        blogArticle.show('slow')
        aboutArticle.hide()
        projectsArticle.hide()
        contactArticle.hide()
    });
    $('#projects').click(function (e) { 
        e.preventDefault();
        aboutArticle.hide()
        blogArticle.hide()
        projectsArticle.show('slow')
        contactArticle.hide()
    });
    $('#contact').click(function (e) { 
        e.preventDefault();
        aboutArticle.hide()
        blogArticle.hide()
        projectsArticle.hide()
        contactArticle.show('slow')
    });
});