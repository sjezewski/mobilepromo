$("./body") {
	add_class("mw_checkout")
	

	$(".//div[@class='OrderContents']") {
		# Transform whole <table> tag into <div> tag
		table_dump("./table")
		$("./div[contains(@class, 'CartContents')]") {
			$("./div[@data-mw-id='mw_dump_tfoot7']") {
				# Move table content on bottom of container
				move_to("..", "bottom")				
			}
			$("./div[@class=' mw_was_tbody']") {
				$("./div[@class=' mw_was_tr']") {
					$("./div[2]") {
						wrap_text_children("span", class: "mw_value")
						insert_top("span", class: "mw_label", "Qty: ")
					}
					$("./div[3]") {
						wrap_text_children("span", class: "mw_value")
						insert_top("span", class: "mw_label", "Item Price: ")
					}
					$("./div[4]") {
						wrap_text_children("span", class: "mw_value")
						insert_top("span", class: "mw_label", "Total Price: ")
					}
				}
			}
		}
	}

	$(".//input[@id='bottom_payment_button']") {
		attribute("src", asset("images/ProceedToPayment.png"))
	}
}