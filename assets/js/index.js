$(document).ready(() => {
    let viewportWidth, viewportHeight, footerHeight;

    const changeCSS = () => {
        viewportWidth = $(window).innerWidth()
        viewportHeight = $(window).innerHeight()
        footerHeight = $(`.footer`).outerHeight()


        $(`.callout-index`).attr(`style`, `height: ${viewportHeight}px`)			// making the top header "callout" responsive and fill the screen when at top of page
        $(`.header-index`).attr(`style`, `padding-top: ${(viewportHeight) / 2}px;`)			// making sure the padding to the text within is reponsive as well
        // $(`#index-last-row`).attr(`style`, `margin-bottom: ${footerHeight}px`)
    }

    changeCSS()

    $(window).resize(() => {
        changeCSS()
    })
})