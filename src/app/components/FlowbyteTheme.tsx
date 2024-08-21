import { CustomFlowbiteTheme, Flowbite } from 'flowbite-react'
import React from 'react'

export default function FlowbyteTheme({ children }: { children: React.ReactNode | React.ReactNode[] }) {
  return (
    <Flowbite theme={{ theme: customTheme }}>
      {children}
    </Flowbite>
  )
}
const customTheme: CustomFlowbiteTheme = {
  navbar: {
    root: {
      base: "bg-azul-muni-700 md:h-24 md:flex md:items-center px-2 py-2.5 sm:px-4",
      rounded: {
        on: "",
        off: "",
      },
      bordered: {
        on: "",
        off: "",
      },
      inner: {
        base: "mx-auto flex flex-wrap items-center justify-between",
        fluid: {
          on: "container",
          off: "container",
        },
      },
    },
    brand: {
      base: "flex items-center",
    },
    collapse: {
      base: "w-full md:block md:w-auto",
      list: "mt-4 flex flex-col md:items-center md:mt-0 md:flex-row md:space-x-8 md:text-sm md:font-medium",
      hidden: {
        on: "hidden",
        off: "",
      },
    },
    link: {
      base: "block px-2 py-3 md:p-2",
      active: {
        on: "bg-cyan-700 text-white md:bg-azul-muni-500",
        off: "border-gray-100 text-white hover:bg-azul-muni-500 rounded md:border-0 md:hover:bg-azul-muni-500",
      },
      disabled: {
        on: "text-gray-400 hover:cursor-not-allowed",
        off: "",
      },
    },
    toggle: {
      base: "inline-flex items-center rounded-lg p-2 text-sm text-white focus:outline-none focus:ring-2 focus:ring-gray-200 hover:bg-azul-muni-600 md:hidden",
      icon: "h-6 w-6 shrink-0",
    },
  },
  card: {
    root: {
      base: "flex rounded-lg border border-gray-200 bg-white shadow-md dark:border-gray-700 dark:bg-gray-800",
      children: "flex h-full flex-col justify-center gap-4 p-6",
      horizontal: {
        off: "flex-col",
        on: "flex-col md:max-w-xl md:flex-row",
      },
      href: "hover:bg-gray-100 dark:hover:bg-gray-700",
    },
    img: {
      base: "",
      horizontal: {
        off: "rounded-t-lg",
        on: "h-96 w-full rounded-t-lg object-cover md:h-auto md:w-48 md:rounded-none md:rounded-l-lg",
      },
    },
  },
};

