<script>
	let password = '';

	let chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789.,:;_(){}[]@#~';

	function generateString() {
		for (let i = 0; i < 10; i++) {
			password += chars[Math.floor(Math.random() * 76)];
		}
	}

	generateString()

</script>

<div class="section">
	<h1>Room Password</h1>
	<h2>{password}</h2>
</div>

<style>
	@font-face {
		font-family: 'Jakarta';
		src: url('/fonts/Jakarta.ttf');
	}

	* {
		font-size: 24px;
		text-align: center;
		color: white;
		margin: 0;
		padding: 0;
		border: 0;
		outline: 0;
		box-sizing: border-box;
		font-family: Jakarta;
		font-weight: 300;
	}

	h1 {
		font-size: 30px;
		font-weight: 700;
	}

	.section {
		width: 100vw;
		height: auto;
		padding-top: 30px;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}

</style>
