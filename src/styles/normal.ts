import { capitalize } from "lodash";
import { ColorValue, DimensionValue, Platform } from "react-native";
import { OUs } from "../types/common";
import { TBS, TBorderRadius } from "../types/styles/normal";
const _0 = (a: string[], j = "-") => a.join(j),
  _1 = "visible",
  _2 = "hidden",
  _3 = "solid",
  _4 = "dotted",
  _5 = "dashed",
  _6 = "auto",
  _7 = "none",
  _8 = "nums",
  _9 = "",
  _10 = "normal",
  _11 = "italic",
  _12 = "bold",
  _13 = "small-caps",
  _14 = _0([_9, _8]),
  _15 = `oldstyle${_14}`,
  _16 = `linig${_14}`,
  _17 = `tabular${_14}`,
  _18 = `proportional${_14}`,
  _19 = "left",
  _20 = "right",
  _21 = "justify",
  _22 = "center",
  _23 = "top",
  _24 = "bottom",
  _25 = "under",
  _26 = "line",
  _27 = "through",
  _28 = `${_25}${_26}`,
  _29 = _0([_26, _27]),
  _30 = _0([_28, _29], " "),
  _31 = "double",
  _32 = "case",
  _33 = `upper${_32}`,
  _34 = `lower${_32}`,
  _35 = "capitalize",
  _36 = "middle",
  _37 = "ltr",
  _38 = "rtl",
  _39 = "box-",
  _40 = "only",
  _41 = `${_39}${_7}`,
  _42 = `${_39}${_40}`,
  _43 = "flex",
  _44 = "start",
  _45 = "end",
  _46 = _0([_43, _44]),
  _47 = _0([_43, _45]),
  _48 = "stretch",
  _49 = "space",
  _50 = "between",
  _51 = "around",
  _52 = _0([_49, _50]),
  _53 = _0([_49, _51]),
  _54 = "base",
  _55 = _0([_54, _26], ""),
  _57 = "inherit",
  _58 = "reverse",
  _59 = "row",
  _60 = "column",
  _61 = _0([_59, _58]),
  _62 = _0([_60, _58]),
  _64 = "evenly",
  _65 = _0([_49, _64]),
  _66 = "scroll",
  _67 = "absolute",
  _68 = "relative",
  _69 = "cover",
  _70 = "contain",
  _71 = "repeat",
  _72 = "fill",
  _73 = "scale",
  _74 = "down",
  _75 = _0([_73, _74]),
  _76 = "horizontal",
  _77 = "vertical",
  _78 = "border",
  _79 = "radius";
let border = (bt: string = "", type: TBS = "", value: any) => {
  let _ = (p = "") => `${_78}${capitalize(p)}${bt}`;
  let t = _(_23),
    b = _(_24),
    l = _(_19),
    r = _(_20),
    s = _(_44),
    e = _(_45);
  let o = {};
  switch (type) {
    case "t":
      o = {
        [t]: value,
      };
      break;
    case "b":
      o = {
        [b]: value,
      };
      break;
    case "l":
      o = {
        [l]: value,
      };
      break;
    case "r":
      o = {
        [r]: value,
      };
    case "s":
      o = {
        [s]: value,
      };
      break;
    case "e":
      o = {
        [e]: value,
      };
      break;
    case "h":
      o = {
        [l]: value,
        [r]: value,
      };
      break;
    case "v":
      o = {
        [t]: value,
        [b]: value,
      };
      break;
    case "nt":
      o = {
        [l]: value,
        [r]: value,
        [b]: value,
      };
      break;
    case "nb":
      o = {
        [l]: value,
        [r]: value,
        [t]: value,
      };
      break;
    case "nl":
      o = {
        [t]: value,
        [r]: value,
        [b]: value,
      };
      break;
    case "nr":
      o = {
        [l]: value,
        [b]: value,
        [t]: value,
      };
      break;
    case "ns":
      o = {
        [t]: value,
        [e]: value,
        [b]: value,
      };
      break;
    case "ne":
      o = {
        [s]: value,
        [b]: value,
        [t]: value,
      };
      break;
    default:
      o = {
        [_()]: value,
      };
      break;
  }
  return o;
};
let spacing = (st: string = "", type: TBS = "", value: any) => {
  let _ = (p = "") => `${st}${capitalize(p)}`;
  let t = _(_23),
    b = _(_24),
    l = _(_19),
    r = _(_20),
    s = _(_44),
    e = _(_45),
    h = _(_76),
    v = _(_77);
  let o = {};
  switch (type) {
    case "t":
      o = {
        [t]: value,
      };
      break;
    case "b":
      o = {
        [b]: value,
      };
      break;
    case "l":
      o = {
        [l]: value,
      };
      break;
    case "r":
      o = {
        [r]: value,
      };
    case "s":
      o = {
        [s]: value,
      };
      break;
    case "e":
      o = {
        [e]: value,
      };
      break;
    case "h":
      o = {
        [h]: value,
      };
      break;
    case "v":
      o = {
        [v]: value,
      };
      break;
    case "nt":
      o = {
        [b]: value,
        [h]: value,
      };
      break;
    case "nb":
      o = {
        [t]: value,
        [h]: value,
      };
      break;
    case "nl":
      o = {
        [r]: value,
        [v]: value,
      };
      break;
    case "nr":
      o = {
        [l]: value,
        [v]: value,
      };
      break;
    case "ns":
      o = {
        [e]: value,
        [v]: value,
      };
      break;
    case "ne":
      o = {
        [s]: value,
        [v]: value,
      };
      break;
    default:
      o = {
        [_()]: value,
      };
      break;
  }
  return o;
};

export const backgroundColor = (backgroundColor?: ColorValue) => ({
  backgroundColor,
});
export const color = (color?: ColorValue) => ({ color });
export const borderColor = (type: TBS = "", value?: ColorValue) =>
  border("Color", type, value);
export const shadowColor = (shadowColor?: ColorValue) => ({ shadowColor });
export const tintColor = (tintColor?: ColorValue) => ({ tintColor });
export const textDecorationColor = (textDecorationColor?: ColorValue) => ({
  textDecorationColor,
});
export const textShadowColor = (textShadowColor?: ColorValue) => ({
  textShadowColor,
});
export const overlayColor = (overlayColor?: ColorValue) => ({ overlayColor });

export const flex = (flex?: number) => ({ flex });
export const borderRadius = (type: TBorderRadius = "", value?: number) => {
  let _ = (_0 = "", _1 = "") =>
    `${_78}${capitalize(_0)}${capitalize(_1)}${capitalize(_79)}`;
  let tl = _(_23, _24),
    tr = _(_23, _20),
    bl = _(_24, _24),
    br = _(_24, _20),
    ts = _(_23, _44),
    te = _(_23, _45),
    bs = _(_24, _44),
    be = _(_24, _45);
  let o = {};
  switch (type) {
    case "lt":
    case "tl":
      o = {
        [tl]: value,
      };
      break;
    case "rt":
    case "tr":
      o = {
        [tr]: value,
      };
      break;
    case "lb":
    case "bl":
      o = {
        [bl]: value,
      };
      break;
    case "rb":
    case "br":
      o = {
        [br]: value,
      };
      break;
    case "st":
    case "ts":
      o = {
        [ts]: value,
      };
      break;
    case "et":
    case "te":
      o = {
        [te]: value,
      };
      break;
    case "sb":
    case "bs":
      o = {
        [bs]: value,
      };
      break;
    case "eb":
    case "be":
      o = {
        [be]: value,
      };
      break;
    case "t":
      o = {
        [tl]: value,
        [tr]: value,
      };
      break;
    case "b":
      o = {
        [bl]: value,
        [br]: value,
      };
      break;
    case "l":
      o = {
        [tl]: value,
        [bl]: value,
      };
      break;
    case "r":
      o = {
        [br]: value,
        [tr]: value,
      };
      break;
    case "ntl":
    case "nlt":
      o = {
        [br]: value,
        [bl]: value,
        [tr]: value,
      };
      break;
    case "ntr":
    case "nrt":
      o = {
        [br]: value,
        [bl]: value,
        [tl]: value,
      };
      break;
    case "nbl":
    case "nlb":
      o = {
        [br]: value,
        [tl]: value,
        [tr]: value,
      };
      break;
    case "nbr":
    case "nrb":
      o = {
        [tr]: value,
        [bl]: value,
        [tl]: value,
      };
      break;
    case "nts":
    case "nst":
      o = {
        [te]: value,
        [bl]: value,
        [br]: value,
      };
      break;
    case "nte":
    case "net":
      o = {
        [ts]: value,
        [bl]: value,
        [br]: value,
      };
      break;
    case "nbs":
    case "nsb":
      o = {
        [be]: value,
        [tl]: value,
        [tr]: value,
      };
      break;
    case "nbe":
    case "neb":
      o = {
        [bs]: value,
        [tl]: value,
        [tr]: value,
      };
      break;
    default:
      o = {
        [_()]: value,
      };
      break;
  }
  return o;
};
export const borderWidth = (type: TBS = "", value?: number) =>
  border("Width", type, value);
export const opacity = (opacity?: number) => ({ opacity });
export const rowGap = (rowGap?: number) => ({ rowGap });
export const columnGap = (columnGap?: number) => ({ columnGap });
export const gap = (gap?: number) => ({ gap });
export const flexShrink = (flexShrink?: number) => ({ flexShrink });
export const zIndex = (zIndex?: number) => ({ zIndex });
export const shadowOpacity = (shadowOpacity?: number) => ({ shadowOpacity });
export const shadowRadius = (shadowRadius?: number) => ({ shadowRadius });
export const textShadowRadius = (textShadowRadius?: number) => ({
  textShadowRadius,
});
export const fontSize = (fontSize?: number) => ({ fontSize });
export const fontFamily = (fontFamily?: string) => ({ fontFamily });
export const letterSpacing = (letterSpacing?: number) => ({ letterSpacing });
export const lineHeight = (lineHeight?: number) => ({ lineHeight });
export const elevation = (elevation?: number) => ({ elevation });

export const top = (top?: DimensionValue) => ({ top });
export const bottom = (bottom?: DimensionValue) => ({ bottom });
export const left = (left?: DimensionValue) => ({ left });
export const right = (right?: DimensionValue) => ({ right });
export const start = (start?: DimensionValue) => ({ start });
export const end = (end?: DimensionValue) => ({ end });
export const flexBasis = (flexBasis?: DimensionValue) => ({ flexBasis });
export const height = (height?: DimensionValue) => ({ height });
export const minHeight = (minHeight?: DimensionValue) => ({ minHeight });
export const maxHeight = (maxHeight?: DimensionValue) => ({ maxHeight });
export const width = (width?: DimensionValue) => ({ width });
export const minWidth = (minWidth?: DimensionValue) => ({ minWidth });
export const maxWidth = (maxWidth?: DimensionValue) => ({ maxWidth });
export const margin = (type: TBS = "", value?: DimensionValue) =>
  spacing("margin", type, value);
export const padding = (type: TBS = "", value?: DimensionValue) =>
  spacing("padding", type, value);

export const backfaceVisibility = (type?: "h" | "v") => {
  let $: OUs;
  switch (type) {
    case "v":
      $ = _1;
      break;
    case "h":
      $ = _2;
      break;
    default:
      $ = undefined;
      break;
  }
  return {
    backfaceVisibility: $,
  };
};
export const borderStyle = (type?: "." | "-" | "s") => {
  let $: OUs;
  switch (type) {
    case "s":
      $ = _3;
      break;
    case ".":
      $ = _4;
      break;
    case "-":
      $ = _5;
      break;
    default:
      $ = undefined;
      break;
  }
  return {
    borderStyle: $,
  };
};
export const pointerEvents = (type?: "a" | "n" | "bn" | "bo") => {
  let $: OUs;
  switch (type) {
    case "a":
      $ = _6;
      break;
    case "n":
      $ = _7;
      break;
    case "bn":
      $ = _41;
      break;
    case "bo":
      $ = _42;
      break;
    default:
      $ = undefined;
      break;
  }
  return {
    pointerEvents: $,
  };
};
export const fontStyle = (type?: "i" | "n") => {
  let $: OUs;
  switch (type) {
    case "i":
      $ = _11;
      break;
    default:
      $ = _10;
      break;
  }
  return {
    fontStyle: $,
  };
};
export const fontWeight = (
  type?: "b" | "n" | "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9"
) => {
  let $: OUs;
  switch (type) {
    case "b":
      $ = _12;
      break;
    case "1":
    case "2":
    case "3":
    case "4":
    case "5":
    case "6":
    case "7":
    case "8":
    case "9":
      $ = `${type}00`;
      break;
    default:
      $ = _10;
      break;
  }
  return {
    fontWeight: $,
  };
};
export const fontVariant = (
  type: ("sc" | "on" | "ln" | "tn" | "pn")[] = []
) => {
  let $: OUs[] = [];
  for (let t of type)
    switch (t) {
      case "sc":
        $.push(_13);
        break;
      case "on":
        $.push(_15);
        break;
      case "ln":
        $.push(_16);
        break;
      case "tn":
        $.push(_17);
        break;
      case "pn":
        $.push(_18);
        break;
      default:
        break;
    }
  return {
    fontVariant: $,
  };
};
export const textAlign = (type?: "a" | "l" | "r" | "j" | "c") => {
  let $: OUs;
  switch (type) {
    case "l":
      $ = _19;
      break;
    case "r":
      $ = _20;
      break;
    case "j":
      $ = _21;
      break;
    case "c":
      $ = _22;
      break;
    default:
      $ = _6;
      break;
  }
  return {
    textAlign: $,
  };
};
export const textAlignVertical = (type?: "a" | "c" | "t" | "b") => {
  let $: OUs;
  switch (type) {
    case "c":
      $ = _22;
      break;
    case "t":
      $ = _23;
      break;
    case "b":
      $ = _24;
      break;
    default:
      $ = _6;
      break;
  }
  return {
    textAlignVertical: $,
  };
};
export const textDecorationLine = (type?: "n" | "u" | "lt" | "ult") => {
  let $: OUs;
  switch (type) {
    case "u":
      $ = _28;
      break;
    case "lt":
      $ = _29;
      break;
    case "ult":
      $ = _30;
      break;
    default:
      $ = _7;
      break;
  }
  return {
    textDecorationLine: $,
  };
};
export const textDecorationStyle = (type?: "s" | "." | "-" | "d") => {
  let $: OUs;
  switch (type) {
    case ".":
      $ = _4;
      break;
    case "-":
      $ = _5;
      break;
    case "d":
      $ = _31;
      break;
    default:
      $ = _3;
      break;
  }
  return {
    textDecorationStyle: $,
  };
};
export const textTransform = (type?: "u" | "n" | "l" | "c") => {
  let $: OUs;
  switch (type) {
    case "u":
      $ = _33;
      break;
    case "l":
      $ = _34;
      break;
    case "c":
      $ = _35;
      break;
    default:
      $ = _7;
      break;
  }
  return {
    textTransform: $,
  };
};
export const verticalAlign = (type?: "a" | "t" | "b" | "m") => {
  let $: OUs;
  switch (type) {
    case "t":
      $ = _23;
      break;
    case "b":
      $ = _24;
      break;
    case "m":
      $ = _36;
      break;
    default:
      $ = _6;
      break;
  }
  return {
    verticalAlign: $,
  };
};
export const writingDirection = (type?: "a" | "l" | "r") => {
  let $: OUs;
  switch (type) {
    case "l":
      $ = _37;
      break;
    case "r":
      $ = _38;
      break;
    default:
      $ = _6;
      break;
  }
  return {
    writingDirection: $,
  };
};
export const alignContent = (type?: "fs" | "fe" | "c" | "s" | "sb" | "sa") => {
  let $: OUs;
  switch (type) {
    case "fs":
      $ = _46;
      break;
    case "fe":
      $ = _47;
      break;
    case "c":
      $ = _22;
      break;
    case "s":
      $ = _48;
      break;
    case "sb":
      $ = _52;
      break;
    case "sa":
      $ = _53;
      break;
    default:
      $ = undefined;
      break;
  }
  return {
    alignContent: $,
  };
};
export const alignItems = (type?: "fs" | "fe" | "c" | "s" | "b") => {
  let $: OUs;
  switch (type) {
    case "fs":
      $ = _46;
      break;
    case "fe":
      $ = _47;
      break;
    case "c":
      $ = _22;
      break;
    case "s":
      $ = _48;
      break;
    case "b":
      $ = _55;
      break;
    default:
      $ = undefined;
      break;
  }
  return {
    alignItems: $,
  };
};
export const alignSelf = (type?: "a" | "fs" | "fe" | "c" | "s" | "b") => {
  let $: OUs;
  switch (type) {
    case "a":
      $ = _6;
      break;
    case "fs":
      $ = _46;
      break;
    case "fe":
      $ = _47;
      break;
    case "c":
      $ = _22;
      break;
    case "s":
      $ = _48;
      break;
    case "b":
      $ = _55;
      break;
    default:
      $ = undefined;
      break;
  }
  return {
    alignSelf: $,
  };
};
export const direction = (type?: "i" | "l" | "r") => {
  let $: OUs;
  switch (type) {
    case "l":
      $ = _37;
      break;
    case "r":
      $ = _38;
      break;
    case "i":
      $ = _57;
      break;
    default:
      $ = undefined;
      break;
  }
  return {
    direction: $,
  };
};
export const display = (type?: "f" | "n") => {
  let $: OUs;
  switch (type) {
    case "n":
      $ = _7;
      break;
    default:
      $ = _43;
      break;
  }
  return {
    display: $,
  };
};
export const flexDirection = (type?: "r" | "rr" | "c" | "cr") => {
  let $: OUs;
  switch (type) {
    case "r":
      $ = _59;
      break;
    case "c":
      $ = _60;
      break;
    case "rr":
      $ = _61;
      break;
    case "cr":
      $ = _62;
      break;
    default:
      $ = undefined;
      break;
  }
  return {
    flexDirection: $,
  };
};
export const justifyContent = (
  type?: "fs" | "fe" | "c" | "sb" | "sa" | "se"
) => {
  let $: OUs;
  switch (type) {
    case "fs":
      $ = _46;
      break;
    case "fe":
      $ = _47;
      break;
    case "c":
      $ = _22;
      break;
    case "sb":
      $ = _52;
      break;
    case "sa":
      $ = _53;
      break;
    case "se":
      $ = _65;
      break;
    default:
      $ = undefined;
      break;
  }
  return {
    justifyContent: $,
  };
};
export const overflow = (type?: "v" | "h" | "s") => {
  let $: OUs;
  switch (type) {
    case "v":
      $ = _1;
      break;
    case "h":
      $ = _2;
      break;
    case "s":
      $ = _66;
      break;
    default:
      $ = undefined;
      break;
  }
  return {
    overflow: $,
  };
};
export const position = (type?: "a" | "r") => {
  let $: OUs;
  switch (type) {
    case "r":
      $ = _67;
      break;
    case "a":
      $ = _68;
      break;
    default:
      $ = undefined;
      break;
  }
  return {
    position: $,
  };
};
export const resizeMode = (type?: "cov" | "con" | "s" | "r" | "c") => {
  let $: OUs;
  switch (type) {
    case "con":
      $ = _70;
      break;
    case "s":
      $ = _48;
      break;
    case "r":
      $ = _71;
      break;
    case "c":
      $ = _22;
      break;
    default:
      $ = _69;
      break;
  }
  return {
    resizeMode: $,
  };
};
export const objectFit = (type?: "cov" | "con" | "f" | "sd") => {
  let $: OUs;
  switch (type) {
    case "con":
      $ = _70;
      break;
    case "f":
      $ = _72;
      break;
    case "sd":
      $ = _75;
      break;
    default:
      $ = _69;
      break;
  }
  return {
    objectFit: $,
  };
};

// statics

export const f1 = flex(1);
export const { OS } = Platform;
export const isAndroid = OS === "android";
export const isIOS = OS === "ios";
export const isWeb = OS === "web";
export const isMacos = OS === "macos";
export const isWindows = OS === "windows";
export const isMobile = isAndroid || isIOS;
export const fwb = fontWeight("b") as any;
export const fw1 = fontWeight("1") as any;
export const fw2 = fontWeight("2") as any;
export const fw3 = fontWeight("3") as any;
export const fw4 = fontWeight("4") as any;
export const fw5 = fontWeight("5") as any;
export const fw6 = fontWeight("6") as any;
export const fw7 = fontWeight("7") as any;
export const fw8 = fontWeight("8") as any;
export const fw9 = fontWeight("9") as any;
export const tac = textAlign("c") as any;
export const taj = textAlign("j") as any;
export const tar = textAlign("r") as any;
export const tal = textAlign("l") as any;
export const taa = textAlign("a") as any;
export const tdlN = textDecorationLine("n") as any;
export const tdlU = textDecorationLine("u") as any;
export const tdlLt = textDecorationLine("lt") as any;
export const tdlUlt = textDecorationLine("ult") as any;
export const ttu = textTransform("u") as any;
export const ttn = textTransform("n") as any;
export const ttl = textTransform("l") as any;
export const ttc = textTransform("c") as any;
export const wda = writingDirection("a") as any;
export const wdl = writingDirection("l") as any;
export const wdr = writingDirection("r") as any;
export const aic = alignItems("c") as any;
export const ais = alignItems("s") as any;
export const aib = alignItems("b") as any;
export const aiFs = alignItems("fs") as any;
export const aiFe = alignItems("fe") as any;
export const di = direction("i") as any;
export const dl = direction("l") as any;
export const dr = direction("r") as any;
export const fdr = flexDirection("r") as any;
export const fdRr = flexDirection("rr") as any;
export const fdc = flexDirection("c") as any;
export const fdCr = flexDirection("cr") as any;
export const jcc = justifyContent("c") as any;
export const jcFs = justifyContent("fs") as any;
export const jcFe = justifyContent("fe") as any;
export const jcSb = justifyContent("sb") as any;
export const jcSa = justifyContent("sa") as any;
export const jcSe = justifyContent("se") as any;
export const ofv = overflow("v") as any;
export const ofh = overflow("h") as any;
export const ofs = overflow("s") as any;
export const pa = position("a") as any;
export const center = [aic, jcc] as any;
export const overlay = [zIndex(1), pa] as any;
export const fw = width("100%");
export const fh = height("100%");
export const full = [fw, fh];
export const bw1 = borderWidth("", 1);
export const layout = (w?: DimensionValue, h?: DimensionValue) => [
  width(w),
  height(h),
];
export const squareLayout = (size?: DimensionValue) => layout(size, size);
