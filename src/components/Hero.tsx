interface HeroProps {
	name: string;
	initial: string;
	tagline: string;
	about: string;
}

export function Hero({ name, initial, tagline, about }: HeroProps) {
	return (
		<section className="mt-10 mb-10">
			<div className="flex items-center gap-5">
				<div
					className="flex h-20 w-20 flex-shrink-0 items-center justify-center rounded-full bg-terra text-3xl font-medium text-cream shadow-sm"
					aria-hidden="true"
				>
					{initial}
				</div>
				<div>
					<h1 className="m-0 text-3xl font-medium text-walnut sm:text-4xl">
						Hey, I&apos;m {name} <span aria-hidden="true">👋</span>
					</h1>
					<p className="mt-1 max-w-prose text-sm leading-relaxed text-muted sm:text-base">{tagline}</p>
				</div>
			</div>

			<div className="mt-6 rounded-3xl bg-white px-6 py-5 text-sm leading-relaxed text-muted shadow-sm sm:text-base">
				{about}
			</div>
		</section>
	);
}
