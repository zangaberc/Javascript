function login()
{
	var users = document.getElementById('username');
	var passw = document.getElementById('password');
	var usernamee = "root";
	var passwordd = "root";

	if(users.value == usernamee)
	{
		if(passw.value == passwordd)
		{
			window.alert("Loging In ");
			window.open("https://www.google.com/");
			}
			else
			{
			window.alert("Incorrect username or password!");
			}
		}
}
