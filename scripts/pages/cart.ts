$("./body") {
	add_class("mw_cart")
	
	$("./div[@id='Container']") {
		$("./div[@id='Outer']") {
			$("./div[@id='Wrapper']") {
				$("./div[@class='Content']") {
					$("./div[@id='CartContent']") {
						$("./div[@class='BlockContent']") {
							$("./div") {
								
								move_here("../../../../div[@class='Right']/div", "bottom")
								
								$("./div[@class='ProceedToCheckout']") {
									move_to("..", "bottom")
								}
								
								$("./form") {
									
									# Transform <table> elements into <div> elements
									table_dump("./table"){
										
										# Add ID attribute
										attribute("id", "mw_items")
										
										# Remove table header
										$("./div[1]") {
											remove()
										}
										
										$("./div[@class=' mw_was_tfoot']") {
											# Move total prices under product details
											move_to("..", "bottom")
										}
										
										$("./div[@class=' mw_was_tbody']") {
											$("./div") {
												
												$("./div[contains(@class, 'CartItemIndividualPrice')]") {
													
													# Wrap text children into <span> tag
													wrap_text_children("span", class: "mw_item_price")
													
													# Insert <span> tag with "Item Price" text inside
													insert_top("span", class: "mw_item_label", "Item Price:")
												}
												
												$("./div[contains(@class, 'CartItemTotalPrice')]") {
													
													# Wrap text children into <span> tag
													wrap_text_children("span", class: "mw_total_price")
													
													# Insert <span> tag with "Item Total" text inside
													insert_top("span", class: "mw_total_label", "Item Total: ")
													
												}
												
											}
										}
										
									}									

								}
							}
						}
					}
				}
			}
		}
	}
}