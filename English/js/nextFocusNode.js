define(['focusNodeFilter'], function(focusNodeFilter){ //取下一個可見 focus 節點
    var $all_a = focusNodeFilter;

    var main = function(node){
        var $this = $(node),
            _index = $all_a.index($this) + 1; //next focus
            
        for( var i = _index; i < $all_a.length; i++ ) {

            if( $all_a.eq(i).is(':visible') ) {
                return $all_a.eq(i);
            }
        }
    }

    return main;
});