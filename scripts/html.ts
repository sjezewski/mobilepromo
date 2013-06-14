# HTML Transformations go here

$("/html") {
  rewrite_links()
  absolutize_srcs()

  remove_external_styles()
	remove_internal_styles()

  add_assets()

	$("./head") {
  	insert("meta", http-equiv: "Content-Type", content: "text/html")
    insert("meta", name: "viewport", content: "width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0")
    insert("meta", name: "format-detection", content: "telephone=no")		
  }

  @import sections/header.ts
  @import sections/footer.ts

  @import mappings.ts
$(".//div[@class='ProductActionAdd']"){
	remove()
}
}
