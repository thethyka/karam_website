interface FooterProps {
	name: string;
}

export function Footer({ name }: FooterProps) {
	const year = new Date().getFullYear();

	return (
		<footer className="mt-12 border-t border-walnut/10 pt-6 pb-4 text-xs text-muted">
			<span>
				© {year} {name}
			</span>
		</footer>
	);
}
