(() => {
  const script = document.currentScript;
  const root = script.dataset.root || "";
  const page = window.location.pathname.split("/").pop() || "index.html";
  const header = document.querySelector("#site-header");
  const footer = document.querySelector("#site-footer");
  const currentPage = (name) => (page === name ? ' aria-current="page"' : "");

  if (header) {
    header.innerHTML = `
      <nav aria-label="منوی اصلی">
        <div class="navbar">
          <p><a class="brand-link" href="${root}index.html">فروشگاه اینترنتی هانا</a></p>
          <input type="search" name="searchBox" id="searchBox" placeholder="محصولتو پیدا کن" aria-label="جست‌وجو در محصولات" />
          <button type="button" id="singin">ورود/ثبت نام</button>
          <div class="nav-items">
            <a href="${root}index.html"${currentPage("index.html")}>خانه</a>
            <a href="${root}index.html#footer-logo">درباره ما</a>
            <a href="${root}pages/product.html"${currentPage("product.html") || currentPage("nextpage.html")}>محصولات</a>
            <a href="${root}pages/contactus.html"${currentPage("contactus.html")}>ارتباط با ما</a>
          </div>
          <div id="buycontant">
            <a id="buy" href="${root}pages/cart.html">سبد خرید <span class="cart-count" aria-live="polite"></span></a>
          </div>
        </div>
      </nav>`;
  }

  if (footer) {
    footer.innerHTML = `
      <div id="footer-logo">
        <h2>فروشگاه اینترنتی هانا</h2>
        <p>فروشگاه هانا، همراه شما برای انتخاب محصولاتی که هر روز به آن‌ها نیاز دارید.</p>
        <div id="footer-link">
          <a href="${root}pages/contactus.html" aria-label="نشانی فروشگاه">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"/><path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"/></svg>
          </a>
          <a href="${root}pages/contactus.html" aria-label="تماس با فروشگاه">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"/></svg>
          </a>
          <a href="${root}pages/contactus.html" aria-label="پیام به فروشگاه">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M12 20.25c4.97 0 9-3.694 9-8.25s-4.03-8.25-9-8.25S3 7.444 3 12c0 2.104.859 4.023 2.273 5.48.432.447.74 1.04.586 1.641a4.483 4.483 0 0 1-.923 1.785A5.969 5.969 0 0 0 6 21c1.282 0 2.47-.402 3.445-1.087.81.22 1.668.337 2.555.337Z"/></svg>
          </a>
        </div>
      </div>
      <div id="footer-none">
        <h5>خدمات مشتریان</h5>
        <ul>
          <li><a href="${root}pages/contactus.html">فروش حضوری</a></li>
          <li><a href="${root}pages/product.html">تخفیفات هفتگی</a></li>
          <li><a href="${root}pages/contactus.html">شخصی‌سازی مدل</a></li>
          <li><a href="${root}pages/contactus.html">پیگیری سفارشات</a></li>
        </ul>
      </div>
      <div id="footer-nav">
        <h5>منوی اصلی</h5>
        <ul>
          <li><a href="${root}index.html">خانه</a></li>
          <li><a href="${root}index.html#footer-logo">درباره ما</a></li>
          <li><a href="${root}pages/product.html">محصولات</a></li>
          <li><a href="${root}pages/contactus.html">تماس با ما</a></li>
        </ul>
      </div>`;
  }
})();
