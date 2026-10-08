(() => {
  const script = document.currentScript;
  const root = script.dataset.root || "";
  const products = [
    {
      id: "cerita-hand-cream",
      name: "کرم دست و صورت سریتا",
      category: "آبرسان روزانه",
      image: "imgs/image.png",
      price: 239000,
      summary: "کرم سبک برای نرم‌شدن و حفظ رطوبت پوست دست و صورت.",
      description:
        "کرم دست و صورت سریتا برای استفاده روزانه طراحی شده است. بافت سبک آن به‌سرعت روی پوست پخش می‌شود و برای همراه‌داشتن در کیف روزمره مناسب است.",
      brand: "سریتا",
      volume: "۷۵ میلی‌لیتر",
      skin: "انواع پوست",
      use: "دست و صورت",
    },
    {
      id: "hydrating-serum",
      name: "سرم آبرسان هیالورونیک",
      category: "سرم صورت",
      image:
        "https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?w=700&auto=format&fit=crop&q=85",
      price: 485000,
      summary: "سرم سبک برای روتین آبرسانی صبح و شب.",
      description:
        "سرم آبرسان هانا با بافتی سبک، برای افزودن یک مرحله‌ی رطوبت‌رسان به روتین روزانه مناسب است. پیش از مرطوب‌کننده روی پوست تمیز استفاده شود.",
      brand: "هانا",
      volume: "۳۰ میلی‌لیتر",
      skin: "خشک و نرمال",
      use: "صبح و شب",
    },
    {
      id: "daily-sunscreen",
      name: "ضدآفتاب روزانه بی‌رنگ",
      category: "محافظت روزانه",
      image:
        "https://images.unsplash.com/photo-1556229010-6c3f2c9ca5f8?w=700&auto=format&fit=crop&q=85",
      price: 379000,
      summary: "محافظت روزانه با بافت سبک و بدون رنگ.",
      description:
        "ضدآفتاب بی‌رنگ هانا برای استفاده‌ی روزانه روی صورت عرضه شده است. برای محافظت پیوسته، مصرف را طبق دستور محصول و پس از تعریق یا شست‌وشو تمدید کنید.",
      brand: "هانا",
      volume: "۵۰ میلی‌لیتر",
      skin: "انواع پوست",
      use: "روزانه",
    },
    {
      id: "gentle-cleanser",
      name: "ژل شست‌وشوی ملایم صورت",
      category: "پاک‌سازی صورت",
      image:
        "https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?w=700&auto=format&fit=crop&q=85",
      price: 298000,
      summary: "پاک‌کننده‌ی روزانه برای شروع و پایان روتین پوست.",
      description:
        "ژل شست‌وشوی ملایم هانا برای پاک‌کردن آلودگی‌های روزانه از سطح پوست طراحی شده است. مقدار کمی از آن را روی پوست مرطوب ماساژ دهید و با آب بشویید.",
      brand: "هانا",
      volume: "۲۰۰ میلی‌لیتر",
      skin: "نرمال و مختلط",
      use: "صبح و شب",
    },
    {
      id: "daily-moisturizer",
      name: "کرم مرطوب‌کننده‌ی روزانه",
      category: "مرطوب‌کننده صورت",
      image:
        "https://images.unsplash.com/photo-1601049541289-9b1b7bbbfe19?w=700&auto=format&fit=crop&q=85",
      price: 329000,
      summary: "مرطوب‌کننده‌ی سبک برای تکمیل روتین مراقبت پوست.",
      description:
        "این مرطوب‌کننده برای حفظ نرمی پوست پس از شست‌وشو یا سرم آبرسان استفاده می‌شود. با حرکات ملایم روی صورت و گردن پخش کنید.",
      brand: "هانا",
      volume: "۵۰ میلی‌لیتر",
      skin: "نرمال و خشک",
      use: "صبح و شب",
    },
    {
      id: "rose-toner",
      name: "تونر گل رز آرام‌بخش",
      category: "تونر صورت",
      image:
        "https://images.unsplash.com/photo-1594035910387-fea47794261f?w=700&auto=format&fit=crop&q=85",
      price: 265000,
      summary: "مرحله‌ی تکمیلی پاک‌سازی با رایحه‌ی ملایم گل رز.",
      description:
        "تونر گل رز هانا پس از شست‌وشو و پیش از سرم یا مرطوب‌کننده در روتین قرار می‌گیرد. با پد یا کف دست تمیز روی صورت استفاده شود.",
      brand: "هانا",
      volume: "۱۵۰ میلی‌لیتر",
      skin: "نرمال و مختلط",
      use: "پس از شست‌وشو",
    },
  ];

  const escapeHtml = (value) =>
    String(value).replace(/[&<>"']/g, (character) => {
      const entities = {
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#39;",
      };
      return entities[character];
    });

  const formatPrice = (price) =>
    `${new Intl.NumberFormat("fa-IR").format(price)} تومان`;

  const cartStorageKey = "hana-cart-v1";
  const readCart = () => {
    try {
      const cart = JSON.parse(localStorage.getItem(cartStorageKey) || "[]");
      return Array.isArray(cart) ? cart : [];
    } catch {
      return [];
    }
  };
  const writeCart = (cart) => {
    try {
      localStorage.setItem(cartStorageKey, JSON.stringify(cart));
      return true;
    } catch {
      return false;
    }
  };
  const cartQuantity = (cart) =>
    cart.reduce(
      (total, item) => total + Math.max(0, Number(item.quantity) || 0),
      0,
    );
  const updateCartCount = () => {
    const quantity = cartQuantity(readCart());
    document.querySelectorAll(".cart-count").forEach((count) => {
      count.textContent = quantity
        ? `(${new Intl.NumberFormat("fa-IR").format(quantity)})`
        : "";
    });
  };
  const addToCart = (productId) => {
    const cart = readCart();
    const existingItem = cart.find((item) => item.id === productId);
    if (existingItem) {
      existingItem.quantity = (Number(existingItem.quantity) || 0) + 1;
    } else {
      cart.push({ id: productId, quantity: 1 });
    }
    return writeCart(cart);
  };

  const productUrl = (product) =>
    `${root}pages/nextpage.html?product=${encodeURIComponent(product.id)}`;

  const imageMarkup = (product, className = "") => {
    const imageUrl = /^https?:\/\//i.test(product.image)
      ? product.image
      : `${root}${product.image}`;
    return `
    <img class="${className}" src="${escapeHtml(imageUrl)}"
      alt="${escapeHtml(product.name)}" loading="lazy" />`;
  };

  const catalog = document.querySelector("#productbox");
  if (catalog) {
    catalog.innerHTML = products
      .map(
        (product) => `
          <article class="product-card">
            <a class="product-image-link" href="${productUrl(product)}" aria-label="مشاهده ${escapeHtml(product.name)}">
              ${imageMarkup(product)}
            </a>
            <p class="product-category">${escapeHtml(product.category)}</p>
            <a href="${productUrl(product)}">${escapeHtml(product.name)}</a>
            <p class="product-summary">${escapeHtml(product.summary)}</p>
            <p class="product-price">${formatPrice(product.price)}</p>
            <a class="product-action" href="${productUrl(product)}">مشاهده مشخصات</a>
          </article>`,
      )
      .join("");
  }

  const detail = document.querySelector("#product-detail");
  if (detail) {
    const requestedId = new URLSearchParams(window.location.search).get(
      "product",
    );
    const product =
      products.find((item) => item.id === requestedId) || products[0];
    const specs = [
      ["برند", product.brand],
      ["حجم", product.volume],
      ["نوع پوست", product.skin],
      ["زمان مصرف", product.use],
    ];

    document.title = `${product.name} | فروشگاه هانا`;
    detail.innerHTML = `
      <div class="product-detail-layout">
        <div class="product-detail-image">${imageMarkup(product)}</div>
        <div class="product-detail-copy">
          <p class="product-category">${escapeHtml(product.category)}</p>
          <h1>${escapeHtml(product.name)}</h1>
          <p class="product-description">${escapeHtml(product.description)}</p>
          <dl class="product-specs">
            ${specs
              .map(
                ([label, value]) => `
                  <div><dt>${label}</dt><dd>${escapeHtml(value)}</dd></div>`,
              )
              .join("")}
          </dl>
          <strong class="product-detail-price">${formatPrice(product.price)}</strong>
          <button class="product-action add-to-cart-button" type="button" data-product-id="${escapeHtml(product.id)}">ثبت سفارش و رفتن به سبد خرید</button>
        </div>
      </div>`;

    const related = document.querySelector("#related-products");
    if (related) {
      related.innerHTML = products
        .filter((item) => item.id !== product.id)
        .slice(0, 4)
        .map(
          (item) => `
            <a class="related-product-link" href="${productUrl(item)}">
              ${escapeHtml(item.name)}
            </a>`,
        )
        .join("");
    }
  }

  const cartContent = document.querySelector("#cart-content");
  const renderCart = () => {
    if (!cartContent) return;

    const cart = readCart()
      .map((item) => ({
        product: products.find((product) => product.id === item.id),
        quantity: Math.max(1, Number(item.quantity) || 1),
      }))
      .filter((item) => item.product);

    if (!cart.length) {
      cartContent.innerHTML = `
        <section class="cart-empty">
          <span class="cart-empty-mark" aria-hidden="true">+</span>
          <h2>سبد خریدت خالی است</h2>
          <p>برای شروع، محصولات مراقبت پوست را ببین.</p>
          <a class="cart-checkout" href="${root}pages/product.html">رفتن به فروشگاه</a>
        </section>`;
      updateCartCount();
      return;
    }

    const subtotal = cart.reduce(
      (total, item) => total + item.product.price * item.quantity,
      0,
    );

    cartContent.innerHTML = `
      <div class="cart-layout">
        <section class="cart-items" aria-label="محصولات انتخاب‌شده">
          ${cart
            .map(
              ({ product, quantity }) => `
                <article class="cart-item" data-cart-item="${escapeHtml(product.id)}">
                  <a class="cart-item-image" href="${productUrl(product)}">
                    ${imageMarkup(product)}
                  </a>
                  <div class="cart-item-info">
                    <p class="product-category">${escapeHtml(product.category)}</p>
                    <h2><a href="${productUrl(product)}">${escapeHtml(product.name)}</a></h2>
                    <p class="cart-item-volume">${escapeHtml(product.volume)}</p>
                    <button class="cart-remove" type="button" data-remove="${escapeHtml(product.id)}">حذف</button>
                  </div>
                  <div class="cart-item-controls">
                    <strong>${formatPrice(product.price)}</strong>
                    <div class="quantity-control" aria-label="تعداد ${escapeHtml(product.name)}">
                      <button type="button" data-quantity-change="1" data-product-id="${escapeHtml(product.id)}" aria-label="افزایش تعداد">+</button>
                      <span>${new Intl.NumberFormat("fa-IR").format(quantity)}</span>
                      <button type="button" data-quantity-change="-1" data-product-id="${escapeHtml(product.id)}" aria-label="کاهش تعداد">−</button>
                    </div>
                  </div>
                </article>`,
            )
            .join("")}
        </section>
        <aside class="cart-summary">
          <h2>خلاصه‌ی سفارش</h2>
          <p><span>تعداد کالا</span><strong>${new Intl.NumberFormat("fa-IR").format(cartQuantity(cart))}</strong></p>
          <p class="cart-total"><span>جمع کل</span><strong>${formatPrice(subtotal)}</strong></p>
          <a class="cart-checkout" href="${root}pages/contactus.html">تکمیل سفارش</a>
          <small>هزینه‌ی ارسال پس از هماهنگی اعلام می‌شود.</small>
        </aside>
      </div>`;

    updateCartCount();
  };

  document.addEventListener("click", (event) => {
    const addButton = event.target.closest(".add-to-cart-button");
    if (addButton) {
      if (addToCart(addButton.dataset.productId)) {
        window.location.href = `${root}pages/cart.html`;
      } else {
        addButton.textContent = "ذخیره‌ی سبد ممکن نشد";
      }
      return;
    }

    const quantityButton = event.target.closest("[data-quantity-change]");
    if (quantityButton) {
      const cart = readCart();
      const item = cart.find(
        (entry) => entry.id === quantityButton.dataset.productId,
      );
      if (item) {
        item.quantity =
          (Number(item.quantity) || 1) +
          Number(quantityButton.dataset.quantityChange);
        writeCart(cart.filter((entry) => entry.quantity > 0));
        renderCart();
      }
      return;
    }

    const removeButton = event.target.closest("[data-remove]");
    if (removeButton) {
      writeCart(
        readCart().filter((item) => item.id !== removeButton.dataset.remove),
      );
      renderCart();
    }
  });

  updateCartCount();
  renderCart();

  document
    .querySelectorAll(".product-card img, .product-detail-image img")
    .forEach((image) => {
      image.addEventListener("error", () => {
        const placeholder = document.createElement("div");
        placeholder.className = "image-unavailable";
        placeholder.textContent = "تصویر محصول در دسترس نیست";
        image.replaceWith(placeholder);
      });
    });
})();
