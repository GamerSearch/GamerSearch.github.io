$(function() {

    $(".form-control").on('focus', function(){

        $(this).parents(".form-group").addClass('focused');

    });

    $(".form-control").on('blur', function(){

        $(this).parents(".form-group").removeClass('focused');

    });

});

function submitForm() {
    var frm = document.getElementsByName('form-group')[0];
    frm.submit();
    frm.reset();
    return false;
}
