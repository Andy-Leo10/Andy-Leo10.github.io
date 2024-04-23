// modal.js

function createModal(id, title, content) {
    return `
        <button class="button is-primary" data-action="open-modal" data-target="#${id}">${title}</button>

        <div class="modal" id="${id}">
            <div class="modal-background"></div>
            <div class="modal-card">
                <header class="modal-card-head">
                    <p class="modal-card-title">${title}</p>
                    <button class="delete" data-action="close-modal" data-target="#${id}" aria-label="close"></button>
                </header>
                <section class="modal-card-body">
                    <p>${content}</p>
                </section>
                <footer class="modal-card-foot">
                    <button class="button is-success">Save changes</button>
                    <button class="button" data-action="close-modal" data-target="#${id}">Cancel</button>
                </footer>
            </div>
        </div>
    `;
}

$(document).ready(function() {
    // Open the modal when the button is clicked
    $('[data-action="open-modal"]').click(function() {
        var target = $(this).data('target');
        $(target).addClass('is-active');
    });

    // Close the modal when the close button or the background is clicked
    $('[data-action="close-modal"], .modal-background').click(function() {
        var target = $(this).data('target');
        $(target).removeClass('is-active');
    });
});