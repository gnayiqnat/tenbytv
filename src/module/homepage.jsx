import { Button, Card } from '@heroui/react';
import { LuVideo } from 'react-icons/lu';

export default function Home() {
	return (
		<>
			<main className='pt-10 flex flex-col items-center justify-center'>
				<div className='flex flex-col gap-2 items-center md:items-start'>
					<h1 className='text-white text-4xl font-semibold'>
						Telling the stories that matter.
					</h1>
					<h2 className='text-white/70'>
						Tenby TV is the official media team of Tenby Schools SEG. {' \n'}
						{'\n'} We create, inspire, and inform.
					</h2>
					<div className='mt-4 flex flex-row gap-3'>
						<Button className='rounded-sm p-5 bg-blue-700 text-blue-100'>
							WATCH LATEST VIDEO
						</Button>
						<Button
							variant='outline'
							className='rounded-sm p-4.75 border-white/30 border-2 text-white/80'
						>
							REQUEST COVERAGE
						</Button>
					</div>
				</div>
				<div className='mt-5 flex md:flex-row gap-3 w-full justify-center'>
					<HomeCard
						icon={<LuVideo className='text-purple-500' />}
						title='Watch Videos'
						description='Interviews, events, sports, and more.'
					/>
					<HomeCard
						icon={<LuVideo className='text-purple-500' />}
						title='Watch Videos'
						description='Interviews, events, sports, and more.'
					/>
					<HomeCard
						icon={<LuVideo className='text-purple-500' />}
						title='Watch Videos'
						description='Interviews, events, sports, and more.'
					/>
				</div>
			</main>
		</>
	);
}

function HomeCard({ icon = <></>, title = '', description = '' }) {
	return (
		<>
			<Card className='md:flex-row p-5 w-full items-stretch max-w-2xs bg-gray-700/10 rounded-md min-h-28 border-2 border-gray-300/8'>
				<div className='p-3 h-fit flex items-center justify-center bg-gray-700/7 rounded-xl text-5xl'>
					{icon}{' '}
				</div>
				<div className='text-left'>
					<Card.Title>
						<h3 className='text-white/70'>{title}</h3>
					</Card.Title>
					<Card.Description>
						<h4 className='text-white/30'>{description}</h4>
					</Card.Description>
				</div>
			</Card>
		</>
	);
}
