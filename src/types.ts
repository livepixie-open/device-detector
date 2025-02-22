export type DeviceType = "mobile" | "tablet" | "desktop";

export interface DeviceInfo {
  type: DeviceType;
  userAgent: string;
  model?: string;
}
