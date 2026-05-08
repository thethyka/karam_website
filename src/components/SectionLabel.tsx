interface SectionLabelProps {
	children: React.ReactNode;
}

export function SectionLabel({ children }: SectionLabelProps) {
	return <h2 className="mb-4 text-xs font-medium tracking-[0.15em] text-muted uppercase">{children}</h2>;
}
