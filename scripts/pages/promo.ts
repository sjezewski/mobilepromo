log("PROMO")

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