import { REGION_MAP } from './stories.mjs';

export function renderArt(key) {
  switch (key) {
    case 'markets':
      return `<svg viewBox="0 0 316 98" width="100%" height="98" xmlns="http://www.w3.org/2000/svg">
        <rect width="316" height="98" fill="#0F1C2E"/>
        <!-- Subtle chart grid -->
        <g stroke="#243B55" stroke-width="0.7" stroke-dasharray="2 2">
          <line x1="12" y1="26" x2="210" y2="26"/>
          <line x1="12" y1="48" x2="210" y2="48"/>
          <line x1="12" y1="70" x2="210" y2="70"/>
        </g>
        <!-- TAIEX soaring area + line -->
        <polygon points="14,76 48,70 84,62 120,42 158,28 202,20 202,80 14,80" fill="#10B981" opacity="0.22"/>
        <polyline points="14,76 48,70 84,62 120,42 158,28 202,20" fill="none" stroke="#34D399" stroke-width="2.6" stroke-linejoin="round"/>
        <circle cx="202" cy="20" r="3.5" fill="#34D399"/>
        <!-- KOSPI line -->
        <polyline points="14,78 52,74 90,66 130,52 168,40 202,34" fill="none" stroke="#38BDF8" stroke-width="2.1" stroke-linejoin="round"/>
        <circle cx="202" cy="34" r="3" fill="#38BDF8"/>
        <!-- Labels on chart -->
        <text x="16" y="34" font-family="Segoe UI, Arial, sans-serif" font-size="9.5" font-weight="800" fill="#6EE7B7">TAIEX ~+9%</text>
        <text x="16" y="47" font-family="Segoe UI, Arial, sans-serif" font-size="9" font-weight="800" fill="#7DD3FC">KOSPI &gt;5,000 (+7%)</text>
        <text x="16" y="60" font-family="Segoe UI, Arial, sans-serif" font-size="8" font-weight="700" fill="#FCA5A5">NASDAQ −1.48%</text>
        <!-- Right panel: Dow 50K + Sanofi $41B -->
        <rect x="214" y="0" width="102" height="98" fill="#162942"/>
        <line x1="214" y1="0" x2="214" y2="98" stroke="#334E68" stroke-width="1"/>
        <rect x="220" y="7" width="90" height="39" rx="3" fill="#065F46" stroke="#34D399" stroke-width="1"/>
        <text x="265" y="20" text-anchor="middle" font-family="Segoe UI, Arial, sans-serif" font-size="7.5" font-weight="800" fill="#A7F3D0">DOW JONES RECORD</text>
        <text x="265" y="38" text-anchor="middle" font-family="Georgia, serif" font-size="16" font-weight="700" fill="#FFFFFF">50,018</text>
        <rect x="220" y="52" width="90" height="39" rx="3" fill="#4C1D95" stroke="#A78BFA" stroke-width="1"/>
        <text x="265" y="65" text-anchor="middle" font-family="Segoe UI, Arial, sans-serif" font-size="7.3" font-weight="800" fill="#DDD6FE">SANOFI–INSMED</text>
        <text x="265" y="83" text-anchor="middle" font-family="Georgia, serif" font-size="16" font-weight="700" fill="#FFFFFF">$41B</text>
        <!-- Top-left crimson/emerald badge -->
        <rect x="0" y="0" width="136" height="18" fill="#047857"/>
        <text x="7" y="12.5" font-family="Segoe UI, Arial, sans-serif" font-size="9.5" font-weight="800" fill="#FFFFFF">ASIA CHIP RALLY</text>
      </svg>`;

    case 'hormuz':
      return `<svg viewBox="0 0 316 98" width="100%" height="98" xmlns="http://www.w3.org/2000/svg">
        <rect width="316" height="98" fill="#CBE0EE"/>
        <!-- Iran (north) -->
        <path d="M0,0 L316,0 L316,41 L268,43 L235,32 L196,39 L152,30 L106,37 L52,25 L0,28 Z" fill="#E3D4B7" stroke="#A69578" stroke-width="1"/>
        <!-- Saudi / Arabian peninsula & Oman (south) -->
        <path d="M0,56 L58,64 L92,78 L138,76 L176,66 L212,54 L232,58 L244,82 L274,98 L0,98 Z" fill="#E8DCC3" stroke="#A69578" stroke-width="1"/>
        <!-- Riyadh PIF Tower strike icon on left -->
        <g transform="translate(22,60)">
          <rect x="0" y="6" width="12" height="28" fill="#475569"/>
          <rect x="14" y="13" width="9" height="21" fill="#64748B"/>
          <polygon points="8,1 11,8 18,7 12,12 16,17 9,15 6,20 4,13 -2,12 4,8" fill="#D9480F"/>
          <circle cx="8" cy="10" r="3" fill="#FFD43B"/>
        </g>
        <text x="49" y="75" font-family="Segoe UI, Arial, sans-serif" font-size="8.2" font-weight="800" fill="#7F1D1D">RIYADH</text>
        <text x="49" y="85" font-family="Segoe UI, Arial, sans-serif" font-size="7.3" font-weight="700" fill="#991B1B">11 HURT</text>
        <!-- Shipping lane -->
        <path d="M88,48 Q154,54 206,45 T306,62" fill="none" stroke="#1E4E79" stroke-width="1.3" stroke-dasharray="4 3" opacity="0.55"/>
        <!-- 3 Tankers ablaze -->
        <g transform="translate(114,41)">
          <path d="M0,9 L32,9 L36,4 L4,4 Z" fill="#233142"/>
          <path d="M15,4 C13,-4 19,-8 21,-1 C24,-6 26,-1 24,4 Z" fill="#D9480F"/>
          <path d="M17,4 C17,0 20,-2 22,4 Z" fill="#FFD43B"/>
        </g>
        <g transform="translate(174,36)">
          <path d="M0,9 L32,9 L36,4 L4,4 Z" fill="#233142"/>
          <path d="M12,4 C10,-4 16,-8 18,-1 C21,-6 23,-1 21,4 Z" fill="#C92A2A"/>
          <path d="M14,4 C14,0 17,-2 19,4 Z" fill="#FCC419"/>
        </g>
        <g transform="translate(238,49)">
          <path d="M0,9 L32,9 L36,4 L4,4 Z" fill="#233142"/>
          <path d="M16,4 C14,-3 20,-7 22,-1 C25,-5 27,-1 25,4 Z" fill="#D9480F"/>
          <path d="M18,4 C18,0 21,-2 23,4 Z" fill="#FFD43B"/>
        </g>
        <text x="256" y="19" font-family="Segoe UI, Arial, sans-serif" font-size="10" font-weight="800" fill="#6B5B45" letter-spacing="1.4">IRAN</text>
        <text x="150" y="72" font-family="Segoe UI, Arial, sans-serif" font-size="7.8" font-weight="700" fill="#1E4E79">STRAIT OF HORMUZ</text>
        <rect x="0" y="0" width="134" height="18" fill="#A61C1C"/>
        <text x="7" y="12.5" font-family="Segoe UI, Arial, sans-serif" font-size="9.5" font-weight="800" fill="#FFFFFF">3 TANKERS · RIYADH</text>
        <rect x="170" y="79" width="146" height="19" fill="#1E3A5F"/>
        <text x="243" y="92" text-anchor="middle" font-family="Segoe UI, Arial, sans-serif" font-size="8.8" font-weight="700" fill="#FFFFFF">QATAR PM AT WHITE HOUSE</text>
      </svg>`;

    case 'zaporizhzhia':
      return `<svg viewBox="0 0 316 98" width="100%" height="98" xmlns="http://www.w3.org/2000/svg">
        <!-- Left half: Zaporizhzhia strike -->
        <rect width="166" height="98" fill="#1E2D40"/>
        <rect x="12" y="40" width="34" height="58" fill="#334155"/>
        <rect x="52" y="30" width="50" height="68" fill="#475569"/>
        <rect x="108" y="46" width="42" height="52" fill="#334155"/>
        <g fill="#FDE68A" opacity="0.85">
          <rect x="18" y="48" width="5" height="6"/><rect x="29" y="48" width="5" height="6"/>
          <rect x="59" y="39" width="6" height="7"/><rect x="71" y="39" width="6" height="7"/>
          <rect x="115" y="54" width="5" height="6"/><rect x="130" y="66" width="5" height="6"/>
        </g>
        <polygon points="82,24 89,37 104,33 94,46 108,54 91,56 88,69 80,56 66,60 75,48 64,37 78,39" fill="#E8590C"/>
        <polygon points="83,33 88,42 97,40 91,48 97,54 88,53 84,60 80,52 73,54 78,47 74,40 81,42" fill="#FFD43B"/>
        <!-- Right half: Poland 20 km drone + Magyar-Zelenskyy -->
        <rect x="166" y="0" width="150" height="98" fill="#EAE4D6"/>
        <line x1="166" y1="0" x2="166" y2="98" stroke="#1A1D24" stroke-width="1.5"/>
        <!-- Poland border dashed line & drone track -->
        <line x1="226" y1="10" x2="226" y2="74" stroke="#991B1B" stroke-width="1.4" stroke-dasharray="3 2"/>
        <text x="196" y="21" text-anchor="middle" font-family="Segoe UI, Arial, sans-serif" font-size="8.2" font-weight="800" fill="#1E3A5F">POLAND</text>
        <text x="272" y="21" text-anchor="middle" font-family="Segoe UI, Arial, sans-serif" font-size="8.2" font-weight="800" fill="#1E4E79">UKRAINE</text>
        <!-- Drone incursion loop 20 km -->
        <path d="M286,44 Q212,26 196,44 Q212,62 282,52" fill="none" stroke="#C92A2A" stroke-width="2" stroke-dasharray="4 2"/>
        <polygon points="194,44 204,39 202,44 204,49" fill="#C92A2A"/>
        <rect x="174" y="57" width="134" height="17" rx="2" fill="#FFF5F5" stroke="#B91C1C" stroke-width="0.9"/>
        <text x="241" y="68.5" text-anchor="middle" font-family="Segoe UI, Arial, sans-serif" font-size="7.8" font-weight="800" fill="#991B1B">20 KM POLISH INCURSION</text>
        <!-- Top-left crimson banner -->
        <rect x="0" y="0" width="122" height="18" fill="#A61C1C"/>
        <text x="7" y="12.5" font-family="Segoe UI, Arial, sans-serif" font-size="9.5" font-weight="800" fill="#FFFFFF">2 DEAD · 40+ HURT</text>
        <!-- Bottom-right diplomacy bar -->
        <rect x="172" y="79" width="138" height="16" rx="2" fill="#1E4E79"/>
        <text x="241" y="90" text-anchor="middle" font-family="Segoe UI, Arial, sans-serif" font-size="8.2" font-weight="800" fill="#FFFFFF">MAGYAR VISITS ZELENSKYY</text>
      </svg>`;

    case 'chen':
      return `<svg viewBox="0 0 186 50" width="100%" height="50" xmlns="http://www.w3.org/2000/svg">
        <rect width="186" height="50" fill="#2A1215"/>
        <!-- Shanghai skyline silhouette -->
        <g fill="#5C2227">
          <rect x="8" y="26" width="12" height="24"/>
          <rect x="23" y="18" width="11" height="32"/>
          <rect x="38" y="8" width="6" height="42"/>
          <circle cx="41" cy="24" r="5" fill="#7F1D1D"/>
          <circle cx="41" cy="36" r="3.5" fill="#7F1D1D"/>
          <rect x="49" y="22" width="14" height="28"/>
        </g>
        <rect x="74" y="5" width="104" height="15" rx="2" fill="#B91C1C"/>
        <text x="126" y="15.5" text-anchor="middle" font-family="Segoe UI, Arial, sans-serif" font-size="7.8" font-weight="800" fill="#FEF08A">CCDI GRAFT PROBE</text>
        <text x="126" y="32" text-anchor="middle" font-family="Georgia, serif" font-size="11.5" font-weight="700" fill="#FFFFFF">CHEN JINING</text>
        <text x="126" y="44" text-anchor="middle" font-family="Segoe UI, Arial, sans-serif" font-size="7.6" font-weight="700" fill="#FCA5A5">4TH POLITBURO PURGE</text>
      </svg>`;

    case 'senegal':
      return `<svg viewBox="0 0 186 50" width="100%" height="50" xmlns="http://www.w3.org/2000/svg">
        <rect width="186" height="50" fill="#ECFDF5"/>
        <!-- Senegal vertical flag bar -->
        <rect x="0" y="0" width="8" height="50" fill="#15803D"/>
        <rect x="8" y="0" width="8" height="50" fill="#FACC15"/>
        <rect x="16" y="0" width="8" height="50" fill="#DC2626"/>
        <!-- Trophy icon -->
        <g transform="translate(34,7)">
          <path d="M6,2 L26,2 L24,18 C24,24 19,27 16,27 C13,27 8,24 8,18 Z" fill="#D97706" stroke="#92400E" stroke-width="1.2"/>
          <path d="M6,6 C0,6 0,16 7,17" fill="none" stroke="#D97706" stroke-width="2.2"/>
          <path d="M26,6 C32,6 32,16 25,17" fill="none" stroke="#D97706" stroke-width="2.2"/>
          <rect x="13" y="27" width="6" height="6" fill="#B45309"/>
          <rect x="8" y="33" width="16" height="4" rx="1" fill="#78350F"/>
        </g>
        <rect x="76" y="5" width="104" height="15" rx="2" fill="#15803D"/>
        <text x="128" y="15.5" text-anchor="middle" font-family="Segoe UI, Arial, sans-serif" font-size="8" font-weight="800" fill="#FFFFFF">CAS RULING · AFCON</text>
        <text x="128" y="33" text-anchor="middle" font-family="Georgia, serif" font-size="11.5" font-weight="700" fill="#064E3B">TITLE RESTORED</text>
        <text x="128" y="44" text-anchor="middle" font-family="Segoe UI, Arial, sans-serif" font-size="7.6" font-weight="700" fill="#475569">SENEGAL 1–0 MOROCCO</text>
      </svg>`;

    case 'solomon':
      return `<svg viewBox="0 0 186 50" width="100%" height="50" xmlns="http://www.w3.org/2000/svg">
        <rect width="186" height="50" fill="#D4E8F2"/>
        <path d="M8,22 L38,18 L58,28 L52,48 L12,48 Z" fill="#E4D6BA" stroke="#9C8D71" stroke-width="0.9"/>
        <text x="32" y="39" text-anchor="middle" font-family="Segoe UI, Arial, sans-serif" font-size="7.3" font-weight="800" fill="#5C4F3D">AUS</text>
        <g fill="#0E7490">
          <ellipse cx="96" cy="24" rx="7" ry="3" transform="rotate(20 96 24)"/>
          <ellipse cx="109" cy="29" rx="6" ry="2.5" transform="rotate(20 109 29)"/>
        </g>
        <path d="M52,33 Q76,40 98,27" fill="none" stroke="#0E7490" stroke-width="2.5"/>
        <path d="M104,22 Q118,10 144,8" fill="none" stroke="#A61C1C" stroke-width="1.6" stroke-dasharray="3 2"/>
        <g transform="translate(120,12)" stroke="#A61C1C" stroke-width="2.2">
          <line x1="-4" y1="-4" x2="4" y2="4"/><line x1="4" y1="-4" x2="-4" y2="4"/>
        </g>
        <rect x="116" y="29" width="66" height="16" rx="2" fill="#0E7490"/>
        <text x="149" y="40" text-anchor="middle" font-family="Segoe UI, Arial, sans-serif" font-size="7.5" font-weight="800" fill="#FFFFFF">CANBERRA PACT</text>
        <rect x="0" y="0" width="84" height="14" fill="#A61C1C"/>
        <text x="5" y="10" font-family="Segoe UI, Arial, sans-serif" font-size="7.5" font-weight="800" fill="#FFFFFF">CHINA PACT ENDS</text>
      </svg>`;

    case 'euclid':
      return `<svg viewBox="0 0 186 50" width="100%" height="50" xmlns="http://www.w3.org/2000/svg">
        <rect width="186" height="50" fill="#0F172A"/>
        <g fill="#E2E8F0">
          <circle cx="18" cy="14" r="1"/><circle cx="44" cy="38" r="1.1"/><circle cx="76" cy="11" r="0.9"/>
          <circle cx="155" cy="12" r="1.2"/><circle cx="172" cy="38" r="1"/>
        </g>
        <line x1="106" y1="33" x2="152" y2="10" stroke="#38BDF8" stroke-width="3" opacity="0.65" stroke-linecap="round"/>
        <line x1="106" y1="33" x2="62" y2="54" stroke="#38BDF8" stroke-width="2.2" opacity="0.45" stroke-linecap="round"/>
        <circle cx="106" cy="33" r="11" fill="#F59E0B" opacity="0.28"/>
        <circle cx="106" cy="33" r="5.5" fill="#FDE047"/>
        <circle cx="106" cy="33" r="2.6" fill="#FFFFFF"/>
        <g transform="translate(26,22) rotate(-18)">
          <rect x="0" y="0" width="17" height="9" rx="2" fill="#CBD5E1"/>
          <rect x="17" y="2" width="5" height="5" fill="#38BDF8"/>
          <rect x="-4" y="-4" width="4" height="17" fill="#64748B"/>
        </g>
        <rect x="0" y="0" width="88" height="14" fill="#1D4ED8"/>
        <text x="5" y="10" font-family="Segoe UI, Arial, sans-serif" font-size="7.8" font-weight="800" fill="#FFFFFF">z = 8.13 RECORD</text>
        <text x="180" y="45" text-anchor="end" font-family="Segoe UI, Arial, sans-serif" font-size="7.8" font-weight="700" fill="#93C5FD">630M YRS</text>
      </svg>`;

    case 'ukheat':
      return `<svg viewBox="0 0 186 50" width="100%" height="50" xmlns="http://www.w3.org/2000/svg">
        <rect width="186" height="50" fill="#FFF7ED"/>
        <line x1="12" y1="40" x2="108" y2="40" stroke="#9A3412" stroke-width="1"/>
        <rect x="15" y="32" width="10" height="8" fill="#CBD5E1"/>
        <rect x="29" y="28" width="10" height="12" fill="#CBD5E1"/>
        <rect x="43" y="20" width="10" height="20" fill="#94A3B8"/>
        <rect x="57" y="26" width="10" height="14" fill="#CBD5E1"/>
        <rect x="71" y="22" width="10" height="18" fill="#94A3B8"/>
        <rect x="85" y="6" width="14" height="34" fill="#C92A2A"/>
        <text x="48" y="47.5" text-anchor="middle" font-family="Segoe UI, Arial, sans-serif" font-size="6.8" fill="#64748B">'22</text>
        <text x="92" y="47.5" text-anchor="middle" font-family="Segoe UI, Arial, sans-serif" font-size="7.4" font-weight="800" fill="#C92A2A">'26</text>
        <text x="110" y="23" font-family="Georgia, serif" font-size="16" font-weight="700" fill="#B91C1C">5,258</text>
        <text x="110" y="34" font-family="Segoe UI, Arial, sans-serif" font-size="7.8" font-weight="800" fill="#9A3412">HEAT DEATHS</text>
        <text x="110" y="44" font-family="Segoe UI, Arial, sans-serif" font-size="7.3" font-weight="700" fill="#64748B">41 HOT DAYS</text>
      </svg>`;

    case 'ebola':
      return `<svg viewBox="0 0 186 50" width="100%" height="50" xmlns="http://www.w3.org/2000/svg">
        <rect width="186" height="50" fill="#ECFDF5"/>
        <g transform="translate(20,9)">
          <rect x="4" y="0" width="15" height="4.5" rx="1" fill="#0F766E"/>
          <rect x="6" y="4.5" width="11" height="3.5" fill="#94A3B8"/>
          <rect x="2" y="8" width="19" height="25" rx="3" fill="#FFFFFF" stroke="#0F766E" stroke-width="1.5"/>
          <rect x="3" y="20" width="17" height="12" rx="2" fill="#5EEAD4"/>
        </g>
        <g transform="translate(56,11)">
          <path d="M13,0 L26,4.5 L26,16 C26,23.5 13,30 13,30 C13,30 0,23.5 0,16 L0,4.5 Z" fill="#1F6B48"/>
          <rect x="10.5" y="7" width="5" height="14" rx="1" fill="#FFFFFF"/>
          <rect x="6" y="11.5" width="14" height="5" rx="1" fill="#FFFFFF"/>
        </g>
        <text x="96" y="24" font-family="Georgia, serif" font-size="16.5" font-weight="700" fill="#065F46">1.5M</text>
        <text x="96" y="35.5" font-family="Segoe UI, Arial, sans-serif" font-size="8" font-weight="800" fill="#047857">BUNDIBUGYO</text>
        <text x="96" y="45" font-family="Segoe UI, Arial, sans-serif" font-size="7.4" font-weight="700" fill="#475569">DOSES · DRC</text>
      </svg>`;

    case 'hasina':
      return `<svg viewBox="0 0 186 50" width="100%" height="50" xmlns="http://www.w3.org/2000/svg">
        <rect width="186" height="50" fill="#F8FAFC"/>
        <!-- Bangladesh subtle color bar -->
        <rect x="0" y="0" width="8" height="50" fill="#006A4E"/>
        <circle cx="4" cy="25" r="2.6" fill="#F42A41"/>
        <!-- Delhi to Dhaka flight arc -->
        <circle cx="28" cy="34" r="3.5" fill="#1E4E79"/>
        <text x="28" y="46" text-anchor="middle" font-family="Segoe UI, Arial, sans-serif" font-size="7.4" font-weight="800" fill="#1E3A5F">DELHI</text>
        <circle cx="106" cy="34" r="3.5" fill="#B91C1C"/>
        <text x="106" y="46" text-anchor="middle" font-family="Segoe UI, Arial, sans-serif" font-size="7.4" font-weight="800" fill="#991B1B">DHAKA</text>
        <path d="M31,32 Q68,8 103,32" fill="none" stroke="#1E4E79" stroke-width="1.8" stroke-dasharray="3 2"/>
        <!-- Plane silhouette -->
        <polygon points="73,19 64,16 66,20 64,24" fill="#1E4E79"/>
        <!-- Stamp -->
        <rect x="118" y="7" width="64" height="36" rx="3" fill="#FFF5F5" stroke="#B91C1C" stroke-width="1.4"/>
        <text x="150" y="21" text-anchor="middle" font-family="Georgia, serif" font-size="11.5" font-weight="700" fill="#991B1B">DEC 16</text>
        <text x="150" y="31.5" text-anchor="middle" font-family="Segoe UI, Arial, sans-serif" font-size="7.2" font-weight="800" fill="#B91C1C">DHAKA</text>
        <text x="150" y="40" text-anchor="middle" font-family="Segoe UI, Arial, sans-serif" font-size="7.2" font-weight="800" fill="#B91C1C">REJECTS</text>
      </svg>`;

    case 'unodc':
      return `<svg viewBox="0 0 186 50" width="100%" height="50" xmlns="http://www.w3.org/2000/svg">
        <rect width="186" height="50" fill="#FAF5FF"/>
        <text x="7" y="13" font-family="Segoe UI, Arial, sans-serif" font-size="7.4" font-weight="700" fill="#475569">AFRICA</text>
        <rect x="50" y="6.5" width="66" height="7.5" rx="1.5" fill="#9E2A2B"/>
        <text x="120" y="13" font-family="Segoe UI, Arial, sans-serif" font-size="7.6" font-weight="800" fill="#9E2A2B">2.9</text>
        <text x="7" y="26" font-family="Segoe UI, Arial, sans-serif" font-size="7.4" font-weight="700" fill="#475569">AMERICAS</text>
        <rect x="50" y="19.5" width="32" height="7.5" rx="1.5" fill="#6D28D9"/>
        <text x="86" y="26" font-family="Segoe UI, Arial, sans-serif" font-size="7.6" font-weight="800" fill="#5B21B6">1.4</text>
        <text x="7" y="39" font-family="Segoe UI, Arial, sans-serif" font-size="7.3" font-weight="700" fill="#475569">PER 100K</text>
        <rect x="128" y="15" width="54" height="30" rx="3" fill="#5B21B6"/>
        <text x="155" y="29" text-anchor="middle" font-family="Georgia, serif" font-size="11.5" font-weight="700" fill="#FFFFFF">47K</text>
        <text x="155" y="40" text-anchor="middle" font-family="Segoe UI, Arial, sans-serif" font-size="7" font-weight="700" fill="#EDE9FE">5 / HOUR</text>
      </svg>`;

    case 'ucl':
      return `<svg viewBox="0 0 186 50" width="100%" height="50" xmlns="http://www.w3.org/2000/svg">
        <rect width="186" height="50" fill="#155E34"/>
        <!-- Subtle pitch markings -->
        <line x1="93" y1="0" x2="93" y2="50" stroke="#FFFFFF" stroke-width="0.8" opacity="0.25"/>
        <circle cx="93" cy="25" r="14" fill="none" stroke="#FFFFFF" stroke-width="0.8" opacity="0.25"/>
        <!-- Scoreboard -->
        <rect x="8" y="5" width="170" height="40" rx="3" fill="#0F172A" fill-opacity="0.88" stroke="#94A3B8" stroke-width="0.8"/>
        <text x="16" y="17" font-family="Segoe UI, Arial, sans-serif" font-size="8.4" font-weight="800" fill="#FDE047">REAL MADRID</text>
        <text x="170" y="17" text-anchor="end" font-family="Segoe UI, Arial, sans-serif" font-size="8.8" font-weight="800" fill="#FFFFFF">5–1 PSV</text>
        <text x="16" y="29" font-family="Segoe UI, Arial, sans-serif" font-size="8.2" font-weight="700" fill="#E2E8F0">ARSENAL</text>
        <text x="170" y="29" text-anchor="end" font-family="Segoe UI, Arial, sans-serif" font-size="8.4" font-weight="700" fill="#CBD5E1">1–1 BVB</text>
        <text x="16" y="41" font-family="Segoe UI, Arial, sans-serif" font-size="8.2" font-weight="700" fill="#7DD3FC">MAN CITY</text>
        <text x="170" y="41" text-anchor="end" font-family="Segoe UI, Arial, sans-serif" font-size="8.4" font-weight="700" fill="#CBD5E1">2–2 NAPOLI</text>
      </svg>`;

    case 'colombia':
      return `<svg viewBox="0 0 186 50" width="100%" height="50" xmlns="http://www.w3.org/2000/svg">
        <rect width="186" height="50" fill="#F8FAFC"/>
        <rect x="0" y="0" width="10" height="25" fill="#FACC15"/>
        <rect x="0" y="25" width="10" height="12.5" fill="#1D4ED8"/>
        <rect x="0" y="37.5" width="10" height="12.5" fill="#DC2626"/>
        <line x1="24" y1="33" x2="170" y2="33" stroke="#1E3A5F" stroke-width="2.4"/>
        <circle cx="24" cy="33" r="4.2" fill="#1E3A5F"/>
        <circle cx="170" cy="33" r="4.2" fill="#B45309"/>
        <text x="24" y="46" text-anchor="middle" font-family="Segoe UI, Arial, sans-serif" font-size="7.6" font-weight="800" fill="#1E3A5F">2016</text>
        <text x="170" y="46" text-anchor="middle" font-family="Segoe UI, Arial, sans-serif" font-size="7.6" font-weight="800" fill="#B45309">2026</text>
        <text x="97" y="19" text-anchor="middle" font-family="Georgia, serif" font-size="14.5" font-weight="700" fill="#1E3A5F">10 YEARS</text>
        <text x="97" y="28.5" text-anchor="middle" font-family="Segoe UI, Arial, sans-serif" font-size="7.4" font-weight="800" fill="#64748B">FARC PEACE ACCORD</text>
      </svg>`;

    default:
      return `<svg viewBox="0 0 186 50" width="100%" height="50" xmlns="http://www.w3.org/2000/svg"><rect width="186" height="50" fill="#E2E8F0"/></svg>`;
  }
}

function project(lon, lat, w, h) {
  const x = ((lon + 180) / 360) * w;
  const y = ((82 - lat) / 142) * h;
  return { x: Math.max(8, Math.min(w - 8, x)), y: Math.max(8, Math.min(h - 8, y)) };
}

export function renderWorldMap(stories) {
  const W = 294;
  const H = 172;

  const landPolys = [
    [[-168,66],[-140,70],[-95,70],[-62,55],[-55,47],[-75,35],[-81,25],[-97,22],[-84,10],[-87,13],[-105,20],[-117,32],[-125,49],[-152,60]],
    [[-52,60],[-20,70],[-18,81],[-55,81],[-60,72]],
    [[-78,10],[-62,10],[-35,-6],[-38,-18],[-53,-34],[-68,-54],[-74,-45],[-72,-18],[-81,-4]],
    [[-9,37],[3,43],[14,45],[26,41],[38,47],[48,55],[58,68],[28,71],[12,68],[5,60],[9,54],[-5,48],[-9,43]],
    [[-6,50],[2,51],[1,58],[-6,58]],
    [[-17,15],[-6,36],[11,37],[32,31],[43,12],[51,12],[40,-10],[35,-25],[20,-35],[12,-17],[9,4],[-8,5]],
    [[44,-25],[49,-13],[50,-16],[46,-25]],
    [[27,40],[36,36],[35,31],[44,13],[59,22],[56,27],[50,30],[67,25],[77,8],[88,22],[100,14],[104,2],[109,13],[121,25],[122,38],[129,35],[131,42],[142,54],[162,60],[178,66],[140,72],[90,74],[58,68],[48,55],[38,47]],
    [[130,31],[136,34],[141,38],[145,44],[140,42],[136,37],[130,33]],
    [[95,5],[105,-6],[114,-8],[115,-7],[106,-5],[96,4]],
    [[109,2],[118,5],[118,-3],[111,-3]],
    [[114,-22],[130,-12],[142,-11],[153,-27],[148,-38],[135,-34],[115,-34]],
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
  for (let iter = 0; iter < 75; iter++) {
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
      p.y = Math.max(7, Math.min(H - 19, p.y));
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
      const gx = 8 + idx * 88;
      const gy = H - 15;
      const col = REGION_MAP[s.region]?.color || '#334155';
      return `<g transform="translate(${gx},${gy})">
        <rect x="0" y="0" width="82" height="12.5" rx="6" fill="#FFFFFF" fill-opacity="0.9" stroke="${col}" stroke-width="0.8"/>
        <circle cx="6.5" cy="6.2" r="4.8" fill="${col}"/>
        <text x="6.5" y="8.3" text-anchor="middle" font-family="Segoe UI, Arial, sans-serif" font-size="5.8" font-weight="800" fill="#FFFFFF">${s.num}</text>
        <text x="14" y="8.5" font-family="Segoe UI, Arial, sans-serif" font-size="5.8" font-weight="800" fill="#1E293B">${s.globalTag || 'GLOBAL'}</text>
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
