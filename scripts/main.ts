# The main file executed by Tritium. The start of all other files.
match($method) {

	with(/POST/) {
	log("---------------------> Has a post <-----------------------")

		match($path) {
			with(/cart\.php/) {
				log("---------------------> Processing cart.php <-----------------------")
				
				# Modify links that are imported with AJAX to point to mobile version of website
				replace('www.igadgetcommerce', 'mlocal.igadgetcommerce')			
			}
		}
		
	}
	
}


match($content_type) {
  with(/html/) {
    replace(/fb:/, "fbn_") # Rewrite the xmlns facebook nodes before the html parser clobbers them
    
    # Force UTF-8 encoding. If you'd like to auto-detect the encoding,
    # simply remove the "UTF-8" argument.  e.g. html(){ ... }
    html("UTF-8") {
      
      @import html.ts
    }

    replace(/fbn_/, "fb:") # Rewrite the xmlns facebook nodes to restore them
  }
  # with(/javascript/) {
  #   @import ajax.ts
  # }
  else() {
    log(concat("Passing through ", $content_type, " unmodified"))
  }
}
