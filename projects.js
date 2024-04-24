function createCellModal(imageUrl, projectName, extraContent, mdFile, id) {
    // Create the cell and modal HTML
    var cellModalHtml = `
        <div class="cell">
            <div class="card" style="background-color: #9e575700;">
                <div class="card-content">
                    <div class="media">
                        <div class="media-left">
                            <figure class="image is-96x96">
                                <img style="border-radius: 10%;"
                                    src="${imageUrl}"
                                    alt="Placeholder image" />
                            </figure>
                        </div>
                        <div class="media-content">
                            <button class="button custom-color1" id="open-modal-${id}">
                                <p class="title is-6">${projectName}</p>
                            </button>
                            <div class="content">
                                ${extraContent}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="modal" id="modal-${id}">
            <div class="modal-background"></div>
            <div class="modal-card-body">
                <zero-md src="${mdFile}"></zero-md>
            </div>
            <button class="modal-close is-large" aria-label="close" id="close-modal-${id}"></button>
        </div>
    `;

    // Create a function to attach the event listeners
    var attachEventListeners = function () {
        document.getElementById('open-modal-' + id).addEventListener('click', function () {
            document.getElementById('modal-' + id).classList.add('is-active');
        });

        document.getElementById('close-modal-' + id).addEventListener('click', function () {
            document.getElementById('modal-' + id).classList.remove('is-active');
        });
    };

    return {
        html: cellModalHtml,
        attachEventListeners: attachEventListeners
    };
}

function createAndAppendCellModal(container, imageUrl, projectName, extraContent, mdFile, id) {
    var cellModal = createCellModal(imageUrl, projectName, extraContent, mdFile, id);
    var div = document.createElement('div');
    div.innerHTML = cellModal.html;
    while (div.firstChild) {
        container.appendChild(div.firstChild);
    }
    cellModal.attachEventListeners();
}

window.onload = function () {
    var cellModalContainer = document.getElementById('modal-container');

    createAndAppendCellModal(
        cellModalContainer,
        'https://bulma.io/assets/images/placeholders/96x96.png',
        'Project 1',
        'Extra content for Project 1',
        'content/file1.md',
        1
    );

    createAndAppendCellModal(
        cellModalContainer,
        'https://bulma.io/assets/images/placeholders/96x96.png',
        'Project 2',
        'Extra content for Project 2',
        'content/file2.md',
        2
    );

    createAndAppendCellModal(
        cellModalContainer,
        'https://bulma.io/assets/images/placeholders/96x96.png',
        'Project 3',
        'Extra content for Project 1',
        'content/file1.md',
        3
    );

    createAndAppendCellModal(
        cellModalContainer,
        'https://bulma.io/assets/images/placeholders/96x96.png',
        'Project 4',
        'Extra content for Project 2',
        'content/file2.md',
        4
    );
    // Add more cells and modals as needed
    createAndAppendCellModal(
        cellModalContainer,
        'https://bulma.io/assets/images/placeholders/96x96.png',
        'Project 5',
        'Extra content for Project 1',
        'content/file1.md',
        5
    );

    createAndAppendCellModal(
        cellModalContainer,
        'https://bulma.io/assets/images/placeholders/96x96.png',
        'Project 6',
        'Extra content for Project 2',
        'content/file2.md',
        6
    );

    createAndAppendCellModal(
        cellModalContainer,
        'https://bulma.io/assets/images/placeholders/96x96.png',
        'Project 7',
        'Extra content for Project 1',
        'content/file1.md',
        7
    );

    createAndAppendCellModal(
        cellModalContainer,
        'https://bulma.io/assets/images/placeholders/96x96.png',
        'Project 8',
        'Extra content for Project 2',
        'content/file2.md',
        8
    );
};





// <!-- VERSION1 of cards -->

// <div class="cell">
//     <div class="card" style="background-color: #9e575700;">
//         <div class="card-content">
//             <div class="media">
//                 <div class="media-left">
//                     <figure class="image is-96x96">
//                         <img style="border-radius: 10%;"
//                             src="https://bulma.io/assets/images/placeholders/96x96.png"
//                             alt="Placeholder image" />
//                     </figure>
//                 </div>
//                 <div class="media-content">
//                     <p class="title is-5">Project</p>
//                     <div class="content">
//                         Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris.
//                     </div>
//                     <button class="button is-primary"
//                         id="open-modal">Read More</button>
//                 </div>
//             </div>
//         </div>
//     </div>
// </div>






// <!-- VERSION2 of cards : current -->

// <div class="cell">
//     <div class="card" style="background-color: #9e575700;">
//         <div class="card-content">
//             <div class="media">
//                 <div class="media-left">
//                     <figure class="image is-96x96">
//                         <img style="border-radius: 10%;"
//                             src="https://bulma.io/assets/images/placeholders/96x96.png"
//                             alt="Placeholder image" />
//                     </figure>
//                 </div>
//                 <div class="media-content">
//                     <button class="button custom-color1" id="open-modal">
//                         <p class="title is-6">Project name</p>
//                     </button>
//                     <div class="content">
//                         Lorem ipsum dolor sit amet, consectetur adipiscing
//                         elit. Phasellus nec iaculis mauris.
//                     </div>
//                 </div>
//             </div>
//         </div>
//     </div>
// </div>