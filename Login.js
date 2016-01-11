function Login(){
	var usuario = $("#txtUsuario");
	var senha = $("#txtSenha");
	var erro = "input-danger";
	
	if (usuario.val() == 'adm' && senha.val() == 'adm'){
		var url = "PainelAdministrativo.php";
		$(window.document.location).attr('href',url);
		LimparValidacao();
		return true;
	}else{
		usuario.addClass(erro);
		senha.addClass(erro);
		return false;
	}
}

function LimparValidacao(){
	var usuario = $("#txtUsuario");
	var senha = $("#txtSenha");
	var erro = "input-danger";
	
	usuario.removeClass(erro);
	senha.removeClass(erro);
	usuario.val('');
	senha.val('');
}
	
