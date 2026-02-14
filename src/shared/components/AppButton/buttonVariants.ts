import { tv, type VariantProps } from 'tailwind-variants';

export enum AppButtonVariants {
  PRIMARY = 'primary',
  SECONDARY = 'secondary',
  TERTIARY = 'tertiary',
}

export const buttonVariants = tv({
  slots: {
    base: 'w-full h-[48px] rounded-[10px] border px-4 flex-row items-center',
    text: 'font-semibold text-base',
    icon: 'text-lg',
  },
  variants: {
    variant: {
      [AppButtonVariants.PRIMARY]: {
        base: 'bg-purple-base border-purple-base',
        text: 'text-white',
      },
      [AppButtonVariants.SECONDARY]: {
        base: 'bg-transparent border-purple-base',
        text: 'text-purple-base',
      },
      [AppButtonVariants.TERTIARY]: 'bg-transparent border-transparent',
    },
    hasIcon: {
      true: {
        base: 'justify-between px-4',
      },
      false: {
        base: 'justify-center',
      },
    },
    isLoading: {
      true: {
        base: 'opacity-60 cursor-not-allowed  flex-row justify-center',
      },
    },
    isDisabled: {
      true: {
        base: 'opacity-60 cursor-not-allowed ',
      },
    },
  },
  defaultVariants: {
    hasIcon: false,
    isLoading: false,
    isDisabled: false,
    variant: AppButtonVariants.PRIMARY,
  },
});

export type AppButtonVariantsProps = VariantProps<typeof buttonVariants>;
