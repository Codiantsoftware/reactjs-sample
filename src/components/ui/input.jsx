import * as React from "react"

import { cn } from "../../lib/utils"

const Input = React.forwardRef(({ className, type, ...props }, ref) => {
  return (
    (<div className={className}>
      <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor={props?.name || props?.label}>
        {props?.label || props?.name}
      </label>
      <input
        type={type}
        className={cn(
          "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
        )}
        ref={ref}
        {...props} />
      <p className="text-red-300 mt-1 text-sm">{props?.errors && props?.errors[props?.name] && <span>{props?.errors[props?.name]?.message}</span>}</p>
    </div>)
  );
})
Input.displayName = "Input"

export { Input }
