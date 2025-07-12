"use client";

import { Dialog as ChakraDialog, Portal } from "@chakra-ui/react";
import * as React from "react";

export interface DialogRootProps extends ChakraDialog.RootProps {
  children: React.ReactNode;
}

export const DialogRoot = React.forwardRef<HTMLDivElement, DialogRootProps>(
  function DialogRoot(props) {
    const { children, ...rest } = props;
    return <ChakraDialog.Root {...rest}>{children}</ChakraDialog.Root>;
  }
);

export const DialogBackdrop = React.forwardRef<
  HTMLDivElement,
  ChakraDialog.BackdropProps
>(function DialogBackdrop(props, ref) {
  return (
    <Portal>
      <ChakraDialog.Backdrop
        ref={ref}
        bg="blackAlpha.600"
        backdropFilter="blur(4px)"
        {...props}
      />
    </Portal>
  );
});

export const DialogContent = React.forwardRef<
  HTMLDivElement,
  ChakraDialog.ContentProps
>(function DialogContent(props, ref) {
  return (
    <Portal>
      <ChakraDialog.Positioner>
        <ChakraDialog.Content ref={ref} {...props} />
      </ChakraDialog.Positioner>
    </Portal>
  );
});

export const DialogHeader = React.forwardRef<
  HTMLDivElement,
  ChakraDialog.HeaderProps
>(function DialogHeader(props, ref) {
  return <ChakraDialog.Header ref={ref} {...props} />;
});

export const DialogTitle = React.forwardRef<
  HTMLHeadingElement,
  ChakraDialog.TitleProps
>(function DialogTitle(props, ref) {
  return <ChakraDialog.Title ref={ref} {...props} />;
});

export const DialogBody = React.forwardRef<
  HTMLDivElement,
  ChakraDialog.BodyProps
>(function DialogBody(props, ref) {
  return <ChakraDialog.Body ref={ref} {...props} />;
});

export const DialogFooter = React.forwardRef<
  HTMLDivElement,
  ChakraDialog.FooterProps
>(function DialogFooter(props, ref) {
  return <ChakraDialog.Footer ref={ref} {...props} />;
});

export const DialogCloseTrigger = React.forwardRef<
  HTMLButtonElement,
  ChakraDialog.CloseTriggerProps
>(function DialogCloseTrigger(props, ref) {
  return <ChakraDialog.CloseTrigger ref={ref} {...props} />;
});

export const DialogActionTrigger = React.forwardRef<
  HTMLButtonElement,
  ChakraDialog.ActionTriggerProps
>(function DialogActionTrigger(props, ref) {
  return <ChakraDialog.ActionTrigger ref={ref} {...props} />;
});
