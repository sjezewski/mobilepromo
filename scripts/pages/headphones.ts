$("./body") {
	add_class("mw_headphones")
	
	$("./div[@id='Container']") {
		$("./div[@id='Outer']") {
			$("./div[@id='Wrapper']") {
				$("./div[@class='Content']") {
					
					$("./div[@id='ProductDetails']") {
						$("./div[@class='BlockContent']") {
							$("./div[@class='ProductMain']") {
								$("./div[@class='productAddToCartRight']") {
									$("./form") {
										$("./div[@class='ProductDetailsGrid ProductAddToCart']") {
											$("./div[@class='DetailRow']") {
												$("./div[@class='Value AddCartButton']") {
													$("./div[@class='BulkDiscount']") {
														$("./input") {
															# Change "Add to Cart" button background image
															attribute("src", asset("images/AddCartButton.png"))
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
					
					$("./div[@id='ProductReviews']") {
						
						$("./a") {
							# Move "Write a Review" button under product reviews content
							move_to("..", "bottom")
							$("./img") {
								# Change "Write a Review" button background image
								attribute("src", asset("images/WriteReview.png"))
							}
						}			
						$("./div[@class='BlockContent']") {
							$("./form") {
								# Move review form under product reviews content
								move_to("..", "bottom")
								
								$("./div") {
									$("./dl") {
										$("./dd") {
											
											$("./textarea") {
												# Shrink textare width to 35 columns
												attribute("cols", "35")
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