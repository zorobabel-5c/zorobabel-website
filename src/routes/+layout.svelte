<script>
	import '../app.css';
</script>

<main class="px-[10vw]">
	<nav>
		<ul class="flex justify-around items-center mt-4 w-full border-b border-gray-800 border-solid">
			<li>
				<a href="/">
					<img
						src="https://backend-zorobabel.5c.be/assets/2552fac3-984e-42ea-9d70-643338768dbb"
						alt=""
						class="aspect-square w-[70px]"
					/>
				</a>
			</li>
			<li>zorobabel</li>
			<li>films</li>
			<li>appels à projet</li>
			<li>ateliers</li>
			<li>événements</li>
			<li>search</li>
		</ul>
		<br />
	</nav>
	<section id="content">
		<slot />
	</section>
</main>
