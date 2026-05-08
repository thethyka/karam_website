type TagVariant = 'sage' | 'terra' | 'walnut';

interface TagProps {
	children: React.ReactNode;
	variant?: TagVariant;
}

const variantClasses: Record<TagVariant, string> = {
	sage: 'bg-[#2C3A1F]/15 text-[#2C3A1F]',
	terra: 'bg-terra/10 text-terra',
	walnut: 'bg-walnut/10 text-walnut',
};

export function Tag({ children, variant = 'walnut' }: TagProps) {
	return (
		<span className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-medium ${variantClasses[variant]}`}>
			{children}
		</span>
	);
}
