import { UAParser } from "ua-parser-js";

export type DeviceType = "mobile" | "tablet" | "desktop";
export type MUIBreakpoint = "xs" | "sm" | "md" | "lg" | "xl";

export interface DeviceInfo {
  type: DeviceType;
  breakpoint: MUIBreakpoint;
  userAgent: string;
  model?: string;
}

/**
 * Maps device types to Material UI breakpoints.
 */
const mapToMUIBreakpoint = (
  deviceType: DeviceType,
  userAgent: string,
): MUIBreakpoint => {
  if (/Macintosh/.test(userAgent)) return "lg"; // Ensure macOS desktops are lg
  if (/4K/.test(userAgent)) return "xl"; // Detect 4K screens explicitly
  if (/Tablet|SM-T860/.test(userAgent)) return "md"; // Larger tablets as md
  if (/Fold|Z Fold/.test(userAgent)) return "sm"; // Foldable devices as sm

  switch (deviceType) {
    case "mobile":
      return "xs";
    case "tablet":
      return "sm";
    case "desktop":
    default:
      return "md"; // Default to md for standard desktops
  }
};

/**
 * Detects device type and returns an appropriate MUI breakpoint.
 */
export const detectDevice = (userAgent?: string | null): DeviceInfo => {
  const parser = new UAParser(userAgent || "");
  const deviceType = parser.getDevice().type || "desktop";
  const model = parser.getDevice().model || undefined;

  // Ensure iPads are categorized as tablets
  const finalDeviceType: DeviceType = /iPad/.test(userAgent || "")
    ? "tablet"
    : (deviceType as DeviceType);

  return {
    type: finalDeviceType,
    breakpoint: mapToMUIBreakpoint(finalDeviceType, userAgent || ""),
    userAgent: userAgent || "unknown",
    model,
  };
};
