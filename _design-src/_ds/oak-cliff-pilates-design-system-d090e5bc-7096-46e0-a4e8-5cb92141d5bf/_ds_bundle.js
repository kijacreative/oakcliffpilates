/* @ds-bundle: {"format":4,"namespace":"OakCliffPilatesDesignSystem_d090e5","components":[{"name":"FoilText","sourcePath":"components/brand/FoilText.jsx"},{"name":"LogoPuck","sourcePath":"components/brand/LogoPuck.jsx"},{"name":"PhotoFrame","sourcePath":"components/brand/PhotoFrame.jsx"},{"name":"SectionLabel","sourcePath":"components/brand/SectionLabel.jsx"},{"name":"StatBlock","sourcePath":"components/brand/StatBlock.jsx"},{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Card","sourcePath":"components/core/Card.jsx"},{"name":"IconButton","sourcePath":"components/core/IconButton.jsx"},{"name":"Tag","sourcePath":"components/core/Tag.jsx"},{"name":"Dialog","sourcePath":"components/feedback/Dialog.jsx"},{"name":"Toast","sourcePath":"components/feedback/Toast.jsx"},{"name":"Tooltip","sourcePath":"components/feedback/Tooltip.jsx"},{"name":"Checkbox","sourcePath":"components/forms/Checkbox.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"Radio","sourcePath":"components/forms/Radio.jsx"},{"name":"Select","sourcePath":"components/forms/Select.jsx"},{"name":"Switch","sourcePath":"components/forms/Switch.jsx"},{"name":"Tabs","sourcePath":"components/navigation/Tabs.jsx"}],"sourceHashes":{"components/brand/FoilText.jsx":"5ea1de0d39d2","components/brand/LogoPuck.jsx":"1bb7435a98e1","components/brand/PhotoFrame.jsx":"cc8823512222","components/brand/SectionLabel.jsx":"5531094f71d9","components/brand/StatBlock.jsx":"3aee2fa91c04","components/core/Badge.jsx":"f64e1051dbcd","components/core/Button.jsx":"23d6d08091bd","components/core/Card.jsx":"03c144b1283e","components/core/IconButton.jsx":"77a3d8cddbee","components/core/Tag.jsx":"8f908120e2ea","components/feedback/Dialog.jsx":"e0b82937ff77","components/feedback/Toast.jsx":"3cbfdd1d7b4c","components/feedback/Tooltip.jsx":"b6cc47521928","components/forms/Checkbox.jsx":"8b2f78a28f23","components/forms/Input.jsx":"5f25d14466cd","components/forms/Radio.jsx":"da957808775b","components/forms/Select.jsx":"aee65dd67472","components/forms/Switch.jsx":"c9abac428e41","components/navigation/Tabs.jsx":"72f907cabf61","ui_kits/website/Chrome.jsx":"510a71ff42c3","ui_kits/website/HomeScreen.jsx":"756d0def7add","ui_kits/website/LocationsScreen.jsx":"a7b4a4c298bd","ui_kits/website/MembershipScreen.jsx":"83d4eca7b0cf","ui_kits/website/ScheduleScreen.jsx":"bdfecc662ab7"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.OakCliffPilatesDesignSystem_d090e5 = window.OakCliffPilatesDesignSystem_d090e5 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/brand/FoilText.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** The 5-stop gold-foil gradient clipped to type. Headline words and thin strokes
 *  only — never a large fill. One foil moment per layout. */
function FoilText({
  children,
  as = "span",
  vertical = false,
  style,
  ...rest
}) {
  const Tag = as;
  return /*#__PURE__*/React.createElement(Tag, _extends({
    style: {
      backgroundImage: vertical ? "var(--ocp-gold-foil-vertical)" : "var(--ocp-gold-foil)",
      WebkitBackgroundClip: "text",
      backgroundClip: "text",
      WebkitTextFillColor: "transparent",
      color: "transparent",
      display: "inline",
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { FoilText });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/FoilText.jsx", error: String((e && e.message) || e) }); }

// components/brand/LogoPuck.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const FILES = {
  gold: "logo-puck-gold-on-black.png",
  white: "logo-puck-white.png",
  black: "logo-puck-black.png",
  goldOutline: "logo-puck-gold-outline.png",
  copper: "logo-puck-copper.png"
};

/** The circular OCP mark. Lead with `finish="gold"`; never render below 40px. */
function LogoPuck({
  finish = "gold",
  size = 96,
  glow = false,
  assetBase = "assets",
  alt = "Oak Cliff Pilates",
  style,
  ...rest
}) {
  const px = Math.max(40, size);
  return /*#__PURE__*/React.createElement("img", _extends({
    src: `${assetBase}/${FILES[finish] || FILES.gold}`,
    alt: alt,
    width: px,
    height: px,
    style: {
      width: px,
      height: px,
      display: "block",
      objectFit: "contain",
      filter: glow ? "drop-shadow(0 0 18px rgba(201,162,74,.35))" : "none",
      ...style
    }
  }, rest));
}
Object.assign(__ds_scope, { LogoPuck });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/LogoPuck.jsx", error: String((e && e.message) || e) }); }

// components/brand/PhotoFrame.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Full-bleed photo tile with the bottom-up protection gradient and an optional
 *  Khand caps caption. Never use a flat overlay for type over photo. */
function PhotoFrame({
  src,
  alt = "",
  caption,
  ratio = "4 / 3",
  radius = "var(--radius-lg)",
  overlay = true,
  children,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("figure", _extends({
    style: {
      position: "relative",
      margin: 0,
      aspectRatio: ratio,
      overflow: "hidden",
      borderRadius: radius,
      background: "var(--ocp-ink)",
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("img", {
    src: src,
    alt: alt,
    style: {
      width: "100%",
      height: "100%",
      objectFit: "cover",
      display: "block"
    }
  }), overlay ? /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      position: "absolute",
      inset: 0,
      background: "var(--ocp-photo-scrim)"
    }
  }) : null, caption ? /*#__PURE__*/React.createElement("figcaption", {
    style: {
      position: "absolute",
      left: "var(--space-5)",
      bottom: "var(--space-4)",
      right: "var(--space-5)",
      font: "var(--fw-semibold) 0.9375rem/1.2 var(--font-display)",
      textTransform: "uppercase",
      letterSpacing: "0.05em",
      color: "var(--ocp-cream)"
    }
  }, caption) : null, children);
}
Object.assign(__ds_scope, { PhotoFrame });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/PhotoFrame.jsx", error: String((e && e.message) || e) }); }

// components/brand/SectionLabel.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Numbered eyebrow — "01 · WHO WE ARE". The brand kit's section marker. */
function SectionLabel({
  number,
  children,
  tone = "gold",
  rule = false,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: "flex",
      alignItems: "baseline",
      gap: "var(--space-4)",
      paddingBottom: rule ? "var(--space-3)" : 0,
      borderBottom: rule ? "var(--rule-gold)" : "none",
      ...style
    }
  }, rest), number ? /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--fw-bold) var(--type-body)/1 var(--font-display)",
      color: tone === "muted" ? "var(--text-muted)" : "var(--ocp-gold-deep)"
    }
  }, number) : null, /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--text-style-eyebrow)",
      textTransform: "uppercase",
      letterSpacing: "var(--ls-eyebrow-wide)",
      color: tone === "muted" ? "var(--text-muted)" : "var(--ocp-gold)"
    }
  }, children));
}
Object.assign(__ds_scope, { SectionLabel });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/SectionLabel.jsx", error: String((e && e.message) || e) }); }

// components/brand/StatBlock.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Oversized gold Khand figure over a letterspaced caption. Lay several in a row
 *  divided by gold hairlines — the brand kit's stat strip. */
function StatBlock({
  value,
  label,
  divider = true,
  size = "md",
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-2)",
      paddingLeft: divider ? "var(--space-6)" : 0,
      borderLeft: divider ? "var(--rule-gold)" : "none",
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    style: {
      font: `var(--fw-bold) ${size === "lg" ? "var(--type-display-2)" : "var(--type-display-3)"}/0.9 var(--font-display)`,
      color: "var(--ocp-gold)",
      letterSpacing: "var(--ls-display)"
    }
  }, value), /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--text-style-eyebrow)",
      textTransform: "uppercase",
      letterSpacing: "var(--ls-eyebrow)",
      color: "var(--text-muted)",
      maxWidth: "18ch"
    }
  }, label));
}
Object.assign(__ds_scope, { StatBlock });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/StatBlock.jsx", error: String((e && e.message) || e) }); }

// components/core/Badge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const TONES = {
  gold: {
    bg: "var(--ocp-gold)",
    fg: "var(--ocp-black)",
    bd: "var(--ocp-gold)"
  },
  outline: {
    bg: "transparent",
    fg: "var(--ocp-gold)",
    bd: "var(--border-hairline)"
  },
  cream: {
    bg: "var(--ocp-cream)",
    fg: "var(--ocp-black)",
    bd: "var(--ocp-cream)"
  },
  ink: {
    bg: "var(--ocp-ink)",
    fg: "var(--ocp-grey-300)",
    bd: "var(--border-subtle)"
  },
  neon: {
    bg: "var(--ocp-neon-pink)",
    fg: "var(--ocp-black)",
    bd: "var(--ocp-neon-pink)"
  }
};
function Badge({
  children,
  tone = "gold",
  style,
  ...rest
}) {
  const t = TONES[tone] || TONES.gold;
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: "inline-flex",
      alignItems: "center",
      height: 22,
      padding: "0 8px",
      font: "var(--fw-bold) var(--type-micro)/1 var(--font-body)",
      textTransform: "uppercase",
      letterSpacing: "var(--ls-eyebrow)",
      background: t.bg,
      color: t.fg,
      border: `var(--border-width) solid ${t.bd}`,
      borderRadius: "var(--radius-sm)",
      whiteSpace: "nowrap",
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const SIZES = {
  sm: {
    height: "var(--control-height-sm)",
    padX: "14px",
    fs: "0.8125rem"
  },
  md: {
    height: "var(--control-height)",
    padX: "var(--control-pad-x)",
    fs: "0.9375rem"
  },
  lg: {
    height: "var(--control-height-lg)",
    padX: "var(--control-pad-x-lg)",
    fs: "1.0625rem"
  }
};
const VARIANTS = {
  primary: {
    bg: "var(--ocp-gold)",
    fg: "var(--ocp-black)",
    bd: "var(--ocp-gold)",
    hoverBg: "var(--ocp-gold-warm)",
    hoverBd: "var(--ocp-gold-warm)",
    hoverFg: "var(--ocp-black)"
  },
  secondary: {
    bg: "transparent",
    fg: "var(--ocp-cream)",
    bd: "var(--border-hairline)",
    hoverBg: "rgba(201,162,74,.1)",
    hoverBd: "var(--ocp-gold)",
    hoverFg: "var(--ocp-gold-warm)"
  },
  ghost: {
    bg: "transparent",
    fg: "var(--ocp-cream)",
    bd: "transparent",
    hoverBg: "transparent",
    hoverBd: "transparent",
    hoverFg: "var(--ocp-gold)"
  },
  onLight: {
    bg: "var(--ocp-black)",
    fg: "var(--ocp-cream)",
    bd: "var(--ocp-black)",
    hoverBg: "var(--ocp-grey-800)",
    hoverBd: "var(--ocp-grey-800)",
    hoverFg: "var(--ocp-gold-warm)"
  },
  danger: {
    bg: "var(--ocp-hot-red)",
    fg: "var(--ocp-paper)",
    bd: "var(--ocp-hot-red)",
    hoverBg: "#f7333f",
    hoverBd: "#f7333f",
    hoverFg: "var(--ocp-paper)"
  }
};
function Button({
  children,
  variant = "primary",
  size = "md",
  disabled = false,
  fullWidth = false,
  iconLeft,
  iconRight,
  as = "button",
  href,
  onClick,
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const [press, setPress] = React.useState(false);
  const s = SIZES[size] || SIZES.md;
  const v = VARIANTS[variant] || VARIANTS.primary;
  const on = hover && !disabled;
  const Tag = as === "a" ? "a" : "button";
  return /*#__PURE__*/React.createElement(Tag, _extends({
    href: as === "a" ? href : undefined,
    disabled: Tag === "button" ? disabled : undefined,
    onClick: disabled ? undefined : onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => {
      setHover(false);
      setPress(false);
    },
    onMouseDown: () => setPress(true),
    onMouseUp: () => setPress(false),
    style: {
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      gap: "var(--space-2)",
      height: s.height,
      padding: `0 ${s.padX}`,
      width: fullWidth ? "100%" : undefined,
      font: `var(--fw-semibold) ${s.fs}/1 var(--font-display)`,
      textTransform: "uppercase",
      letterSpacing: "var(--ls-button)",
      textDecoration: "none",
      color: disabled ? "var(--action-disabled-fg)" : on ? v.hoverFg : v.fg,
      background: disabled ? "var(--action-disabled-bg)" : on ? v.hoverBg : v.bg,
      border: `var(--border-width) solid ${disabled ? "transparent" : on ? v.hoverBd : v.bd}`,
      borderRadius: "var(--radius-sm)",
      boxShadow: variant === "ghost" ? "none" : undefined,
      cursor: disabled ? "not-allowed" : "pointer",
      transform: press && !disabled ? "scale(var(--press-scale))" : "none",
      transition: "var(--transition-control)",
      whiteSpace: "nowrap",
      ...style
    }
  }, rest), iconLeft, /*#__PURE__*/React.createElement("span", {
    style: {
      paddingTop: "1px"
    }
  }, children), iconRight);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Framed surface. `variant`: dark (default), light, outline. `footer` renders the
 *  brand-kit label bar — a hairline-divided strip at the bottom of the card. */
function Card({
  children,
  variant = "dark",
  footer,
  padding,
  hoverable = false,
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const light = variant === "light";
  const on = hoverable && hover;
  return /*#__PURE__*/React.createElement("div", _extends({
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      background: light ? "var(--surface-light)" : variant === "outline" ? "transparent" : "var(--surface-card)",
      border: `var(--border-width) solid ${on ? "var(--ocp-gold)" : light ? "var(--border-on-light)" : "var(--border-hairline)"}`,
      borderRadius: "var(--radius-lg)",
      overflow: "hidden",
      color: light ? "var(--text-on-light)" : "var(--text-primary)",
      boxShadow: on ? "var(--shadow-raised)" : "var(--shadow-card)",
      transform: on ? "translateY(var(--hover-lift))" : "none",
      transition: "var(--transition-control), box-shadow var(--dur) var(--ease-out)",
      display: "flex",
      flexDirection: "column",
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: padding ?? "var(--card-pad)",
      flex: 1
    }
  }, children), footer ? /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "12px var(--card-pad)",
      borderTop: `var(--border-width) solid ${light ? "var(--border-on-light)" : "var(--border-hairline)"}`,
      font: "var(--fw-semibold) 0.9375rem/1 var(--font-display)",
      textTransform: "uppercase",
      letterSpacing: "0.04em",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      gap: "var(--space-4)"
    }
  }, footer) : null);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Card.jsx", error: String((e && e.message) || e) }); }

// components/core/IconButton.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function IconButton({
  children,
  label,
  variant = "secondary",
  size = "md",
  disabled = false,
  onClick,
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const dim = size === "sm" ? 36 : size === "lg" ? 56 : 44;
  const filled = variant === "primary";
  const on = hover && !disabled;
  return /*#__PURE__*/React.createElement("button", _extends({
    "aria-label": label,
    title: label,
    disabled: disabled,
    onClick: onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      width: dim,
      height: dim,
      display: "inline-grid",
      placeItems: "center",
      background: disabled ? "var(--action-disabled-bg)" : filled ? on ? "var(--ocp-gold-warm)" : "var(--ocp-gold)" : on ? "rgba(201,162,74,.1)" : "transparent",
      color: disabled ? "var(--action-disabled-fg)" : filled ? "var(--ocp-black)" : on ? "var(--ocp-gold-warm)" : "var(--ocp-cream)",
      border: `var(--border-width) solid ${disabled ? "transparent" : filled ? "transparent" : on ? "var(--ocp-gold)" : "var(--border-hairline)"}`,
      borderRadius: "var(--radius-sm)",
      cursor: disabled ? "not-allowed" : "pointer",
      transition: "var(--transition-control)",
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { IconButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/IconButton.jsx", error: String((e && e.message) || e) }); }

// components/core/Tag.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** The "phrases we own" chip from the brand kit: gold hairline pill, Khand caps.
 *  `struck` renders the "phrases we avoid" treatment. */
function Tag({
  children,
  struck = false,
  tone = "gold",
  size = "md",
  onClick,
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const interactive = typeof onClick === "function";
  const color = struck ? "var(--ocp-grey-500)" : tone === "cream" ? "var(--ocp-cream)" : "var(--ocp-gold-warm)";
  const border = struck ? "var(--border-subtle)" : "var(--border-hairline)";
  return /*#__PURE__*/React.createElement("span", _extends({
    onClick: onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      display: "inline-flex",
      alignItems: "center",
      height: size === "sm" ? 30 : 38,
      padding: size === "sm" ? "0 14px" : "0 20px",
      font: `var(--fw-semibold) ${size === "sm" ? "0.8125rem" : "0.9375rem"}/1 var(--font-display)`,
      textTransform: "uppercase",
      letterSpacing: "0.04em",
      color,
      textDecoration: struck ? "line-through" : "none",
      background: interactive && hover ? "rgba(201,162,74,.1)" : "transparent",
      border: `var(--border-width) solid ${interactive && hover ? "var(--ocp-gold)" : border}`,
      borderRadius: "var(--radius-pill)",
      cursor: interactive ? "pointer" : "default",
      transition: "var(--transition-control)",
      whiteSpace: "nowrap",
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    style: {
      paddingTop: 2
    }
  }, children));
}
Object.assign(__ds_scope, { Tag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Tag.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Dialog.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Dialog({
  open = true,
  title,
  eyebrow,
  children,
  footer,
  onClose,
  width = 520,
  style,
  ...rest
}) {
  if (!open) return null;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0,
      display: "grid",
      placeItems: "center",
      background: "var(--veil)",
      backdropFilter: "var(--blur-nav)",
      padding: "var(--space-6)",
      zIndex: 50
    },
    onClick: onClose
  }, /*#__PURE__*/React.createElement("div", _extends({
    role: "dialog",
    "aria-modal": "true",
    onClick: e => e.stopPropagation(),
    style: {
      width: "100%",
      maxWidth: width,
      background: "var(--surface-card)",
      border: "var(--border-width) solid var(--border-hairline)",
      borderRadius: "var(--radius-lg)",
      boxShadow: "var(--shadow-modal)",
      overflow: "hidden",
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "var(--card-pad-lg)",
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-4)"
    }
  }, eyebrow ? /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--text-style-eyebrow)",
      textTransform: "uppercase",
      letterSpacing: "var(--ls-eyebrow)",
      color: "var(--text-accent)"
    }
  }, eyebrow) : null, title ? /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: 0,
      font: "var(--text-style-h3)",
      textTransform: "uppercase",
      letterSpacing: "var(--ls-display)",
      color: "var(--text-primary)"
    }
  }, title) : null, /*#__PURE__*/React.createElement("div", {
    style: {
      font: "var(--text-style-body)",
      fontSize: "var(--type-body-sm)",
      color: "var(--text-secondary)"
    }
  }, children)), footer ? /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "var(--space-4) var(--card-pad-lg)",
      borderTop: "var(--border-width) solid var(--border-hairline)",
      display: "flex",
      gap: "var(--space-3)",
      justifyContent: "flex-end"
    }
  }, footer) : null));
}
Object.assign(__ds_scope, { Dialog });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Dialog.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Toast.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Squared dark slab with a gold (or red) left keyline. */
function Toast({
  children,
  title,
  tone = "default",
  onClose,
  style,
  ...rest
}) {
  const key = tone === "danger" ? "var(--status-danger)" : tone === "success" ? "var(--ocp-gold)" : "var(--ocp-cream)";
  return /*#__PURE__*/React.createElement("div", _extends({
    role: "status",
    style: {
      display: "flex",
      alignItems: "flex-start",
      gap: "var(--space-4)",
      minWidth: 280,
      maxWidth: 420,
      padding: "var(--space-4) var(--space-5)",
      background: "var(--ocp-ink)",
      borderRadius: "var(--radius-sm)",
      borderLeft: `3px solid ${key}`,
      boxShadow: "var(--shadow-raised)",
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      display: "flex",
      flexDirection: "column",
      gap: 4
    }
  }, title ? /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--fw-semibold) 1.0625rem/1 var(--font-display)",
      textTransform: "uppercase",
      letterSpacing: "0.03em",
      color: "var(--text-primary)"
    }
  }, title) : null, /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--fw-regular) var(--type-caption)/1.5 var(--font-body)",
      color: "var(--text-secondary)"
    }
  }, children)), onClose ? /*#__PURE__*/React.createElement("button", {
    onClick: onClose,
    "aria-label": "Dismiss",
    style: {
      background: "none",
      border: "none",
      cursor: "pointer",
      color: "var(--text-muted)",
      font: "var(--fw-regular) 1rem/1 var(--font-body)",
      padding: 2
    }
  }, "\xD7") : null);
}
Object.assign(__ds_scope, { Toast });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Toast.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Tooltip.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Hover/focus tooltip. Cream slab, black micro caps — reads like a print label. */
function Tooltip({
  label,
  children,
  placement = "top",
  style,
  ...rest
}) {
  const [show, setShow] = React.useState(false);
  const pos = placement === "bottom" ? {
    top: "calc(100% + 8px)",
    left: "50%",
    transform: "translateX(-50%)"
  } : {
    bottom: "calc(100% + 8px)",
    left: "50%",
    transform: "translateX(-50%)"
  };
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      position: "relative",
      display: "inline-flex",
      ...style
    },
    onMouseEnter: () => setShow(true),
    onMouseLeave: () => setShow(false),
    onFocus: () => setShow(true),
    onBlur: () => setShow(false)
  }, rest), children, /*#__PURE__*/React.createElement("span", {
    role: "tooltip",
    style: {
      position: "absolute",
      ...pos,
      zIndex: 40,
      pointerEvents: "none",
      opacity: show ? 1 : 0,
      transition: `opacity var(--dur) var(--ease-out)`,
      background: "var(--ocp-cream)",
      color: "var(--ocp-black)",
      padding: "6px 10px",
      borderRadius: "var(--radius-sm)",
      whiteSpace: "nowrap",
      font: "var(--fw-bold) var(--type-micro)/1 var(--font-body)",
      textTransform: "uppercase",
      letterSpacing: "var(--ls-eyebrow)"
    }
  }, label));
}
Object.assign(__ds_scope, { Tooltip });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Tooltip.jsx", error: String((e && e.message) || e) }); }

// components/forms/Checkbox.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Checkbox({
  label,
  checked = false,
  onChange,
  disabled = false,
  id,
  style,
  ...rest
}) {
  const uid = id || React.useId();
  return /*#__PURE__*/React.createElement("label", {
    htmlFor: uid,
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: "var(--space-3)",
      cursor: disabled ? "not-allowed" : "pointer",
      opacity: disabled ? 0.5 : 1,
      ...style
    }
  }, /*#__PURE__*/React.createElement("input", _extends({
    id: uid,
    type: "checkbox",
    checked: checked,
    onChange: onChange,
    disabled: disabled,
    style: {
      position: "absolute",
      opacity: 0,
      width: 0,
      height: 0
    }
  }, rest)), /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      width: 20,
      height: 20,
      flex: "0 0 20px",
      display: "grid",
      placeItems: "center",
      background: checked ? "var(--ocp-gold)" : "var(--ocp-ink)",
      border: `var(--border-width) solid ${checked ? "var(--ocp-gold)" : "var(--border-subtle)"}`,
      borderRadius: "var(--radius-sm)",
      transition: "var(--transition-control)"
    }
  }, checked ? /*#__PURE__*/React.createElement("span", {
    style: {
      width: 10,
      height: 6,
      borderLeft: "2px solid var(--ocp-black)",
      borderBottom: "2px solid var(--ocp-black)",
      transform: "rotate(-45deg) translateY(-1px)"
    }
  }) : null), /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--text-style-body)",
      fontSize: "var(--type-body-sm)",
      color: "var(--text-primary)"
    }
  }, label));
}
Object.assign(__ds_scope, { Checkbox });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Checkbox.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Input({
  label,
  hint,
  error,
  value,
  onChange,
  placeholder,
  type = "text",
  disabled = false,
  iconLeft,
  id,
  style,
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  const uid = id || React.useId();
  const border = error ? "var(--status-danger)" : focus ? "var(--ocp-gold)" : "var(--border-subtle)";
  return /*#__PURE__*/React.createElement("label", {
    htmlFor: uid,
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-2)",
      ...style
    }
  }, label ? /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--text-style-eyebrow)",
      textTransform: "uppercase",
      letterSpacing: "var(--ls-eyebrow)",
      color: "var(--text-secondary)"
    }
  }, label) : null, /*#__PURE__*/React.createElement("span", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: "var(--space-3)",
      height: "var(--control-height)",
      padding: "0 var(--space-4)",
      background: disabled ? "var(--surface-inset)" : "var(--ocp-ink)",
      border: `var(--border-width) solid ${border}`,
      borderRadius: "var(--radius-sm)",
      boxShadow: focus ? "0 0 0 var(--focus-ring-width) rgba(233,201,119,.22)" : "none",
      transition: "var(--transition-control), box-shadow var(--dur) var(--ease-out)"
    }
  }, iconLeft ? /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--text-muted)",
      display: "grid"
    }
  }, iconLeft) : null, /*#__PURE__*/React.createElement("input", _extends({
    id: uid,
    type: type,
    value: value,
    onChange: onChange,
    placeholder: placeholder,
    disabled: disabled,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      flex: 1,
      minWidth: 0,
      background: "transparent",
      border: "none",
      outline: "none",
      font: "var(--fw-regular) var(--type-body-sm)/1 var(--font-body)",
      color: disabled ? "var(--text-muted)" : "var(--text-primary)"
    }
  }, rest))), error || hint ? /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--fw-regular) var(--type-caption)/1.4 var(--font-body)",
      color: error ? "var(--status-danger)" : "var(--text-muted)"
    }
  }, error || hint) : null);
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/Radio.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Radio({
  label,
  checked = false,
  onChange,
  disabled = false,
  name,
  value,
  id,
  style,
  ...rest
}) {
  const uid = id || React.useId();
  return /*#__PURE__*/React.createElement("label", {
    htmlFor: uid,
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: "var(--space-3)",
      cursor: disabled ? "not-allowed" : "pointer",
      opacity: disabled ? 0.5 : 1,
      ...style
    }
  }, /*#__PURE__*/React.createElement("input", _extends({
    id: uid,
    type: "radio",
    name: name,
    value: value,
    checked: checked,
    onChange: onChange,
    disabled: disabled,
    style: {
      position: "absolute",
      opacity: 0,
      width: 0,
      height: 0
    }
  }, rest)), /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      width: 20,
      height: 20,
      flex: "0 0 20px",
      display: "grid",
      placeItems: "center",
      background: "var(--ocp-ink)",
      border: `var(--border-width) solid ${checked ? "var(--ocp-gold)" : "var(--border-subtle)"}`,
      borderRadius: "var(--radius-pill)",
      transition: "var(--transition-control)"
    }
  }, checked ? /*#__PURE__*/React.createElement("span", {
    style: {
      width: 10,
      height: 10,
      borderRadius: "var(--radius-pill)",
      background: "var(--ocp-gold)"
    }
  }) : null), /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--text-style-body)",
      fontSize: "var(--type-body-sm)",
      color: "var(--text-primary)"
    }
  }, label));
}
Object.assign(__ds_scope, { Radio });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Radio.jsx", error: String((e && e.message) || e) }); }

// components/forms/Select.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Select({
  label,
  options = [],
  value,
  onChange,
  disabled = false,
  id,
  style,
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  const uid = id || React.useId();
  return /*#__PURE__*/React.createElement("label", {
    htmlFor: uid,
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-2)",
      ...style
    }
  }, label ? /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--text-style-eyebrow)",
      textTransform: "uppercase",
      letterSpacing: "var(--ls-eyebrow)",
      color: "var(--text-secondary)"
    }
  }, label) : null, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      display: "block"
    }
  }, /*#__PURE__*/React.createElement("select", _extends({
    id: uid,
    value: value,
    onChange: onChange,
    disabled: disabled,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      appearance: "none",
      width: "100%",
      height: "var(--control-height)",
      padding: "0 40px 0 var(--space-4)",
      background: disabled ? "var(--surface-inset)" : "var(--ocp-ink)",
      border: `var(--border-width) solid ${focus ? "var(--ocp-gold)" : "var(--border-subtle)"}`,
      borderRadius: "var(--radius-sm)",
      outline: "none",
      font: "var(--fw-semibold) 0.9375rem/1 var(--font-display)",
      textTransform: "uppercase",
      letterSpacing: "0.04em",
      color: disabled ? "var(--text-muted)" : "var(--text-primary)",
      cursor: disabled ? "not-allowed" : "pointer",
      transition: "var(--transition-control)"
    }
  }, rest), options.map(o => {
    const opt = typeof o === "string" ? {
      value: o,
      label: o
    } : o;
    return /*#__PURE__*/React.createElement("option", {
      key: opt.value,
      value: opt.value,
      style: {
        background: "var(--ocp-black)"
      }
    }, opt.label);
  })), /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      position: "absolute",
      right: 16,
      top: "50%",
      width: 8,
      height: 8,
      borderRight: "2px solid var(--ocp-gold)",
      borderBottom: "2px solid var(--ocp-gold)",
      transform: "translateY(-70%) rotate(45deg)",
      pointerEvents: "none"
    }
  })));
}
Object.assign(__ds_scope, { Select });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Select.jsx", error: String((e && e.message) || e) }); }

// components/forms/Switch.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Switch({
  label,
  checked = false,
  onChange,
  disabled = false,
  id,
  style,
  ...rest
}) {
  const uid = id || React.useId();
  return /*#__PURE__*/React.createElement("label", {
    htmlFor: uid,
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: "var(--space-3)",
      cursor: disabled ? "not-allowed" : "pointer",
      opacity: disabled ? 0.5 : 1,
      ...style
    }
  }, /*#__PURE__*/React.createElement("input", _extends({
    id: uid,
    type: "checkbox",
    role: "switch",
    checked: checked,
    onChange: onChange,
    disabled: disabled,
    style: {
      position: "absolute",
      opacity: 0,
      width: 0,
      height: 0
    }
  }, rest)), /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      width: 44,
      height: 24,
      flex: "0 0 44px",
      padding: 2,
      display: "flex",
      alignItems: "center",
      justifyContent: checked ? "flex-end" : "flex-start",
      background: checked ? "var(--ocp-gold)" : "var(--ocp-grey-800)",
      border: `var(--border-width) solid ${checked ? "var(--ocp-gold)" : "var(--border-subtle)"}`,
      borderRadius: "var(--radius-pill)",
      transition: "var(--transition-control)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 18,
      height: 18,
      borderRadius: "var(--radius-pill)",
      background: checked ? "var(--ocp-black)" : "var(--ocp-grey-400)",
      transition: "var(--transition-control)"
    }
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--text-style-body)",
      fontSize: "var(--type-body-sm)",
      color: "var(--text-primary)"
    }
  }, label));
}
Object.assign(__ds_scope, { Switch });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Switch.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Tabs.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Underlined Khand caps tab bar sitting on a gold hairline. */
function Tabs({
  items = [],
  value,
  onChange,
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(null);
  return /*#__PURE__*/React.createElement("div", _extends({
    role: "tablist",
    style: {
      display: "flex",
      gap: "var(--space-8)",
      alignItems: "stretch",
      borderBottom: "var(--border-width) solid var(--border-hairline)",
      ...style
    }
  }, rest), items.map(it => {
    const item = typeof it === "string" ? {
      value: it,
      label: it
    } : it;
    const active = item.value === value;
    const on = hover === item.value;
    return /*#__PURE__*/React.createElement("button", {
      key: item.value,
      role: "tab",
      "aria-selected": active,
      onClick: () => onChange && onChange(item.value),
      onMouseEnter: () => setHover(item.value),
      onMouseLeave: () => setHover(null),
      style: {
        background: "none",
        border: "none",
        cursor: "pointer",
        padding: "0 0 12px",
        marginBottom: -1,
        font: "var(--fw-semibold) 1.0625rem/1 var(--font-display)",
        textTransform: "uppercase",
        letterSpacing: "0.04em",
        color: active ? "var(--ocp-gold)" : on ? "var(--ocp-cream)" : "var(--text-secondary)",
        borderBottom: `var(--border-width-thick) solid ${active ? "var(--ocp-gold)" : "transparent"}`,
        transition: "var(--transition-control)",
        display: "flex",
        alignItems: "center",
        gap: "var(--space-2)"
      }
    }, item.label, item.count != null ? /*#__PURE__*/React.createElement("span", {
      style: {
        font: "var(--fw-bold) var(--type-micro)/1 var(--font-body)",
        color: "var(--text-muted)"
      }
    }, item.count) : null);
  }));
}
Object.assign(__ds_scope, { Tabs });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Tabs.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Chrome.jsx
try { (() => {
const {
  Button,
  IconButton,
  LogoPuck,
  Tag,
  SectionLabel
} = window.OakCliffPilatesDesignSystem_d090e5;
const A = "../../assets";
const NAV = [{
  id: "home",
  label: "Home"
}, {
  id: "schedule",
  label: "Schedule"
}, {
  id: "locations",
  label: "Studios"
}, {
  id: "membership",
  label: "Pricing"
}];
function SiteHeader({
  route,
  go
}) {
  return /*#__PURE__*/React.createElement("header", {
    style: {
      position: "sticky",
      top: 0,
      zIndex: 30,
      background: "rgba(11,11,11,.82)",
      backdropFilter: "var(--blur-nav)",
      borderBottom: "var(--rule-gold)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "var(--layout-max)",
      margin: "0 auto",
      height: 76,
      padding: "0 var(--layout-gutter-lg)",
      display: "flex",
      alignItems: "center",
      gap: "var(--space-10)"
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "#home",
    onClick: e => {
      e.preventDefault();
      go("home");
    },
    style: {
      display: "flex",
      alignItems: "center",
      gap: 12,
      textDecoration: "none"
    }
  }, /*#__PURE__*/React.createElement(LogoPuck, {
    finish: "gold",
    size: 48,
    assetBase: A
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--fw-bold) 1.0625rem/1 var(--font-display)",
      textTransform: "uppercase",
      letterSpacing: "0.06em",
      color: "var(--ocp-cream)"
    }
  }, "Oak Cliff", /*#__PURE__*/React.createElement("br", null), "Pilates")), /*#__PURE__*/React.createElement("nav", {
    style: {
      display: "flex",
      gap: "var(--space-8)",
      marginLeft: "auto"
    }
  }, NAV.map(n => /*#__PURE__*/React.createElement("a", {
    key: n.id,
    href: `#${n.id}`,
    onClick: e => {
      e.preventDefault();
      go(n.id);
    },
    style: {
      font: "var(--fw-semibold) 1rem/1 var(--font-display)",
      textTransform: "uppercase",
      letterSpacing: "0.05em",
      textDecoration: "none",
      color: route === n.id ? "var(--ocp-gold)" : "var(--ocp-cream)",
      paddingBottom: 4,
      borderBottom: `2px solid ${route === n.id ? "var(--ocp-gold)" : "transparent"}`
    }
  }, n.label))), /*#__PURE__*/React.createElement(Button, {
    size: "sm",
    onClick: () => go("schedule")
  }, "Book a class")));
}
function SiteFooter({
  go
}) {
  return /*#__PURE__*/React.createElement("footer", {
    style: {
      borderTop: "var(--rule-gold)",
      background: "var(--ocp-black)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "var(--layout-max)",
      margin: "0 auto",
      padding: "var(--space-16) var(--layout-gutter-lg) var(--space-10)",
      display: "grid",
      gridTemplateColumns: "1.4fr 1fr 1fr 1fr",
      gap: "var(--space-10)"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      font: "var(--fw-bold) 2rem/.9 var(--font-display)",
      textTransform: "uppercase",
      letterSpacing: "var(--ls-display)",
      color: "var(--ocp-cream)",
      marginBottom: 14
    }
  }, "Are you down", /*#__PURE__*/React.createElement("br", null), "with OCP?"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: "var(--space-2)",
      flexWrap: "wrap"
    }
  }, /*#__PURE__*/React.createElement(Tag, {
    size: "sm"
  }, "Energy Elevated\u2122"), /*#__PURE__*/React.createElement(Tag, {
    size: "sm"
  }, "Pilates in the Park"))), [["Studios", ["Bishop Arts", "Uptown", "Lower Greenville"]], ["Classes", ["OG Reformer", "Flex & Flow", "Sculpt", "Happy Hour"]], ["Company", ["Pricing", "Instructors", "First timers", "Careers"]]].map(([h, links]) => /*#__PURE__*/React.createElement("div", {
    key: h
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: "var(--text-style-eyebrow)",
      textTransform: "uppercase",
      letterSpacing: "var(--ls-eyebrow)",
      color: "var(--ocp-gold)",
      marginBottom: 14
    }
  }, h), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 10
    }
  }, links.map(l => /*#__PURE__*/React.createElement("a", {
    key: l,
    href: "#",
    onClick: e => e.preventDefault(),
    style: {
      font: "var(--fw-regular) var(--type-body-sm)/1 var(--font-body)",
      color: "var(--text-secondary)",
      textDecoration: "none"
    }
  }, l)))))), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "var(--layout-max)",
      margin: "0 auto",
      padding: "var(--space-5) var(--layout-gutter-lg) var(--space-10)",
      borderTop: "var(--rule-gold)",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--text-style-eyebrow)",
      textTransform: "uppercase",
      letterSpacing: "var(--ls-eyebrow)",
      color: "var(--text-muted)"
    }
  }, "Dallas, TX \xB7 Bishop Arts \xB7 Uptown \xB7 Lower Greenville"), /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--text-style-eyebrow)",
      textTransform: "uppercase",
      letterSpacing: "var(--ls-eyebrow)",
      color: "var(--ocp-gold)"
    }
  }, "oakcliffpilates.com \xB7 @oakcliffpilates")));
}
Object.assign(window, {
  SiteHeader,
  SiteFooter,
  NAV,
  ASSETS: A
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Chrome.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/HomeScreen.jsx
try { (() => {
const {
  Button,
  Tag,
  Badge,
  Card,
  LogoPuck,
  SectionLabel,
  FoilText,
  StatBlock,
  PhotoFrame
} = window.OakCliffPilatesDesignSystem_d090e5;
function HomeScreen({
  go
}) {
  const A = window.ASSETS;
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("section", {
    style: {
      position: "relative",
      minHeight: 620,
      display: "flex",
      alignItems: "flex-end",
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: `${A}/photo-member-golden-window.jpg`,
    alt: "",
    style: {
      position: "absolute",
      inset: 0,
      width: "100%",
      height: "100%",
      objectFit: "cover"
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      inset: 0,
      background: "var(--ocp-photo-scrim)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      maxWidth: "var(--layout-max)",
      margin: "0 auto",
      width: "100%",
      padding: "var(--space-24) var(--layout-gutter-lg) var(--space-16)"
    }
  }, /*#__PURE__*/React.createElement(SectionLabel, {
    number: "01",
    style: {
      marginBottom: "var(--space-5)"
    }
  }, "Reformer Pilates \xB7 Dallas"), /*#__PURE__*/React.createElement("h1", {
    style: {
      margin: 0,
      maxWidth: "16ch",
      font: "var(--fw-bold) clamp(3.5rem,7vw,6rem)/0.88 var(--font-display)",
      textTransform: "uppercase",
      letterSpacing: "var(--ls-display)",
      color: "var(--ocp-cream)"
    }
  }, "Where Pilates meets ", /*#__PURE__*/React.createElement(FoilText, null, "hustle")), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: "var(--space-6) 0 var(--space-8)",
      maxWidth: "46ch",
      font: "var(--text-style-body)",
      fontSize: "var(--type-body-lg)",
      color: "var(--ocp-grey-300)"
    }
  }, "Three Dallas studios. 250+ classes a week. A hype team in every room and a playlist that earns its volume."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: "var(--space-3)",
      flexWrap: "wrap"
    }
  }, /*#__PURE__*/React.createElement(Button, {
    size: "lg",
    onClick: () => go("schedule")
  }, "Book a class"), /*#__PURE__*/React.createElement(Button, {
    size: "lg",
    variant: "secondary",
    onClick: () => go("membership")
  }, "See pricing")))), /*#__PURE__*/React.createElement("section", {
    style: {
      borderTop: "var(--rule-gold)",
      borderBottom: "var(--rule-gold)",
      background: "var(--ocp-black)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "var(--layout-max)",
      margin: "0 auto",
      padding: "var(--space-10) var(--layout-gutter-lg)",
      display: "grid",
      gridTemplateColumns: "repeat(4,1fr)"
    }
  }, /*#__PURE__*/React.createElement(StatBlock, {
    value: "2016",
    label: "Started in the park",
    divider: false
  }), /*#__PURE__*/React.createElement(StatBlock, {
    value: "3",
    label: "Dallas studios"
  }), /*#__PURE__*/React.createElement(StatBlock, {
    value: "250+",
    label: "Classes a week"
  }), /*#__PURE__*/React.createElement(StatBlock, {
    value: "\u221E",
    label: "Every body, every level"
  }))), /*#__PURE__*/React.createElement("section", {
    style: {
      maxWidth: "var(--layout-max)",
      margin: "0 auto",
      padding: "var(--layout-section-y) var(--layout-gutter-lg)"
    }
  }, /*#__PURE__*/React.createElement(SectionLabel, {
    number: "02",
    rule: true
  }, "The classes"), /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: "var(--space-6) 0 var(--space-10)",
      font: "var(--text-style-h2)",
      textTransform: "uppercase",
      letterSpacing: "var(--ls-display)",
      maxWidth: "20ch"
    }
  }, "Four ways to get after it"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(4,1fr)",
      gap: "var(--space-5)"
    }
  }, [{
    name: "OG Reformer",
    len: "50 min",
    copy: "The one that started it all. Spring tension, full body, no filler.",
    tag: "All levels"
  }, {
    name: "Flex & Flow",
    len: "50 min",
    copy: "Slower tempo, longer holds, deeper stretch. Recovery that still works.",
    tag: "All levels"
  }, {
    name: "Sculpt",
    len: "45 min",
    copy: "Reformer plus weights. Heaviest springs, highest heart rate in the building.",
    tag: "Level 2"
  }, {
    name: "Happy Hour",
    len: "50 min",
    copy: "Friday, 6pm, lights low, neon on. Bring a friend who talks trash.",
    tag: "Event",
    neon: true
  }].map(c => /*#__PURE__*/React.createElement(Card, {
    key: c.name,
    hoverable: true,
    footer: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("span", null, c.len), /*#__PURE__*/React.createElement("span", {
      style: {
        font: "var(--text-style-eyebrow)",
        letterSpacing: "var(--ls-eyebrow)",
        color: "var(--text-muted)"
      }
    }, "Reformer"))
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-3)"
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    tone: c.neon ? "neon" : "outline"
  }, c.tag), /*#__PURE__*/React.createElement("div", {
    style: {
      font: "var(--text-style-h4)",
      textTransform: "uppercase",
      letterSpacing: "var(--ls-display)"
    }
  }, c.name), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      font: "var(--text-style-body)",
      fontSize: "var(--type-body-sm)",
      color: "var(--text-secondary)"
    }
  }, c.copy)))))), /*#__PURE__*/React.createElement("section", {
    style: {
      background: "var(--surface-light)",
      color: "var(--text-on-light)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "var(--layout-max)",
      margin: "0 auto",
      padding: "var(--layout-section-y) var(--layout-gutter-lg)",
      display: "grid",
      gridTemplateColumns: "1.1fr 1fr",
      gap: "var(--space-16)",
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "baseline",
      gap: "var(--space-4)",
      paddingBottom: "var(--space-3)",
      borderBottom: "1px solid var(--border-on-light)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--fw-bold) var(--type-body)/1 var(--font-display)",
      color: "var(--ocp-gold-deep)"
    }
  }, "03"), /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--text-style-eyebrow)",
      textTransform: "uppercase",
      letterSpacing: "var(--ls-eyebrow-wide)",
      color: "var(--ocp-gold-deep)"
    }
  }, "Who we are")), /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: "var(--space-6) 0 var(--space-5)",
      font: "var(--text-style-h2)",
      textTransform: "uppercase",
      letterSpacing: "var(--ls-display)"
    }
  }, "Community-first,", /*#__PURE__*/React.createElement("br", null), "not fitness-first"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: "0 0 var(--space-4)",
      font: "var(--text-style-body)",
      color: "var(--text-on-light-secondary)",
      maxWidth: "48ch"
    }
  }, "We started in 2016 as ", /*#__PURE__*/React.createElement("b", {
    style: {
      color: "var(--text-on-light)"
    }
  }, "Pilates in the Park"), " and became a studio in 2021. Black, Latino, and LGBTQ+ communities aren't an afterthought \u2014 they're the foundation."), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: "0 0 var(--space-8)",
      font: "var(--text-style-body)",
      color: "var(--text-on-light-secondary)",
      maxWidth: "48ch"
    }
  }, "Warm but never soft. Direct but never cold. You'll feel the electricity the second you walk in."), /*#__PURE__*/React.createElement(Button, {
    variant: "onLight",
    onClick: () => go("locations")
  }, "Meet the studios")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: "var(--space-3)"
    }
  }, /*#__PURE__*/React.createElement(PhotoFrame, {
    src: `${A}/photo-overhead-class.jpg`,
    ratio: "1 / 1",
    caption: "Overhead"
  }), /*#__PURE__*/React.createElement(PhotoFrame, {
    src: `${A}/photo-neon-sign.jpg`,
    ratio: "1 / 1",
    caption: "Neon sign"
  }), /*#__PURE__*/React.createElement(PhotoFrame, {
    src: `${A}/photo-studio-reformers.jpg`,
    ratio: "1 / 1",
    caption: "The studio"
  }), /*#__PURE__*/React.createElement(PhotoFrame, {
    src: `${A}/photo-golden-hour-class.jpg`,
    ratio: "1 / 1",
    caption: "Golden hour"
  })))), /*#__PURE__*/React.createElement("section", {
    style: {
      maxWidth: "var(--layout-max)",
      margin: "0 auto",
      padding: "var(--layout-section-y) var(--layout-gutter-lg)"
    }
  }, /*#__PURE__*/React.createElement(SectionLabel, {
    number: "04",
    rule: true
  }, "First time on the reformer"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(3,1fr)",
      gap: "var(--space-8)",
      marginTop: "var(--space-10)"
    }
  }, [["Grip socks required", "Grab a pair at the front desk if you forgot yours. $18, yours to keep."], ["Roll in ten early", "Tell your instructor it's your first time. You get a walkthrough before the lights drop."], ["Every body, every level", "Springs adjust, springs are honest. Nobody is watching you but your hype team."]].map(([h, b], i) => /*#__PURE__*/React.createElement("div", {
    key: h,
    style: {
      paddingTop: "var(--space-5)",
      borderTop: "var(--rule-gold)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: "var(--fw-bold) var(--type-body)/1 var(--font-display)",
      color: "var(--ocp-gold-deep)",
      marginBottom: "var(--space-4)"
    }
  }, `0${i + 1}`), /*#__PURE__*/React.createElement("div", {
    style: {
      font: "var(--text-style-h4)",
      textTransform: "uppercase",
      letterSpacing: "var(--ls-display)",
      marginBottom: "var(--space-3)"
    }
  }, h), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      font: "var(--text-style-body)",
      fontSize: "var(--type-body-sm)",
      color: "var(--text-secondary)"
    }
  }, b))))), /*#__PURE__*/React.createElement("section", {
    style: {
      position: "relative",
      overflow: "hidden",
      borderTop: "var(--rule-gold)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "var(--layout-max)",
      margin: "0 auto",
      padding: "var(--space-24) var(--layout-gutter-lg)",
      textAlign: "center",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      gap: "var(--space-6)"
    }
  }, /*#__PURE__*/React.createElement(LogoPuck, {
    finish: "gold",
    size: 104,
    glow: true,
    assetBase: A
  }), /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: 0,
      font: "var(--text-style-h1)",
      textTransform: "uppercase",
      letterSpacing: "var(--ls-display)"
    }
  }, "Are you down with OCP?"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: "var(--space-3)"
    }
  }, /*#__PURE__*/React.createElement(Button, {
    size: "lg",
    onClick: () => go("schedule")
  }, "Grab a spot"), /*#__PURE__*/React.createElement(Button, {
    size: "lg",
    variant: "ghost",
    onClick: () => go("membership")
  }, "Intro offer \u2014 3 for $45")))));
}
Object.assign(window, {
  HomeScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/HomeScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/LocationsScreen.jsx
try { (() => {
const {
  Button,
  Badge,
  Card,
  Tabs,
  PhotoFrame,
  SectionLabel,
  LogoPuck
} = window.OakCliffPilatesDesignSystem_d090e5;
const STUDIOS = [{
  id: "bishop",
  name: "Bishop Arts",
  hood: "Oak Cliff",
  addr: "412 N Bishop Ave, Dallas, TX 75208",
  photo: "photo-studio-reformers.jpg",
  reformers: 14,
  note: "The original room. Floor-to-ceiling windows, golden hour hits at 6pm.",
  hours: "Mon–Fri 5:45a–8:15p · Sat–Sun 7a–1p"
}, {
  id: "uptown",
  name: "Uptown",
  hood: "McKinney Ave",
  addr: "2919 McKinney Ave, Dallas, TX 75204",
  photo: "photo-neon-sign.jpg",
  reformers: 16,
  note: "Neon on the back wall, loudest playlist in the company.",
  hours: "Mon–Fri 5:30a–8:45p · Sat–Sun 7a–2p"
}, {
  id: "greenville",
  name: "Lower Greenville",
  hood: "Greenville Ave",
  addr: "1909 Greenville Ave, Dallas, TX 75206",
  photo: "photo-golden-hour-class.jpg",
  reformers: 12,
  note: "Newest studio. Sculpt lives here — heaviest springs in the building.",
  hours: "Mon–Fri 6a–8p · Sat–Sun 8a–1p"
}];
function LocationsScreen({
  go
}) {
  const A = window.ASSETS;
  const [active, setActive] = React.useState("bishop");
  const s = STUDIOS.find(x => x.id === active);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "var(--layout-max)",
      margin: "0 auto",
      padding: "var(--space-16) var(--layout-gutter-lg) var(--space-24)"
    }
  }, /*#__PURE__*/React.createElement(SectionLabel, {
    number: "02",
    rule: true
  }, "Studios"), /*#__PURE__*/React.createElement("h1", {
    style: {
      margin: "var(--space-6) 0 var(--space-4)",
      font: "var(--text-style-h2)",
      textTransform: "uppercase",
      letterSpacing: "var(--ls-display)"
    }
  }, "Three Dallas homes"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: "0 0 var(--space-10)",
      font: "var(--text-style-body)",
      color: "var(--text-secondary)",
      maxWidth: "52ch"
    }
  }, "Same energy, three rooms. Park on the street, walk in ten minutes early, grab grip socks at the desk."), /*#__PURE__*/React.createElement(Tabs, {
    items: STUDIOS.map(x => ({
      value: x.id,
      label: x.name
    })),
    value: active,
    onChange: setActive
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1.35fr 1fr",
      gap: "var(--space-10)",
      marginTop: "var(--space-8)",
      alignItems: "start"
    }
  }, /*#__PURE__*/React.createElement(PhotoFrame, {
    src: `${A}/${s.photo}`,
    ratio: "16 / 10",
    caption: `${s.name} · ${s.hood}`
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: "var(--space-2)",
      marginBottom: "var(--space-5)"
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    tone: "gold"
  }, `${s.reformers} reformers`), /*#__PURE__*/React.createElement(Badge, {
    tone: "outline"
  }, "Open today")), /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: "0 0 var(--space-4)",
      font: "var(--text-style-h3)",
      textTransform: "uppercase",
      letterSpacing: "var(--ls-display)"
    }
  }, s.name), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: "0 0 var(--space-6)",
      font: "var(--text-style-body)",
      fontSize: "var(--type-body-sm)",
      color: "var(--text-secondary)"
    }
  }, s.note), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-4)",
      paddingTop: "var(--space-5)",
      borderTop: "var(--rule-gold)"
    }
  }, [["Address", s.addr], ["Hours", s.hours], ["Parking", "Free street parking · lot behind the building after 5pm"]].map(([k, v]) => /*#__PURE__*/React.createElement("div", {
    key: k,
    style: {
      display: "grid",
      gridTemplateColumns: "88px 1fr",
      gap: "var(--space-4)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--text-style-eyebrow)",
      textTransform: "uppercase",
      letterSpacing: "var(--ls-eyebrow)",
      color: "var(--ocp-gold)"
    }
  }, k), /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--fw-regular) var(--type-body-sm)/1.5 var(--font-body)",
      color: "var(--text-primary)"
    }
  }, v)))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: "var(--space-3)",
      marginTop: "var(--space-8)"
    }
  }, /*#__PURE__*/React.createElement(Button, {
    onClick: () => go("schedule")
  }, "See this schedule"), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary"
  }, "Get directions")))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(3,1fr)",
      gap: "var(--space-5)",
      marginTop: "var(--space-16)"
    }
  }, STUDIOS.map(x => /*#__PURE__*/React.createElement(Card, {
    key: x.id,
    hoverable: true,
    onClick: () => setActive(x.id),
    padding: "0",
    style: {
      cursor: "pointer",
      borderColor: x.id === active ? "var(--ocp-gold)" : undefined
    },
    footer: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("span", null, x.name), /*#__PURE__*/React.createElement("span", {
      style: {
        font: "var(--text-style-eyebrow)",
        letterSpacing: "var(--ls-eyebrow)",
        color: "var(--text-muted)"
      }
    }, x.hood))
  }, /*#__PURE__*/React.createElement("img", {
    src: `${A}/${x.photo}`,
    alt: "",
    style: {
      width: "100%",
      height: 150,
      objectFit: "cover",
      display: "block"
    }
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: "var(--space-16)",
      padding: "var(--space-12)",
      border: "var(--rule-gold)",
      borderRadius: "var(--radius-lg)",
      display: "flex",
      alignItems: "center",
      gap: "var(--space-10)"
    }
  }, /*#__PURE__*/React.createElement(LogoPuck, {
    finish: "gold",
    size: 88,
    glow: true,
    assetBase: A
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: "0 0 var(--space-2)",
      font: "var(--text-style-h4)",
      textTransform: "uppercase",
      letterSpacing: "var(--ls-display)"
    }
  }, "Pilates in the Park is still free"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      font: "var(--text-style-body)",
      fontSize: "var(--type-body-sm)",
      color: "var(--text-secondary)"
    }
  }, "Saturdays, 8am, Kiest Park. Mats only, no reformer, no cost. Where this whole thing started in 2016.")), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    onClick: () => go("schedule")
  }, "Save a mat")));
}
Object.assign(window, {
  LocationsScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/LocationsScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/MembershipScreen.jsx
try { (() => {
const {
  Button,
  Badge,
  Card,
  Radio,
  Checkbox,
  Switch,
  Input,
  Tag,
  SectionLabel,
  FoilText,
  Toast
} = window.OakCliffPilatesDesignSystem_d090e5;
const TIERS = [{
  id: "4",
  name: "Four Pack",
  price: "$96",
  per: "$24 / class",
  copy: "Four classes, 60 days to use them. No commitment, no auto-renew.",
  perks: ["Any studio", "Book 7 days out"]
}, {
  id: "8",
  name: "Eight / Month",
  price: "$168",
  per: "$21 / class",
  copy: "Two a week, the sweet spot. Rolls over one unused class.",
  perks: ["Any studio", "Book 14 days out", "10% off retail"],
  featured: true
}, {
  id: "u",
  name: "Unlimited",
  price: "$249",
  per: "flat",
  copy: "Every class, every studio, every week. Bring a friend once a month.",
  perks: ["Any studio", "Book 21 days out", "10% off retail", "One guest pass / month"]
}];
function MembershipScreen({
  go
}) {
  const A = window.ASSETS;
  const [tier, setTier] = React.useState("8");
  const [studio, setStudio] = React.useState(true);
  const [email, setEmail] = React.useState("");
  const [annual, setAnnual] = React.useState(false);
  const [done, setDone] = React.useState(false);
  const picked = TIERS.find(t => t.id === tier);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "var(--layout-max)",
      margin: "0 auto",
      padding: "var(--space-16) var(--layout-gutter-lg) var(--space-24)"
    }
  }, /*#__PURE__*/React.createElement(SectionLabel, {
    number: "03",
    rule: true
  }, "Pricing"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "flex-end",
      justifyContent: "space-between",
      gap: "var(--space-8)",
      margin: "var(--space-6) 0 var(--space-10)"
    }
  }, /*#__PURE__*/React.createElement("h1", {
    style: {
      margin: 0,
      font: "var(--text-style-h2)",
      textTransform: "uppercase",
      letterSpacing: "var(--ls-display)",
      maxWidth: "22ch"
    }
  }, "No contracts. Just ", /*#__PURE__*/React.createElement(FoilText, null, "show up")), /*#__PURE__*/React.createElement(Switch, {
    label: "Pay annually \u2014 save 12%",
    checked: annual,
    onChange: () => setAnnual(!annual)
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(3,1fr)",
      gap: "var(--space-5)"
    }
  }, TIERS.map(t => {
    const on = t.id === tier;
    return /*#__PURE__*/React.createElement(Card, {
      key: t.id,
      hoverable: true,
      onClick: () => setTier(t.id),
      padding: "var(--card-pad-lg)",
      style: {
        cursor: "pointer",
        borderColor: on ? "var(--ocp-gold)" : undefined,
        background: on ? "#131210" : undefined
      },
      footer: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("span", {
        style: {
          color: on ? "var(--ocp-gold)" : "var(--text-secondary)"
        }
      }, on ? "Selected" : "Choose"), /*#__PURE__*/React.createElement("span", {
        style: {
          font: "var(--text-style-eyebrow)",
          letterSpacing: "var(--ls-eyebrow)",
          color: "var(--text-muted)"
        }
      }, t.per))
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        flexDirection: "column",
        gap: "var(--space-4)"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between"
      }
    }, /*#__PURE__*/React.createElement(Radio, {
      name: "tier",
      label: "",
      checked: on,
      onChange: () => setTier(t.id)
    }), t.featured ? /*#__PURE__*/React.createElement(Badge, null, "Most picked") : null), /*#__PURE__*/React.createElement("div", {
      style: {
        font: "var(--text-style-h4)",
        textTransform: "uppercase",
        letterSpacing: "var(--ls-display)"
      }
    }, t.name), /*#__PURE__*/React.createElement("div", {
      style: {
        font: "var(--fw-bold) var(--type-display-2)/0.9 var(--font-display)",
        color: "var(--ocp-gold)",
        letterSpacing: "var(--ls-display)"
      }
    }, annual ? "$" + Math.round(parseInt(t.price.slice(1), 10) * 0.88) : t.price), /*#__PURE__*/React.createElement("p", {
      style: {
        margin: 0,
        font: "var(--text-style-body)",
        fontSize: "var(--type-body-sm)",
        color: "var(--text-secondary)"
      }
    }, t.copy), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        flexDirection: "column",
        gap: "var(--space-2)",
        paddingTop: "var(--space-3)",
        borderTop: "var(--rule-subtle)"
      }
    }, t.perks.map(p => /*#__PURE__*/React.createElement("span", {
      key: p,
      style: {
        font: "var(--fw-regular) var(--type-caption)/1.4 var(--font-body)",
        color: "var(--text-primary)",
        display: "flex",
        gap: 8
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        color: "var(--ocp-gold)"
      }
    }, "\u2014"), p)))));
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: "var(--space-16)",
      background: "var(--surface-light)",
      color: "var(--text-on-light)",
      borderRadius: "var(--radius-lg)",
      padding: "var(--space-12)",
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: "var(--space-12)",
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--text-style-eyebrow)",
      textTransform: "uppercase",
      letterSpacing: "var(--ls-eyebrow-wide)",
      color: "var(--ocp-gold-deep)"
    }
  }, "New here"), /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: "var(--space-4) 0",
      font: "var(--text-style-h2)",
      textTransform: "uppercase",
      letterSpacing: "var(--ls-display)"
    }
  }, "3 classes", /*#__PURE__*/React.createElement("br", null), "for $45"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: "0 0 var(--space-6)",
      font: "var(--text-style-body)",
      color: "var(--text-on-light-secondary)",
      maxWidth: "40ch"
    }
  }, "Any studio, any class, 30 days. Grip socks included on your first one."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: "var(--space-2)",
      flexWrap: "wrap"
    }
  }, /*#__PURE__*/React.createElement(Tag, {
    tone: "cream",
    size: "sm",
    style: {
      borderColor: "rgba(11,11,11,.2)",
      color: "var(--ocp-black)"
    }
  }, "OG Reformer"), /*#__PURE__*/React.createElement(Tag, {
    tone: "cream",
    size: "sm",
    style: {
      borderColor: "rgba(11,11,11,.2)",
      color: "var(--ocp-black)"
    }
  }, "Flex & Flow"), /*#__PURE__*/React.createElement(Tag, {
    tone: "cream",
    size: "sm",
    style: {
      borderColor: "rgba(11,11,11,.2)",
      color: "var(--ocp-black)"
    }
  }, "Sculpt"))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-4)"
    }
  }, /*#__PURE__*/React.createElement(Input, {
    label: "Email",
    placeholder: "you@dallas.com",
    value: email,
    onChange: e => setEmail(e.target.value),
    style: {
      ["--surface-inset"]: "#fff"
    }
  }), /*#__PURE__*/React.createElement(Checkbox, {
    label: "Text me when a spot opens up",
    checked: studio,
    onChange: () => setStudio(!studio),
    style: {
      color: "var(--ocp-black)"
    }
  }), /*#__PURE__*/React.createElement(Button, {
    variant: "onLight",
    size: "lg",
    fullWidth: true,
    onClick: () => {
      setDone(true);
      window.setTimeout(() => setDone(false), 4200);
    }
  }, "Claim the intro offer"), /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--fw-regular) var(--type-caption)/1.5 var(--font-body)",
      color: "var(--text-on-light-secondary)"
    }
  }, "You picked ", /*#__PURE__*/React.createElement("b", null, picked.name), " above \u2014 we'll hold it for 48 hours."))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: "var(--space-16)",
      display: "grid",
      gridTemplateColumns: "repeat(3,1fr)",
      gap: "var(--space-8)"
    }
  }, [["Cancel free, 12 hours out", "Inside 12 hours it's a late cancel and the class comes off your pack."], ["Freeze any month", "One freeze per membership year, up to 30 days. Text the front desk."], ["Grip socks required", "Every class, every studio. $18 at the desk if you forget."]].map(([h, b], i) => /*#__PURE__*/React.createElement("div", {
    key: h,
    style: {
      paddingTop: "var(--space-5)",
      borderTop: "var(--rule-gold)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: "var(--fw-bold) var(--type-body)/1 var(--font-display)",
      color: "var(--ocp-gold-deep)",
      marginBottom: "var(--space-4)"
    }
  }, `0${i + 1}`), /*#__PURE__*/React.createElement("div", {
    style: {
      font: "var(--text-style-h4)",
      fontSize: "var(--type-display-5)",
      textTransform: "uppercase",
      letterSpacing: "var(--ls-display)",
      marginBottom: "var(--space-2)"
    }
  }, h), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      font: "var(--text-style-body)",
      fontSize: "var(--type-body-sm)",
      color: "var(--text-secondary)"
    }
  }, b))))), done ? /*#__PURE__*/React.createElement("div", {
    style: {
      position: "fixed",
      right: 28,
      bottom: 28,
      zIndex: 60
    }
  }, /*#__PURE__*/React.createElement(Toast, {
    title: "Check your inbox",
    tone: "success",
    onClose: () => setDone(false)
  }, "Intro offer sent", email ? ` to ${email}` : "", ". See you in ten minutes early.")) : null);
}
Object.assign(window, {
  MembershipScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/MembershipScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/ScheduleScreen.jsx
try { (() => {
const {
  Button,
  Badge,
  Tag,
  Tabs,
  Select,
  Card,
  Dialog,
  Toast,
  Tooltip,
  IconButton,
  SectionLabel
} = window.OakCliffPilatesDesignSystem_d090e5;
const DAYS = [{
  value: "thu",
  label: "Thu 24",
  count: 14
}, {
  value: "fri",
  label: "Fri 25",
  count: 12
}, {
  value: "sat",
  label: "Sat 26",
  count: 9
}, {
  value: "sun",
  label: "Sun 27",
  count: 7
}];
const CLASSES = {
  thu: [{
    time: "6:00 AM",
    name: "OG Reformer",
    coach: "Marisol R.",
    room: "Studio A",
    spots: 4,
    level: "All levels"
  }, {
    time: "9:30 AM",
    name: "Sculpt",
    coach: "Dre W.",
    room: "Studio B",
    spots: 2,
    level: "Level 2"
  }, {
    time: "12:15 PM",
    name: "Flex & Flow",
    coach: "Kenya B.",
    room: "Studio A",
    spots: 7,
    level: "All levels"
  }, {
    time: "5:30 PM",
    name: "OG Reformer",
    coach: "Marisol R.",
    room: "Studio A",
    spots: 0,
    level: "All levels"
  }, {
    time: "6:00 PM",
    name: "Flex & Flow",
    coach: "Tez M.",
    room: "Studio B",
    spots: 3,
    level: "All levels"
  }, {
    time: "7:15 PM",
    name: "Sculpt",
    coach: "Dre W.",
    room: "Studio A",
    spots: 6,
    level: "Level 2"
  }],
  fri: [{
    time: "6:00 AM",
    name: "OG Reformer",
    coach: "Kenya B.",
    room: "Studio A",
    spots: 5,
    level: "All levels"
  }, {
    time: "12:15 PM",
    name: "Sculpt",
    coach: "Dre W.",
    room: "Studio B",
    spots: 1,
    level: "Level 2"
  }, {
    time: "6:00 PM",
    name: "Happy Hour",
    coach: "Tez M. + Marisol R.",
    room: "Studio A",
    spots: 8,
    level: "Event",
    neon: true
  }],
  sat: [{
    time: "8:00 AM",
    name: "Pilates in the Park",
    coach: "The Hype Team",
    room: "Kiest Park",
    spots: 22,
    level: "Free"
  }, {
    time: "10:00 AM",
    name: "OG Reformer",
    coach: "Marisol R.",
    room: "Studio A",
    spots: 3,
    level: "All levels"
  }, {
    time: "11:15 AM",
    name: "Flex & Flow",
    coach: "Kenya B.",
    room: "Studio B",
    spots: 6,
    level: "All levels"
  }],
  sun: [{
    time: "9:00 AM",
    name: "Flex & Flow",
    coach: "Tez M.",
    room: "Studio A",
    spots: 9,
    level: "All levels"
  }, {
    time: "10:30 AM",
    name: "OG Reformer",
    coach: "Dre W.",
    room: "Studio A",
    spots: 4,
    level: "All levels"
  }]
};
function ClassRow({
  c,
  onBook
}) {
  const [hover, setHover] = React.useState(false);
  const full = c.spots === 0;
  return /*#__PURE__*/React.createElement("div", {
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      display: "grid",
      gridTemplateColumns: "120px 1fr 170px 130px 150px",
      alignItems: "center",
      gap: "var(--space-5)",
      padding: "var(--space-5) var(--space-4)",
      borderBottom: "var(--rule-subtle)",
      background: hover ? "rgba(201,162,74,.05)" : "transparent",
      transition: "background var(--dur) var(--ease-out)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: "var(--fw-bold) 1.375rem/1 var(--font-display)",
      color: "var(--ocp-cream)",
      letterSpacing: "0.01em"
    }
  }, c.time), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 6
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: "var(--space-3)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--fw-semibold) 1.25rem/1 var(--font-display)",
      textTransform: "uppercase",
      letterSpacing: "0.02em"
    }
  }, c.name), /*#__PURE__*/React.createElement(Badge, {
    tone: c.neon ? "neon" : "outline"
  }, c.level)), /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--fw-regular) var(--type-caption)/1 var(--font-body)",
      color: "var(--text-muted)"
    }
  }, c.room)), /*#__PURE__*/React.createElement("div", {
    style: {
      font: "var(--fw-regular) var(--type-body-sm)/1 var(--font-body)",
      color: "var(--text-secondary)"
    }
  }, c.coach), /*#__PURE__*/React.createElement("div", {
    style: {
      font: "var(--text-style-eyebrow)",
      textTransform: "uppercase",
      letterSpacing: "var(--ls-eyebrow)",
      color: full ? "var(--text-muted)" : c.spots <= 2 ? "var(--ocp-gold)" : "var(--text-secondary)"
    }
  }, full ? "Waitlist" : `${c.spots} spots left`), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "flex-end"
    }
  }, /*#__PURE__*/React.createElement(Button, {
    size: "sm",
    variant: full ? "secondary" : "primary",
    onClick: () => onBook(c)
  }, full ? "Join waitlist" : "Book")));
}
function ScheduleScreen() {
  const [day, setDay] = React.useState("thu");
  const [studio, setStudio] = React.useState("Bishop Arts");
  const [type, setType] = React.useState("All classes");
  const [pending, setPending] = React.useState(null);
  const [toast, setToast] = React.useState(null);
  const confirm = () => {
    setToast({
      title: pending.spots === 0 ? "You're on the list" : "You're in",
      body: `${pending.time} ${pending.name} · ${studio}`,
      tone: pending.spots === 0 ? "default" : "success"
    });
    setPending(null);
    window.clearTimeout(window.__ocpToast);
    window.__ocpToast = window.setTimeout(() => setToast(null), 4200);
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      minHeight: 900
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "var(--layout-max)",
      margin: "0 auto",
      padding: "var(--space-16) var(--layout-gutter-lg) var(--space-24)"
    }
  }, /*#__PURE__*/React.createElement(SectionLabel, {
    number: "01",
    rule: true
  }, "Schedule"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "flex-end",
      justifyContent: "space-between",
      gap: "var(--space-8)",
      margin: "var(--space-6) 0 var(--space-10)"
    }
  }, /*#__PURE__*/React.createElement("h1", {
    style: {
      margin: 0,
      font: "var(--text-style-h2)",
      textTransform: "uppercase",
      letterSpacing: "var(--ls-display)"
    }
  }, "250+ classes a week"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: "var(--space-3)"
    }
  }, /*#__PURE__*/React.createElement(Select, {
    label: "Studio",
    options: ["Bishop Arts", "Uptown", "Lower Greenville"],
    value: studio,
    onChange: e => setStudio(e.target.value),
    style: {
      width: 210
    }
  }), /*#__PURE__*/React.createElement(Select, {
    label: "Class",
    options: ["All classes", "OG Reformer", "Flex & Flow", "Sculpt", "Happy Hour"],
    value: type,
    onChange: e => setType(e.target.value),
    style: {
      width: 200
    }
  }))), /*#__PURE__*/React.createElement(Tabs, {
    items: DAYS,
    value: day,
    onChange: setDay
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: "var(--space-6)",
      border: "var(--border-width) solid var(--border-hairline)",
      borderRadius: "var(--radius-lg)",
      overflow: "hidden",
      background: "var(--surface-card)"
    }
  }, (CLASSES[day] || []).filter(c => type === "All classes" || c.name === type).map(c => /*#__PURE__*/React.createElement(ClassRow, {
    key: c.time + c.name,
    c: c,
    onBook: setPending
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: "var(--space-2)",
      marginTop: "var(--space-8)",
      flexWrap: "wrap",
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--text-style-eyebrow)",
      textTransform: "uppercase",
      letterSpacing: "var(--ls-eyebrow)",
      color: "var(--text-muted)",
      marginRight: 8
    }
  }, "Popular"), ["OG Reformer", "Flex & Flow", "Pilates AF", "Pilates Hype Team"].map(t => /*#__PURE__*/React.createElement(Tag, {
    key: t,
    size: "sm",
    onClick: () => {}
  }, t)), /*#__PURE__*/React.createElement(Tooltip, {
    label: "Sync to your calendar",
    placement: "top"
  }, /*#__PURE__*/React.createElement(IconButton, {
    label: "Sync to your calendar",
    size: "sm"
  }, "+")))), /*#__PURE__*/React.createElement(Dialog, {
    open: !!pending,
    eyebrow: pending && pending.spots === 0 ? "Join the waitlist" : "Confirm booking",
    title: pending ? `${pending.time} ${pending.name}?` : "",
    onClose: () => setPending(null),
    footer: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Button, {
      variant: "ghost",
      size: "sm",
      onClick: () => setPending(null)
    }, "Never mind"), /*#__PURE__*/React.createElement(Button, {
      size: "sm",
      onClick: confirm
    }, pending && pending.spots === 0 ? "Add me" : "Lock it in"))
  }, pending ? `${studio} · ${pending.room} · ${pending.coach}. Cancel free up to 12 hours out. Grip socks required.` : ""), toast ? /*#__PURE__*/React.createElement("div", {
    style: {
      position: "fixed",
      right: 28,
      bottom: 28,
      zIndex: 60
    }
  }, /*#__PURE__*/React.createElement(Toast, {
    title: toast.title,
    tone: toast.tone,
    onClose: () => setToast(null)
  }, toast.body)) : null);
}
Object.assign(window, {
  ScheduleScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/ScheduleScreen.jsx", error: String((e && e.message) || e) }); }

__ds_ns.FoilText = __ds_scope.FoilText;

__ds_ns.LogoPuck = __ds_scope.LogoPuck;

__ds_ns.PhotoFrame = __ds_scope.PhotoFrame;

__ds_ns.SectionLabel = __ds_scope.SectionLabel;

__ds_ns.StatBlock = __ds_scope.StatBlock;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.IconButton = __ds_scope.IconButton;

__ds_ns.Tag = __ds_scope.Tag;

__ds_ns.Dialog = __ds_scope.Dialog;

__ds_ns.Toast = __ds_scope.Toast;

__ds_ns.Tooltip = __ds_scope.Tooltip;

__ds_ns.Checkbox = __ds_scope.Checkbox;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Radio = __ds_scope.Radio;

__ds_ns.Select = __ds_scope.Select;

__ds_ns.Switch = __ds_scope.Switch;

__ds_ns.Tabs = __ds_scope.Tabs;

})();
