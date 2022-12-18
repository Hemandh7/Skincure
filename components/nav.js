let navbar = () => {
    return ` <div class="usd"></div>
    <hr>
    <div id="barpart">
      <div class="header">
        <div id="logodiv">
          <a id="taglogo" href=""
            ><img id="logoimg" src="images/image.png" alt=""
          /></a>
        </div>
        <div class="center" id="searchdiv">
          <div id="searchbox">
            <div id="searchbar">
              <a href=""><p>Search for a product or brand</p></a>

              <img src="images/navimg (3).png" alt="" />
            </div>
          </div>
        </div>
        <div class="width160 center" id="accountdiv">
          <div id="account" class="dropdown">
            <img
              src="images/navimg (4).png"
              alt=""
              trigger="hover"
              style="width: 20px; height: 20px"
            />
            <p>Account</p>
            <div class="dropdown-content">
              <a id="logindrop" href="">Login</a>
              <a id="register" href="">Register</a>
              <a class="operationdrop" href="">Wishlist</a>
              <a class="operationdrop" href="">Your Order</a>
              <a class="operationdrop" href="">Your Referal</a>
            </div>
          </div>
        </div>

        <div class="width160 center" id="cartdiv">
          <div id="cart">
            <img
              src="images/navimg (5).png"
              alt=""
              trigger="hover"
              style="width: 20px; height: 20px"
            />
            <!-- <p>Cart</p> -->
            <a href="">Cart</a>
          </div>
        </div>
      </div>
      <hr />
      <div class="dropbar">
        <div>Brands</div>
        <div>Holiday Gifts</div>
        <div>Sale</div>
        <div>Skin Care</div>
        <div>Hair</div>
        <div>MakeUp</div>
        <div>Bath&Body</div>
        <div>Fragrance</div>
        <div>Self-Care</div>
        <div>Tools</div>
        <div>New & Trending</div>
        <div>Build a Routine</div>
        <div>Blog</div>
      </div>
    </div>

    <div class="resnav">
      <div>
        <img src="images/navimg (6).png" alt="" />
        <a href=""><p>FREE US Shipping Over $49</p></a>
      </div>
      <div>
        <img src="images/navimg (7).png" alt="" />
        <a href=""><p>Refer a Friend, Get $15</p></a>
      </div>
      <div>
        <img src="images/navimg (1).png" alt="" />
        <a href=""><p>New Customers Save 20% - Use Code NEWBIE</p></a>
      </div>
      <div>
        <img src="images/navimg (2).png" alt="" />
        <a href=""><p>Download Our App</p></a>
      </div>
    </div>
    <div class="offer">
      <p>
        25% Off with code REPLAY+free Holiday Beauty Bag(Worth $170)@ $150+
        |SHOP NOW >
      </p>
    </div>`
};

export { navbar };