/*
  Mappings

  Mappings are matchers that we use to determine if we should execute a
  bit of Tritium during an execution. Aka, run something when we are
  are on a certain page.

  Example starting code:
*/

match($status) {

  with(/302/) {
    log("--> STATUS: 302") # redirect: just let it go through
  }

  with(/200/) {
    log("--> STATUS: 200")

    match($path) {
			$("//div[@id='ProductDetails']/ancestor::html") {
				log("------------------ I've mapped product ---------------")
				# add_class("mw_testing")
				@import pages/headphones.ts
			}
      with(/^\/$|^\/\?/) {
        log("--> Importing pages/home.ts in mappings.ts")
        @import pages/home.ts
      }
			with(/cart/) {
				@import pages/cart.ts
			}
			with(/checkout/) {
				@import pages/checkout.ts
			}
			# with(/headphones/) {
			# 	@import pages/headphones.ts
			# }
			with(/shop-/) {
				@import pages/iphone.ts
			}
      else() {
        log("--> No page match in mappings.ts")
      }
    }


		
  }

  else() {
    # not 200 or 302 response status
    log("--> STATUS: " + $status + " assuming its an error code pages/error.ts")
    @import pages/error.ts
  }

}
