$(function(){
    $('.mapModal').on('show.bs.modal', function (event) {
        var button = $(event.relatedTarget);
        var address = button.data('address');
        var modal = $(this);
        modal.find('.address').text(address);
    })
});