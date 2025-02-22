import { detectDevice } from "../src/detect";

describe("Device Detection", () => {
  it("should return desktop as default when userAgent is undefined", () => {
    const result = detectDevice(undefined);
    expect(result.type).toBe("desktop");
    expect(result.breakpoint).toBe("md");
    expect(result.userAgent).toBe("unknown");
  });

  it("should return desktop as default when userAgent is null", () => {
    const result = detectDevice(null);
    expect(result.type).toBe("desktop");
    expect(result.breakpoint).toBe("md");
    expect(result.userAgent).toBe("unknown");
  });

  it("should detect mobile device from a user-agent string", () => {
    const result = detectDevice(
      "Mozilla/5.0 (iPhone; CPU iPhone OS 15_0 like Mac OS X)",
    );
    expect(result.type).toBe("mobile");
    expect(result.breakpoint).toBe("xs");
  });

  it("should detect tablet device from a user-agent string", () => {
    const result = detectDevice(
      "Mozilla/5.0 (iPad; CPU OS 15_0 like Mac OS X)",
    );
    expect(result.type).toBe("tablet");
    expect(result.breakpoint).toBe("sm");
  });

  it("should detect common Android mobile device", () => {
    const result = detectDevice("Mozilla/5.0 (Linux; Android 10; Pixel 4)");
    expect(result.type).toBe("mobile");
    expect(result.breakpoint).toBe("xs");
  });

  it("should detect common Android tablet device", () => {
    const result = detectDevice("Mozilla/5.0 (Linux; Android 10; SM-T830)");
    expect(result.type).toBe("tablet");
    expect(result.breakpoint).toBe("sm");
  });

  it("should detect Windows desktop device", () => {
    const result = detectDevice("Mozilla/5.0 (Windows NT 10.0; Win64; x64)");
    expect(result.type).toBe("desktop");
    expect(result.breakpoint).toBe("md");
  });

  it("should detect macOS desktop device as 'lg'", () => {
    const result = detectDevice(
      "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7)",
    );
    expect(result.type).toBe("desktop");
    expect(result.breakpoint).toBe("lg");
  });

  it("should return default values when an empty string is provided as userAgent", () => {
    const result = detectDevice("");
    expect(result.type).toBe("desktop");
    expect(result.breakpoint).toBe("md");
    expect(result.userAgent).toBe("unknown");
  });

  it("should detect 4K screens as 'xl'", () => {
    const result = detectDevice("Mozilla/5.0 (Windows NT 10.0; Win64; x64) 4K");
    expect(result.type).toBe("desktop");
    expect(result.breakpoint).toBe("xl");
  });

  it("should detect mid-sized laptop screens as 'md'", () => {
    const result = detectDevice(
      "Mozilla/5.0 (Windows NT 10.0; Win64; x64; Laptop)",
    );
    expect(result.type).toBe("desktop");
    expect(result.breakpoint).toBe("md");
  });

  it("should detect larger tablets as 'md' when applicable", () => {
    const result = detectDevice("Mozilla/5.0 (Android; Tablet; SM-T860)");
    expect(result.type).toBe("tablet");
    expect(result.breakpoint).toBe("md");
  });

  it("should detect foldable devices as 'sm'", () => {
    const result = detectDevice(
      "Mozilla/5.0 (Linux; Android 12; Samsung Galaxy Z Fold3)",
    );
    expect(result.type).toBe("mobile");
    expect(result.breakpoint).toBe("sm");
  });
});
