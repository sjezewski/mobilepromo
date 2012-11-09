# HTML Transformations go here

$("/html") {
  rewrite_links()
  absolutize_srcs()

  remove_external_styles()
	remove_internal_styles()

  add_assets()

  @import sections/header.ts
  @import sections/footer.ts

  @import mappings.ts
}

