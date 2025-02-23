import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import type { MDXComponents } from "mdx/types";

import { Callout } from "@/components/mdx/callout";
import { Codeblock } from "@/components/mdx/code-block";

// This file is required to use MDX in `app` directory.
export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    // Allows customizing built-in components, e.g. to add styling.
    h1: (props) => (
      <h1 className="scroll-m-20 font-cal text-4xl mt-10" {...props} />
    ),
    h2: (props) => (
      <h2
        className="mt-10 scroll-m-20 border-b pb-2 font-cal text-3xl first:mt-0"
        {...props}
      />
    ),
    h3: (props) => (
      <h3 className="mt-8 scroll-m-20 font-cal text-2xl" {...props} />
    ),
    h4: (props) => (
      <h4 className="m-0 scroll-m-20 font-cal text-xl" {...props} />
    ),
    p: (props) => (
      <p className="leading-7 [&:not(:first-child)]:mt-6" {...props} />
    ),
    a: ({ children, href }) => {
      const isExternal = href?.startsWith("http");
      const Component = isExternal ? "a" : Link;
      return (
        <Component
          href={href as string}
          className="underline decoration-primary decoration-2 underline-offset-4"
        >
          {children}
        </Component>
      );
    },
    ul: (props) => <ul className="mt-4 list-disc pl-8" {...props} />,
    code: (props) => (
      <code
        className="relative font-mono rounded bg-muted py-[0.2rem] px-[0.3rem] text-sm font-semibold text-muted-foreground"
        {...props}
      />
    ),
    pre: Codeblock,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    img: (props) => <Image {...(props as any)} />,

    // Add custom components.
    Callout,

    // Pass through all other components.
    ...components,
  };
}
