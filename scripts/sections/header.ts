$('./body') {
 	$("./div[@id='Container']") {
 		$("./div[@id='Outer']") {
 			$("./div[@id='Header']") {
				# Toggler container
				attribute("data-ur-set", "toggler")
				
 				$("./div[@id='Logo']") {
 					
					# Move #TopMenu into #Logo
					move_here("../../../div[@id='TopMenu']", "bottom"){
						$("./ul") {
							# Remove unwanted menu items
							$("./li[position() = 1 or position() > 2 and not(position()=last()-1)]") {
								remove()
							}			
						}
					}

					# Insert Menu and Search
					insert_bottom("div", class: "mw_mobile_menu"){						
						insert("div", class: "mw_menu_btn"){
							# Toggler button
							attribute("data-ur-toggler-component", "button")
							insert("span", "Menu")
						}
						insert("div", class: "mw_search"){
							# Move search form to mobile menu
							move_here("../../../div[@id='SearchForm']", "bottom"){
								# Removal of unwanted content 
								$("./p") {
									remove()
								}
								$("./form") {
									$("./label") {
										remove()
									}
									# Set search button background image
									$("./input[@type='image']") {
										attribute("src", asset("images/search.png"))
									}
								}
							}
						}						
					}				
					
 				}												

				$("./br") {
					remove()
				}
				
				# Move menu items into #Header
				move_here("../div[@id='Menu']", "bottom"){
					attribute("data-ur-toggler-component", "content")
					move_here("../../div[@id='Wrapper']/div[@class='Left']/div[@id='SideCategoryList']", "bottom")
				}
				
 			}
 		}
 	}
}