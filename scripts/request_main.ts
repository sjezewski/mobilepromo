# Magic Paths
# 
# Re-route any path w the prefix '__custom__' to the upstream host that I choose
# 

### Magic Paths / Promo Config

$promo_hostname = "simplesurvey.parseapp.com"
$is_promo = "false"

replace(/(\w*?\s)(\/__promo__)([\/\w]*?)(\s.*?)\n/) {
  log("MATCH")
  log("[" + $1 + "]")
  log("[" + $2 + "]")
  log("[" + $3 + "]")
    $is_promo = "true"
    # Normalize the URL for the upstream request
  $path = $3

  match($path, "") {
    log("PATH IS BLANK")
    $path = "/"
  }

    set("$1" + $path + "$4\n")
#  }

}

match($is_promo, "true") {
  log("UPDATING HOST")

# This adds the host, but to the end ... and I get goofy results
#  remove_header("Host")
#  add_header("Host", $promo_hostname)

parse_headers() {
  %name = name()
    match(%name, /host/i) {
      value($promo_hostname)
    }
  }

}
