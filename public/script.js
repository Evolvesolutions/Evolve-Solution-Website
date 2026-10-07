import { services } from "./services-data.js";

// Navigate from any technology card with one delegated click handler.
document.addEventListener("click", (event) => {
  const card = event.target.closest("[data-service]");
  if (!card) return;

  const serviceKey = card.dataset.service;
  if (!services[serviceKey]) return;

  window.location.href = `/service-details.html?service=${encodeURIComponent(serviceKey)}`;
});

// Preserve keyboard activation for the focusable technology cards.
document.addEventListener("keydown", (event) => {
  if (event.key !== "Enter" && event.key !== " ") return;
  const card = event.target.closest("[data-service]");
  if (!card) return;

  event.preventDefault();
  card.click();
});

const detailsRoot = document.querySelector("[data-service-details]");

if (detailsRoot) {
  const detailContent = detailsRoot.querySelector("[data-detail-content]");
  const notFound = detailsRoot.querySelector("[data-not-found]");
  const service = services[new URLSearchParams(window.location.search).get("service")];

  if (!service) {
    notFound.hidden = false;
    detailContent.hidden = true;
  } else {
    const addText = (parent, tagName, className, text) => {
      const element = document.createElement(tagName);
      if (className) element.className = className;
      element.textContent = text;
      parent.append(element);
      return element;
    };

    const addIcon = (parent, iconMarkup, className = "detail-icon") => {
      const holder = document.createElement("span");
      holder.className = className;
      holder.setAttribute("aria-hidden", "true");
      holder.innerHTML = `<svg viewBox="0 0 64 64" focusable="false">${iconMarkup}</svg>`;
      parent.append(holder);
    };

    const hero = detailContent.querySelector("[data-hero]");
    const heroCopy = hero.querySelector(".detail-hero-copy");
    addText(heroCopy, "p", "detail-label", service.label);
    addText(heroCopy, "h1", "", service.title);
    addText(heroCopy, "p", "detail-intro", service.intro);
    const heroArt = hero.querySelector("[data-hero-art]");
    const heroImage = document.createElement("img");
    heroImage.src = service.image;
    heroImage.alt = "";
    heroImage.addEventListener("error", () => {
      heroImage.hidden = true;
      heroArt.classList.add("has-image-fallback");
    }, { once: true });
    heroArt.append(heroImage);
    addIcon(heroArt, service.icon, "detail-hero-icon");

    const offers = detailContent.querySelector("[data-offers]");
    service.offers.forEach((offer) => {
      const card = document.createElement("article");
      card.className = "detail-offer-card";
      addIcon(card, service.icon);
      addText(card, "h3", "", offer.title);
      addText(card, "p", "", offer.text);
      offers.append(card);
    });

    const benefits = detailContent.querySelector("[data-benefits]");
    service.benefits.forEach((benefit) => {
      const item = document.createElement("li");
      item.innerHTML = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="m5 12 4 4L19 6"/></svg>';
      addText(item, "span", "", benefit);
      benefits.append(item);
    });

    const steps = detailContent.querySelector("[data-steps]");
    service.steps.forEach((step, index) => {
      const item = document.createElement("article");
      item.className = "detail-step";
      addText(item, "span", "detail-step-number", String(index + 1).padStart(2, "0"));
      addText(item, "h3", "", step.title);
      addText(item, "p", "", step.text);
      steps.append(item);
    });

    const tools = detailContent.querySelector("[data-tools]");
    service.tools.forEach((tool) => addText(tools, "span", "detail-tool", tool));

    detailContent.hidden = false;
    detailContent.classList.add("is-ready");
    document.title = `${service.title} | Evolve Solutions`;
  }
}
