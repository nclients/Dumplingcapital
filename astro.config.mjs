import { defineConfig } from 'astro/config';
import mdx from "@astrojs/mdx";
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";
// https://astro.build/config
export default defineConfig({
  site: 'https://dumpling-capital.com',
  videoUrl:"https://www.ganjingworld.com/s/ORzYlbEYRr",
  videoThumbnailUrl:"https://image4-us-west.cloudokyo.cloud/image/v1/a2/20/5a/a2205a91-1c3c-4077-90ae-b21d5be7daf0/1280.webp",
  videoTitle:"Dumpling Capital_Best Dumpling restaurant near Cupertino",
  videoDesc:"At Dumpling Capital, every dumpling tells a story. It's more than just dough and filling—it's the culmination of years of craftsmanship, perfecting each bite to be better than the last. Our delectable handmade dumplings, with classic dough and carefully selected ingredients, honor a tradition that technology can never replicate. Join us as we continue to carry on the art of handmade excellence, delivering exquisite dishes that celebrate the heart of authentic flavors.Visit us at Dumpling Capital: 5075 Stevens Creek Blvd #10, Santa Clara, CA 95051.",
  integrations: [tailwind(), react(),mdx()],
  srcDir: './website'
});
