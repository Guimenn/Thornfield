"use client";
import './produtos.css';

export default function Produtos() {
	const produtos = [
		{
			id: 1,
			nome: "TENNESSEE HONEY",
			imagem: "/icons-produtos/abelha.svg",
			descricao: "Jack Daniel's Tennessee Honey",
			bg: "/"
		},
		{
			id: 2,
			nome: "TENNESSEE FIRE",
			imagem: "/icons-produtos/fogo.svg",
			descricao: "Jack Daniel's Tennessee Fire"
		},
		{
			id: 3,
			nome: "TENNESSEE APPLE",
			imagem: "/icons-produtos/apple.svg",
			descricao: "Jack Daniel's Tennessee Apple"
		},
		{
			id: 4,
			nome: "GENTLEMAN JACK",
			imagem: "/icons-produtos/sinatra.svg",
			descricao: "Gentleman Jack"
		},
		{
			id: 5,
			nome: "SINGLE BARREL",
			imagem: "/icons-produtos/barril.svg",
			descricao: "Single Barrel"
		},
		{
			id: 6,
			nome: "SINATRA SELECT",
			imagem: "/icons-produtos/sinatra.svg",
			descricao: "Sinatra Select"
		},
		{
			id: 7,
			nome: "JACK & COKE",
			imagem: "/icons-produtos/lata.svg",
			descricao: "Jack & Coke"
		},
		{
			id: 8,
			nome: "HONEY & LEMONADE",
			imagem: "/icons-produtos/lata.svg",
			descricao: "Honey & Lemonade"
		}
	];

	return (
		<main className="relative min-h-screen bg-black">
			<section>
				<div className="container-main w-full flex flex-col justify-between">
					<div className="flex items-center justify-center h-[60vh]">
						<h1 className="text-7xl font-bold text-white tracking-wider">
							OS PRINCIPAIS PERSONAGENS
						</h1>
					</div>
					<div className="border-t border-b border-white our-products">
						<div className=" mx-auto">
							<div className="flex justify-center">
								{produtos.map((produto) => (
									<div key={produto.id} className="flex flex-col items-center w-28 border border-white ">
										<div className="w-16 h-16 ">
											<img
												src={produto.imagem}
												alt={produto.descricao}
												className="w-10 h-10 object-contain m-auto mt-2"
											/>
										</div>
										<h2 className="text-white text-center font-bold tracking-wider">
											{produto.nome}
										</h2>
									</div>
								))}
							</div>
						</div>
					</div>
				</div>
			</section>
			<section>
				{produtos.map((produto) => (
					<div className="bg-[#000000c2] flex flex-col items-center h-[50vh]">


						<h2 className="text-white text-center font-bold tracking-wider">
							{produto.nome}
						</h2>
						<p className="text-white text-center font-bold tracking-wider">
							{produto.descricao}
						</p>
						<button className="bg-white text-black px-4 py-2 rounded-md">
							Comprar
						</button>


					</div>
				))}
			</section>
		</main>
	);
}
