define(['getNode', 'mobileFilter'], function(getNode, mobileFilter){
	
	function main(env, opt, file){

		var $set = {
				activeClass: 'is-active',
				parentClass: 'is-parent',
				event: 'click', //jQuery 事件名稱
				cookie: true,
				cookieName: file,
				debug: false,
				openText:'目前次選單開啟',
				closeText:'目前次選單關閉',
				freeTab:true
			}

		$.extend($set, opt);

		var $li = getNode.getCtItem(env), //取 li
			$child_node = getNode.getChildGroup(env), //取 group nav
			$child_node_header = getNode.getHd($child_node),
			$child_node_content = getNode.getCt($child_node),
			$a = $child_node_header.find('a'),
			$a_length = $a.length,
			$last_a = $(env).find('a').eq(-1);

		if( $.cookie(file) ) {
			var _index = parseInt($.cookie(file));

			$li.eq(_index - 1).addClass($set.activeClass);
		}

		
		$child_node_content.each(function(i){
			console.log(i);
			var $this = $(this),
				$item = $this.find('.in li'),
				_itemLeng = $item.length,
				$item_list = $item.eq(-1),
				_title = $child_node_header.eq(i).find('a').text();

				$item_list.on('keydown',function(event){
			
					if (event.shiftKey == 1 && event.which == 9) {
						$item.eq(_itemLeng-2).focus();
					}else if(event.which == 9){
						
						$child_node.parent('li').removeClass('is-active'); $child_node_header.eq(i).find('a').attr('title',_title+$set.closeText); 
						console.log(_title);
						
					}
				});
		});


		//幫 .content 裡有 a 的物件加上 is-parent
		$child_node.each(function(i, d) { 

			var $this = $(this),
				$li_parent = $this.parent('li'),
				$a = getNode.getCt($this).find('a'),
				$hd_a = getNode.getHd($this).find('a'),
				_hd_a_title = $hd_a.text();
			if( $a.length ) {
				$li_parent.addClass($set.parentClass);
				$hd_a.attr('title',_hd_a_title +','+$set.closeText);
				
			}
		});

		$a.on($set.event, function(evt){ //觸發事件
			var $this = $(this),
				$li_parent = $this.closest('li');
			if( $li_parent.hasClass($set.parentClass) ) {
				evt.preventDefault();
			}

			$this.trigger(file);
		});

		$a.on(file, function(){
			var $this = $(this),
				$li_parent = $this.closest('li'),
				_index = $li_parent.data('index'),
				_title = $this.text();
			

			if( $li_parent.hasClass($set.activeClass) ) {
				$li_parent.removeClass($set.activeClass);
				if($set.freeTab == true)
					$this.attr('title',_title+$set.closeText); 
				
				$.removeCookie(file);
				
			}else {
				$li.removeClass($set.activeClass);
				$li_parent.addClass($set.activeClass);
				if($set.freeTab == true)
					$this.attr('title',_title+$set.openText); 
				$.cookie(file, _index, { path: '/' });
				
			}
		});

		if($set.debug) {
			console.log('預設值:', $set);
			console.log('檔案 '+ file +'.js 已順利執行。');
		}
	}
	
	return main;
});