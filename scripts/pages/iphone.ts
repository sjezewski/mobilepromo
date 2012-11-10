$("./body") {
	add_class("mw_iphone")
	
	$("./div[@id='Container']") {
 		$("./div[@id='Outer']") {
			$("./div[@id='Wrapper']") {
				
				$("./div[@class='Left']") {
					$("./div[@id='SideCategoryShopByPrice']") {
						# Toggler container
						attribute("data-ur-set", "toggler")
						
						# Toggler button
						$("./h2") {
							attribute("data-ur-toggler-component", "button")
						}
						
						# Toggler content
						$("./div") {
							attribute("data-ur-toggler-component", "content")
						}
						
						
					}
				}
				
				$("./div[@class='Content ']") {
					$("./div[@id='CategoryHeading']") {
						$("./div[@class='BlockContent']") {
							
							# Move page title on top of the content area
							$("./h2") {
								move_to("../../../../div[@class='Left']", "top")
							}	

							

							$("./div[@class='FloatRight SortBox']") {
								attribute("data-ur-set", "select-list")
								
								$("./form") {
									$("./select") {
										attribute("data-ur-select-list-component", "select")
									}
								}
								
								insert_top("ul", data-ur-select-list-component: "content"){
									insert("li", value: "featured", "Featured Items")
									insert("li", value: "newest", "Newest Items")
									insert("li", value: "bestselling", "Bestselling")
									insert("li", value: "alphaasc", "Alphabetical: A to Z")
									insert("li", value: "alphadesc", "Alphabetical: Z to A")
									insert("li", value: "avgcustomerreview", "Avg. Customer Review")
									insert("li", value: "priceasc", "Price: Low to High")
									insert("li", value: "pricedesc", "Price: High to Low")							
								}
							}
						
						}
					}
				}
				
			}
		}
	}
	
}