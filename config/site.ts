import { USER } from "@/features/profile/data/user";
import type { NavItem } from "@/types/nav";

export const SITE_INFO = {
    name: USER.displayName,
    url: process.env.APP_URL || "https://chauhanyuvraj.me",
    ogImage: USER.ogImage,
    description: USER.bio,
    keywords: USER.keywords,
};

export const META_THEME_COLORS = {
    light: "#ffffff",
    dark: "#09090b",
};

export const MAIN_NAV: NavItem[] = [
    {
        title: "Daifolio",
        href: "/",
    },
    {
        title: "Blog",
        href: "/blog",
    },
    {
        title: "Components",
        href: "/components",
    },
];
export const GITHUB_USERNAME = "Chauhan-yuvraj";
export const SOURCE_CODE_GITHUB_REPO = "#";
export const SOURCE_CODE_GITHUB_URL = "#";

export const UTM_PARAMS = {
    utm_source: "chuahanyuvraj.me",
    utm_medium: "portfolio_website",
    utm_campaign: "referral",
};
