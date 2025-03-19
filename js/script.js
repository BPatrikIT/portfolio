// Save the scroll position when the page is reloaded or navigated away from
window.addEventListener('beforeunload', function() {
    history.replaceState({ scrollPosition: scrollY }, null, "");
});

// Scroll back to the saved position when the page is loaded
window.addEventListener('load', function() {
    if (history.state && history.state.scrollPosition !== undefined) {
        window.scrollTo(0, history.state.scrollPosition);
    }
});