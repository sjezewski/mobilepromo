/*
  Mappings

  Mappings are matchers that we use to determine if we should execute a
  bit of Tritium during an execution. Aka, run something when we are
  are on a certain page.

  Example starting code:
*/

log("IS PROMO?" + $is_promo)

match($status) {

  with(/302/) {
    log("--> STATUS: 302") # redirect: just let it go through
    match($is_promo, "true") {
      log("Location:" + $location)
      log("magic:" + magic_passthrough($location))
      export("Location", magic_passthrough($location))
    }

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
      with(/holiday-landing-page/) {
        @import pages/landing.ts
      }
      else() {
        log("--> No page match in mappings.ts")
      }
    }

    match($is_promo) {
      @import pages/promo.ts
    }
		
  }

  else() {
    # not 200 or 302 response status
    log("--> STATUS: " + $status + " assuming its an error code pages/error.ts")
    @import pages/error.ts
  }

}
