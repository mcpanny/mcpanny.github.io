$(document).ready(function() {
	window.onscroll = function() {checkScroll()};
	var divScrollBtn = document.getElementById("divScrollBtn");
	var navbar = document.getElementById("navbar");
	const navLinks = document.querySelectorAll('.nav-item')
	const menuToggle = document.getElementById('navbarSupportedContent')
	const bsCollapse = new bootstrap.Collapse(menuToggle)
	navLinks.forEach((l) => {
		l.addEventListener('click', () => { 
		if (menuToggle.classList.contains('show'))
		{
			bsCollapse.toggle()	
		}
		})
	})
	function checkScroll() {
		if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20)
		{			
			divScrollBtn.style.visibility = "visible";	
			divScrollBtn.style.opacity = 1;
			navbar.classList.remove("bg-light");
			navbar.classList.add("bg-white");
			navbar.classList.add("custom-navbar");
			
		}
		else
		{
			divScrollBtn.style.visibility = "hidden";	
			divScrollBtn.style.opacity = 0;
			navbar.classList.add("bg-light");
			navbar.classList.remove("bg-white");
			navbar.classList.remove("custom-navbar");
		}
	}
	
	checkScroll();
	function setButtonText(btn, message) {
		$(btn).tooltip('hide')
		.attr('data-original-title', message)
		.tooltip('show');
	}

	function resetButtonText(btn) {
		setTimeout(function() {
			$(btn).tooltip('hide');
		}, 1000);
	}
	
	var clipboard = new ClipboardJS("#btnEmail");
	clipboard.on('success', function(e) {	
		$('#btnEmail').text('copied!');	
		setTimeout(function() {
			$('#btnEmail').text('copy');
		}, 1000);
	});

	clipboard.on('error', function(e) {		
		$('#btnEmail').text('failed :(');
		setTimeout(function() {
			$('#btnEmail').text('copy');
		}, 1000);
	});
});
