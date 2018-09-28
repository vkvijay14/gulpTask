$ (function() {
	$ ('.usercheck').hide();
	$ ('.userpass').hide();
	$ ('.userconpass').hide();
	$ ('.useremail').hide();

	var usrError = true;
	var passError = true;
	var conpassError = true;

	$ ('#userName').keyup(function() {
		userName_check();
	})

	function userName_check() {
		var userName = $ ('#userName').val();
		if (userName.length == '') {
			$ ('.usercheck').show();
			$ ('.usercheck').html("** please enter name")
			$ ('.usercheck').focus();
			usrError = false;
			return false;
		}else {
			$ ('.usercheck').hide();
		}

		if ((userName.length < 3 ) || (userName.length > 10)) {
			$ ('.usercheck').show();
			$ ('.usercheck').html("** username lenght must be between 3 to 10")
			$ ('.usercheck').focus();
			usrError = false;
			return false;
		}else {
			$ ('.usercheck').hide();
		}
	}

	$('#password').keyup(function() {
		password_check();
	})

	function password_check() {
		var passstore = $ ('#password').val();
		if (passstore.length == '') {
			$ ('.userpass').show();
			$ ('.userpass').html("** please enter password")
			$ ('.userpass').focus();
			passError = false;
			return false;
		}else {
			$ ('.userpass').hide();
		}

		if ((passstore.length < 3 ) || (userName.length > 10)) {
			$ ('.userpass').show();
			$ ('.userpass').html("** password lenght must be between 3 to 10")
			$ ('.userpass').focus();
			passError = false;
			return false;
		}else {
			$ ('.userpass').hide();
		}
	}

	$ ('#conPass').keyup(function() {
		conPass();
	})

	function conPass(){
		var con_pass = $('#conPass').val()
		var passstore = $ ('#password').val();

		if(con_pass != passstore) {
			$ ('.userconpass').show();
			$ ('.userconpass').html("** password mismatched")
			$ ('.userconpass').focus();
			conpassError = false;
			return false;
		}else {
			$ ('.userconpass').hide();
		}
	}

	$ ('#subButton').click(function() {
		usrError = true;
		passError = true;
		conpassError = true;

		userName_check();
		password_check();
		conPass();

		if ((usrError == true) && (passError == true) && (conpassError == true) ) {
			return true;
		}else {
			return false;
		}
	})
})