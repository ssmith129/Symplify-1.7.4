__SYMPLIFY PLATFORM v1\.7\.4__

Comprehensive Responsive Design Audit

Desktop \(1920px\+\)  •  Tablet \(768–1024px\)  •  Mobile \(320–767px\)

February 2026

Prepared for: Symplify Healthcare Platform Development Team

Audit Scope: 200\+ page components across 12 major modules

User Base: 65% Clinical Staff \(Mobile\-Heavy\) | 35% Administrative

# __1\. Executive Summary__

This audit examines the Symplify healthcare operations platform \(v1\.7\.4\) for responsive design issues across desktop \(1920px\+\), tablet \(768–1024px\), and mobile \(320–767px\) viewports\. The audit covers the full codebase including 200\+ page components, 12 major feature modules, the SCSS design system, and both Bootstrap 5 and Ant Design UI framework integrations\.

The platform currently employs a 6\-breakpoint system \(xs: 0, sm: 576px, md: 768px, lg: 992px, xl: 1200px, xxl: 1400px\) but responsive media queries are underutilized, with only 118 responsive rules across the entire SCSS architecture\. For a platform of this scale serving mobile\-heavy clinical staff, this represents a significant gap\.

### __Key Findings at a Glance__

__CRITICAL__

__HIGH__

__MEDIUM__

__LOW__

__7 Issues__

__11 Issues__

__9 Issues__

__5 Issues__

The most impactful issues center around: fixed\-width containers that cause horizontal overflow on mobile, inadequate touch target sizes for clinical staff using devices at bedside, data tables that don’t adapt to narrow viewports, and a sidebar navigation system that lacks smooth mobile transitions\. These directly affect the 65% clinical staff demographic who rely on mobile access for patient documentation and shift coordination\.

# __2\. Issue Identification__

Issues are organized by severity and cross\-referenced with their exact codebase location, affected viewports, and clinical impact assessment\.

## __2\.1 Critical Issues \(Patient Safety Impact\)__

__ID__

__Location / Component__

__Viewport\(s\)__

__Issue Description__

__Severity__

__C\-01__

Global Layout \(\_layout\.scss\)

Mobile \(320–767px\)

\.content area uses fixed padding: 20px with no mobile reduction\. Combined with 276px sidebar margin on desktop, content gets compressed\. No responsive padding adjustment exists below lg breakpoint\.

__Critical__

__C\-02__

Data Tables \(All Modules\)

Mobile, Tablet

Tables use table\-nowrap with white\-space: nowrap globally but only 113 of ~180\+ table instances are wrapped in table\-responsive containers\. Unwrapped tables cause horizontal scroll, hiding critical patient data columns\.

__Critical__

__C\-03__

Buttons \(\_buttons\.scss\)

Mobile

Default \.btn padding is 6px 10px \(approx 28px height\)\. \.btn\-sm is also 6px 10px\. Both fall below WCAG 44px minimum touch target for mobile\. Clinical staff using gloves at bedside cannot reliably tap these targets\.

__Critical__

__C\-04__

Filter Dropdowns \(\_settings\.scss\)

Mobile

\.dropdown\-lg has min\-width: 400px \!important which exceeds all mobile viewport widths\. Filter panels overflow the screen, making it impossible to filter patient lists on mobile devices\.

__Critical__

__C\-05__

Notification Panel \(\_notification\-ai\.scss\)

Mobile

notification\-dropdown\-ai has width: 400px fixed, with no responsive override\. On 320–375px screens, notification content is clipped and critical clinical alerts may be missed\.

__Critical__

__C\-06__

Ant Design Table Override \(index\.scss\)

Mobile

\.ant\-input has width: 220px fixed and \.ant\-select\-single has width: 60px \!important\. These fixed widths cause search/filter inputs to overflow their containers on mobile viewports\.

__Critical__

__C\-07__

Settings Sidebar \(\_settings\.scss\)

Mobile, Tablet

Settings sidebar uses fixed width: 235px with display: none below lg\. No mobile\-accessible alternative navigation is provided, leaving settings inaccessible on mobile\.

__Critical__

## __2\.2 High Severity Issues__

__ID__

__Location / Component__

__Viewport\(s\)__

__Issue Description__

__Severity__

__H\-01__

Sidebar Navigation \(\_sidebar\.scss\)

Mobile

Sidebar transitions from margin\-left: \-575px on mobile, creating a jarring slide\. No overlay transition timing is synchronized\. The sidebar\-close button \(display: none > block\) appears without animation\.

__High__

__H\-02__

Dashboard Grid \(dashboard\.tsx\)

Tablet

Dashboard uses col\-xl\-8 / col\-xl\-4 split without col\-lg fallbacks\. Between 992px–1199px, cards stack awkwardly in full\-width single columns instead of maintaining a reasonable 2\-column layout\.

__High__

__H\-03__

Header Search \(\.header\-search\)

Mobile

Header search form\-control has fixed height: 32px and font\-size: 12px\. On mobile, the search bar becomes too small to interact with effectively\. No mobile search expansion pattern exists\.

__High__

__H\-04__

Chart Components \(dashboard\)

Mobile

ApexCharts and chart containers have no responsive height/width overrides\. Charts render at desktop dimensions on mobile, creating horizontal overflow within card containers\.

__High__

__H\-05__

Appointment Statistics \(dashboard\.tsx\)

Mobile \(320–480px\)

Stats cards use col\-md\-3 col\-sm\-6 but have no col\-xs/col handling\. On screens below 576px, stat cards display full\-width with excessive vertical stacking, pushing chart content far below fold\.

__High__

__H\-06__

Email Module \(\_email\.scss\)

Tablet

mail\-notifications uses width: 50% which at 768px = 384px\. With compress\-width max\-width: 400px, the transition creates a visual jump\. Below md, display: none hides notifications entirely\.

__High__

__H\-07__

Theme Settings Panel \(\_theme\.scss\)

Mobile

sidebar\-themesettings has width: 400px \!important with max\-width: 100%\. The \!important on width prevents the max\-width from functioning properly on mobile viewports\.

__High__

__H\-08__

Pagination \(\.ant\-pagination\)

Mobile

ant\-pagination\-total\-text uses position: absolute left: 0, which overlaps page numbers on narrow screens\. No responsive repositioning exists\.

__High__

__H\-09__

Typography Scale \(\_reboot\.scss\)

Mobile

h5 and h6 have no responsive scaling \(h1–h4 do\)\. At 16px/18px on mobile, h5 is nearly indistinguishable from body text \(14px\), breaking visual hierarchy in clinical interfaces\.

__High__

__H\-10__

Card Bodies \(\.card\-body\)

Mobile

Card body padding is fixed at 20px with no responsive reduction\. On 320px screens, this consumes 12\.5% of viewport width on each side \(40px total\), severely constraining content width\.

__High__

__H\-11__

Modal Dialogs \(\_modal\.scss\)

Mobile

Modals use default Bootstrap sizing with no mobile\-specific adjustments\. On mobile, modals have excessive side margins and padding, leaving very little content area for forms and clinical data\.

__High__

## __2\.3 Medium Severity Issues__

__ID__

__Location / Component__

__Viewport\(s\)__

__Issue Description__

__Severity__

__M\-01__

Booking Range Input \(\_appointment\.scss\)

Mobile

\.bookingrange has fixed width: 220px\. On small viewports this either overflows or doesn’t fill available space, creating visual inconsistency\.

__Medium__

__M\-02__

Doctor Profile \(\.doctor\-profile\-img\)

Mobile

Fixed width: 120px profile image doesn’t scale\. On narrow screens it takes disproportionate horizontal space relative to adjacent content\.

__Medium__

__M\-03__

Sidebar Top Dropdown \(\_sidebar\.scss\)

Tablet

\.sidebar\-top\.dropend dropdown\-menu uses position: fixed with left: 290px \!important\. This positions the menu outside the viewport on tablet\.

__Medium__

__M\-04__

Notification Items \(\_notification\.scss\)

Mobile

Notification hover\-to\-reveal action buttons use opacity toggle which doesn’t work on touch devices\. Mobile users cannot access Mark Read/Delete actions\.

__Medium__

__M\-05__

Invoice Tables \(\_invoices\.scss\)

Mobile

Multiple invoice elements have min\-width: 300px which forces horizontal scrolling on sub\-375px devices\.

__Medium__

__M\-06__

Dropdown Menus \(\_dropdown\.scss\)

Mobile

dropdown\-menu\-xxl \(740px\) and dropdown\-menu\-xl \(600px\) only hide behind md/sm breakpoints\. No graceful degradation for content within these large dropdowns\.

__Medium__

__M\-07__

Simplebar Scrollbar \(\_simplebar\.scss\)

Mobile

Custom scrollbar container has width: 500px fixed\. On mobile, this creates a horizontal scrollbar within sidebar navigation\.

__Medium__

__M\-08__

AI Dashboard Grid \(\_ai\-components\.scss\)

Tablet Landscape

AI dashboard uses custom media queries \(min\-width: 768px and max\-width: 1024px and orientation: portrait\) that don’t cover tablet landscape mode, leaving 1024px landscape without specific styles\.

__Medium__

__M\-09__

Content Max\-Width \(\_layout\.scss\)

Large Desktop

\.content has max\-width: 1600px but no min\-width guard\. On ultra\-wide monitors, content area is centered but charts/tables may not fill the available space optimally\.

__Medium__

## __2\.4 Low Severity Issues__

__ID__

__Location / Component__

__Viewport\(s\)__

__Issue Description__

__Severity__

__L\-01__

Coming Soon Page \(\_coming\-soon\.scss\)

Mobile

Countdown elements have min\-width: 90px, which on a 320px viewport with 4 elements \(360px\) causes slight overflow\.

__Low__

__L\-02__

Display Typography \(\_reboot\.scss\)

Mobile

Display headings \(display\-1 through display\-6\) use rem values \(5rem–2\.5rem\) with no responsive scaling\. Display\-1 at 80px renders absurdly large on mobile\.

__Low__

__L\-03__

Project Status Card \(\_email\.scss\)

Mobile

\.project\-status has min\-width: 265px, which may conflict with card layouts on narrow viewports\.

__Low__

__L\-04__

Kanban Drag Elements \(\_email\.scss\)

Mobile

\.kanban\-drag\-wrap has min\-width: 220px\. In a horizontally scrolling kanban view this is acceptable, but the container may not handle the overflow cleanly\.

__Low__

__L\-05__

Form Wizard Header \(\_forms\.scss\)

All

\.form\-wizard\-header uses negative margins \(calc\(20px \* \-1\)\) which depends on parent padding\. If content padding changes responsively, this will misalign\.

__Low__

# __3\. Root Cause Analysis__

The responsive issues stem from five systemic architectural patterns in the codebase:

## __3\.1 Insufficient Media Query Coverage__

The platform has only 118 responsive rules across the entire SCSS architecture\. For a 200\+ component platform, this translates to roughly 0\.5 responsive rules per component\. The breakpoint system defines 6 breakpoints \(xs through xxl\) but usage is heavily concentrated in structural files \(sidebar, header, theme\) with almost no responsive rules in page\-specific SCSS files like \_appointment\.scss, \_doctors\.scss, or \_invoices\.scss\.

## __3\.2 Fixed Pixel Widths Without Responsive Overrides__

The codebase contains numerous fixed\-width declarations \(400px, 300px, 500px, 740px\) applied with \!important modifiers, particularly in dropdown menus, notification panels, and settings sidebars\. These override any responsive behavior that Bootstrap’s grid system would otherwise provide\. The \!important usage pattern \(e\.g\., width: 400px \!important on \.dropdown\-lg and \.sidebar\-themesettings\) creates specificity walls that make responsive overrides extremely difficult\.

## __3\.3 Dual UI Framework Conflicts__

The platform uses both Bootstrap 5 and Ant Design components\. Global overrides in index\.scss apply fixed widths to Ant Design components \(\.ant\-input \{ width: 220px \}, \.ant\-select\-single \{ width: 60px \!important \}\) that break within Bootstrap’s responsive grid\. These framework\-level conflicts create unpredictable behavior at different viewport widths\.

## __3\.4 Desktop\-First Design Approach__

The CSS architecture follows a desktop\-first pattern with respond\-below\(\) mixins used to override desktop styles for smaller screens, rather than a mobile\-first approach using respond\-above\(\)\. This results in mobile styles being afterthoughts—overrides that attempt to “fix” desktop layouts rather than building up from a mobile foundation\. For a platform where 65% of users are clinical staff on mobile devices, this is architecturally inverted\.

## __3\.5 Missing Touch Interaction Patterns__

Several interactive patterns rely on hover states \(notification action reveal, table row actions\) that have no touch\-device equivalents\. Button sizing defaults \(padding: 6px 10px\) produce touch targets well below the WCAG 2\.1 Level AA minimum of 44x44px, which is especially problematic for clinical staff who may be wearing gloves\.

# __4\. Specific Solutions__

Each solution is mapped directly to the issues identified in Section 2, with implementation\-ready CSS/SCSS code and estimated difficulty\.

## __4\.1 Critical Fixes__

__C\-01  Responsive Content Padding__*  \[Easy\]*

__Root Cause: __Fixed 20px padding with no breakpoint adjustments\. Content area doesn’t adapt to mobile viewport constraints\.

__Solution: __Add responsive padding reduction at mobile breakpoints\. This single change recovers approximately 20px of usable content width on mobile\.

\.content \{  
  padding: 20px;  
  @include respond\-below\(md\) \{  
    padding: 16px 12px;  
  \}  
  @include respond\-below\(sm\) \{  
    padding: 12px 8px;  
  \}  
\}

__C\-02  Universal Table Responsive Wrappers__*  \[Medium\]*

__Root Cause: __67\+ table instances lack table\-responsive containers, causing horizontal overflow that hides clinical data\.

__Solution: __Audit all table instances and ensure each is wrapped in a table\-responsive container\. Additionally, add a global CSS safety net for any table that escapes the wrapper pattern\.

// Global safety net for all tables  
\.page\-wrapper \.content table \{  
  @include respond\-below\(md\) \{  
    display: block;  
    overflow\-x: auto;  
    \-webkit\-overflow\-scrolling: touch;  
    max\-width: 100%;  
  \}  
\}  
  
// Ensure table\-nowrap doesn't force overflow  
\.table\-nowrap \{  
  @include respond\-below\(sm\) \{  
    th, td \{  
      white\-space: normal;  
      min\-width: 100px;  
    \}  
  \}  
\}

__C\-03  Touch\-Friendly Button Sizing__*  \[Easy\]*

__Root Cause: __Default button height \(~28px\) falls below WCAG 44px minimum touch target\. Critical for clinical staff using gloves\.

__Solution: __Implement mobile\-specific button sizing that meets 44px minimum touch targets while maintaining desktop compact appearance\.

// Mobile touch target enforcement  
@include respond\-below\(md\) \{  
  \.btn \{  
    min\-height: 44px;  
    min\-width: 44px;  
    padding: 10px 16px;  
    font\-size: 0\.8125rem;  
  \}  
  \.btn\-sm \{  
    min\-height: 44px;  
    padding: 8px 12px;  
  \}  
  \.btn\-icon \{  
    min\-height: 44px;  
    min\-width: 44px;  
  \}  
  // Action buttons in table rows  
  \.action\-item > a \{  
    width: 44px;  
    height: 44px;  
  \}  
\}

__C\-04  Responsive Filter Dropdowns__*  \[Easy\]*

__Root Cause: __\.dropdown\-lg uses min\-width: 400px \!important, exceeding mobile viewport widths\.

__Solution: __Replace the \!important fixed width with responsive max\-width constraints\.

\.dropdown\-lg \{  
  min\-width: 400px;  
  max\-width: 100vw;  
  @include respond\-below\(md\) \{  
    min\-width: auto \!important;  
    width: calc\(100vw \- 24px\);  
    max\-width: 400px;  
    left: 50% \!important;  
    transform: translateX\(\-50%\);  
  \}  
\}

__C\-05  Responsive Notification Panel__*  \[Easy\]*

__Root Cause: __Fixed width: 400px with no mobile override\. Critical alerts get clipped on mobile\.

__Solution: __Make notification panel full\-width on mobile with appropriate positioning\.

\.notification\-dropdown\-ai \{  
  width: 400px;  
  @include respond\-below\(sm\) \{  
    width: calc\(100vw \- 16px\);  
    max\-width: 400px;  
    position: fixed;  
    left: 8px;  
    right: 8px;  
    top: 60px;  
    max\-height: calc\(100vh \- 80px\);  
  \}  
\}

__C\-06  Responsive Ant Design Overrides__*  \[Easy\]*

__Root Cause: __Fixed widths on \.ant\-input \(220px\) and \.ant\-select\-single \(60px \!important\) overflow on mobile\.

__Solution: __Replace fixed widths with responsive max\-width patterns that respect container boundaries\.

\.ant\-input \{  
  width: 100%;  
  max\-width: 220px;  
  @include respond\-below\(md\) \{  
    max\-width: 100%;  
  \}  
\}  
\.ant\-select\-single \{  
  width: auto \!important;  
  min\-width: 60px;  
  @include respond\-below\(md\) \{  
    width: 100% \!important;  
  \}  
\}

__C\-07  Mobile Settings Navigation__*  \[Complex\]*

__Root Cause: __Settings sidebar uses display: none below lg with no alternative navigation\.

__Solution: __Convert the settings sidebar to a collapsible offcanvas panel on mobile, ensuring all settings remain accessible\.

// Settings sidebar mobile adaptation  
\.sidebars\.settings\-sidebar \{  
  @include respond\-below\(lg\) \{  
    position: fixed;  
    left: \-280px;  
    top: 0;  
    bottom: 0;  
    width: 280px;  
    z\-index: 1050;  
    background: var\(\-\-white\);  
    transition: left 0\.3s ease;  
    display: block; // Override display: none  
    box\-shadow: 2px 0 12px rgba\(0,0,0,0\.15\);  
    &\.active \{  
      left: 0;  
    \}  
  \}  
\}  
// Add toggle button for mobile  
\.settings\-mobile\-toggle \{  
  display: none;  
  @include respond\-below\(lg\) \{  
    display: flex;  
    align\-items: center;  
    min\-height: 44px;  
  \}  
\}

## __4\.2 High Priority Fixes__

__H\-01  Smooth Sidebar Mobile Transitions__*  \[Medium\]*

__Root Cause: __Sidebar uses margin\-left: \-575px for off\-screen positioning\. Animation timing is unsynchronized\.

__Solution: __Use transform for GPU\-accelerated transitions and synchronize overlay timing\.

\.sidebar \{  
  @include respond\-below\(lg\) \{  
    margin\-left: 0;  
    transform: translateX\(\-100%\);  
    transition: transform 0\.3s cubic\-bezier\(0\.4, 0, 0\.2, 1\);  
    will\-change: transform;  
  \}  
\}  
\.slide\-nav \.sidebar \{  
  @include respond\-below\(lg\) \{  
    transform: translateX\(0\);  
  \}  
\}  
\.sidebar\-overlay \{  
  transition: opacity 0\.3s ease;  
  opacity: 0;  
  &\.opened \{  
    opacity: 1;  
  \}  
\}

__H\-02  Dashboard Grid Tablet Optimization__*  \[Easy\]*

__Root Cause: __col\-xl\-8/col\-xl\-4 without col\-lg creates awkward full\-width stacking between 992–1199px\.

__Solution: __Add col\-lg classes to maintain 2\-column layout on tablet landscape\. Update dashboard\.tsx grid classes\.

// In dashboard\.tsx, change:  
// col\-xl\-8 \-\-> col\-xl\-8 col\-lg\-7  
// col\-xl\-4 \-\-> col\-xl\-4 col\-lg\-5  
// This maintains a reasonable split at  
// tablet landscape \(992\-1199px\)

__H\-03  Expandable Mobile Search__*  \[Medium\]*

__Root Cause: __Header search is too small on mobile \(32px height, 12px font\)\.

__Solution: __Implement an expandable search pattern on mobile that provides full\-width search on tap\.

@include respond\-below\(md\) \{  
  \.header\-search \{  
    \.form\-control \{  
      height: 44px;  
      font\-size: 16px; // Prevents iOS zoom  
    \}  
  \}  
\}  
@include respond\-below\(sm\) \{  
  \.header\-search \{  
    position: absolute;  
    left: 0;  
    right: 0;  
    top: 100%;  
    padding: 8px;  
    background: var\(\-\-white\);  
    border\-bottom: 1px solid var\(\-\-border\-color\);  
    display: none;  
    &\.active \{  
      display: block;  
    \}  
  \}  
\}

__H\-09  Complete Typography Scale__*  \[Easy\]*

__Root Cause: __h5 and h6 lack responsive scaling, breaking visual hierarchy on mobile\.

__Solution: __Extend the existing responsive typography pattern to cover h5 and h6\.

h5, \.h5 \{  
  font\-size: 18px;  
  @include respond\-below\(lg\) \{  
    font\-size: 17px;  
  \}  
  @include respond\-below\(md\) \{  
    font\-size: 16px;  
  \}  
\}  
h6, \.h6 \{  
  font\-size: 16px;  
  @include respond\-below\(md\) \{  
    font\-size: 15px;  
  \}  
\}

__H\-10  Responsive Card Padding__*  \[Easy\]*

__Root Cause: __Fixed 20px card padding consumes 12\.5% of viewport width on 320px screens\.

__Solution: __Reduce card padding on mobile to maximize content area for clinical data\.

\.card \{  
  \.card\-body \{  
    padding: 20px;  
    @include respond\-below\(md\) \{  
      padding: 16px 12px;  
    \}  
    @include respond\-below\(sm\) \{  
      padding: 12px 8px;  
    \}  
  \}  
  \.card\-header \{  
    padding: 0\.9375rem 1\.25rem;  
    @include respond\-below\(md\) \{  
      padding: 0\.75rem 1rem;  
    \}  
    @include respond\-below\(sm\) \{  
      padding: 0\.625rem 0\.75rem;  
    \}  
  \}  
\}

# __5\. Priority Implementation Roadmap__

Fixes are organized into three implementation phases based on severity, difficulty, and clinical impact\. The roadmap prioritizes patient safety and clinical workflow continuity\.

## __Phase 1: Emergency Responsive Fixes \(Week 1–2\)__

These changes prevent data loss and accessibility failures for clinical staff\. All are low\-complexity CSS changes that can be deployed without component refactoring\.

__Issue__

__Fix__

__Difficulty__

__Impact__

__Est\. Hours__

__C\-01__

Responsive content padding

Easy

All mobile users

1–2 hours

__C\-03__

Touch\-friendly button sizing \(44px min\)

Easy

All mobile users

2–3 hours

__C\-04__

Responsive filter dropdowns

Easy

Patient filtering

1–2 hours

__C\-05__

Responsive notification panel

Easy

Clinical alerts

1–2 hours

__C\-06__

Responsive Ant Design overrides

Easy

All search/filters

2–3 hours

__H\-09__

Complete typography responsive scale

Easy

Visual hierarchy

1 hour

__H\-10__

Responsive card padding

Easy

Content area

1–2 hours

__Phase 1 Total: approximately 10–16 developer hours__

## __Phase 2: Structural Responsive Improvements \(Week 3–4\)__

These fixes address navigation, data tables, and interaction patterns that require moderate refactoring and QA across multiple modules\.

__Issue__

__Fix__

__Difficulty__

__Impact__

__Est\. Hours__

__C\-02__

Table responsive audit \+ global safety net

Medium

All data views

8–12 hours

__H\-01__

Smooth sidebar mobile transitions

Medium

Navigation UX

4–6 hours

__H\-02__

Dashboard grid tablet optimization

Easy

Dashboard layout

2–3 hours

__H\-03__

Expandable mobile search

Medium

Search usability

4–6 hours

__H\-11__

Mobile modal optimization

Medium

Form interactions

3–4 hours

__M\-04__

Touch\-friendly notification actions

Medium

Notification UX

3–4 hours

__Phase 2 Total: approximately 24–35 developer hours__

## __Phase 3: Architecture & Optimization \(Week 5–8\)__

Long\-term improvements that address the underlying desktop\-first architecture and establish mobile\-first patterns for future development\.

__Issue__

__Fix__

__Difficulty__

__Impact__

__Est\. Hours__

__C\-07__

Mobile settings navigation \(offcanvas\)

Complex

Settings access

8–12 hours

__Arch\-01__

Mobile\-first CSS architecture migration

Complex

All pages

20–30 hours

__Arch\-02__

Ant Design responsive configuration

Complex

All Ant components

12–16 hours

__Arch\-03__

Responsive design token system

Complex

Design system

16–20 hours

__Phase 3 Total: approximately 56–78 developer hours__

# __6\. Design System Recommendations__

## __6\.1 Responsive Design Token Scale__

Establish CSS custom properties that automatically adjust at breakpoints, creating a single source of truth for responsive spacing and sizing:

:root \{  
  \-\-spacing\-page: 20px;  
  \-\-spacing\-card: 20px;  
  \-\-touch\-target: 32px;  
\}  
@media \(max\-width: 767\.98px\) \{  
  :root \{  
    \-\-spacing\-page: 12px;  
    \-\-spacing\-card: 12px;  
    \-\-touch\-target: 44px;  
  \}  
\}

## __6\.2 Mobile\-First Migration Strategy__

Gradually migrate the SCSS architecture from desktop\-first \(respond\-below\) to mobile\-first \(respond\-above\)\. Start with new components and refactor existing ones module by module\. This inverts the cascade so mobile is the base style and desktop enhancements are added progressively\.

## __6\.3 Clinical\-Specific Mobile Patterns__

For bedside usage by clinical staff \(65% of users\), establish dedicated mobile patterns: oversized touch targets for gloved hands \(48px minimum instead of 44px\), high\-contrast mode for bright clinical environments, single\-column layouts for patient data that prioritize vertical scanning, and sticky action bars for critical actions like medication administration that remain accessible during scroll\.

## __6\.4 Testing Protocol__

Implement a responsive testing gate in the development workflow\. Every component change should be validated at five key viewport widths: 320px \(iPhone SE\), 375px \(iPhone standard\), 768px \(iPad portrait\), 1024px \(iPad landscape\), and 1440px \(desktop\)\. Clinical\-critical components \(patient vitals, medication lists, alert panels\) should additionally be tested with touch simulation and screen reader verification\.

# __Appendix A: Audit Methodology__

This audit was conducted through static code analysis of the Symplify v1\.7\.4 codebase \(github\.com/ssmith129/Symplify\-1\.7\.4\), examining the complete SCSS architecture \(430KB across 68 files\), 200\+ React page components, and the Bootstrap 5 / Ant Design integration layer\. The analysis covered responsive breakpoint coverage, fixed\-width pattern detection, touch target compliance \(WCAG 2\.1 AA\), overflow behavior analysis, and typography scaling completeness\.

Viewport categories follow industry standard definitions: Mobile \(320–767px\) covering phone form factors, Tablet \(768–1024px\) covering iPad and similar devices in both orientations, and Desktop \(1025px\+\) covering standard monitors through ultra\-wide displays\.

Severity classifications account for both technical impact and clinical safety implications: Critical issues may prevent access to patient data or clinical functionality on mobile; High issues significantly degrade the mobile experience for clinical workflows; Medium issues create visual inconsistencies or minor usability friction; Low issues are cosmetic concerns with minimal functional impact\.

