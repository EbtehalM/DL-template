$(document).ready(function () {
    $('#sButton').click(function () {
        $(this).parent().append('<button class="btn btn-primary mt-4" type="button" disabled><span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span></button>');
        $(this).hide();
    });
});
