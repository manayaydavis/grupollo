// ================================================================
// 4. SHOPPING CART (INTEGRADO CON SISTEMA DE SELECCIÓN PREVIA)
// ================================================================

let cart = JSON.parse(localStorage.getItem("grupolloCart")) || [];

const container = document.getElementById("toastContainer");
const cartModal = document.getElementById("cartModal");
const cartOverlay = document.getElementById("cartOverlay");
const cartBtn = document.getElementById("cartBtn");
const closeCartBtns = document.querySelectorAll(".close-cart");
const cartItemsContainer = document.getElementById("cartItems");
const cartTotalElement = document.getElementById("cartTotal");
const cartCountElements = document.querySelectorAll(".cart-count");
const waCartBtn = document.getElementById("waCartBtn");

const branches = [
  {
    id: "cuajimalpa",
    name: "Cuajimalpa",
    address: "Av. Jesús del Monte 100, Adolfo López Mateos, 05260",
    phone: "55 63 49 94 51",
  },
  {
    id: "sanbernabe",
    name: "San Bernabé",
    address:
      "Av. Guerrero 40, San Bernabé Ocotepec, La Magdalena Contreras, 10300",
    phone: "55 3614 3307",
  },
  {
    id: "tacubaya",
    name: "Tacubaya",
    address: "Héroes de 1810, Tacubaya, Miguel Hidalgo, 11870 CDMX",
    phone: "55 36 14 30 37",
  },
  {
    id: "pedregal",
    name: "Pedregal",
    address:
      "Carretera federal a cuernavaca #5857 bis San Andrés Totoltepec Tlalpan CDMX C.P 14400",
    phone: "56 10 30 98 49",
  },
  {
    id: "sanpedro",
    name: "San Pedro Mártir",
    address:
      "Carr. Federal A Cuernavaca 5857, San Pedro Mártir, Tlalpan, 14659 Ciudad de México, CDMX",
    phone: "55 69 66 68 83",
  },
];

let selectedBranchId = null;

function showToast(message, type = "success") {
  if (!container) return;
  const toast = document.createElement("div");
  const bgColor = type === "success" ? "bg-[#4A2C10]" : "bg-[#D15E1D]";
  const icon =
    type === "success"
      ? '<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" /></svg>'
      : '<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clip-rule="evenodd" /></svg>';

  toast.className = `toast ${bgColor} text-white px-5 py-3 rounded-2xl shadow-xl flex items-center gap-3 max-w-sm`;
  toast.innerHTML = `${icon}<span class="text-sm font-semibold">${message}</span>`;

  container.appendChild(toast);
  console.log(toast, "toast");

  // Auto remove
  setTimeout(() => {
    toast.classList.add("hide");
    setTimeout(() => toast.remove(), 300);
  }, 3500);
}

function renderBranches() {
  const list = document.getElementById("branchList");
  if (!list) return;
  list.innerHTML = "";

  branches.forEach((b) => {
    const card = document.createElement("div");
    card.id = "branch-card-" + b.id;
    card.className = "branch-card";
    card.innerHTML = `
      <div class="branch-dot" id="branch-dot-${b.id}"></div>
      <div>
        <p class="branch-name">${b.name}</p>
        <p class="branch-phone">📞 ${b.phone}</p>
      </div>
    `;
    card.addEventListener("click", () => selectBranch(b.id));
    list.appendChild(card);
  });
}

function selectBranch(id) {
  selectedBranchId = id;
  const err = document.getElementById("branchError");
  if (err) err.classList.add("hidden");

  branches.forEach((b) => {
    const card = document.getElementById("branch-card-" + b.id);
    if (b.id === id) {
      card.classList.add("selected");
    } else {
      card.classList.remove("selected");
    }
  });
}

function openCart() {
  if (!cartOverlay || !cartModal) return;
  document.body.classList.add("cart-open");
  cartOverlay.classList.remove("hidden");
  requestAnimationFrame(() => {
    cartOverlay.classList.remove("opacity-0");
    cartModal.classList.remove("translate-x-full");
  });
}

function closeCart() {
  if (!cartOverlay || !cartModal) return;
  cartModal.classList.add("translate-x-full");
  cartOverlay.classList.add("opacity-0");
  setTimeout(() => {
    cartOverlay.classList.add("hidden");
    document.body.classList.remove("cart-open");
  }, 300);
}

if (cartBtn) cartBtn.addEventListener("click", openCart);
closeCartBtns.forEach((btn) => btn.addEventListener("click", closeCart));
if (cartOverlay) cartOverlay.addEventListener("click", closeCart);

// Add to cart buttons

function addCart(e, btn) {
  const target = e.currentTarget;
  const id = target.dataset.id;
  const name = target.dataset.name;
  const price = parseFloat(target.dataset.price);

  // Button pop animation
  gsap.to(target, { scale: 0.85, duration: 0.1, yoyo: true, repeat: 1 });

  let padre = btn.parentNode;
  let cantidadInput = padre.querySelector("input");
  if (!cantidadInput) return;
  let cantidad = parseInt(cantidadInput.value);

  addItemToCart(id, name, price, cantidad);

  // Show toast
  showToast(`${name} agregado al pedido`, "success");

  // Bounce cart icon
  if (cartBtn) {
    gsap.fromTo(
      cartBtn,
      { scale: 1 },
      {
        scale: 1.4,
        duration: 0.2,
        yoyo: true,
        repeat: 1,
        ease: "back.out(3)",
      },
    );
  }
}
function botonesAddToCart() {
  document.querySelectorAll(".add-to-cart").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      addCart(e, btn);
    });
  });
}

function saveCart() {
  localStorage.setItem("grupolloCart", JSON.stringify(cart));
}

function addItemToCart(id, name, price, quantity = 1) {
  const existing = cart.find((item) => item.id === id);
  if (existing) {
    existing.quantity += quantity;
  } else {
    cart.push({ id, name, price, quantity: quantity });
  }
  saveCart();
  updateCartUI();
}

function removeItemFromCart(id) {
  cart = cart.filter((item) => item.id !== id);
  saveCart();
  updateCartUI();
}

function updateQuantity(id, delta, btn = null) {
  const item = cart.find((item) => item.id === id);
  if (item) {
    item.quantity += delta;
    if (item.quantity <= 0) {
      removeItemFromCart(id);
    } else {
      saveCart();
      updateCartUI();
    }
    return;
  }
  if (!btn) return;
  const name = btn.dataset.name;
  const price = parseFloat(btn.dataset.price);

  addItemToCart(id, name, price, delta);
}

function updateCartUI() {
  if (!cartItemsContainer || !cartTotalElement) return;

  cartItemsContainer.innerHTML = "";
  let total = 0;
  let count = 0;

  // Get discount from current user
  const currentUser = JSON.parse(localStorage.getItem("grupolloCurrentUser"));
  const discountPercent =
    currentUser && currentUser.discount ? currentUser.discount : 0;

  if (cart.length === 0) {
    cartItemsContainer.innerHTML = `
             <div class="text-center mt-20">
                 <div class="text-7xl mb-6">🍗</div>
                 <p class="text-brandBlack font-black text-2xl uppercase tracking-tighter">Tu carrito está vacío</p>
                 <p class="text-[#6B7280] text-lg mt-2">¡El mejor pollo te está esperando!</p>
             </div>`;
  } else {
    cart.forEach((item) => {
      total += item.price * item.quantity;
      count += item.quantity;

      const el = document.createElement("div");
      el.className =
        "cart-item bg-gradient-to-r from-white to-[#FFF4D2] p-5 rounded-3xl mb-4 shadow-md border-2 border-[#F2B50F]/50 hover:border-[#E31E24] transition-all";
      el.innerHTML = `
                 <div class="flex justify-between items-start mb-3">
                     <div class="flex-1">
                         <h4 class="font-black text-brandBlack text-lg uppercase tracking-tight">${item.name}</h4>
                         <p class="text-sm text-[#2B2B2B] mt-1">${item.quantity} x $${item.price.toFixed(2)}</p>
                     </div>
                     <button class="text-[#9CA3AF] hover:text-brandRed transition-colors remove-item" data-id="${item.id}">
                         <svg xmlns="http://www.w3.org/2000/svg" class="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5"><path stroke-linecap="round" stroke-linejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" /></svg>
                     </button>
                 </div>
                 <div class="flex justify-between items-center">
                     <p class="text-brandRed font-black text-xl">$${(item.price * item.quantity).toFixed(2)}</p>
                     <div class="flex items-center gap-3 bg-white p-1 rounded-full shadow-inner border-2 border-[#F2B50F]">
                         <button class="w-10 h-10 rounded-full bg-[#FFF4D2] text-brandBlack font-black flex items-center justify-center hover:bg-[#111111] hover:text-[#F2B50F] transition-colors qty-minus" data-id="${item.id}">−</button>
                         <span class="font-black text-brandBlack w-8 text-center text-lg">${item.quantity}</span>
                         <button class="w-10 h-10 rounded-full bg-[#FFF4D2] text-brandBlack font-black flex items-center justify-center hover:bg-[#111111] hover:text-[#F2B50F] transition-colors qty-plus" data-id="${item.id}">+</button>
                     </div>
                 </div>
             `;
      cartItemsContainer.appendChild(el);
    });

    // Bind cart item buttons
    cartItemsContainer.querySelectorAll(".remove-item").forEach((btn) => {
      btn.addEventListener("click", () => removeItemFromCart(btn.dataset.id));
    });
    cartItemsContainer.querySelectorAll(".qty-minus").forEach((btn) => {
      btn.addEventListener("click", () => updateQuantity(btn.dataset.id, -1));
    });
    cartItemsContainer.querySelectorAll(".qty-plus").forEach((btn) => {
      btn.addEventListener("click", () => updateQuantity(btn.dataset.id, 1));
    });
  }

  // Calculate totals with discount
  const subtotal = total;
  const discountAmount = subtotal * (discountPercent / 100);
  const finalTotal = subtotal - discountAmount;

  // Update cart badge
  cartCountElements.forEach((el) => {
    if (count > 0) {
      el.textContent = count;
      el.classList.remove("hidden");
    } else {
      el.classList.add("hidden");
    }
  });

  // Update cart subtotal
  const subtotalEl = document.getElementById("cartSubtotal");
  if (subtotalEl) subtotalEl.textContent = `$${subtotal.toFixed(2)}`;

  // Update discount display
  const discountDisplay = document.getElementById("discountDisplay");
  const discountBanner = document.getElementById("discountBanner");
  const discountRow = document.getElementById("discountRow");
  const discountAmountBig = document.getElementById("discountAmountBig");
  const discountAmountSmall = document.getElementById("discountAmountSmall");

  if (discountPercent > 0) {
    if (discountDisplay) discountDisplay.classList.remove("hidden");
    if (discountBanner) discountBanner.classList.remove("hidden");
    if (discountRow) discountRow.classList.remove("hidden");
    if (discountAmountBig)
      discountAmountBig.textContent = discountAmount.toFixed(2);
    if (discountAmountSmall)
      discountAmountSmall.textContent = discountAmount.toFixed(2);
  } else {
    if (discountDisplay) discountDisplay.classList.add("hidden");
    if (discountBanner) discountBanner.classList.add("hidden");
    if (discountRow) discountRow.classList.add("hidden");
  }

  // Update final total
  cartTotalElement.textContent = `$${finalTotal.toFixed(2)}`;
}

function applyDiscount() {
  updateCartUI();
  const user = JSON.parse(localStorage.getItem("grupolloCurrentUser"));
  if (user && user.discount) {
    showToast(
      `🎁 ¡Descuento de ${user.discount}% activado en tu carrito!`,
      "success",
    );
  }
}

// Interrupción inteligente: Mostrar/ocultar input de dirección según método seleccionado
document.querySelectorAll('input[name="deliveryType"]').forEach((radio) => {
  radio.addEventListener("change", (e) => {
    const addressContainer = document.getElementById("addressContainer");
    if (!addressContainer) return;

    if (e.target.value === "domicilio") {
      addressContainer.classList.remove("hidden");
      gsap.fromTo(
        addressContainer,
        { opacity: 0, y: -10 },
        { opacity: 1, y: 0, duration: 0.3 },
      );
    } else {
      addressContainer.classList.add("hidden");
    }
  });
});

// WhatsApp Checkout unificado y condicional

function sendCartViaWhatsApp() {
  if (cart.length === 0) {
    showToast("¡Tu carrito está vacío!", "error");
    return;
  }

  // const deliveryTypeEl = document.querySelector(
  //   'input[name="deliveryType"]:checked',
  // );
  // const paymentMethodEl = document.querySelector(
  //   'input[name="paymentMethod"]:checked',
  // );
  // const addressInput = document.getElementById("checkoutAddress");
  // const notesInput = document.getElementById("checkoutNotes");

  // if (!deliveryTypeEl) {
  //   showToast("Por favor, selecciona un método de entrega", "error");
  //   return;
  // }
  // if (!paymentMethodEl) {
  //   showToast("Por favor, selecciona un método de pago", "error");
  //   return;
  // }
  if (!selectedBranchId) {
    showToast("Por favor, selecciona una sucursal", "error");
    const err = document.getElementById("branchError");
    if (err) err.classList.remove("hidden");
    return;
  }

  // const deliveryType = deliveryTypeEl.value;
  // const paymentMethod = paymentMethodEl.value;
  // const address = addressInput ? addressInput.value.trim() : "";

  // if (deliveryType === "domicilio" && !address) {
  //   showToast("Por favor, escribe tu dirección de entrega", "error");
  //   if (addressInput) addressInput.focus();
  //   return;
  // }

  const user = JSON.parse(localStorage.getItem("grupolloCurrentUser"));
  const userName = user ? user.name : "Cliente";
  const userDiscount = user && user.discount ? user.discount : 0;
  const userCoupon = user && user.discountCode ? user.discountCode : null;
  const branch = branches.find((b) => b.id === selectedBranchId);

  // ✅ message se declara AQUÍ, antes de usarlo
  let message = `¡Hola Grupollo! 👋\n\nMi nombre es *${userName}* y me gustaría realizar el siguiente pedido:\n\n`;
  let total = 0;

  cart.forEach((item) => {
    const subtotal = item.price * item.quantity;
    total += subtotal;
    message += `✅ *${item.name}* (x${item.quantity}) - $${subtotal.toFixed(2)}\n`;
  });

  const subtotalAmount = total;
  const discountAmount = subtotalAmount * (userDiscount / 100);
  const finalTotal = subtotalAmount - discountAmount;

  message += `\n📊 *RESUMEN*\n`;
  message += `Subtotal: $${subtotalAmount.toFixed(2)}\n`;
  if (userDiscount > 0) {
    message += `Descuento (${userDiscount}%): -$${discountAmount.toFixed(2)}\n`;
    message += `Cupón: *${userCoupon}*\n`;
  }
  message += `\n💰 *TOTAL A PAGAR: $${finalTotal.toFixed(2)}*\n\n`;

  message += `🏪 *SUCURSAL:* ${branch.name} — ${branch.address}\n`;
  message += `📞 Tel sucursal: ${branch.phone}\n\n`;

  // message += `🛵 *MÉTODO DE ENTREGA:* ${deliveryType === "domicilio" ? "A Domicilio" : "Retiro en Local"}\n`;
  // if (deliveryType === "domicilio") {
  //   message += `📍 *DIRECCIÓN:* ${address}\n`;
  // }

  // message += `💳 *MÉTODO DE PAGO:* ${
  //   paymentMethod === "efectivo"
  //     ? "Efectivo"
  //     : paymentMethod === "transferencia"
  //       ? "Transferencia Bancaria / Digital"
  //       : "Datáfono contra entrega"
  // }\n`;

  // if (notesInput && notesInput.value.trim() !== "") {
  //   message += `📝 *NOTAS:* ${notesInput.value.trim()}\n`;
  // }

  message += `\n¡Quedo atento a la confirmación de mi pedido! 🍗✨`;

  const encodedMsg = encodeURIComponent(message);
  const wn = branch.phone.trim().replaceAll(" ", "");

  window.open(`https://wa.me/${wn}?text=${encodedMsg}`, "_blank");

  showToast("📲 ¡Pedido enviado a WhatsApp!", "success");
}

function soloNumeros(e) {
  const tecla = e.key;
  // Permite números y teclas de control como 'Backspace' o 'Tab'
  if (
    !/^[0-9]$/.test(tecla) &&
    e.key !== "Backspace" &&
    e.key !== "ArrowLeft" &&
    e.key !== "ArrowRight" &&
    e.key !== "Delete"
  ) {
    e.preventDefault();
  }
}

function add(e, btn, add = true) {
  let padre = btn.parentNode;
  let cantidad = padre.querySelector("input");
  if (!cantidad) return;
  let total = parseInt(cantidad.value);
  if (add) {
    cantidad.value = total + 1;
    e.stopPropagation();
    return;
  }
  if (total === 1) return;
  cantidad.value = total - 1;
  // updateQuantity(btn.dataset.id, add ? total : total * -1, btn);
  e.stopPropagation();
}

// document.addEventListener("DOMContentLoaded", function () {
function addEventStopPropagation(elem) {
  if (!elem) return;
  elem.addEventListener("click", (e) => e.stopPropagation());
}
function initShopingCart() {
  renderBranches();
  updateCartUI();

  waCartBtn.addEventListener("click", sendCartViaWhatsApp);

  document.querySelectorAll(".qty-minus").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      add(e, btn, false);
    });
  });

  document.querySelectorAll(".qty-plus").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      add(e, btn);
    });
  });

  document.querySelectorAll(".container-qty").forEach((div) => {
    console.log(div);
    addEventStopPropagation(div);
  });

  document.querySelectorAll("input").forEach((input) => {
    input.addEventListener("keydown", (e) => soloNumeros(e));
  });
}
// });
