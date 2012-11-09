$('./body') {
 	$("./div[@id='Container']") {
 		$("./div[@id='Outer']") {
 			$("./div[@id='Header']") {
 				$("./div[@id='Logo']") {
 					
					# Move #TopMenu into #Logo
					move_here("../../../div[@id='TopMenu']", "bottom"){
						$("./ul") {
							# Remove unwanted menu items
							$("./li[position() = 1 or position() > 2 and not(position()=last()-1)]") {
								remove()
							}			
						}
					}

 				}
 			}
 		}
 	}
}