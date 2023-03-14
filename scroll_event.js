
//특정위치 hide값 
$( document ).ready( function() {
    //jbOffset 에 #hd_wr의 좌표값 저장 
	var jbOffset = $( '.line_bar' ).offset();
$jq( window ).scroll( function() {
        //document가 jbOffset 값보다 많이 스크롤 되면 실행
		if ( jq( document ).scrollTop() > jbOffset.top ) {
			$('.infoArea').addClass('rightmenus_hide')
			//alert('해당위치를 찾기')
		}
        //jbOffset 값 이하로 줄어들면 실행
		else {
			$('.infoArea').removeClass('rightmenus_hide')
		}
	});
});

/*해당 위치 관련하여 add remove 사용 한 이벤트 */
