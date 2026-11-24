import { REGION_MAP } from './stories.mjs';

export function renderArt(key) {
  switch (key) {
    case 'hormuz':
      return `<svg viewBox="0 0 316 104" width="100%" height="104" xmlns="http://www.w3.org/2000/svg">
        <rect width="316" height="104" fill="#CBE0EE"/>
        <!-- Iran landmass (north) -->
        <path d="M0,0 L316,0 L316,44 L268,46 L235,34 L196,42 L152,32 L106,40 L52,26 L0,30 Z" fill="#E3D4B7" stroke="#A69578" stroke-width="1"/>
        <!-- Arabian peninsula & Oman (south) -->
        <path d="M0,66 L48,72 L78,86 L124,84 L165,72 L205,58 L224,62 L238,88 L268,104 L0,104 Z" fill="#E8DCC3" stroke="#A69578" stroke-width="1"/>
        <!-- Strait shipping lane -->
        <path d="M22,50 Q118,58 188,48 T302,68" fill="none" stroke="#1E4E79" stroke-width="1.4" stroke-dasharray="4 3" opacity="0.55"/>
        <!-- Tanker 1 with fire -->
        <g transform="translate(88,44)">
          <path d="M0,10 L36,10 L41,5 L4,5 Z" fill="#233142"/>
          <rect x="6" y="1" width="7" height="4" fill="#E2E8F0"/>
          <path d="M18,5 C16,-4 22,-9 24,-1 C27,-7 30,-2 28,5 Z" fill="#D9480F"/>
          <path d="M20,5 C20,0 24,-3 25,5 Z" fill="#FFD43B"/>
          <circle cx="24" cy="-9" r="5" fill="#495057" opacity="0.55"/>
          <circle cx="30" cy="-14" r="6" fill="#6C757D" opacity="0.4"/>
        </g>
        <!-- Tanker 2 with fire -->
        <g transform="translate(154,39)">
          <path d="M0,10 L36,10 L41,5 L4,5 Z" fill="#233142"/>
          <rect x="24" y="1" width="7" height="4" fill="#E2E8F0"/>
          <path d="M11,5 C9,-4 15,-9 17,-1 C20,-6 22,-1 20,5 Z" fill="#C92A2A"/>
          <path d="M13,5 C13,0 17,-2 18,5 Z" fill="#FCC419"/>
          <circle cx="17" cy="-9" r="5" fill="#495057" opacity="0.55"/>
          <circle cx="23" cy="-14" r="6" fill="#6C757D" opacity="0.38"/>
        </g>
        <!-- Tanker 3 with fire -->
        <g transform="translate(226,53)">
          <path d="M0,10 L36,10 L41,5 L4,5 Z" fill="#233142"/>
          <rect x="6" y="1" width="7" height="4" fill="#E2E8F0"/>
          <path d="M19,5 C17,-3 23,-8 25,-1 C28,-6 30,-1 28,5 Z" fill="#D9480F"/>
          <path d="M21,5 C21,0 24,-2 26,5 Z" fill="#FFD43B"/>
          <circle cx="25" cy="-8" r="4.5" fill="#495057" opacity="0.5"/>
        </g>
        <!-- Naval mine rings -->
        <circle cx="110" cy="60" r="6" fill="none" stroke="#C92A2A" stroke-width="1.2" stroke-dasharray="2 2"/>
        <circle cx="172" cy="56" r="6" fill="none" stroke="#C92A2A" stroke-width="1.2" stroke-dasharray="2 2"/>
        <!-- Map Labels -->
        <text x="234" y="21" font-family="Segoe UI, Arial, sans-serif" font-size="10.5" font-weight="800" fill="#6B5B45" letter-spacing="1.5">IRAN</text>
        <text x="14" y="96" font-family="Segoe UI, Arial, sans-serif" font-size="9" font-weight="700" fill="#6B5B45" letter-spacing="1">UAE / OMAN</text>
        <text x="130" y="75" font-family="Segoe UI, Arial, sans-serif" font-size="8.2" font-weight="700" fill="#1E4E79" letter-spacing="0.6">STRAIT OF HORMUZ</text>
        <!-- Top-left crimson banner -->
        <rect x="0" y="0" width="136" height="19" fill="#A61C1C"/>
        <text x="7" y="13" font-family="Segoe UI, Arial, sans-serif" font-size="10" font-weight="800" fill="#FFFFFF" letter-spacing="0.4">3 TANKERS ABLAZE</text>
        <!-- Bottom-right diplomacy callout -->
        <rect x="172" y="84" width="144" height="20" fill="#1E3A5F"/>
        <text x="244" y="97.5" text-anchor="middle" font-family="Segoe UI, Arial, sans-serif" font-size="9.2" font-weight="700" fill="#FFFFFF">QATAR PM AT WHITE HOUSE</text>
      </svg>`;

    case 'zaporizhzhia':
      return `<svg viewBox="0 0 316 104" width="100%" height="104" xmlns="http://www.w3.org/2000/svg">
        <!-- Left half: Zaporizhzhia night skyline -->
        <rect width="178" height="104" fill="#1E2D40"/>
        <rect x="14" y="42" width="38" height="62" fill="#334155"/>
        <rect x="58" y="32" width="54" height="72" fill="#475569"/>
        <rect x="118" y="48" width="44" height="56" fill="#334155"/>
        <!-- Lit windows -->
        <g fill="#FDE68A" opacity="0.85">
          <rect x="20" y="50" width="6" height="7"/><rect x="32" y="50" width="6" height="7"/>
          <rect x="20" y="64" width="6" height="7"/><rect x="32" y="78" width="6" height="7"/>
          <rect x="65" y="42" width="7" height="8"/><rect x="78" y="42" width="7" height="8"/>
          <rect x="65" y="58" width="7" height="8"/><rect x="92" y="74" width="7" height="8"/>
          <rect x="125" y="56" width="6" height="7"/><rect x="140" y="70" width="6" height="7"/>
        </g>
        <!-- Strike blast on central apartment block -->
        <polygon points="88,26 95,40 112,35 101,49 116,58 98,60 95,74 86,60 71,65 81,51 69,39 84,41" fill="#E8590C"/>
        <polygon points="89,35 94,45 104,43 97,52 104,58 94,57 90,65 86,56 78,58 84,50 79,43 87,45" fill="#FFD43B"/>
        <!-- Right half: UN Security Council chamber -->
        <rect x="178" y="0" width="138" height="104" fill="#EAE4D6"/>
        <line x1="178" y1="0" x2="178" y2="104" stroke="#1A1D24" stroke-width="1.5"/>
        <!-- UNSC Horseshoe Table -->
        <path d="M204,76 A43,38 0 1,1 290,76" fill="none" stroke="#1E4E79" stroke-width="11" stroke-linecap="round"/>
        <path d="M204,76 A43,38 0 1,1 290,76" fill="none" stroke="#93C5FD" stroke-width="2" stroke-dasharray="3 5"/>
        <!-- Delegates dots -->
        <circle cx="247" cy="24" r="4" fill="#1E3A5F"/>
        <circle cx="222" cy="32" r="3.5" fill="#A61C1C"/>
        <circle cx="272" cy="32" r="3.5" fill="#1D4ED8"/>
        <text x="247" y="61" text-anchor="middle" font-family="Georgia, serif" font-size="11" font-weight="700" fill="#1E3A5F">UNSC</text>
        <text x="247" y="73" text-anchor="middle" font-family="Segoe UI, Arial, sans-serif" font-size="8.2" font-weight="700" fill="#475569">BLACK SEA CLASH</text>
        <!-- Top-left crimson banner -->
        <rect x="0" y="0" width="124" height="19" fill="#A61C1C"/>
        <text x="7" y="13" font-family="Segoe UI, Arial, sans-serif" font-size="10" font-weight="800" fill="#FFFFFF">2 DEAD · 40+ HURT</text>
        <!-- Bottom-right badge -->
        <rect x="184" y="84" width="126" height="16" rx="2" fill="#1E4E79"/>
        <text x="247" y="95" text-anchor="middle" font-family="Segoe UI, Arial, sans-serif" font-size="8.8" font-weight="700" fill="#FFFFFF">AIR-DEFENCE PLEA</text>
      </svg>`;

    case 'solomon':
      return `<svg viewBox="0 0 316 104" width="100%" height="104" xmlns="http://www.w3.org/2000/svg">
        <rect width="316" height="104" fill="#D4E8F2"/>
        <!-- Australia simplified landmass -->
        <path d="M18,52 L56,42 L92,48 L112,68 L108,98 L68,104 L24,96 L12,74 Z" fill="#E4D6BA" stroke="#9C8D71" stroke-width="1"/>
        <!-- PNG -->
        <path d="M84,22 L126,26 L138,38 L104,36 L82,30 Z" fill="#D5C8AC" stroke="#9C8D71" stroke-width="0.9"/>
        <!-- Solomon Islands cluster -->
        <g fill="#0E7490" stroke="#083344" stroke-width="0.8">
          <ellipse cx="164" cy="40" rx="11" ry="4" transform="rotate(24 164 40)"/>
          <ellipse cx="182" cy="48" rx="9" ry="3.5" transform="rotate(24 182 48)"/>
          <ellipse cx="198" cy="55" rx="7" ry="3" transform="rotate(20 198 55)"/>
        </g>
        <!-- Beijing broken red dashed line -->
        <path d="M174,36 Q192,16 232,12" fill="none" stroke="#A61C1C" stroke-width="2" stroke-dasharray="4 3"/>
        <!-- Red X over China pact -->
        <g transform="translate(201,18)" stroke="#A61C1C" stroke-width="2.6" stroke-linecap="round">
          <line x1="-6" y1="-6" x2="6" y2="6"/><line x1="6" y1="-6" x2="-6" y2="6"/>
        </g>
        <rect x="220" y="4" width="90" height="18" rx="2" fill="#FFF5F5" stroke="#A61C1C" stroke-width="1"/>
        <text x="265" y="16" text-anchor="middle" font-family="Segoe UI, Arial, sans-serif" font-size="8.5" font-weight="800" fill="#A61C1C">CHINA PACT ENDS</text>
        <!-- Solid teal/green Australia treaty arc -->
        <path d="M98,66 Q138,76 172,52" fill="none" stroke="#0E7490" stroke-width="3"/>
        <circle cx="98" cy="66" r="4" fill="#0E7490"/>
        <circle cx="172" cy="52" r="4" fill="#0E7490"/>
        <!-- Labels -->
        <text x="58" y="78" text-anchor="middle" font-family="Segoe UI, Arial, sans-serif" font-size="10" font-weight="800" fill="#5C4F3D" letter-spacing="0.8">AUSTRALIA</text>
        <text x="206" y="42" font-family="Segoe UI, Arial, sans-serif" font-size="9" font-weight="800" fill="#083344">SOLOMON IS.</text>
        <!-- Top-left badge -->
        <rect x="0" y="0" width="128" height="19" fill="#0E7490"/>
        <text x="7" y="13" font-family="Segoe UI, Arial, sans-serif" font-size="9.5" font-weight="800" fill="#FFFFFF">PACIFIC REALIGNMENT</text>
        <!-- Bottom-right badge -->
        <rect x="172" y="84" width="144" height="20" fill="#1E3A5F"/>
        <text x="244" y="97.5" text-anchor="middle" font-family="Segoe UI, Arial, sans-serif" font-size="9" font-weight="700" fill="#FFFFFF">NEW CANBERRA TREATY</text>
      </svg>`;

    case 'gaza':
      return `<svg viewBox="0 0 186 54" width="100%" height="54" xmlns="http://www.w3.org/2000/svg">
        <rect width="186" height="54" fill="#CBE0EE"/>
        <path d="M74,0 L186,0 L186,54 L48,54 Z" fill="#E6DAC2" stroke="#A89A80" stroke-width="1"/>
        <!-- Gaza Strip polygon -->
        <path d="M78,4 L104,10 L82,48 L56,42 Z" fill="#F4D7D7" stroke="#A61C1C" stroke-width="1.3"/>
        <circle cx="88" cy="18" r="4" fill="#A61C1C"/>
        <circle cx="88" cy="18" r="7.5" fill="none" stroke="#A61C1C" stroke-width="1"/>
        <circle cx="72" cy="38" r="3.5" fill="#D9480F"/>
        <text x="108" y="21" font-family="Segoe UI, Arial, sans-serif" font-size="8.2" font-weight="800" fill="#7F1D1D">GAZA CITY</text>
        <text x="93" y="42" font-family="Segoe UI, Arial, sans-serif" font-size="7.8" font-weight="700" fill="#7F1D1D">KHAN YOUNIS</text>
        <rect x="0" y="0" width="66" height="15" fill="#A61C1C"/>
        <text x="5" y="10.5" font-family="Segoe UI, Arial, sans-serif" font-size="8.2" font-weight="800" fill="#FFFFFF">AIRSTRIKES</text>
      </svg>`;

    case 'kadiz':
      return `<svg viewBox="0 0 186 54" width="100%" height="54" xmlns="http://www.w3.org/2000/svg">
        <rect width="186" height="54" fill="#172A3A"/>
        <!-- Radar rings -->
        <circle cx="96" cy="34" r="14" fill="none" stroke="#38BDF8" stroke-width="0.9" opacity="0.5"/>
        <circle cx="96" cy="34" r="28" fill="none" stroke="#38BDF8" stroke-width="0.9" opacity="0.35"/>
        <!-- KADIZ line -->
        <path d="M40,54 L68,14 L148,14 L172,54" fill="none" stroke="#FBBF24" stroke-width="1.4" stroke-dasharray="4 2"/>
        <!-- Ulleungdo dot -->
        <circle cx="96" cy="34" r="3.5" fill="#FDE047"/>
        <text x="103" y="37" font-family="Segoe UI, Arial, sans-serif" font-size="7.8" font-weight="700" fill="#FEF08A">ULLEUNGDO</text>
        <!-- Incoming Russian jet chevron -->
        <polygon points="124,10 116,18 124,16 132,18" fill="#EF4444" transform="rotate(140 124 14)"/>
        <!-- ROK scrambling jet -->
        <polygon points="74,40 67,47 74,45 81,47" fill="#38BDF8" transform="rotate(35 74 44)"/>
        <rect x="0" y="0" width="76" height="15" fill="#B91C1C"/>
        <text x="5" y="10.5" font-family="Segoe UI, Arial, sans-serif" font-size="8.2" font-weight="800" fill="#FFFFFF">KADIZ ALERT</text>
      </svg>`;

    case 'euclid':
      return `<svg viewBox="0 0 186 54" width="100%" height="54" xmlns="http://www.w3.org/2000/svg">
        <rect width="186" height="54" fill="#0F172A"/>
        <!-- Stars -->
        <g fill="#E2E8F0">
          <circle cx="18" cy="14" r="1"/><circle cx="44" cy="40" r="1.2"/><circle cx="76" cy="11" r="0.9"/>
          <circle cx="155" cy="14" r="1.2"/><circle cx="172" cy="41" r="1"/><circle cx="28" cy="46" r="0.8"/>
        </g>
        <!-- Quasar glow & relativistic jet -->
        <line x1="106" y1="36" x2="152" y2="12" stroke="#38BDF8" stroke-width="3" opacity="0.65" stroke-linecap="round"/>
        <line x1="106" y1="36" x2="60" y2="60" stroke="#38BDF8" stroke-width="2.5" opacity="0.45" stroke-linecap="round"/>
        <circle cx="106" cy="36" r="12" fill="#F59E0B" opacity="0.28"/>
        <circle cx="106" cy="36" r="6" fill="#FDE047"/>
        <circle cx="106" cy="36" r="2.8" fill="#FFFFFF"/>
        <!-- Euclid telescope icon -->
        <g transform="translate(26,24) rotate(-18)">
          <rect x="0" y="0" width="18" height="10" rx="2" fill="#CBD5E1"/>
          <rect x="18" y="2" width="6" height="6" fill="#38BDF8"/>
          <rect x="-4" y="-5" width="4" height="20" fill="#64748B"/>
        </g>
        <rect x="0" y="0" width="90" height="15" fill="#1D4ED8"/>
        <text x="5" y="10.5" font-family="Segoe UI, Arial, sans-serif" font-size="8.2" font-weight="800" fill="#FFFFFF">z = 8.13 RECORD</text>
        <text x="180" y="49" text-anchor="end" font-family="Segoe UI, Arial, sans-serif" font-size="8" font-weight="700" fill="#93C5FD">630M YRS</text>
      </svg>`;

    case 'ebola':
      return `<svg viewBox="0 0 186 54" width="100%" height="54" xmlns="http://www.w3.org/2000/svg">
        <rect width="186" height="54" fill="#ECFDF5"/>
        <!-- Vaccine vial -->
        <g transform="translate(24,11)">
          <rect x="4" y="0" width="16" height="5" rx="1" fill="#0F766E"/>
          <rect x="6" y="5" width="12" height="4" fill="#94A3B8"/>
          <rect x="2" y="9" width="20" height="26" rx="3" fill="#FFFFFF" stroke="#0F766E" stroke-width="1.6"/>
          <rect x="3" y="22" width="18" height="12" rx="2" fill="#5EEAD4"/>
          <rect x="6" y="13" width="12" height="6" fill="#0F766E" opacity="0.2"/>
        </g>
        <!-- Medical shield -->
        <g transform="translate(62,13)">
          <path d="M14,0 L28,5 L28,17 C28,25 14,32 14,32 C14,32 0,25 0,17 L0,5 Z" fill="#1F6B48"/>
          <rect x="11.5" y="8" width="5" height="15" rx="1" fill="#FFFFFF"/>
          <rect x="6.5" y="13" width="15" height="5" rx="1" fill="#FFFFFF"/>
        </g>
        <!-- Big callout -->
        <text x="102" y="27" font-family="Georgia, serif" font-size="17" font-weight="700" fill="#065F46">1.5M</text>
        <text x="102" y="39" font-family="Segoe UI, Arial, sans-serif" font-size="8.2" font-weight="800" fill="#047857">BUNDIBUGYO</text>
        <text x="102" y="49" font-family="Segoe UI, Arial, sans-serif" font-size="7.6" font-weight="700" fill="#475569">DOSES · DRC</text>
      </svg>`;

    case 'ukheat':
      return `<svg viewBox="0 0 186 54" width="100%" height="54" xmlns="http://www.w3.org/2000/svg">
        <rect width="186" height="54" fill="#FFF7ED"/>
        <!-- Baseline -->
        <line x1="12" y1="44" x2="112" y2="44" stroke="#9A3412" stroke-width="1"/>
        <!-- Historical bars vs 2026 record -->
        <rect x="16" y="35" width="11" height="9" fill="#CBD5E1"/>
        <rect x="31" y="30" width="11" height="14" fill="#CBD5E1"/>
        <rect x="46" y="22" width="11" height="22" fill="#94A3B8"/>
        <rect x="61" y="28" width="11" height="16" fill="#CBD5E1"/>
        <rect x="76" y="24" width="11" height="20" fill="#94A3B8"/>
        <rect x="91" y="8" width="14" height="36" fill="#C92A2A"/>
        <text x="51" y="51.5" text-anchor="middle" font-family="Segoe UI, Arial, sans-serif" font-size="7" fill="#64748B">'22</text>
        <text x="98" y="51.5" text-anchor="middle" font-family="Segoe UI, Arial, sans-serif" font-size="7.5" font-weight="800" fill="#C92A2A">'26</text>
        <!-- Callout -->
        <text x="114" y="26" font-family="Georgia, serif" font-size="16" font-weight="700" fill="#B91C1C">5,258</text>
        <text x="114" y="37" font-family="Segoe UI, Arial, sans-serif" font-size="8" font-weight="800" fill="#9A3412">HEAT DEATHS</text>
        <text x="114" y="47" font-family="Segoe UI, Arial, sans-serif" font-size="7.5" font-weight="700" fill="#64748B">41 HOT DAYS</text>
      </svg>`;

    case 'unai':
      return `<svg viewBox="0 0 186 54" width="100%" height="54" xmlns="http://www.w3.org/2000/svg">
        <rect width="186" height="54" fill="#EFF6FF"/>
        <!-- Autonomous drone icon -->
        <g transform="translate(26,14)">
          <line x1="6" y1="8" x2="36" y2="24" stroke="#334155" stroke-width="2.5"/>
          <line x1="36" y1="8" x2="6" y2="24" stroke="#334155" stroke-width="2.5"/>
          <rect x="14" y="10" width="14" height="12" rx="3" fill="#1E293B"/>
          <circle cx="21" cy="16" r="2.5" fill="#EF4444"/>
          <circle cx="6" cy="8" r="4.5" fill="none" stroke="#475569" stroke-width="1.4"/>
          <circle cx="36" cy="8" r="4.5" fill="none" stroke="#475569" stroke-width="1.4"/>
          <circle cx="6" cy="24" r="4.5" fill="none" stroke="#475569" stroke-width="1.4"/>
          <circle cx="36" cy="24" r="4.5" fill="none" stroke="#475569" stroke-width="1.4"/>
          <!-- Red ban ring -->
          <circle cx="21" cy="16" r="18" fill="none" stroke="#C92A2A" stroke-width="3"/>
          <line x1="9" y1="4" x2="33" y2="28" stroke="#C92A2A" stroke-width="3"/>
        </g>
        <rect x="74" y="7" width="106" height="16" rx="2" fill="#1E3A5F"/>
        <text x="127" y="18" text-anchor="middle" font-family="Segoe UI, Arial, sans-serif" font-size="8" font-weight="800" fill="#FFFFFF">UN SECURITY COUNCIL</text>
        <text x="127" y="36" text-anchor="middle" font-family="Georgia, serif" font-size="10.2" font-weight="700" fill="#1E293B">NO KILLER ROBOTS</text>
        <text x="127" y="47.5" text-anchor="middle" font-family="Segoe UI, Arial, sans-serif" font-size="7.4" font-weight="700" fill="#475569">GUTERRES AI WARNING</text>
      </svg>`;

    case 'nvidia':
      return `<svg viewBox="0 0 186 54" width="100%" height="54" xmlns="http://www.w3.org/2000/svg">
        <rect width="186" height="54" fill="#1E293B"/>
        <!-- AI Chip icon -->
        <g transform="translate(14,12)">
          <rect x="4" y="4" width="24" height="24" rx="2" fill="#166534" stroke="#4ADE80" stroke-width="1.5"/>
          <rect x="10" y="10" width="12" height="12" fill="#22C55E"/>
          <g stroke="#94A3B8" stroke-width="1.5">
            <line x1="9" y1="0" x2="9" y2="4"/><line x1="16" y1="0" x2="16" y2="4"/><line x1="23" y1="0" x2="23" y2="4"/>
            <line x1="9" y1="28" x2="9" y2="32"/><line x1="16" y1="28" x2="16" y2="32"/><line x1="23" y1="28" x2="23" y2="32"/>
            <line x1="0" y1="9" x2="4" y2="9"/><line x1="0" y1="16" x2="4" y2="16"/><line x1="0" y1="23" x2="4" y2="23"/>
            <line x1="28" y1="9" x2="32" y2="9"/><line x1="28" y1="16" x2="32" y2="16"/><line x1="28" y1="23" x2="32" y2="23"/>
          </g>
        </g>
        <!-- Market pullback sparkline -->
        <polyline points="56,36 70,22 84,18 98,28 112,24 128,36" fill="none" stroke="#F87171" stroke-width="2.2" stroke-linejoin="round"/>
        <circle cx="128" cy="36" r="3" fill="#EF4444"/>
        <rect x="116" y="4" width="66" height="14" rx="2" fill="#B91C1C"/>
        <text x="149" y="14" text-anchor="middle" font-family="Segoe UI, Arial, sans-serif" font-size="7.8" font-weight="800" fill="#FFFFFF">HEARINGS</text>
        <text x="180" y="34" text-anchor="end" font-family="Segoe UI, Arial, sans-serif" font-size="8.5" font-weight="800" fill="#FCA5A5">TECH SLIPS</text>
        <text x="180" y="46" text-anchor="end" font-family="Segoe UI, Arial, sans-serif" font-size="7.5" font-weight="700" fill="#CBD5E1">GOLD &lt;$3,600</text>
      </svg>`;

    case 'yemen':
      return `<svg viewBox="0 0 186 54" width="100%" height="54" xmlns="http://www.w3.org/2000/svg">
        <rect width="186" height="54" fill="#CBE0EE"/>
        <!-- Yemen coast -->
        <path d="M0,0 L186,0 L186,28 L124,38 L78,42 L28,28 L0,20 Z" fill="#E6D8BE" stroke="#A69578" stroke-width="1"/>
        <!-- Advance arrow -->
        <path d="M32,12 L74,26" stroke="#B91C1C" stroke-width="3" stroke-linecap="round"/>
        <polygon points="78,28 67,29 72,20" fill="#B91C1C"/>
        <!-- Defense arc -->
        <path d="M84,18 Q92,30 82,40" fill="none" stroke="#1E4E79" stroke-width="2.5" stroke-dasharray="3 2"/>
        <!-- Aden dot -->
        <circle cx="104" cy="34" r="4" fill="#1E4E79"/>
        <text x="111" y="37" font-family="Segoe UI, Arial, sans-serif" font-size="8.8" font-weight="800" fill="#1E3A5F">ADEN</text>
        <rect x="108" y="4" width="74" height="16" rx="2" fill="#A61C1C"/>
        <text x="145" y="15" text-anchor="middle" font-family="Segoe UI, Arial, sans-serif" font-size="8.5" font-weight="800" fill="#FFFFFF">60 KM AWAY</text>
      </svg>`;

    case 'unodc':
      return `<svg viewBox="0 0 186 54" width="100%" height="54" xmlns="http://www.w3.org/2000/svg">
        <rect width="186" height="54" fill="#FAF5FF"/>
        <text x="8" y="14" font-family="Segoe UI, Arial, sans-serif" font-size="7.5" font-weight="700" fill="#475569">AFRICA</text>
        <rect x="52" y="7" width="66" height="8" rx="1.5" fill="#9E2A2B"/>
        <text x="122" y="14" font-family="Segoe UI, Arial, sans-serif" font-size="7.8" font-weight="800" fill="#9E2A2B">2.9</text>
        <text x="8" y="27" font-family="Segoe UI, Arial, sans-serif" font-size="7.5" font-weight="700" fill="#475569">AMERICAS</text>
        <rect x="52" y="20" width="32" height="8" rx="1.5" fill="#6D28D9"/>
        <text x="88" y="27" font-family="Segoe UI, Arial, sans-serif" font-size="7.8" font-weight="800" fill="#5B21B6">1.4</text>
        <text x="8" y="40" font-family="Segoe UI, Arial, sans-serif" font-size="7.5" font-weight="700" fill="#475569">PER 100K</text>
        <rect x="130" y="18" width="52" height="30" rx="3" fill="#5B21B6"/>
        <text x="156" y="32" text-anchor="middle" font-family="Georgia, serif" font-size="11.5" font-weight="700" fill="#FFFFFF">47K</text>
        <text x="156" y="43" text-anchor="middle" font-family="Segoe UI, Arial, sans-serif" font-size="7" font-weight="700" fill="#EDE9FE">5 / HOUR</text>
      </svg>`;

    case 'colombia':
      return `<svg viewBox="0 0 186 54" width="100%" height="54" xmlns="http://www.w3.org/2000/svg">
        <rect width="186" height="54" fill="#F8FAFC"/>
        <!-- Colombia flag bar on left -->
        <rect x="0" y="0" width="10" height="27" fill="#FACC15"/>
        <rect x="0" y="27" width="10" height="13.5" fill="#1D4ED8"/>
        <rect x="0" y="40.5" width="10" height="13.5" fill="#DC2626"/>
        <!-- Timeline -->
        <line x1="24" y1="36" x2="170" y2="36" stroke="#1E3A5F" stroke-width="2.5"/>
        <circle cx="24" cy="36" r="4.5" fill="#1E3A5F"/>
        <circle cx="170" cy="36" r="4.5" fill="#B45309"/>
        <text x="24" y="49" text-anchor="middle" font-family="Segoe UI, Arial, sans-serif" font-size="7.8" font-weight="800" fill="#1E3A5F">2016</text>
        <text x="170" y="49" text-anchor="middle" font-family="Segoe UI, Arial, sans-serif" font-size="7.8" font-weight="800" fill="#B45309">2026</text>
        <text x="97" y="22" text-anchor="middle" font-family="Georgia, serif" font-size="15" font-weight="700" fill="#1E3A5F">10 YEARS</text>
        <text x="97" y="31.5" text-anchor="middle" font-family="Segoe UI, Arial, sans-serif" font-size="7.6" font-weight="800" fill="#64748B">FARC PEACE ACCORD</text>
      </svg>`;

    default:
      return `<svg viewBox="0 0 186 54" width="100%" height="54" xmlns="http://www.w3.org/2000/svg"><rect width="186" height="54" fill="#E2E8F0"/></svg>`;
  }
}

function project(lon, lat, w, h) {
  const x = ((lon + 180) / 360) * w;
  const y = ((82 - lat) / 142) * h;
  return { x: Math.max(8, Math.min(w - 8, x)), y: Math.max(8, Math.min(h - 8, y)) };
}

export function renderWorldMap(stories) {
  const W = 294;
  const H = 156;

  // Clean simplified continent polygons in Equirectangular projection (lon -180..180, lat 82..-60)
  const landPolys = [
    // North America
    [[-168,66],[-140,70],[-95,70],[-62,55],[-55,47],[-75,35],[-81,25],[-97,22],[-84,10],[-87,13],[-105,20],[-117,32],[-125,49],[-152,60]],
    // Greenland
    [[-52,60],[-20,70],[-18,81],[-55,81],[-60,72]],
    // South America
    [[-78,10],[-62,10],[-35,-6],[-38,-18],[-53,-34],[-68,-54],[-74,-45],[-72,-18],[-81,-4]],
    // Europe
    [[-9,37],[3,43],[14,45],[26,41],[38,47],[48,55],[58,68],[28,71],[12,68],[5,60],[9,54],[-5,48],[-9,43]],
    // UK & Ireland
    [[-6,50],[2,51],[1,58],[-6,58]],
    // Africa
    [[-17,15],[-6,36],[11,37],[32,31],[43,12],[51,12],[40,-10],[35,-25],[20,-35],[12,-17],[9,4],[-8,5]],
    // Madagascar
    [[44,-25],[49,-13],[50,-16],[46,-25]],
    // Asia & Middle East
    [[27,40],[36,36],[35,31],[44,13],[59,22],[56,27],[50,30],[67,25],[77,8],[88,22],[100,14],[104,2],[109,13],[121,25],[122,38],[129,35],[131,42],[142,54],[162,60],[178,66],[140,72],[90,74],[58,68],[48,55],[38,47]],
    // Japan
    [[130,31],[136,34],[141,38],[145,44],[140,42],[136,37],[130,33]],
    // Sumatra / Java / Borneo
    [[95,5],[105,-6],[114,-8],[115,-7],[106,-5],[96,4]],
    [[109,2],[118,5],[118,-3],[111,-3]],
    // Australia
    [[114,-22],[130,-12],[142,-11],[153,-27],[148,-38],[135,-34],[115,-34]],
    // New Zealand
    [[167,-46],[174,-41],[178,-37],[174,-35],[172,-41],[166,-45]],
  ];

  const polyPaths = landPolys
    .map((pts) => {
      const d = pts
        .map(([lon, lat], i) => {
          const p = project(lon, lat, W, H);
          return `${i === 0 ? 'M' : 'L'}${p.x.toFixed(1)},${p.y.toFixed(1)}`;
        })
        .join(' ');
      return `<path d="${d} Z" fill="#E3DAC8" stroke="#B7AC96" stroke-width="0.7"/>`;
    })
    .join('\n');

  // Separate geographic pins from space/global callout pills
  const geoStories = stories.filter((s) => s.lon !== null && s.lat !== null);
  const globalStories = stories.filter((s) => s.lon === null || s.lat === null);

  const pins = geoStories.map((s) => {
    const p = project(s.lon, s.lat, W, H);
    return {
      num: s.num,
      color: REGION_MAP[s.region]?.color || '#334155',
      ox: p.x,
      oy: p.y,
      x: p.x,
      y: p.y,
    };
  });

  const minDist = 11.4;
  for (let iter = 0; iter < 70; iter++) {
    for (let i = 0; i < pins.length; i++) {
      for (let j = i + 1; j < pins.length; j++) {
        const dx = pins[j].x - pins[i].x;
        const dy = pins[j].y - pins[i].y;
        const dist = Math.hypot(dx, dy) || 0.01;
        if (dist < minDist) {
          const push = (minDist - dist) * 0.52;
          const ux = dx / dist;
          const uy = dy / dist;
          pins[i].x -= ux * push;
          pins[i].y -= uy * push;
          pins[j].x += ux * push;
          pins[j].y += uy * push;
        }
      }
    }
    for (const p of pins) {
      p.x += (p.ox - p.x) * 0.08;
      p.y += (p.oy - p.y) * 0.08;
      p.x = Math.max(7, Math.min(W - 7, p.x));
      p.y = Math.max(7, Math.min(H - 18, p.y));
    }
  }

  const leaders = pins
    .filter((p) => Math.hypot(p.x - p.ox, p.y - p.oy) > 7)
    .map(
      (p) =>
        `<line x1="${p.ox.toFixed(1)}" y1="${p.oy.toFixed(1)}" x2="${p.x.toFixed(1)}" y2="${p.y.toFixed(1)}" stroke="#475569" stroke-width="0.6" opacity="0.55"/>`,
    )
    .join('\n');

  const pinNodes = pins
    .map(
      (p) =>
        `<g transform="translate(${p.x.toFixed(1)},${p.y.toFixed(1)})">
          <circle r="5.4" fill="${p.color}" stroke="#FFFFFF" stroke-width="0.9"/>
          <text y="2.3" text-anchor="middle" font-family="Segoe UI, Arial, sans-serif" font-size="6.3" font-weight="800" fill="#FFFFFF">${p.num}</text>
        </g>`,
    )
    .join('\n');

  const globalPills = globalStories
    .map((s, idx) => {
      const gx = 8 + idx * 82;
      const gy = H - 14;
      const col = REGION_MAP[s.region]?.color || '#334155';
      return `<g transform="translate(${gx},${gy})">
        <rect x="0" y="0" width="76" height="12" rx="6" fill="#FFFFFF" fill-opacity="0.88" stroke="${col}" stroke-width="0.8"/>
        <circle cx="6.5" cy="6" r="4.8" fill="${col}"/>
        <text x="6.5" y="8.1" text-anchor="middle" font-family="Segoe UI, Arial, sans-serif" font-size="5.8" font-weight="800" fill="#FFFFFF">${s.num}</text>
        <text x="14" y="8.3" font-family="Segoe UI, Arial, sans-serif" font-size="5.8" font-weight="800" fill="#1E293B">${s.globalTag || 'GLOBAL'}</text>
      </g>`;
    })
    .join('\n');

  return `<svg viewBox="0 0 ${W} ${H}" width="${W}" height="${H}" xmlns="http://www.w3.org/2000/svg">
    <rect width="${W}" height="${H}" fill="#D5E6F2" rx="2"/>
    <g stroke="#B8D2E3" stroke-width="0.5" stroke-dasharray="2 2">
      <line x1="0" y1="${(H * 0.3).toFixed(1)}" x2="${W}" y2="${(H * 0.3).toFixed(1)}"/>
      <line x1="0" y1="${(H * 0.58).toFixed(1)}" x2="${W}" y2="${(H * 0.58).toFixed(1)}"/>
      <line x1="${(W * 0.25).toFixed(1)}" y1="0" x2="${(W * 0.25).toFixed(1)}" y2="${H}"/>
      <line x1="${(W * 0.5).toFixed(1)}" y1="0" x2="${(W * 0.5).toFixed(1)}" y2="${H}"/>
      <line x1="${(W * 0.75).toFixed(1)}" y1="0" x2="${(W * 0.75).toFixed(1)}" y2="${H}"/>
    </g>
    ${polyPaths}
    ${leaders}
    ${pinNodes}
    ${globalPills}
  </svg>`;
}
