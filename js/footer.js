/* StoneCraft Paving — Footer (single source of truth) */
(function () {
  function mount() {
    var el = document.getElementById("footer");
    if (!el) return;
    el.innerHTML = ''
    + '<footer class="bg-[#374151] text-white mt-0 border-0" role="contentinfo" aria-label="Footer">'
    + '<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">'
    + '<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">'
    + '<div><div class="flex items-center gap-3 mb-4">'
    + '<span class="flex items-center justify-center w-11 h-11 rounded-xl bg-gradient-to-br from-[#F59E0B] to-[#D97706]" aria-hidden="true"><svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5.5 20.5 9.6 4.5h4.8l4.1 16"/><path d="M12 6.4v2.1M12 10.5v2.1M12 14.6v2.1M12 18.7v1.8"/><path d="M4 21.4h16" stroke-width="2.2"/></svg></span>'
    + '<span><span class="block font-extrabold text-lg leading-tight">StoneCraft <span class="text-[#D97706]">Paving</span></span><span class="block text-xs tracking-widest uppercase text-gray-300">Built Strong. Paved Right.</span></span></div>'
    + '<p class="text-gray-300 text-sm leading-relaxed">Professional concrete and paving solutions built for homes and businesses — quality materials, careful preparation and clean workmanship.</p>'
    + '<div class="flex items-center gap-2 mt-5">'
    + '<span class="inline-flex items-center gap-1.5 text-xs font-bold bg-[#D97706] text-white px-3 py-1.5 rounded-full"><svg xmlns="http://www.w3.org/2000/svg" class="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7"/></svg>Licensed </span>'
    + '<span class="inline-flex items-center gap-1.5 text-xs font-bold bg-white/10 text-gray-100 px-3 py-1.5 rounded-full">Free Estimates</span>'
    + '</div>'
    + '<div class="flex flex-wrap items-center gap-2.5 mt-5" role="group" aria-label="Follow StoneCraft Paving on social media">'
    + '<a href="https://facebook.com" target="_blank" rel="noopener" aria-label="Follow us on Facebook" class="w-9 h-9 rounded-lg bg-white/10 hover:bg-[#D97706] flex items-center justify-center text-gray-200 hover:text-white transition-colors"><svg xmlns="http://www.w3.org/2000/svg" class="h-[18px] w-[18px]" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M13.5 21v-7h2.6l.4-3h-3V9.1c0-.9.3-1.6 1.7-1.6h1.4V4.8c-.3 0-1.2-.1-2.2-.1-2.2 0-3.7 1.3-3.7 3.8V11H8v3h2.7v7h2.8z"/></svg></a>'
    + '<a href="https://instagram.com" target="_blank" rel="noopener" aria-label="Follow us on Instagram" class="w-9 h-9 rounded-lg bg-white/10 hover:bg-[#D97706] flex items-center justify-center text-gray-200 hover:text-white transition-colors"><svg xmlns="http://www.w3.org/2000/svg" class="h-[18px] w-[18px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.2" cy="6.8" r="1.2" fill="currentColor" stroke="none"/></svg></a>'
    + '<a href="https://x.com" target="_blank" rel="noopener" aria-label="Follow us on X" class="w-9 h-9 rounded-lg bg-white/10 hover:bg-[#D97706] flex items-center justify-center text-gray-200 hover:text-white transition-colors"><svg xmlns="http://www.w3.org/2000/svg" class="h-[16px] w-[16px]" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M18.9 2H22l-6.8 7.8L23.3 22h-6.3l-4.9-6.4L6.5 22H3.4l7.3-8.3L1.5 2h6.4l4.4 5.9L18.9 2zm-1.1 18h1.7L7 3.9H5.2L17.8 20z"/></svg></a>'
    + '<a href="https://youtube.com" target="_blank" rel="noopener" aria-label="Watch us on YouTube" class="w-9 h-9 rounded-lg bg-white/10 hover:bg-[#D97706] flex items-center justify-center text-gray-200 hover:text-white transition-colors"><svg xmlns="http://www.w3.org/2000/svg" class="h-[18px] w-[18px]" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M23 12s0-3.4-.4-5c-.2-.9-.9-1.6-1.8-1.8C19.2 5 12 5 12 5s-7.2 0-8.8.2c-.9.2-1.6.9-1.8 1.8C1 8.6 1 12 1 12s0 3.4.4 5c.2.9.9 1.6 1.8 1.8 1.6.2 8.8.2 8.8.2s7.2 0 8.8-.2c-.9-.2 1.6-.9 1.8-1.8.4-1.6.4-5 .4-5zM9.8 15.5v-7l6 3.5-6 3.5z"/></svg></a>'
    + "</div></div>"
    + '<nav aria-label="Services"><h3 class="font-extrabold text-sm tracking-widest uppercase mb-4 text-[#D97706]">Services</h3><ul class="space-y-2.5 text-sm">'
    + '<li><a class="text-gray-200 hover:text-[#D97706]" href="services.html#driveways">Concrete Driveways</a></li>'
    + '<li><a class="text-gray-200 hover:text-[#D97706]" href="services.html#patios">Concrete Patios</a></li>'
    + '<li><a class="text-gray-200 hover:text-[#D97706]" href="services.html#walkways">Walkways</a></li>'
    + '<li><a class="text-gray-200 hover:text-[#D97706]" href="services.html#decorative">Decorative Concrete</a></li>'
    + '<li><a class="text-gray-200 hover:text-[#D97706]" href="services.html#slabs">Concrete Slabs</a></li>'
    + '<li><a class="text-gray-200 hover:text-[#D97706]" href="services.html#resurfacing">Resurfacing</a></li>'
    + "</ul></nav>"
    + '<nav aria-label="Projects"><h3 class="font-extrabold text-sm tracking-widest uppercase mb-4 text-[#D97706]">Projects</h3><ul class="space-y-2.5 text-sm">'
    + '<li><a class="text-gray-200 hover:text-[#D97706]" href="index.html">Home 1 — Classic</a></li>'
    + '<li><a class="text-gray-200 hover:text-[#D97706]" href="home2.html">Home 2 — Split Hero</a></li>'
    + '<li><a class="text-gray-200 hover:text-[#D97706]" href="about.html">About Us</a></li>'
    + '<li><a class="text-gray-200 hover:text-[#D97706]" href="pricing.html">Pricing Guide</a></li>'
    + '<li><a class="text-gray-200 hover:text-[#D97706]" href="gallery.html">Gallery</a></li>'
    + '<li><a class="text-gray-200 hover:text-[#D97706]" href="gallery.html" data-filter-link="driveways">Residential Driveways</a></li>'
   +"</ul></nav>"
    + '<div><h3 class="font-extrabold text-sm tracking-widest uppercase mb-4 text-[#D97706]">Contact</h3><ul class="space-y-3 text-sm">'
    + '<li class="flex items-start gap-2.5"><svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-[#D97706] shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M3 5a2 2 0 012-2h2l2 5-2.5 1.5a12 12 0 005 5L11 17l5 2v2a2 2 0 01-2 2A16 16 0 013 5z"/></svg><span><a href="tel:+15551234567" class="text-gray-100 font-semibold hover:text-[#D97706]">(555) 123-4567</a><span class="block text-gray-400 text-xs">Mon–Sat · 8:00 AM – 6:00 PM</span></span></li>'
    + '<li class="flex items-start gap-2.5"><svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-[#D97706] shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M3 8l7.9 5.3a2 2 0 002.2 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg><a href="mailto:hello@stonecraftpaving.com" class="text-gray-100 hover:text-[#D97706] break-all">hello@stonecraftpaving.com</a></li>'
    + '<li class="flex items-start gap-2.5"><svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-[#D97706] shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M17.7 13.9a8 8 0 10-11.4 0L12 21l5.7-7.1zM12 12a2 2 0 100-4 2 2 0 000 4z"/></svg><span class="text-gray-200">Residential &amp; Commercial<br><span class="text-gray-400 text-xs">Serving our local community (demo area)</span></span></li>'
    + "</ul>"
    + '<a href="contact.html" class="btn btn-amber mt-5 inline-flex items-center gap-2 font-bold px-5 py-2.5 rounded-lg text-sm">Get a Free Estimate</a>'
    + "</div></div></div>"
    + '<div class="border-0"><div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-gray-300">'
    + '<p>© 2026 StoneCraft Paving. All rights reserved. <span class="text-gray-400">Demo content for illustration.</span></p>'
    + '<div class="flex items-center gap-5"><a href="contact.html" class="hover:text-[#D97706]">Privacy Policy</a><a href="contact.html" class="hover:text-[#D97706]">Terms</a><a href="#navbar" class="hover:text-[#D97706]">Back to top ↑</a></div>'
    + "</div></div></footer>";
  }
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", mount);
  else mount();
})();
