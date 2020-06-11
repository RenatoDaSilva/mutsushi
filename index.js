Vue.component('header-message', {
  template: `
			<div class="panel-heading">
				<img class="logo-heading" src="./images/logo.jpg">
			</div>`
})

Vue.component('body-message', {
  template: `
			<div class="panel-body">
				<h1 style="color: #5e9ca0; text-align: center;"><strong>Nosso portal est&aacute; sendo preparado</strong></h1>
				<h2 style="color: #2e6c80; text-align: center;">Em breve voc&ecirc; ter&aacute; maravilhosas novidades, aguarde.</h2>
				<img class="sushi-gif" src="./images/sushi-gif.gif">
			</div>`
})

Vue.component('footer-message', {
  template: `
			<div class="panel-footer">
				<div class="table-responsive">
					<table class="table">
						<tbody>
							<tr>
								<td><a href="https://www.instagram.com/mutsushidelivery/?hl=pt-br"><img class="img-responsive" src="./images/insta_conta.png" alt="Instagram" style="float:right;width:300px"></a></td>
								<td><a href="https://api.whatsapp.com/send?phone=5548996761473&text=Oii+estou+vindo+do+Site+&#128513;"><img class="img-responsive" src="./images/wpp_numero.png" alt="WhatsApp" style="float:left;width:300px"></a></td>
							</tr>
						</tbody>
					</table>
				</div>
			</div>`
})

var app = new Vue({
	el: '#app'
})