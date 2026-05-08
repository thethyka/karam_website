interface NavLink {
	label: string;
	href: string;
}

interface NavProps {
	logo: string;
	links: NavLink[];
}

export function Nav({ logo, links }: NavProps) {
	return (
		<nav className="flex items-center justify-between">
			<span className="text-base font-medium text-walnut">{logo}</span>
			<div className="flex gap-2">
				{links.map((link) => (
					<a
						key={link.label}
						href={link.href}
						target="_blank"
						rel="noreferrer"
						className="rounded-full bg-walnut/10 px-3 py-1.5 text-xs text-walnut transition-colors hover:bg-walnut/20"
					>
						{link.label}
					</a>
				))}
			</div>
		</nav>
	);
}
