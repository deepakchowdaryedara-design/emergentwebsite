import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section 
      id="hero" 
      data-testid="hero-section" 
      className="relative w-full min-h-[calc(100vh-120px)] bg-gradient-to-br from-[#F4F5F7] via-[#FFFFFF] to-[#E9F0FC] z-10 overflow-hidden px-4 sm:px-6 lg:px-12 xl:px-20 flex flex-col justify-center py-12 md:py-20 border-b border-slate-100"
    >
      {/* CSS Keyframe Animations Block */}
      <style>{`
        @keyframes floatSlow {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        @keyframes floatDelayed {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(8px); }
        }
        @keyframes spinGear {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        .animate-float-slow {
          animation: floatSlow 6s ease-in-out infinite;
        }
        .animate-float-delayed {
          animation: floatDelayed 7s ease-in-out infinite;
        }
        .animate-spin-gear {
          animation: spinGear 25s linear infinite;
          transform-origin: 340px 180px;
        }
      `}</style>

      {/* Decorative High-Tech Background Glows */}
      <div className="absolute right-[-100px] top-[-50px] w-[500px] h-[500px] rounded-full bg-blue-300/20 blur-[130px] -z-10 pointer-events-none animate-pulse duration-[8000ms]" />
      <div className="absolute left-[-200px] bottom-[-100px] w-[600px] h-[600px] rounded-full bg-indigo-200/20 blur-[150px] -z-10 pointer-events-none" />

      {/* Main Content Area */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center w-full max-w-[1400px] mx-auto z-10">
        
        {/* Left Column: Heading & CTA */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="lg:col-span-5 flex flex-col items-start justify-center text-left"
        >
          {/* Subtle Technology Badge */}
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0052CC]/10 text-[#0052CC] font-sans text-xs font-semibold uppercase tracking-wider mb-6"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#0052CC] animate-ping" />
            Co-development Workspace
          </motion.div>

          <h1 className="font-sans text-[#172B4D] text-[2.75rem] sm:text-[3.5rem] lg:text-[4rem] xl:text-[4.25rem] leading-[1.1] font-bold tracking-tight mb-6">
            Collaborative AI <br />
            Engineering
          </h1>
          <p className="text-[#42526E] font-sans text-base sm:text-lg lg:text-xl mb-8 max-w-md font-normal leading-relaxed">
            NeuralTrix AI is your co-development workspace where advanced artificial intelligence, expert consulting, and enterprise software engineering align.
          </p>
          
          <div className="flex flex-col sm:flex-row sm:items-center gap-6 w-full sm:w-auto">
            <Link
              to="/#page-contact"
              onClick={(e) => {
                const element = document.getElementById("page-contact");
                if (element) {
                  e.preventDefault();
                  element.scrollIntoView({ behavior: "smooth" });
                }
              }}
              className="inline-flex items-center justify-center px-6 py-3.5 bg-[#FFAB00] hover:bg-[#FFC400] text-[#172B4D] font-bold rounded-[4px] text-base transition-all duration-300 shadow-sm hover:shadow-[0_8px_20px_rgba(255,171,0,0.35)] active:scale-[0.98]"
            >
              Schedule a Consultation
            </Link>
            
            <Link
              to="/services"
              className="inline-flex items-center justify-center sm:justify-start gap-3 text-[#0052CC] hover:text-[#0065FF] font-semibold text-base transition-colors duration-200 group py-2"
            >
              {/* Play Icon */}
              <div className="w-7 h-7 rounded-full bg-[#0052CC] group-hover:bg-[#0065FF] text-white flex items-center justify-center shadow-sm transition-colors duration-200 group-hover:scale-105 group-hover:shadow-md">
                <svg className="w-3 h-3 fill-current ml-0.5" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
              <span className="group-hover:translate-x-0.5 transition-transform duration-200">
                Explore Our Services
              </span>
            </Link>
          </div>
        </motion.div>

        {/* Right Column: Custom High-Fidelity SVG Collaboration Illustration (Enhanced & Animating) */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.8, ease: "easeOut" }}
          className="lg:col-span-7 flex items-center justify-center relative w-full"
        >
          {/* Subtle Backglow under SVG for premium depth */}
          <div className="absolute w-[450px] h-[300px] bg-blue-100/40 rounded-full blur-[90px] -z-10 pointer-events-none" />

          <svg 
            className="w-full max-w-[730px] h-auto overflow-visible select-none transition-transform duration-500 hover:scale-[1.025]" 
            viewBox="0 0 760 520" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Background Dot Matrix Pattern */}
            <defs>
              <pattern id="lightYellowDots" width="24" height="24" patternUnits="userSpaceOnUse">
                <circle cx="12" cy="12" r="2" fill="#FFEBB0" />
              </pattern>
            </defs>
            <rect x="0" y="0" width="760" height="520" fill="url(#lightYellowDots)" className="opacity-95" />

            {/* Horizontal Platforms / Shelves */}
            {/* Top Shelf */}
            <line x1="410" y1="210" x2="580" y2="210" stroke="#DFE1E6" strokeWidth="6" strokeLinecap="round" />
            
            {/* Middle Shelf */}
            <line x1="410" y1="330" x2="700" y2="330" stroke="#DFE1E6" strokeWidth="6" strokeLinecap="round" />

            {/* Lower Left Shelf */}
            <line x1="60" y1="360" x2="310" y2="360" stroke="#DFE1E6" strokeWidth="6" strokeLinecap="round" />

            {/* ENHANCED ELEMENT 1: Floating Dashboard Window with Line Graph (Animate Float) */}
            <g id="floating-graph-dashboard" className="animate-float-slow">
              {/* Shadow Panel */}
              <rect x="62" y="82" width="130" height="85" rx="4" fill="#000000" className="opacity-5" />
              {/* Main Panel */}
              <rect x="60" y="80" width="130" height="85" rx="4" fill="#FFFFFF" stroke="#DFE1E6" strokeWidth="3" />
              {/* Window Header */}
              <rect x="61.5" y="81.5" width="127" height="15" rx="2" fill="#F4F5F7" />
              <circle cx="70" cy="89" r="3" fill="#FF5252" />
              <circle cx="78" cy="89" r="3" fill="#FFC400" />
              <circle cx="86" cy="89" r="3" fill="#36B37E" />
              {/* Line graph inside */}
              <path d="M75 145 L95 120 L115 135 L135 110 L155 128 L175 105" stroke="#0052CC" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
              <circle cx="175" cy="105" r="3.5" fill="#FFAB00" />
            </g>

            {/* ENHANCED ELEMENT 2: Floating Document Sheet Card (Animate Float Delayed) */}
            <g id="floating-doc-sheet" className="animate-float-delayed">
              {/* Shadow */}
              <rect x="77" y="217" width="90" height="60" rx="3" fill="#000000" className="opacity-5" />
              {/* Main Body */}
              <rect x="75" y="215" width="90" height="60" rx="3" fill="#FFFFFF" stroke="#DFE1E6" strokeWidth="2.5" />
              {/* Grid Lines */}
              <line x1="90" y1="230" x2="150" y2="230" stroke="#0052CC" strokeWidth="3.5" strokeLinecap="round" />
              <line x1="90" y1="242" x2="135" y2="242" stroke="#36B37E" strokeWidth="3.5" strokeLinecap="round" />
              <line x1="90" y1="254" x2="145" y2="254" stroke="#DFE1E6" strokeWidth="3.5" strokeLinecap="round" />
            </g>

            {/* ENHANCED ELEMENT 3: Floating Office Elements (Animate spin) */}
            <g id="floating-office-elements">
              {/* Tech Gear (Animating slowly) */}
              <g className="animate-spin-gear">
                <circle cx="340" cy="180" r="10" stroke="#00B8D9" strokeWidth="3" fill="none" />
                <circle cx="340" cy="180" r="15" stroke="#00B8D9" strokeWidth="3.5" strokeDasharray="4 6" fill="none" />
              </g>
              
              {/* Checklist Panel */}
              <g className="animate-float-slow">
                <rect x="290" y="70" width="40" height="50" rx="3" fill="#FFC400" className="opacity-95" />
                <line x1="300" y1="85" x2="320" y2="85" stroke="#FFFFFF" strokeWidth="2.5" strokeLinecap="round" />
                <line x1="300" y1="95" x2="315" y2="95" stroke="#FFFFFF" strokeWidth="2.5" strokeLinecap="round" />
                <line x1="300" y1="105" x2="320" y2="105" stroke="#FFFFFF" strokeWidth="2.5" strokeLinecap="round" />
              </g>
            </g>

            {/* LOWER LEFT SHELF ACTIVITIES (Potted Plant & Cross-legged Worker) */}
            {/* Office terracotta potted plant */}
            <g id="office-plant">
              <path d="M110 360 L113 338 H127 L130 360 Z" fill="#FF8B00" />
              <circle cx="112" cy="328" r="9" fill="#36B37E" />
              <circle cx="128" cy="328" r="11" fill="#36B37E" />
              <circle cx="120" cy="318" r="10" fill="#36B37E" />
            </g>

            {/* Team character sitting cross-legged working on laptop */}
            <g id="sitting-laptop-worker">
              {/* Legs crossed */}
              <path d="M155 360 C145 360, 145 348, 155 348 H185 C195 348, 195 360, 185 360 Z" stroke="#42526E" strokeWidth="6.5" strokeLinecap="round" fill="none" />
              {/* Torso */}
              <path d="M160 310 C155 310, 154 325, 156 348 H184 C186 325, 185 310, 180 310 Z" fill="#0052CC" />
              {/* Face & Head */}
              <circle cx="170" cy="298" r="7.5" fill="#FFC400" />
              <path d="M164 296 C164 290, 176 290, 177 296 C177 294, 169 292, 164 296 Z" fill="#172B4D" /> {/* Hair */}
              {/* Arms typing */}
              <path d="M160 320 C164 322, 178 322, 184 330" stroke="#0052CC" strokeWidth="4.5" strokeLinecap="round" fill="none" />
              <path d="M180 320 C184 322, 188 322, 192 330" stroke="#0052CC" strokeWidth="4.5" strokeLinecap="round" fill="none" />
              <circle cx="184" cy="330" r="3.5" fill="#FFC400" />
              <circle cx="192" cy="330" r="3.5" fill="#FFC400" />
              {/* Grey Laptop */}
              <path d="M185 330 L200 330 L205 320" stroke="#97A0AF" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
              <rect x="190" y="328" width="10" height="2" rx="0.5" fill="#0052CC" />
            </g>

            {/* TOP SHELF ACTIVITIES */}
            {/* Floating turquoise action badge */}
            <rect x="465" y="112" width="22" height="6" rx="1" fill="#00B8D9" />
            <line x1="465" y1="126" x2="495" y2="126" stroke="#00B8D9" strokeWidth="2.5" strokeLinecap="round" />
            <line x1="465" y1="134" x2="488" y2="134" stroke="#00B8D9" strokeWidth="2.5" strokeLinecap="round" />
            <line x1="465" y1="142" x2="491" y2="142" stroke="#00B8D9" strokeWidth="2.5" strokeLinecap="round" />

            {/* Crouching character (pie chart designer) */}
            <g id="pie-designer-char">
              {/* Slate trousers */}
              <path d="M445 185 C442 185, 444 207, 448 207 C452 207, 452 195, 456 207 C459 207, 461 185, 458 185 Z" fill="#42526E" />
              <path d="M448 207 C446 207, 442 206, 444 209 C445 210, 449 210, 449 207" fill="#172B4D" /> {/* shoe */}
              <path d="M456 207 C454 207, 450 206, 452 209 C453 210, 457 210, 457 207" fill="#172B4D" /> {/* shoe */}
              {/* Green shirt */}
              <path d="M452 150 C444 150, 443 175, 445 185 H458 C460 175, 459 150, 452 150 Z" fill="#36B37E" />
              {/* Hands & Arms */}
              <path d="M445 162 C438 162, 434 148, 432 144" stroke="#36B37E" strokeWidth="4.5" strokeLinecap="round" />
              <circle cx="432" cy="143" r="3" fill="#FFC400" />
              <path d="M458 160 C465 158, 478 145, 492 145" stroke="#36B37E" strokeWidth="4.5" strokeLinecap="round" />
              <circle cx="492" cy="145" r="3" fill="#FFC400" />
              {/* Face & Head */}
              <circle cx="452" cy="138" r="7.5" fill="#FFC400" />
              <path d="M445 137 C445 131, 458 131, 459 137 C459 135, 451 133, 445 137 Z" fill="#172B4D" /> {/* Hair */}
            </g>

            {/* Giant Pie Chart */}
            <g id="pie-chart-graphic">
              {/* Yellow slice base */}
              <circle cx="535" cy="165" r="38" fill="#FFC400" />
              {/* Orange slice */}
              <path d="M535 165 L535 127 A38 38 0 1 1 498 174 Z" fill="#FFAB00" />
              {/* Red-orange wedge */}
              <path d="M535 165 L498 174 A38 38 0 0 1 535 127 Z" fill="#FF8B00" />
            </g>

            {/* MIDDLE SHELF ACTIVITIES */}
            {/* Purple Bar Chart */}
            <g id="bar-chart-graphic" className="opacity-90">
              <rect x="525" y="278" width="18" height="48" rx="2" fill="#6554C0" />
              <rect x="550" y="258" width="18" height="68" rx="2" fill="#6554C0" />
              <rect x="575" y="238" width="18" height="88" rx="2" fill="#6554C0" />
            </g>

            {/* Character on the right (yellow-orange shirt, editing grid) */}
            <g id="grid-editor-char">
              {/* Orange shorts & legs */}
              <rect x="635" y="280" width="5" height="15" fill="#FFAB00" />
              <rect x="644" y="280" width="5" height="15" fill="#FFAB00" />
              <path d="M635 295 L633 327 C633 328, 638 328, 638 327 Z" stroke="#FFC400" strokeWidth="4.5" strokeLinecap="round" />
              <path d="M644 295 L646 327 C646 328, 651 328, 651 327 Z" stroke="#FFC400" strokeWidth="4.5" strokeLinecap="round" />
              <rect x="630" y="324" width="9" height="4" rx="1.5" fill="#172B4D" />
              <rect x="643" y="324" width="9" height="4" rx="1.5" fill="#172B4D" />
              {/* Yellow shirt torso */}
              <path d="M633 245 C628 245, 627 265, 630 282 H649 C652 265, 651 245, 646 245 Z" fill="#FFC400" />
              {/* Arms & Hands */}
              <path d="M646 254 C653 252, 668 238, 680 236" stroke="#FFC400" strokeWidth="4.5" strokeLinecap="round" />
              <circle cx="680" cy="236" r="3" fill="#FFC400" />
              <path d="M633 254 C628 256, 620 268, 622 278" stroke="#FFC400" strokeWidth="4.5" strokeLinecap="round" />
              <circle cx="622" cy="278" r="3" fill="#FFC400" />
              {/* Head & dark skin / hair */}
              <circle cx="639.5" cy="232" r="7.5" fill="#FFC400" />
              <path d="M633 230 C633 223, 646 223, 647 230 C647 228, 639 226, 633 230 Z" fill="#172B4D" />
            </g>

            {/* Blue Kanban Grid / Code Board */}
            <g id="blue-grid-board">
              <rect x="668" y="195" width="76" height="130" rx="3" fill="#0052CC" />
              {/* White grid lines inside */}
              <line x1="687" y1="195" x2="687" y2="325" stroke="#FFFFFF" strokeWidth="2.5" opacity="0.3" />
              <line x1="706" y1="195" x2="706" y2="325" stroke="#FFFFFF" strokeWidth="2.5" opacity="0.3" />
              <line x1="725" y1="195" x2="725" y2="325" stroke="#FFFFFF" strokeWidth="2.5" opacity="0.3" />
              
              <line x1="668" y1="218" x2="744" y2="218" stroke="#FFFFFF" strokeWidth="2.5" opacity="0.3" />
              <line x1="668" y1="241" x2="744" y2="241" stroke="#FFFFFF" strokeWidth="2.5" opacity="0.3" />
              <line x1="668" y1="264" x2="744" y2="264" stroke="#FFFFFF" strokeWidth="2.5" opacity="0.3" />
              <line x1="668" y1="287" x2="744" y2="287" stroke="#FFFFFF" strokeWidth="2.5" opacity="0.3" />
              <line x1="668" y1="310" x2="744" y2="310" stroke="#FFFFFF" strokeWidth="2.5" opacity="0.3" />
            </g>

            {/* LADDER & CLIMBER ACTIVITIES (Bottom/Center) */}
            {/* The Blue Ladder */}
            <g id="ladder-structure">
              <line x1="432" y1="350" x2="382" y2="505" stroke="#0052CC" strokeWidth="5.5" strokeLinecap="round" />
              <line x1="488" y1="350" x2="438" y2="505" stroke="#0052CC" strokeWidth="5.5" strokeLinecap="round" />
              
              <line x1="428" y1="365" x2="484" y2="365" stroke="#0052CC" strokeWidth="4" />
              <line x1="421" y1="390" x2="476" y2="390" stroke="#0052CC" strokeWidth="4" />
              <line x1="413" y1="415" x2="468" y2="415" stroke="#0052CC" strokeWidth="4" />
              <line x1="405" y1="440" x2="460" y2="440" stroke="#0052CC" strokeWidth="4" />
              <line x1="397" y1="465" x2="452" y2="465" stroke="#0052CC" strokeWidth="4" />
              <line x1="389" y1="490" x2="444" y2="490" stroke="#0052CC" strokeWidth="4" />
            </g>

            {/* Character climbing the ladder */}
            <g id="climber-char">
              {/* Black pants & limbs */}
              <path d="M422 418 L418 438 H412" stroke="#172B4D" strokeWidth="4.5" strokeLinecap="round" fill="none" />
              <path d="M428 418 L426 438 H433" stroke="#172B4D" strokeWidth="4.5" strokeLinecap="round" fill="none" />
              {/* Blue shirt torso */}
              <path d="M418 382 C412 382, 411 398, 414 419 H432 C435 398, 434 382, 428 382 Z" fill="#0052CC" />
              {/* Head & Hair */}
              <circle cx="423" cy="371" r="7" fill="#FFC400" />
              <path d="M417 370 C417 364, 429 364, 429 370 C429 368, 422 366, 417 370 Z" fill="#172B4D" />
              {/* Arms reaching up */}
              <path d="M428 388 C434 386, 442 368, 452 355" stroke="#0052CC" strokeWidth="4.5" strokeLinecap="round" fill="none" />
              <circle cx="452" cy="355" r="3.5" fill="#FFC400" />
              <path d="M418 388 C411 388, 404 374, 396 368" stroke="#0052CC" strokeWidth="4.5" strokeLinecap="round" fill="none" />
              <circle cx="396" cy="368" r="3.5" fill="#FFC400" />
            </g>

            {/* The Floating Orange "A" Confluence Icon Folder */}
            <g id="confluence-orange-folder">
              <rect x="368" y="295" width="52" height="52" rx="12" fill="#DE350B" />
              {/* Stylized white Atlassian-like "A" symbol */}
              <path d="M386 331 L394 311 H395 L403 331 H399.5 L394.5 318 L389.5 331 Z" fill="#FFFFFF" strokeWidth="1" />
              <rect x="391.5" y="322" width="6" height="3" fill="#FFFFFF" />
            </g>

            {/* Character at bottom assisting ladder/folder */}
            <g id="assistant-char">
              {/* Black pants */}
              <path d="M344 445 L334 505 C334 506, 339 506, 339 505 Z" stroke="#172B4D" strokeWidth="4.5" strokeLinecap="round" />
              <path d="M352 445 L358 505 C358 506, 363 506, 363 505 Z" stroke="#172B4D" strokeWidth="4.5" strokeLinecap="round" />
              {/* Green shirt */}
              <path d="M340 398 C334 398, 333 416, 336 446 H359 C362 416, 361 398, 355 398 Z" fill="#36B37E" />
              {/* Reaching up arms */}
              <path d="M352 406 C358 402, 364 380, 375 365" stroke="#36B37E" strokeWidth="4.5" strokeLinecap="round" />
              <circle cx="375" cy="365" r="3.5" fill="#FFC400" />
              <path d="M340 406 C334 406, 324 416, 320 428" stroke="#36B37E" strokeWidth="4.5" strokeLinecap="round" />
              <circle cx="320" cy="428" r="3.5" fill="#FFC400" />
              {/* Head & Hair */}
              <circle cx="347.5" cy="388" r="7.5" fill="#FFC400" />
              <path d="M341 386 C341 380, 353 380, 354 386 C354 384, 347 382, 341 386 Z" fill="#172B4D" />
            </g>

            {/* ENHANCED ELEMENT 4: Standing Collaborative character on the bottom-right floor */}
            <g id="right-floor-assistant">
              {/* Legs & trousers */}
              <path d="M592 440 L584 505 C584 506, 589 506, 589 505 Z" stroke="#172B4D" strokeWidth="4.5" strokeLinecap="round" />
              <path d="M602 440 L610 505 C610 506, 615 506, 615 505 Z" stroke="#172B4D" strokeWidth="4.5" strokeLinecap="round" />
              {/* Torso orange-red shirt */}
              <path d="M585 392 C580 392, 579 410, 582 440 H609 C612 410, 611 392, 605 392 Z" fill="#DE350B" />
              {/* Head & Hair */}
              <circle cx="595" cy="380" r="7.5" fill="#FFC400" />
              <path d="M589 378 C589 372, 601 372, 602 378 C602 376, 595 374, 589 378 Z" fill="#172B4D" />
              {/* Arm pointing up/left towards the climber/board */}
              <path d="M585 400 C572 395, 557 385, 547 370" stroke="#DE350B" strokeWidth="4.5" strokeLinecap="round" />
              <circle cx="547" cy="370" r="3.5" fill="#FFC400" />
              {/* Arm on hip */}
              <path d="M605 400 C614 405, 617 415, 612 422" stroke="#DE350B" strokeWidth="4.5" strokeLinecap="round" fill="none" />
            </g>

            {/* FLOOR ACCENTS */}
            {/* Big Yellow Horizontal Pencil (Bottom Left) */}
            <g id="bottom-pencil">
              {/* Yellow body */}
              <rect x="238" y="482" width="84" height="15" rx="3.5" fill="#FFC400" />
              {/* Lead cone */}
              <path d="M238 482 L218 489.5 L238 497 Z" fill="#FF8B00" />
              <path d="M224 487 L218 489.5 L224 492 Z" fill="#42526E" />
              {/* Red eraser */}
              <rect x="316" y="482" width="10" height="15" rx="2" fill="#FF5252" />
            </g>

            {/* Floor geometric shapes (Bottom Right) */}
            <g id="floor-shapes">
              {/* Orange circle */}
              <circle cx="678" cy="478" r="28" fill="#FF8B00" className="opacity-90" />
              {/* Purple triangle */}
              <path d="M690 495 L755 495 L722 435 Z" fill="#6554C0" className="opacity-90" />
            </g>

          </svg>
        </motion.div>

      </div>

      {/* Decorative Bottom Bar */}
      <div className="absolute bottom-0 left-0 right-0 h-4 bg-[#EAECEF] opacity-40 pointer-events-none" />
      
    </section>
  );
}
