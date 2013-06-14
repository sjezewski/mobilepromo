log("PROMO")

$("/html/body") {
  add_class("mw_promo")

  match($path) {
    with(/submission\/new/) {
      add_class("submission")
    }
    with(/survey\/new/) {
      add_class("survey")
    }
    with(/promo\/complete/) {
      add_class("promo")
    }
  }

}

# Relative links need the magic prefix

$$(".mw_relative") {
  # TODO: Figure out automated way to detect relative links so I don't need to specify them

  attribute("href") {
    value(magic_passthrough(value()))
  }
  attribute("action") {
    value(magic_passthrough(value()))
  }
}
