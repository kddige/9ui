import * as React from "react"

import { merge } from "../../utils"

const Textarea = React.forwardRef<
	HTMLTextAreaElement,
	React.TextareaHTMLAttributes<HTMLTextAreaElement>
>(({ className, ...props }, ref) => {
	return (
		<textarea
			ref={ref}
			className={merge(
				"min-h-20 w-full rounded border border-primary bg-bg p-4 text-sm text-fg placeholder:text-primary-fg focus:outline focus:outline-2 focus:outline-offset-1 focus:outline-accent disabled:cursor-not-allowed disabled:opacity-50 aria-[invalid]:border-danger-fg aria-[invalid]:bg-danger aria-[invalid]:text-danger-fg aria-[invalid]:focus:outline-danger",
				className
			)}
			{...props}
		/>
	)
})

export { Textarea }
