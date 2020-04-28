$(document).on(`ready`, () => {
    $(`#callout`).attr(`class`, `callout callout-other-pages`)
    $(`#subheader`).attr(`class`, `subheader-other-pages`).text(`Portfolio`)
    $(`#header`).attr(`class`, `header-other-pages`).hide()

    $.get(`/projects`, (response) => {
        response.forEach(item => {

            const projectsContainer = $(`.projects-container`)
            let cardContainer = $(`<div class="columns small-12 medium-4">`)
            let card = $(`<div class="card-article-hover card">`)
            let bgImage = $(`<img>`).attr(`src`, `./images/${item.img_src}`)
            let cardSection = $(`<div class="card-section">`)
            let metaData = $(`<p class="meta-data article-subtext">`).text(item.libraries)
            let title = $(`<h5 class="article-title">`).text(item.title)
            let description = $(`<p class="article-desc">`).text(item.lead)
            let cardFooter = $(`<div class="card-divider">`)
            let appUrl = $(`<a class="links">`).attr(`href`, item.app_url).text(`open app`)
            let dividers = $(`<b>`).text(`•`)
            let repoUrl = $(`<a class="links">`).attr(`href`, item.app_url).html(`see repo`)
            let hoverDiv = $(`<div class="hover-border">`)

            cardSection.append(metaData, title, description)
            cardFooter.append(appUrl, dividers, repoUrl)

            card.append(bgImage, cardSection, cardFooter, hoverDiv)

            cardContainer.append(card)

            // APPEND/PREPEND TO SOMETHING HERE
            cardContainer.prependTo(projectsContainer)

            //{{!-- NEW PROJECT!!!  --}}
            //<div class="columns small-12 medium-4">
            //    <div class="card-article-hover card">
            //        <img src="./images/artgarden-screen-1.jpg">
            //        <div class="card-section">
            //            <p class="meta-data article-subtext">NodeJS, Handlebars, mySQL, CSS</p>
            //            <h5 class="article-title">artGarden</h5>
            //            <p class="article-desc">App where users can create artwork out of others' imagination.</p>
            //        </div>
            //        <div class="card-divider">
            //            <a href="" class="links">open</a>
            //            <b> • </b>
            //            <a href="" class="links"><i
            //                    class="fa fa-github"></i></a>
            //        </div>
            //        <div class="hover-border">
            //        </div>
            //    </div>
            //</div>
        })
    })
})