log("PROMO")

# Relative links need the magic prefix

$$(".mw_relative") {
  attribute("href") {
    value(magic_passthrough(value()))
  }
  attribute("action") {
    value(magic_passthrough(value()))
#    value("//" + $host + "/__promo__" + value())
  }


}