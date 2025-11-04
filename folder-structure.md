
# Folder Structure

## Summary
- **Total Folders**: 29
- **Total Files**: 100
- **Root Directory**: portfolio

### File Types
- **.ts**: 27
- **.png**: 2
- **.ico**: 1
- **.svg**: 6
- **.jpg**: 1
- **.tsx**: 53
- **.json**: 4
- **.css**: 1
- **other**: 1
- **.mjs**: 2
- **.md**: 2

## Table of Contents
- [Directory Structure](#directory-structure)

## Directory Structure

```
portfolio/
├─ 📁 utils
│  ├─ 💻 string.ts (0.3 KB)
│  └─ 💻 url.ts (0.4 KB)
├─ 📁 types
│  ├─ 💻 nav.ts (0.1 KB)
│  └─ 💻 unist.ts (0.6 KB)
├─ 📁 public
│  ├─ 🖼️ dev.png (1.2 KB)
│  ├─ 📄 favicon.ico (1.2 KB)
│  ├─ 📄 file.svg (0.4 KB)
│  ├─ 📄 globe.svg (1.0 KB)
│  ├─ 📄 India.svg (9.1 KB)
│  ├─ 🖼️ light.png (24.8 KB)
│  ├─ 📄 next.svg (1.3 KB)
│  ├─ 🖼️ pic.jpg (62.7 KB)
│  ├─ 📄 vercel.svg (0.1 KB)
│  └─ 📄 window.svg (0.4 KB)
├─ 📁 lib
│  ├─ 💻 fonts.ts (0.4 KB)
│  ├─ 💻 libphonenumber.ts (0.4 KB)
│  ├─ 💻 rehype-add-query-params.ts (0.8 KB)
│  ├─ 💻 sound-manager.ts (0.7 KB)
│  └─ 💻 utils.ts (0.2 KB)
├─ 📁 hooks
│  ├─ 💻 use-is-client.ts (0.3 KB)
│  └─ 💻 use-meta-color.ts (0.6 KB)
├─ 📁 features
│  └─ 📁 profile
│     ├─ 📁 types
│     │  ├─ 💻 blogs.ts (0.1 KB)
│     │  ├─ 💻 experiences.ts (1.2 KB)
│     │  ├─ 💻 projects.ts (0.8 KB)
│     │  ├─ 💻 social-links.ts (0.3 KB)
│     │  ├─ 💻 tech-stack.ts (0.7 KB)
│     │  └─ 💻 user.ts (1.3 KB)
│     └─ 📁 data
│        ├─ 💻 blogs.ts (0.4 KB)
│        ├─ 💻 experiences.ts (6.2 KB)
│        ├─ 💻 github-contributions.ts (0.5 KB)
│        ├─ 💻 projects.ts (3.4 KB)
│        ├─ 💻 social-links.ts (0.8 KB)
│        ├─ 💻 tech-stack.ts (6.3 KB)
│        └─ 💻 user.ts (2.7 KB)
├─ 📁 config
│  └─ 💻 site.ts (0.9 KB)
├─ 📁 components
│  ├─ 📁 ui
│  │  ├─ 📄 button.tsx (2.3 KB)
│  │  ├─ 📄 collapsible.tsx (1.7 KB)
│  │  ├─ 📄 contribution-graph.tsx (12.5 KB)
│  │  ├─ 📄 sonner.tsx (1.1 KB)
│  │  ├─ 📄 tag.tsx (0.4 KB)
│  │  ├─ 📄 tooltip.tsx (2.1 KB)
│  │  └─ 📄 typography.tsx (2.4 KB)
│  ├─ 📁 animated-icons
│  │  └─ 📄 chevrons-down-up-icon.tsx (1.7 KB)
│  ├─ 📄 collapsible-list.tsx (2.0 KB)
│  ├─ 📄 flip-sentence.tsx (2.7 KB)
│  ├─ 📄 markdown.tsx (1.0 KB)
│  ├─ 📄 panel.tsx (1.2 KB)
│  ├─ 📄 provider.tsx (1.1 KB)
│  ├─ 📄 say-my-name.tsx (0.7 KB)
│  ├─ 📄 Separator.tsx (0.8 KB)
│  ├─ 📄 SideBar.tsx (2.0 KB)
│  ├─ 📄 toggle-theme.tsx (1.2 KB)
│  └─ 📄 verified-icon.tsx (0.8 KB)
├─ 📁 assets
│  └─ 📊 libphonenumber.metadata.json (6.5 KB)
├─ 📁 app
│  ├─ 📁 (sidebar)
│  │  ├─ 📁 components
│  │  │  ├─ 📄 SideBarBodySection.tsx (1.2 KB)
│  │  │  └─ 📄 SidebarImageSection.tsx (0.9 KB)
│  │  └─ 📄 SideBar.tsx (1.4 KB)
│  ├─ 📁 (main)
│  │  ├─ 📁 components
│  │  │  ├─ 📁 projects
│  │  │  │  ├─ 📄 index.tsx (0.7 KB)
│  │  │  │  └─ 📄 project-item.tsx (4.7 KB)
│  │  │  ├─ 📁 overview
│  │  │  │  ├─ 📄 email-item.tsx (0.5 KB)
│  │  │  │  ├─ 📄 index.tsx (1.5 KB)
│  │  │  │  ├─ 📄 intro-item.tsx (0.9 KB)
│  │  │  │  ├─ 📄 job-item.tsx (1.0 KB)
│  │  │  │  └─ 📄 phone-item.tsx (0.6 KB)
│  │  │  ├─ 📁 experiences
│  │  │  │  ├─ 📄 experience-item.tsx (1.7 KB)
│  │  │  │  ├─ 📄 experience-position-icon.tsx (0.7 KB)
│  │  │  │  ├─ 📄 experience-position-item.tsx (4.0 KB)
│  │  │  │  └─ 📄 index.tsx (0.5 KB)
│  │  │  ├─ 📁 bio
│  │  │  │  ├─ 📁 TeckStack
│  │  │  │  │  ├─ 📄 mobile-tech-stack.tsx (3.7 KB)
│  │  │  │  │  ├─ 📄 Stack.tsx (2.5 KB)
│  │  │  │  │  └─ 📄 tech-stack.tsx (1.4 KB)
│  │  │  │  ├─ 📁 social
│  │  │  │  │  ├─ 📄 social-link-item.tsx (1.4 KB)
│  │  │  │  │  └─ 📄 SocialLinks.tsx (0.8 KB)
│  │  │  │  ├─ 📁 github-contribution
│  │  │  │  │  ├─ 📄 GitHubContributions.tsx (0.6 KB)
│  │  │  │  │  └─ 📄 graph.tsx (2.6 KB)
│  │  │  │  ├─ 📁 blog
│  │  │  │  │  ├─ 📄 Blogs.tsx (3.4 KB)
│  │  │  │  │  └─ 📄 miniSeparator.tsx (0.5 KB)
│  │  │  │  └─ 📄 index.tsx (1.5 KB)
│  │  │  ├─ 📄 about.tsx (0.6 KB)
│  │  │  ├─ 📄 HeaderBox.tsx (0.2 KB)
│  │  │  ├─ 📄 headerSection.tsx (1.3 KB)
│  │  │  ├─ 📄 icons.tsx (32.9 KB)
│  │  │  ├─ 📄 IntroSection.tsx (1.7 KB)
│  │  │  ├─ 📄 NameImage.tsx (1.5 KB)
│  │  │  └─ 📄 SectionWrapper.tsx (1.1 KB)
│  │  └─ 📄 CenterContent.tsx (0.3 KB)
│  ├─ 📁 (chat)
│  │  └─ 📄 ChatSection.tsx (0.1 KB)
│  ├─ 📁 (app)
│  │  └─ 📄 page.tsx (0.6 KB)
│  ├─ 📄 globals.css (10.5 KB)
│  └─ 📄 layout.tsx (3.1 KB)
├─ 📄 .gitignore (0.5 KB)
├─ 📄 eslint.config.mjs (0.5 KB)
├─ 📜 folder-structure.md (3.6 KB)
├─ 💻 next-env.d.ts (0.2 KB)
├─ 💻 next.config.ts (0.1 KB)
├─ 📊 package-lock.json (364.7 KB)
├─ 📊 package.json (1.3 KB)
├─ 📄 postcss.config.mjs (0.1 KB)
├─ 📜 README.md (1.4 KB)
└─ 📊 tsconfig.json (0.8 KB)

```
