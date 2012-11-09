$("./body") {
	$("./div[@id='Footer']") {

		$("./p") {
			name("div")
					
			# Wrap text child into span tag
			wrap_text_children("span")

			# Insert placeholders
			insert("div", class: "mw_currency")
			insert("div", class: "mw_copy")
			insert("div", class: "mw_moovweb")

			# Move and inser elements to appropriate placeholder
			$("./div[@class='mw_currency']") {
				move_here("../span[position() < 3]", "bottom")
			}
			$("./div[@class='mw_copy']") {
				insert("span", "Copyright 2012 iGadgetCommerce.")
			}
			$("./div[@class='mw_moovweb']") {
				insert("span", class: "mw_powered", "powered by:")
				insert("img", src: asset("images/moovweb.png"))
			}			
			
			$("./*[not(self::div)]") {
				remove()
			}			
											
		}
		
		
		
		
	}
}
