# � **device-detector**

🚀 **Framework-agnostic device detection for Node.js with Material UI breakpoint mapping for SSR and client-side usage.**

---

## **✨ Features**
- 📱 **Device Detection**: Detects **mobile, tablet, and desktop** devices from the user-agent string.
- 🎯 **Material UI Breakpoints**: Maps devices to Material UI (MUI) breakpoints (`xs`, `sm`, `md`, etc.) for responsive design.
- ⚡ **Universal Usage**: Works seamlessly in **server-side (SSR)** and **client-side** environments.
- 🧩 **Framework-Agnostic**: Easily integrates with **Node.js, Next.js, Express, Fastify, and more**.
- 🏗 **Lightweight & Fast**: Built on `ua-parser-js` for minimal overhead and high performance.

---

## **🛋️ Installation**
Install the package using your preferred package manager:

```sh
# Using pnpm
pnpm add @livepixie-open/device-detector

# Using npm
npm install @livepixie-open/device-detector

# Using yarn
yarn add @livepixie-open/device-detector
```

---

## **🚀 Usage**

### **Basic Example**
```ts
import { detectDevice } from "@livepixie-open/device-detector";

const userAgent = "Mozilla/5.0 (iPhone; CPU iPhone OS 15_0 like Mac OS X)";
const device = detectDevice(userAgent);

console.log(device);
// Output:
// {
//   type: "mobile",
//   breakpoint: "xs",
//   userAgent: "Mozilla/5.0 (iPhone; CPU iPhone OS 15_0 like Mac OS X)",
//   model: "iPhone"
// }
```

---

### **🔍 Detecting Various Devices**
The library supports detection for a wide range of devices. Here are some examples:

```ts
// Desktop
console.log(detectDevice("Mozilla/5.0 (Windows NT 10.0; Win64; x64)"));
// Output: { type: "desktop", breakpoint: "md", userAgent: "...", model: undefined }

// Tablet
console.log(detectDevice("Mozilla/5.0 (iPad; CPU OS 15_0 like Mac OS X)"));
// Output: { type: "tablet", breakpoint: "sm", userAgent: "...", model: "iPad" }

// Mobile
console.log(detectDevice("Mozilla/5.0 (Linux; Android 12; Samsung Galaxy Z Fold3)"));
// Output: { type: "mobile", breakpoint: "sm", userAgent: "...", model: "Samsung Galaxy Z Fold3" }
```

---

### **Framework Integration**

#### **Next.js (SSR)**
```tsx
import { detectDevice } from "@livepixie-open/device-detector";

export const getServerSideProps = (context) => {
  const userAgent = context.req.headers["user-agent"] || "";
  const device = detectDevice(userAgent);

  return {
    props: {
      device,
    },
  };
};

export default function Home({ device }) {
  return (
    <div>
      <h1>Your device: {device.type}</h1>
      <p>Breakpoint: {device.breakpoint}</p>
    </div>
  );
}
```

#### **Express.js**
```ts
import express from "express";
import { detectDevice } from "@livepixie-open/device-detector";

const app = express();

app.use((req, res, next) => {
  const userAgent = req.headers["user-agent"] || "";
  req.device = detectDevice(userAgent);
  next();
});

app.get("/", (req, res) => {
  res.send(`Your device: ${req.device.type}, Breakpoint: ${req.device.breakpoint}`);
});

app.listen(3000, () => console.log("Server running on http://localhost:3000"));
```

---

## **🔧 Development**

### **🛠 Install Dependencies**
```sh
pnpm install
```

### **🧹 Run Linter**
```sh
pnpm lint
```

### **✅ Run Tests**
```sh
pnpm test
```

### **⚙️ Build the Library**
```sh
pnpm build
```

### **🚀 Publish to NPM**
```sh
pnpm publish --access public
```

---

## **📚 API Reference**

### **`detectDevice(userAgent: string): DeviceInfo`**
Detects the device type and maps it to a Material UI breakpoint.

#### **Parameters**
- `userAgent`: The user-agent string to analyze.

#### **Returns**
An object with the following properties:
- `type`: The device type (`"mobile"`, `"tablet"`, or `"desktop"`).
- `breakpoint`: The corresponding Material UI breakpoint (`"xs"`, `"sm"`, `"md"`, etc.).
- `userAgent`: The original user-agent string.
- `model`: The device model (if available).

---

## **🚨 Troubleshooting**

### **Unknown User-Agent Strings**
If the library encounters an unknown or unsupported user-agent string, it will default to:
```json
{ "type": "desktop", "breakpoint": "md", "userAgent": "..." }
```

### **Custom Breakpoint Mappings**
You can extend the library to support custom breakpoint mappings by modifying the source code or opening a feature request.

---

## **🌜 License**
MIT License © 2025 [Live Pixie Open Source](https://github.com/livepixie-open)

---

## **🌟 Contributing**
We welcome contributions! Here’s how you can help:
1. **Report Issues**: Found a bug? Open an issue on [GitHub](https://github.com/livepixie-open/device-detector/issues).
2. **Submit Pull Requests**: Have a fix or feature? Submit a PR!
3. **Star the Repo**: If you find this project useful, give it a ⭐ on GitHub.

---

## **📢 Feedback**
We’d love to hear your feedback! Reach out to us via:
- **GitHub Issues**: [https://github.com/livepixie-open/device-detector/issues](https://github.com/livepixie-open/device-detector/issues)
- **Email**: [opensource@livepixie.com](mailto:opensource@livepixie.com)

---

🔥 **Happy Coding!** 🚀

---

### **Key Improvements:**
1. **Added Framework Integration Examples**: Included detailed examples for Next.js and Express.js.
2. **API Reference**: Added a clear API reference for the `detectDevice` function.
3. **Troubleshooting Section**: Added a section to address common issues like unknown user-agent strings.
4. **Feedback Section**: Encouraged users to provide feedback and report issues.
5. **Better Organization**: Improved the flow and readability of the document.
