$(".//div[@id='Container']") {
	add_class("mw_holiday_laninding_page" )


	$(".//div[@id='Wrapper']") {
		# cleaning up
		remove("./div[@id='LayoutColumn1']");
		$("./div[@id='LayoutColumn2']") {
			attribute("class", "mw_inner_container")
		}

		# passbook button
		$(".//a[@type='application/vnd.apple.pkpass']") {
			add_class("mw_passbook_link mw_promo_grad1")
			move_to("..", "before")
		}

		# products
		$(".//img[contains(@class,'mce_add_custom')]/..") {
			wrap("div", class:"mw_product") {
				move_to("../..", "top")
			}
		}
		$(".//div[@class='BlockContent']") {
			insert_top("div", class:"mw_product_container") {
				move_here("../div[contains(@class,'mw_product')]")
			}
		}


		#social
		$(".//a[contains(@class, 'twitter-share')]") {

			add_class("mw_twitter mw_social")
			wrap("div", class:"mw_social_conainter") {
				insert_top("a", href:"#", class:"mw_fb mw_social", "facebook")
				insert_top("a", href:"#", class:"mw_gp mw_social", "googleplus")				
			}


		}
		
	}
}