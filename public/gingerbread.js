// Draws a gingerbread person as an SVG string, tinted with a personality colour.
window.drawGingerbread = function (color, accessory) {
  const c = /^#[0-9a-f]{3,8}$/i.test(color) ? color : "#e23b4a";
  const dough = "#c8803f";
  const icing = "#fffaf0";

  const accessories = {
    "party-hat": `
      <path d="M76 32 L100 -14 L124 32 Z" fill="${c}"/>
      <path d="M86 12 L114 12 M80 24 L120 24" stroke="${icing}" stroke-width="4" stroke-linecap="round"/>
      <circle cx="100" cy="-14" r="7" fill="${icing}"/>`,
    glasses: `
      <circle cx="85" cy="58" r="11" fill="none" stroke="#2b1a0e" stroke-width="3.5"/>
      <circle cx="115" cy="58" r="11" fill="none" stroke="#2b1a0e" stroke-width="3.5"/>
      <path d="M96 58 L104 58" stroke="#2b1a0e" stroke-width="3.5"/>`,
    bandana: `
      <path d="M63 40 Q100 22 137 40 L135 50 Q100 34 65 50 Z" fill="${c}"/>
      <path d="M134 44 L156 34 L150 52 Z M134 46 L158 56 L144 62 Z" fill="${c}"/>
      <circle cx="84" cy="40" r="2" fill="${icing}"/><circle cx="100" cy="35" r="2" fill="${icing}"/><circle cx="116" cy="40" r="2" fill="${icing}"/>`,
    earmuffs: `
      <path d="M64 58 Q64 12 100 12 Q136 12 136 58" fill="none" stroke="${c}" stroke-width="7" stroke-linecap="round"/>
      <circle cx="63" cy="62" r="13" fill="${c}"/><circle cx="137" cy="62" r="13" fill="${c}"/>
      <circle cx="60" cy="58" r="4" fill="${icing}" opacity=".7"/><circle cx="134" cy="58" r="4" fill="${icing}" opacity=".7"/>`,
    "jester-hat": `
      <path d="M66 38 Q50 10 34 4 Q70 6 100 28 Q130 6 166 4 Q150 10 134 38 Q100 24 66 38 Z" fill="${c}"/>
      <circle cx="34" cy="4" r="7" fill="#facc15"/><circle cx="166" cy="4" r="7" fill="#facc15"/>`,
    none: "",
  };

  return `
  <svg viewBox="0 -26 200 266" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Gingerbread character">
    <g fill="${dough}">
      <circle cx="100" cy="62" r="38"/>
      <rect x="62" y="92" width="76" height="84" rx="30"/>
      <rect x="20" y="104" width="64" height="30" rx="15" transform="rotate(-12 52 119)"/>
      <rect x="116" y="104" width="64" height="30" rx="15" transform="rotate(12 148 119)"/>
      <rect x="66" y="150" width="30" height="72" rx="15" transform="rotate(10 81 160)"/>
      <rect x="104" y="150" width="30" height="72" rx="15" transform="rotate(-10 119 160)"/>
    </g>
    <g fill="none" stroke="${icing}" stroke-width="4" stroke-linecap="round" stroke-linejoin="round">
      <path d="M30 110 l5 8 l5 -8 l5 8"/>
      <path d="M155 118 l5 -8 l5 8 l5 -8"/>
      <path d="M60 210 l5 7 l5 -7 l5 7"/>
      <path d="M125 217 l5 -7 l5 7 l5 -7"/>
      <path d="M86 75 Q100 88 114 75"/>
    </g>
    <circle cx="85" cy="58" r="5" fill="#2b1a0e"/>
    <circle cx="115" cy="58" r="5" fill="#2b1a0e"/>
    <circle cx="76" cy="72" r="6" fill="#f08a8a" opacity=".55"/>
    <circle cx="124" cy="72" r="6" fill="#f08a8a" opacity=".55"/>
    <path d="M86 96 L100 103 L86 110 Z M114 96 L100 103 L114 110 Z" fill="${c}"/>
    <circle cx="100" cy="103" r="4" fill="${c}"/>
    ${[124, 144, 164].map((y) => `<circle cx="100" cy="${y}" r="7" fill="${c}"/><circle cx="98" cy="${y - 2}" r="2" fill="#fff" opacity=".7"/>`).join("")}
    ${accessories[accessory] ?? ""}
  </svg>`;
};
