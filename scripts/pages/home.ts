$("./body") {
	add_class("mw_home")
	
	$(".//div[@class='mw_mobile_menu']") {
	  insert_after("div", class: "mw_banner"){
  		# move promo banner here
  		move_here("//div[@id='mobile_banner']", "bottom"){
  		attribute("style", "")
  		}
  	}
	}
	
}