document.addEventListener('click', function (event) {
    let targetTd = null;

    // Check if the click is on a <td>, its child <div>, or <h1>/<p> inside a <td>
    if (event.target.tagName === 'TD') {
        targetTd = event.target;
    } else if (event.target.tagName === 'DIV' && event.target.closest('td')) {
        targetTd = event.target.closest('td');
    } else if ((event.target.tagName === 'H1' || event.target.tagName === 'P') && event.target.closest('td')) {
        targetTd = event.target.closest('td');
    }

    if (targetTd) {
        const summaryElement = targetTd.querySelector('summary');
        if (summaryElement) {
            summaryElement.click(); // Trigger the click event on the <summary>
        }
    }

    if (event.target.tagName === 'SUMMARY') {
        const parentTd = event.target.closest('td');
        const allTds = parentTd.parentElement.querySelectorAll('td');
        const detailsElement = event.target.parentElement;
        const summaryParagraphs = detailsElement.querySelectorAll('p');

        summaryParagraphs.forEach(p => {
            p.classList.add('hidden');
        });

        document.querySelectorAll('details').forEach(details => {
            if (details !== detailsElement) {
                details.open = false;
            }
        });

        if (!detailsElement.open) {
            if (window.innerWidth > 991.5) { // Check screen size
                allTds.forEach(td => {
                    td.classList.add('transition');
                    if (td === parentTd) {
                        td.style.width = '52%';
                    } else {
                        td.style.width = '16%';
                    }
                });
            }

            setTimeout(() => {
                detailsElement.open = true;
                if (window.innerWidth > 991.5) { // Apply timeout only for larger screens
                    setTimeout(() => {
                        summaryParagraphs.forEach(p => {
                            p.classList.remove('hidden');
                            p.classList.add('fade-in');
                        });
                    }, 500);
                } else {
                    summaryParagraphs.forEach(p => {
                        p.classList.remove('hidden');
                        p.classList.add('fade-in');
                    });
                }
            }, 500);
        } else {
            if (window.innerWidth > 991.5) { // Check screen size
                allTds.forEach(td => {
                    td.classList.add('transition');
                    td.style.width = '';
                });
            }

            setTimeout(() => {
                summaryParagraphs.forEach(p => {
                    p.classList.remove('fade-in');
                    p.classList.add('hidden');
                });
            }, 300);
        }
    }
});

window.addEventListener('resize', function () {
    if (window.innerWidth < 991.5) { // Corrected to use window.innerWidth
        document.querySelectorAll('td').forEach(td => {
            td.classList.remove('transition');
            td.style.width = '';
        });

        document.querySelectorAll('details').forEach(details => {
            details.open = false;
            const summaryParagraphs = details.querySelectorAll('p');
            summaryParagraphs.forEach(p => {
                p.classList.add('hidden');
                p.classList.remove('fade-in');
            });
        });
    }
});