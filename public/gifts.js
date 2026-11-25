// Draws each gift as an SVG string, tinted with the personality colour.
// Usage: drawGift("blanket", "#c8283a")
(function () {
  let uid = 0;
  const GOLD = "#f2c14e";
  const CREAM = "#fffaf0";
  const LINE = "#d9c2a3"; // soft outline so white details show on the cream card

  // Mix a hex colour toward black (amt < 0) or white (amt > 0).
  function shade(hex, amt) {
    let h = hex.replace("#", "");
    if (h.length === 3) h = h.split("").map((c) => c + c).join("");
    const n = parseInt(h, 16);
    const mix = (c) => Math.round(amt < 0 ? c * (1 + amt) : c + (255 - c) * amt);
    const r = mix((n >> 16) & 255), g = mix((n >> 8) & 255), b = mix(n & 255);
    return "#" + ((1 << 24) | (r << 16) | (g << 8) | b).toString(16).slice(1);
  }

  const drawings = {
    blanket(c, id) {
      const light = shade(c, 0.18), dark = shade(c, -0.25);
      return `
        <defs><clipPath id="bl${id}"><rect x="28" y="108" width="144" height="56" rx="16"/><rect x="34" y="72" width="132" height="46" rx="16"/></clipPath></defs>
        <rect x="28" y="108" width="144" height="56" rx="16" fill="${dark}"/>
        <rect x="34" y="72" width="132" height="46" rx="16" fill="${light}"/>
        <g clip-path="url(#bl${id})" stroke="${CREAM}" opacity=".35">
          <path d="M62 60 V170 M100 60 V170 M138 60 V170" stroke-width="8"/>
          <path d="M20 95 H180 M20 136 H180" stroke-width="8"/>
          <path d="M76 60 V170 M114 60 V170 M152 60 V170 M20 150 H180" stroke-width="2"/>
        </g>
        <path d="M36 112 Q100 124 164 112" fill="none" stroke="${dark}" stroke-width="4" opacity=".5"/>
        <path d="M152 46 h6 a9 9 0 0 1 0 18 h-6" fill="none" stroke="${LINE}" stroke-width="9"/>
        <path d="M152 46 h6 a9 9 0 0 1 0 18 h-6" fill="none" stroke="#fff" stroke-width="4"/>
        <rect x="118" y="38" width="34" height="34" rx="7" fill="#fff" stroke="${LINE}" stroke-width="2.5"/>
        <rect x="118" y="44" width="34" height="6" fill="${c}" opacity=".8"/>
        <g fill="none" stroke="${shade(c, 0.35)}" stroke-width="3" stroke-linecap="round">
          <path d="M128 30 q-5 -6 0 -12 q5 -6 0 -12"/><path d="M142 30 q-5 -6 0 -12 q5 -6 0 -12"/>
        </g>`;
    },

    sneaker(c) {
      const dark = shade(c, -0.25);
      return `
        <g stroke="${shade(c, 0.4)}" stroke-width="5" stroke-linecap="round">
          <path d="M8 104 H34 M14 124 H34 M4 144 H26"/>
        </g>
        <path d="M40 146 C38 112 46 86 70 78 L94 74 C104 96 124 106 148 110 C170 114 180 126 180 142 L180 148 L40 148 Z" fill="${c}"/>
        <path d="M70 78 C62 96 62 118 66 146 L40 146 C38 112 46 86 70 78 Z" fill="${dark}"/>
        <path d="M94 74 C104 96 124 106 148 110 C140 118 120 120 104 112 C96 104 92 90 94 74 Z" fill="${shade(c, 0.2)}"/>
        <g stroke="${CREAM}" stroke-width="5" stroke-linecap="round">
          <path d="M92 86 L106 80 M98 96 L113 89 M106 105 L122 98"/>
        </g>
        <path d="M84 128 L120 122 L110 132 L150 128" fill="none" stroke="${GOLD}" stroke-width="6" stroke-linecap="round" stroke-linejoin="round"/>
        <rect x="32" y="144" width="156" height="22" rx="11" fill="#fff" stroke="${LINE}" stroke-width="2.5"/>
        <path d="M40 158 H180" stroke="${shade(c, -0.1)}" stroke-width="3" opacity=".35" stroke-dasharray="8 6"/>`;
    },

    "mystery-box"(c) {
      const dark = shade(c, -0.25);
      return `
        <text x="58" y="44" font-family="Nunito, Arial, sans-serif" font-weight="900" font-size="30" fill="${GOLD}" transform="rotate(-14 58 44)">?</text>
        <text x="138" y="36" font-family="Nunito, Arial, sans-serif" font-weight="900" font-size="22" fill="${shade(c, 0.3)}" transform="rotate(16 138 36)">?</text>
        <path d="M164 62 l4 9 9 4 -9 4 -4 9 -4 -9 -9 -4 9 -4 z" fill="${GOLD}"/>
        <rect x="48" y="100" width="104" height="74" rx="8" fill="${c}"/>
        <rect x="92" y="100" width="16" height="74" fill="${GOLD}"/>
        <rect x="48" y="100" width="104" height="10" fill="${dark}" opacity=".45"/>
        <text x="70" y="152" text-anchor="middle" font-family="Nunito, Arial, sans-serif" font-weight="900" font-size="34" fill="${CREAM}">?</text>
        <text x="130" y="152" text-anchor="middle" font-family="Nunito, Arial, sans-serif" font-weight="900" font-size="34" fill="${CREAM}">?</text>
        <g transform="rotate(-14 60 88)">
          <rect x="40" y="70" width="120" height="28" rx="7" fill="${dark}"/>
          <rect x="92" y="70" width="16" height="28" fill="${GOLD}"/>
          <ellipse cx="88" cy="62" rx="16" ry="10" fill="${GOLD}" transform="rotate(-20 88 62)"/>
          <ellipse cx="112" cy="62" rx="16" ry="10" fill="${GOLD}" transform="rotate(20 112 62)"/>
          <circle cx="100" cy="68" r="7" fill="${shade(GOLD, -0.15)}"/>
        </g>`;
    },

    scrapbook(c) {
      const dark = shade(c, -0.3);
      return `
        <rect x="44" y="50" width="118" height="130" rx="10" fill="${c}"/>
        <rect x="44" y="50" width="20" height="130" rx="8" fill="${dark}"/>
        <g fill="${CREAM}" opacity=".9"><circle cx="54" cy="70" r="3"/><circle cx="54" cy="100" r="3"/><circle cx="54" cy="130" r="3"/><circle cx="54" cy="160" r="3"/></g>
        <path d="M140 180 v20 l7 -6 7 6 v-20" fill="${GOLD}"/>
        <g transform="rotate(9 128 70)">
          <rect x="96" y="30" width="64" height="74" rx="3" fill="#ffffff" stroke="${LINE}" stroke-width="2"/>
          <rect x="102" y="36" width="52" height="48" fill="#bfe3f2"/>
          <circle cx="140" cy="50" r="7" fill="${GOLD}"/>
          <path d="M102 84 L120 62 L132 74 L140 66 L154 84 Z" fill="#5fae7a"/>
          <rect x="118" y="24" width="22" height="10" fill="${CREAM}" opacity=".75" transform="rotate(-8 129 29)"/>
        </g>
        <path d="M100 150 c-8 -8 -20 -2 -14 8 l14 14 14 -14 c6 -10 -6 -16 -14 -8 z" fill="${CREAM}"/>
        <path d="M78 122 l3 7 7 1 -5 5 1 7 -6 -3 -6 3 1 -7 -5 -5 7 -1 z" fill="${GOLD}"/>
        <path d="M120 128 h28 M120 138 h20" stroke="${CREAM}" stroke-width="4" stroke-linecap="round" opacity=".6"/>`;
    },

    present(c) {
      const dark = shade(c, -0.25);
      return `
        <rect x="48" y="96" width="104" height="78" rx="8" fill="${c}"/>
        <rect x="92" y="96" width="16" height="78" fill="${GOLD}"/>
        <rect x="40" y="72" width="120" height="30" rx="7" fill="${dark}"/>
        <rect x="92" y="72" width="16" height="30" fill="${GOLD}"/>
        <ellipse cx="86" cy="62" rx="18" ry="11" fill="${GOLD}" transform="rotate(-22 86 62)"/>
        <ellipse cx="114" cy="62" rx="18" ry="11" fill="${GOLD}" transform="rotate(22 114 62)"/>
        <circle cx="100" cy="70" r="8" fill="${shade(GOLD, -0.15)}"/>`;
    },
  };

  window.drawGift = function (icon, color) {
    const c = /^#[0-9a-f]{3}([0-9a-f]{3})?$/i.test(color) ? color : "#c8283a";
    const draw = drawings[icon] || drawings.present;
    return `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" role="img" aria-hidden="true">${draw(c, ++uid)}</svg>`;
  };
})();
