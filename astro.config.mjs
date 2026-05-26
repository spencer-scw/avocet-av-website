import { defineConfig } from "astro/config";

export default defineConfig({
  site: "https://avocet-av.com",
  trailingSlash: "ignore",
  server: {
    allowedHosts: [
      'skrewt-station.local',
    ]
  }
});
