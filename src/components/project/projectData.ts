import type { StaticImageData } from "next/image";
import quickShopImg from "@/app/assets/quickshop.webp";
import routinesImg from "@/app/assets/routines.webp";
import aboutGoopImg from "@/app/assets/aboutGoop.webp";
import bookClubImg from "@/app/assets/bookclub.webp";
import plpImg from "@/app/assets/plp.webp";
import miniCartImg from "@/app/assets/miniCart.webp";
import goopPlpImg from "@/app/assets/goopPlp.webp";
import editorialImg from "@/app/assets/hydrogenEditorial.webp";
import gToxImg from "@/app/assets/gTox.webp";
import goopSperryImg from "@/app/assets/GoopSperry.webp";
import goopNewsImg from "@/app/assets/goopNews.webp";
import productCardImg from "@/app/assets/productCard.webp";
import blogCardImg from "@/app/assets/blogCard.webp";
import cartCardImg from "@/app/assets/cartCard.webp";
import commerceRowImg from "@/app/assets/commerceRow.webp";
import inPageSearchImg from "@/app/assets/inPageSearch.webp";
import type { ComponentShot } from "./ComponentGallery";

export interface ProjectDetails {
  problem?: string;
  what?: string;
  role?: string[];
  result?: string;
}

export interface Project {
  slug: string;
  year: string;
  title: string;
  description: string;
  fullDescription?: ProjectDetails;
  link?: string;
  demoLink?: string;
  images: StaticImageData[];
  components?: ComponentShot[];
  tech: string[];
}

export const projectData: Project[] = [
  {
    slug: "shopify-migration",
    year: "2025",
    title: "e-commerce replatform & redesign",
    description: "Shopify replatforming and complete website redesign",
    fullDescription: {
      problem:
        "goop.com's legacy platform made it difficult for internal teams to manage and update the site independently, creating a reliance on engineering for routine changes. A slow checkout experience was also a longstanding source of friction for customers.",
      what: "Rebuilt goop.com, migrating from Spree to Shopify alongside a complete site redesign. The headless storefront was built with Shopify Hydrogen, React Router, and Tailwind CSS, integrating Shopify for commerce and Payload CMS for editorial content.",
      role: [
        "Built site-wide navigation and search, integrating Algolia's search and discovery capabilities",
        "Developed product listing pages with filtering and product discovery functionality",
        "Built modular page-building components powered by Shopify metaobjects and Payload CMS, giving internal teams the flexibility to create and manage pages without engineering support",
        "Developed specialized components for editorial experiences, including articles, recipes, travel guides, and podcasts, integrating content from Payload CMS",
      ],
      result:
        "Improved site speed by 41% and generated $250K in savings through a streamlined technology stack and reduced engineering overhead.\n\nThe new platform gives internal teams more control over site content and merchandising, streamlines editorial publishing, and delivers a faster shopping experience. Teams can now manage more updates independently, reducing their reliance on engineering.",
    },
    link: "link",
    images: [goopPlpImg, inPageSearchImg, editorialImg, aboutGoopImg],
    tech: [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Hydrogen",
      "React Router",
      "GraphQL",
      "Algolia",
      "Payload CMS",
    ],
  },
  {
    slug: "legacy-goop",
    year: "2024",
    title: "goop.com legacy experience",
    description: "Legacy goop.com features and enhancements",
    fullDescription: {
      problem:
        "The legacy site was slow and missing the table-stakes features shoppers need to find and buy products easily.",
      what: "Improved site speed, Core Web Vitals, and accessibility across goop.com, and shipped new features that made it easier for shoppers to find products, often validating them through A/B tests.",
      role: [
        "Added category and price filters to make products easier to find",
        "Refreshed the fashion product cards",
        "Built a quick shop on product listing pages so shoppers can see key details, availability, and every product image without leaving the page",
        "Added a mini cart across the site, letting shoppers review and update their cart without interrupting their browsing",
      ],
      result: "",
    },
    link: "link",
    images: [plpImg, routinesImg, miniCartImg, quickShopImg],
    tech: ["React", "TypeScript", "Styled Components", "Next.js", "GraphQL"],
  },
  {
    slug: "component-library",
    year: "2024",
    title: "reusable UI component libraries",
    description: "React component libraries and design systems in Storybook",
    fullDescription: {
      problem:
        "goop needed to ensure consistent branding across its website, both in the legacy experience (which was composed of micro-frontends) and during its redesign.",
      what: "Developed and maintained React component libraries in Storybook for both the legacy and redesigned goop.com experiences. The legacy library supported visual consistency across multiple micro-frontends, while the Shopify rebuild involved creating a new library of reusable components in collaboration with designers, translating Figma designs and prototypes into functional UI.",
      role: [
        "Created foundational components such as buttons, headlines, and form elements, accounting for each interactive state (hover, active, disabled)",
        "Built product cards, carousels, and other commerce components",
        "Developed larger page modules used to merchandise the site",
      ],
    },
    link: "link",
    images: [],
    components: [
      { label: "product card", image: productCardImg },
      { label: "blog card", image: blogCardImg },
      { label: "cart card", image: cartCardImg },
      { label: "commerce row", image: commerceRowImg },
    ],
    tech: [
      "React",
      "TypeScript",
      "Styled Components",
      "Tailwind CSS",
      "Storybook",
    ],
  },
  {
    slug: "newsletter",
    year: "2019-2020",
    title: "editorial & brand experiences",
    description: "300+ editorial pages, newsletters, and campaigns",
    fullDescription: {
      role: [
        "Built 300+ high-fidelity editorial web pages and digital experiences on a fast-paced web team, working closely with designers and editors to turn designs into responsive pages",
        "Developed marketing landing pages for product launches",
        "Created the goop Book Club experience",
        "Built the landing page and editorial content for goop’s Netflix series",
        "Built ticketing and event pages for In goop Health",
      ],
    },
    link: "link",
    images: [gToxImg, goopSperryImg, bookClubImg, goopNewsImg],
    tech: ["JavaScript", "CSS", "SCSS", "HTML", "jQuery"],
  },
];

export const earlyProjectData: Project[] = [
  {
    slug: "better-groceries",
    year: "2024",
    title: "Better Groceries",
    description:
      "A shopping app that helps people transition to a vegan lifestyle by making vegan products and alternatives easier to discover. Includes a public product search and an admin interface for managing product data. Built through Philosophie's Product for Good program for Better Eating International.",
    demoLink: "https://www.youtube.com/watch?v=wqQSk1_DrG8",
    images: [plpImg],
    tech: ["React", "Styled Components", "Unstated", "PostgreSQL"],
  },
  {
    slug: "trello-clone",
    year: "",
    title: "Trello Clone",
    description:
      "A clone of the project management app Trello, where users can create and organize task cards, drag them between customizable lists, change board backgrounds, and add members. Built with the Chingu developer network.",
    link: "https://github.com/chingu-voyage7/Geckos-Team-14",
    demoLink: "https://chingu-voyage7.github.io/Geckos-Team-14/",
    images: [aboutGoopImg],
    tech: ["React", "SCSS", "Flexbox"],
  },
];
