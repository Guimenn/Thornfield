import './Entrada.css'

export default function Entrada() {
	return (
		<main className="bg-black h-screen w-screen flex flex-col items-center justify-center gap-10">
			<h1 className='text-white text-8xl font-light'>WELCOME</h1>
			<h3 className='text-white text-xs font-light'>WORLD’S MOST AWARDED SINGLE MALT SCOTCH WHISKY*

			</h3>
			<label htmlFor="date" className='text-white text-xs font-light'>ENTER YOUR DATE OF BIRTH</label>
			<input type="text" className='bg-black text-white border-2 border-white rounded-md p-2' />
			<button className='bg-white text-black rounded-md p-2'>ENTER SITE</button>
			<p className='text-white text-lg font-light'>
				You must have cookies enabled to use this website. For further information on deleting or controlling cookies, please visit www.aboutcookies.org. By entering this site you agree to our <a href="">Terms & Conditions</a> and <a href="">Privacy & Cookies Notice</a></p>
			<p className='text-white text-base font-light'>*The Glenfiddich range has received more awards since 2000 than any other single malt Scotch whisky in two of the world’s most prestigious competitions, the International Wine & Spirit Competition and the International Spirits Challenge.</p>
		</main>
	)
}
