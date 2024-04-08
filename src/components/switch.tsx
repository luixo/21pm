import React from "react";

import * as SwitchPrimitives from "@radix-ui/react-switch";

export const Switch = React.forwardRef<
  React.ElementRef<typeof SwitchPrimitives.Root>,
  React.ComponentPropsWithoutRef<typeof SwitchPrimitives.Root>
>((props, ref) => (
  <SwitchPrimitives.Root
    className="inline-flex bg-white h-[72px] w-[140px] shrink-0 cursor-pointer items-center rounded-full border-[8px] border-transparent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
    {...props}
    ref={ref}
  >
    <SwitchPrimitives.Thumb className="pointer-events-none bg-yellow block h-[60px] w-[60px] rounded-full ring-0 transition-transform data-[state=checked]:translate-x-16 data-[state=unchecked]:translate-x-0" />
  </SwitchPrimitives.Root>
));
