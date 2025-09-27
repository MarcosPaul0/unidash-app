import { cva } from "class-variance-authority";

export const badgeVariants = cva(
  `inline-flex items-center justify-center rounded-xl border px-4 py-2
  text:sm md:text-lg font-bold w-fit whitespace-nowrap shrink-0 [&>svg]:size-3 gap-1
  [&>svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50
  focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 
  aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden`,
  {
    variants: {
      variant: {
        default:
          "border-transparent bg-primary/10 text-primary [a&]:hover:bg-primary/90",
        secondary:
          "border-transparent bg-secondary text-secondary-foreground [a&]:hover:bg-secondary/90",
        destructive:
          "border-transparent bg-destructive text-white [a&]:hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",
        outline:
          "text-ghost-foreground bg-ghost [a&]:hover:bg-ghost [a&]:hover:text-ghost-foreground",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);
