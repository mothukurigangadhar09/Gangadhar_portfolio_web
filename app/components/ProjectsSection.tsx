import Image from 'next/image';

export default function ProjectsSection() {

	const projects = [
		{
			title: 'Integrated Life Saving Solution for Free Movement of Ambulance in Heavy Taffic Using YOLOV8 ',
			description: 'A Deep learning-based Emergency Vehicles detection system integrated with Arduino using Embedded systems and serial connections to provide smart traffic signaling for free ambulance movement.',
			image: '/project_1.jpg', // Save this image in /public folder
			link: 'https://ieeexplore.ieee.org/document/10593313',
		},
		{
			title: 'Hand_Arduino_led_controller_by_pyfirmata (Python-pyfirmata-protocol)',
			description: 'An Embedded project that controls the working of LEDs with the Hand gestures using Pythons pyfirmata protocol.',
			image: '/project_2.jpg',
			link: 'https://www.linkedin.com/in/gangadhar-mothukuri-137b75246/',
		},
		{
			title: 'Gangadhar_Web_Portfolio (Next.js)',
			description: 'Responsive portfolio built with Next.js and Tailwind CSS to showcase my projects and skills.',
			image: '/project_3.jpg',
			link: 'https://www.linkedin.com/in/gangadhar-mothukuri-137b75246/',
		},
		{
			title: 'Message Automation through Whatsapp (Python)',
			description: 'A Python-based tool that automates WhatsApp messages to send scheduled greetings and reminders.',
			image: '/project_4.jpg',
			link: 'https://www.linkedin.com/in/gangadhar-mothukuri-137b75246/',
		},
	];
	return (
		<section className="py-12 sm:py-20">
			<div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
				<h2 className="text-xl sm:text-2xl font-bold text-white mb-6 sm:mb-8 text-center">Featured Projects</h2>
				<div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
					
					{projects.map((project, index) => (
						<div key={index} className="bg-gray-800 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
							<div className="aspect-video bg-gray-700 relative">
								<Image src={project.image} alt={project.title} fill className="object-cover" />
							</div>
							<div className="p-4 sm:p-6">
								<h3 className="text-base sm:text-lg font-semibold text-white mb-2">{project.title}</h3>
								<p className="text-sm sm:text-base text-gray-300 mb-4">A brief description of the project and the technologies used in its development.</p>
								<div className="flex gap-2">
									<a href={project.link} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 font-medium text-sm sm:text-base">
										View Project →
									</a>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
