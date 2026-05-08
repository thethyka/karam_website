interface FooterProps {
	name: string;
	links: { label: string; href: string }[];
}

export function Footer({ name, links }: FooterProps) {
	const year = new Date().getFullYear();

	return (
		<footer className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-walnut/10 pt-6 pb-4 text-xs text-muted sm:flex-row">
			<span>
				© {year} {name}
			</span>
			<div className="flex gap-4">
				{links.map((link) => (
					<a
						key={link.label}
						href={link.href}
						target="_blank"
						rel="noreferrer"
						className="transition-colors hover:text-walnut"
					>
						{link.label}
					</a>
				))}
			</div>
		</footer>
	);
}
