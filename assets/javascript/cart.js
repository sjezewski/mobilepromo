window.addEventListener("DOMContentLoaded", function() {
  // If the cart contains at least one item
  if (document.getElementById("mw_cart_items").children.length >= 1) {
    var hasCouponCode = (-1 != document.body.innerText.indexOf("EAN97D1W0")); // Tests if the CouponCode already exists (true/false)
    // And the CouponCode has not already been applied
    if(!hasCouponCode) {
      // Then apply it by filling in the form and submitting
      var coupon = document.getElementById("couponcode");
      coupon.value = "EAN97D1W0";
      coupon.form.submit();
    }
  }
}, false);