//Index.html
$('#control-btn').on('click', function(){
    $('#menu-list').slideToggle();

    if ($('#control-btn').hasClass('close')) {
        $('#control-btn').attr('src', 'ressources/images/flatIcon/menu-cross.svg');
        $('#control-btn').removeClass('close')
        $('#control-btn').addClass('open')
    } else if($('#control-btn').hasClass('open'))  {
        $('#control-btn').attr('src', 'ressources/images/flatIcon/menu-bar.svg');
        $('#control-btn').removeClass('open')
        $('#control-btn').addClass('close')
    }
})