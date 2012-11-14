$("./head") {
  #insert_coupon_applier("javascript/cart.js")
}
$("./body") {
	add_class("mw_cart")
	
	$("./div[@id='Container']") {
		$("./div[@id='Outer']") {
			$("./div[@id='Wrapper']") {
				$("./div[@class='Content']") {

					$("./div[@id='CartHeader']") {
						$("./h2") {
							$("./span") {
								$("./a") {
									$("./img") {
										attribute("src", asset("images/ProceedToCheckout.png"))
									}
								}
							}
						}
					}

					$("./div[@id='CartContent']") {
						$("./div[@class='BlockContent']") {
						  
						  # When the cart is empty, this empty tag is appearing incorrectly due to CSS
						  $("./div[@class='KeepShopping FloatRight']") {
						    %content = fetch("a/text()")
						    match(%content, "") {
						      attribute("mw_class", "hide")
						    }
						  }
						  
							$("./div") {
								
								# Move right column in middle area under product table
								move_here("../../../../div[@class='Right']/div", "bottom")
								
								# Move checkout buttons under Coupon/Certificate widget
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
										  attribute("id", "mw_cart_items")
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

									$("./div[@class='FloatLeft']") {
										$("./input") {
											# Change background image of "Update Quanity" button
											attribute("src", asset("images/UpdateQuanity.png"))
										}
									}									

								}
								
								$("./div[@class='ProceedToCheckout']") {
									$("./div[@class='CheckoutButton']") {
										$("./a") {
											$("./img") {
												# Change background image of "Proceed To Checkout" button
												attribute("src", asset("images/ProceedToCheckout.png"))
											}
										}
									}
								}
								
								$("./div[@id='SideCouponCodeBox']") {
									$("./div[@class='BlockContent']") {
										$("./form") {
											$("./div") {
												$("./input[@type='image']") {
													attribute("src", asset("images/go_btn.png"))
												}
											}
										}
									}
								}
								$("./div[@id='SideGiftCertificateCodeBox']") {
									$("./div[@class='BlockContent']") {
										$("./form") {
											$("./div") {
												$("./input[@type='image']") {
													attribute("src", asset("images/go_btn.png"))
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