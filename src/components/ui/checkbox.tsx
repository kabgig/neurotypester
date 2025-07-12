"use client";

import { Checkbox as ChakraCheckbox } from "@chakra-ui/react";
import * as React from "react";

export interface CheckboxProps extends Omit<ChakraCheckbox.RootProps, 'onCheckedChange'> {
  checked?: boolean;
  onCheckedChange?: (checked: boolean) => void;
  colorPalette?: string;
  size?: "sm" | "md" | "lg";
  children?: React.ReactNode;
}

export const Checkbox = React.forwardRef<HTMLLabelElement, CheckboxProps>(
  function Checkbox(props, ref) {
    const { checked, onCheckedChange, children, ...rest } = props;

    return (
      <ChakraCheckbox.Root
        ref={ref}
        checked={checked}
        onCheckedChange={(details) => onCheckedChange?.(details.checked as boolean)}
        {...rest}
      >
        <ChakraCheckbox.HiddenInput />
        <ChakraCheckbox.Control>
          <ChakraCheckbox.Indicator />
        </ChakraCheckbox.Control>
        {children && <ChakraCheckbox.Label>{children}</ChakraCheckbox.Label>}
      </ChakraCheckbox.Root>
    );
  }
);