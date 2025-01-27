import * as React from "react"
import { Input as BaseInput } from "@base-ui-components/react/input"

import { cn } from "@/lib/utils"

/********
Input
********/
interface InputProps extends React.ComponentProps<typeof BaseInput> {
	children?: React.ReactNode
	inputWrapperClassName?: string
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
	({ children, className, inputWrapperClassName, ...props }, ref) => {
		const hasLeadingIcon = React.Children.toArray(children).some(
			(child) =>
				React.isValidElement(child) &&
				child.type === InputIcon &&
				child.props.side === "leading"
		)
		const hasTrailingIcon = React.Children.toArray(children).some(
			(child) =>
				React.isValidElement(child) &&
				child.type === InputIcon &&
				child.props.side === "trailing"
		)

		return (
			<div className={cn("relative", inputWrapperClassName)}>
				{children}
				<BaseInput
					ref={ref}
					className={cn(
						"h-9 w-full rounded-md border border-border bg-background p-4 text-sm text-foreground placeholder:text-muted-fg focus:outline focus:outline-2 focus:outline-offset-1 focus:outline-accent disabled:cursor-not-allowed disabled:opacity-50 aria-[invalid=true]:border-danger-fg aria-[invalid=true]:bg-destructive aria-[invalid=true]:text-destructive-fg aria-[invalid=true]:placeholder:text-destructive-fg aria-[invalid=true]:focus:outline-danger",
						hasLeadingIcon && "pl-10",
						hasTrailingIcon && "pr-10",
						className
					)}
					{...props}
				/>
			</div>
		)
	}
)
Input.displayName = "Input"

/********
Input Icons
********/
interface InputIconProps extends React.ComponentPropsWithoutRef<"div"> {
	side: "leading" | "trailing"
	children?: React.ReactNode
}

const InputIcon = React.forwardRef<HTMLDivElement, InputIconProps>(
	({ children, className, side, ...props }, ref) => (
		<div
			ref={ref}
			className={cn(
				"absolute top-1/2 -translate-y-1/2 text-muted-fg [&_svg]:size-4",
				side === "leading" && "left-3",
				side === "trailing" && "right-3",
				className
			)}
			{...props}
		>
			{children}
		</div>
	)
)
InputIcon.displayName = "InputIcon"

export { Input, InputIcon }
