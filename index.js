$(document).ready(function() {
				var fart = new Fart();
				var loop = new Fart({
					loop : true,
					volume : 100
				});
				$('.click').click(function() {
					var fart_noise = $(this).data('fart');
					fart.play(fart_noise);
				});

				$('#scroller').scroll(function(e) {
					fart.random();
				});

				$('#start').click(function() {
					loop.play('fartception');
				});

				$('#stop').click(function() {
					loop.stop();
				});

				$('.volume').click(function() {
					var level = $(this).data('level');
					var f = new Fart({
						volume : level
					});
					f.play('toot', function() {
						f.remove();
					});
				});
			});
