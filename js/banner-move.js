$("#main-menu").on('show.bs.collapse', function(){
    changeTranslate('-50%', '20%');
});

$("#main-menu").on('hide.bs.collapse', function(){
    changeTranslate('-50%', '-50%');
});

function changeTranslate(x, y){
    $("#banner").css('transform', 'translate(' + x + ', ' + y + ')' );
}
