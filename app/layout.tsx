import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';

const geistSans = Geist({
	variable: '--font-geist-sans',
	subsets: ['latin'],
});

const geistMono = Geist_Mono({
	variable: '--font-geist-mono',
	subsets: ['latin'],
});

export const metadata = {
  	title: "Gangadhar | Full Stack Developer",
	description:
		'Welcome to my portfolio! I am a passionate developer who believes in simplicity and effectiveness. I focus on creating straightforward solutions that solve real problems, with clean code and intuitive user experiences.',
	metadataBase: new URL("https://gangadhar.dev"), // for development
	keywords: [
		'Full stack Developer',
		'Python',
		'Embedded C++',
		'AI & ML',
		'Deep Learning',
		'Sql',
		'Java',
		'Ms office',
		'Sales force administrator',
		'Web Developer',
		'Clean Code',
		'Simple Design',
		'JavaScript',
		'TypeScript',
		'React',
		'Next.js',
		'User Experience',
		'Problem Solving',
		'Effective Solutions',
		'Web Development',
		'Frontend Development',
		'Backend Development',
		'Gangadhar Mothukuri',
	],
	authors: [{ name: 'Gangadhar Mothukuri' }],
	creator: 'Gangadhar Mothukuri',
	openGraph: {
		title: 'Gangadhar Mothukuri - Developer Portfolio',
		description: 'Passionate developer creating simple and effective solutions. Explore my projects and development approach.',
		url: 'https://gangadhar.dev', // <- use your actual domain
		siteName: 'Gangadhar Mothukuri - Portfolio',
		images: [
			{
				url: '/portrait.jpg',  // <- replace this image in /public folder
				width: 1200,
				height: 630,
				alt: 'Gangadhar Mothukuri - Developer Portfolio',
			},
		],
		locale: 'en_US',
		type: 'website',
	},
	twitter: {
		card: 'summary_large_image',
		title: 'Gangadhar Mothukuri - Developer',
		description: 'Passionate developer creating simple and effective solutions. Explore my projects and development approach.',
		creator: '@mothukurig55638',  // <- replace with your actual Twitter username
		images: ['/portrait.jpg'],
	},
	robots: {
		index: true,
		follow: true,
		googleBot: {
			index: true,
			follow: true,
			'max-video-preview': -1,
			'max-image-preview': 'large',
			'max-snippet': -1,
		},
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>{children}</body>
		</html>
	);
}
