$('./body') {
 	$("./div[@id='Container']") {
 		$("./div[@id='Outer']") {
 			$("./div[@id='Header']") {
	
				# Declare toggler container
				attribute("data-ur-set", "toggler")
				
 				$("./div[@id='Logo']") {
 					
					# Move top menu into #Logo container
					move_here("../../../div[@id='TopMenu']", "bottom"){
						
						$("./ul") {
							
							# Remove unwanted top menu items from upper menu
							$("./li[position() = 1 or position() > 2 and not(position()=last()-1)]") {
								remove()
							}			
							
						}
					}

					# Process Menu and Search form
					insert_bottom("div", class: "mw_mobile_menu"){						
						
						# Insert container element for menu button
						insert_bottom("div", class: "mw_menu_btn"){
							
							# Declare toggler button which enable/disable toggler content
							attribute("data-ur-toggler-component", "button")
							
							# Insert inner text of menu button
							insert("span", "Menu")
							
						}
						
						# Insert container element for search form
						insert_top("div", class: "mw_search"){
							
							# Move search form into container element
							move_here("../../../div[@id='SearchForm']", "bottom"){
							
								# Removal of unwanted content from search form
								$("./p") {
									remove()
								}
								$("./form") {
									$("./label") {
										remove()
									}
									
									# Change search button background image
									$("./input[@type='image']") {
										attribute("src", asset("images/search.png"))
									}
									
									$("./input[@type='text']") {
										attribute("placeholder", "Search…")
									}	
								}			
							}
						}						
					}
/*					insert("div", class: "mw_banner"){
					# move promo banner here
						move_here("//div[@id='mobile_banner']", "bottom"){
						attribute("style", "")
						}
					}	*/			
					
 				}												

				# Remove br tag
				$("./br") {
					remove()
				}
				
				# Move menu items into #Header
				move_here("../div[@id='Menu']", "bottom"){
					
					# Declare toggler content element which is enabled/diabled by toggler button
					attribute("data-ur-toggler-component", "content")
					
					# Move "Category List" element on bottom of #Menu element
					move_here("../../div[@id='Wrapper']/div[@class='Left']/div[@id='SideCategoryList']", "bottom")
					
				}
				
 			}
 		}
 	}
}