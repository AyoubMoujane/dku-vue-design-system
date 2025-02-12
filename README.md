# dku-vue-design-system 🎨

This repository is a **Vue 3** + **TypeScript** + **Vite** project that serves as a **component library**. It also includes **Storybook** 📖 for building and documenting UI components in isolation.

## Table of Contents 📑

- [Overview 🔍](#overview-)
- [Getting Started 🚀](#getting-started-)
  - [Prerequisites ✅](#prerequisites-)
  - [Installation 💻](#installation-)
- [Scripts](#scripts)
  - [Development 🧑‍💻](#development-)
  - [Storybook 📚](#storybook-)
  - [Release 🚢](#release-)
- [Usage 📌](#usage-)
  - [Importing Components 📦](#importing-components-)
  - [Examples 💡](#examples-)
- [Adding New Components ➕](#adding-new-components-)
- [Project Structure 📂](#project-structure-)

---

## Overview 🔍

This repository contains:
1. A **Vue 3** + **TypeScript** + **Vite** setup for building reusable components.
2. A **Storybook** environment for documenting and testing these components in isolation.
3. Various **UI elements** (Button, Select, Accordion, Input, etc.) ready to be imported and used in other Vue projects.

---

## Getting Started 🚀

### Prerequisites ✅

- **Node.js** (v16 or later recommended) ⚡
- **pnpm** or **npm** (this repo uses pnpm, but you can adapt to npm or yarn) 🔄

### Installation 💻

1. **Clone** this repository or download the source. 📥
2. **Install** dependencies:
   ```bash
   pnpm install
   ```
3. You’re ready to go! 🎉 See below for available scripts.

---

## Scripts

All scripts can be run from the project’s root directory.

### Development 🧑‍💻

*(Add your development script details here if needed!)*

### Storybook 📚

#### Run Storybook (Development) 🚀

```bash
pnpm storybook
```

- Opens **Storybook** at [http://localhost:6006](http://localhost:6006) where you can browse, test, and document components. 🔎

### Release 🚢

If you plan to **publish** this library to npm:

```bash
pnpm release
```

- By default, it runs `npm publish --access public`. Make sure to bump versions, commit, etc., prior to releasing. 📝

---

## Usage 📌

### Importing Components 📦

If your library is published on npm (e.g. `@ayoubmoujane/dku-vue-design-system`), install it in another Vue project:

```bash
pnpm add @ayoubmoujane/dku-vue-design-system
```

Then **import** and use a component, for example:

```vue
<script setup lang="ts">
import { Button } from '@ayoubmoujane/dku-vue-design-system'
</script>

<template>
  <Button>Click Me</Button>
</template>
```

If not published, you can use local linking (`pnpm link --global`) or a file reference (e.g. `pnpm add file:../dku-vue-design-system`).

### Examples 💡

1. **Button**:
   ```vue
   <Button variant="secondary">Secondary Button</Button>
   ```
2. **Select**:
   ```vue
   <Select default-value="[1]" :max="10" :min="0">
     <!-- etc... -->
   </Select>
   ```
3. **Accordion**:
   ```vue
   <Accordion type="single" collapsible>
     <AccordionItem value="item-1">
       <AccordionTrigger>Title</AccordionTrigger>
       <AccordionContent>Content</AccordionContent>
     </AccordionItem>
   </Accordion>
   ```

---

## Adding New Components ➕

1. **Browse** the available components on [shadcn-vue.com](https://shadcn-vue.com) 🌐
2. **Pull** the component code:
   ```bash
   pnpm dlx shadcn-vue@latest add button
   ```
3. **Export** it in `src/index.ts` (or wherever you gather exports):
   ```ts
   export { default as Button } from './components/ui/button/Button.vue'
   ```
4. **Create a Story**:
   - Add `Button.stories.ts` in the same folder or a `stories/` folder.
   - Define stories to showcase different states (default, disabled, etc.). 🎭
5. **Run Storybook** (`pnpm storybook`) to verify your new component. ✅

---

## Project Structure 📂

```
.
├── .storybook/             # Storybook config files 📚
├── dist/                   # Output folder after 'pnpm build' 📦
├── src/
│   ├── assets/             # Global CSS, images, etc. 🎨
│   ├── components/
│   │   └── ui/             # Folders for each UI component 🔧
│   ├── index.ts            # Main entry re-exporting all components 📌
│   └── ...
├── package.json
├── vite.config.ts
├── tsconfig.json
├── ...
└── README.md
```