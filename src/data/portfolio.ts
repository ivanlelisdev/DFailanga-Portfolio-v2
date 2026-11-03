import catalog from "./assets.json";

export type Work = {
  id: string;
  original: string;
  category: string;
  subcategory: string;
  title: string;
  kind: "image" | "video";
  src: string;
  width: number;
  height: number;
  thumbnail?: string;
  poster?: string;
};

export const works = catalog as Work[];
export const images = works.filter((work) => work.kind === "image");
export const videos = works.filter((work) => work.kind === "video");
export const categories = [
  "Brand Identity",
  "Social Media Ads",
  "Food Ad Poster",
  "Ecommerce Listing Images",
  "Print Materials",
  "Pubmats",
  "Brand",
  "Apparel",
  "BAG AND HATS",
  "Tshirt",
];
export function work(path: string): Work {
  const item = works.find((item) => item.original === `works/${path}`);
  if (!item) throw new Error(`Missing portfolio asset: ${path}`);
  return item;
}

export const identities = [
  {
    id: "little-heirloom",
    name: "Little Heirloom",
    label: "Thoughtfully made. Lovingly kept.",
    className: "heirloom",
    description:
      "A gentle visual world of heritage-inspired lettering, delicate details, and warm neutrals. An identity carried across stationery, signage, and brand applications.",
    service: "Visual identity & brand applications",
    palette: ["#888b70", "#b8b69d", "#eee8d9", "#504e42"],
    assets: [
      "LITTLE HEIRLOOM/signage.png",
      "LITTLE HEIRLOOM/mockup.png",
      "LITTLE HEIRLOOM/business card.png",
    ],
    wordmark: "LITTLE HEIRLOOM/logo.png",
  },
  {
    id: "pawerhouse",
    name: "Pawerhouse",
    label: "Powering every paw.",
    className: "pawerhouse",
    description:
      "Bold orange meets deep navy in a playful, energetic pet-care identity. From packaging and shop signage to staff apparel, every touchpoint belongs to the same visual family.",
    service: "Visual identity & packaging",
    palette: ["#ff7c20", "#152336", "#fff7e8", "#414b54"],
    assets: [
      "PAWERHOUSE/packaging.png",
      "PAWERHOUSE/signage.png",
      "PAWERHOUSE/PAWERHOUSE STAFF SHIRT DESIGN W PIN.png",
    ],
    wordmark: "PAWERHOUSE/logo.png",
  },
  {
    id: "yo-gu-star",
    name: "Yo-Gu Star",
    label: "Stay cool. Stay stellar.",
    className: "yogustar",
    description:
      "A bright, star-filled identity with expressive lettering and a distinctly playful palette. A coordinated collection of cup, storefront, poster, and loyalty-card applications.",
    service: "Visual identity & retail design",
    palette: ["#9347fb", "#47247b", "#e8dcff", "#fffce9"],
    assets: [
      "YO-GU STAR/2.png",
      "YO-GU STAR/1.png",
      "YO-GU STAR/yogucard mockup.png",
    ],
    wordmark: "YO-GU STAR/brand identity yogustar 2.png",
  },
];
