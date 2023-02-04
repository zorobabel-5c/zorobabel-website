<script>
	import '../app.css';
</script>

<main class="px-[10vw]">
	<nav>
		<ul class="flex justify-around">
			<li>logo</li>
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
