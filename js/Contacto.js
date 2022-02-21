const list = document.querySelectorAll('.list');
		function activeLink(){
			list.forEach((item) =>
			item.classList.remove('active'));
			this.classList.add('active');
		}
		list.forEach((item) =>
		item.addEventListener('click', activeLink));

        
		function mostrarFono()
		{
			document.getElementById('phono').style.display = 'block';
			document.getElementById('facee').style.display = 'none';
			document.getElementById('linke').style.display = 'none';
			document.getElementById('correo').style.display = 'none';
			document.getElementById('twitter').style.display = 'none';
            document.getElementById('phono').classList.add('phone');

		}

		function mostrarFace()
		{
			document.getElementById('phono').style.display = 'none';
			document.getElementById('facee').style.display = 'block';
			document.getElementById('linke').style.display = 'none';
			document.getElementById('correo').style.display = 'none';
			document.getElementById('twitter').style.display = 'none';
            document.getElementById('facee').classList.add('face');
			document.getElementById('face2').classList.add('face');

		}

		function mostrarLink()
		{
			
			document.getElementById('phono').style.display = 'none';
			document.getElementById('facee').style.display = 'none';
			document.getElementById('linke').style.display = 'block';
			document.getElementById('correo').style.display = 'none';
			document.getElementById('twitter').style.display = 'none';
			document.getElementById('linke2').classList.add('linked');
		}

		function mostrarMail()
		{
			
			document.getElementById('phono').style.display = 'none';
			document.getElementById('facee').style.display = 'none';
			document.getElementById('linke').style.display = 'none';
			document.getElementById('correo').style.display = 'block';
			document.getElementById('twitter').style.display = 'none';
			document.getElementById('correo').classList.add('mail');
		}

		function mostrarTwiter()
		{
			
			document.getElementById('phono').style.display = 'none';
			document.getElementById('facee').style.display = 'none';
			document.getElementById('linke').style.display = 'none';
			document.getElementById('correo').style.display = 'none';
			document.getElementById('twitter').style.display = 'block';
			document.getElementById('twiter2').classList.add('twiter');
		}