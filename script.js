var input_num;
function EnterNumber(num) {
    var input_num = document.getElementsByClassName('btn').value;
	var txt = document.getElementById('Formula');
	switch (num) {
        case '0':
            input_num = '0';
			txt.value +=input_num;
            break;
        case '1':
            input_num = '1';
			txt.value +=input_num;
            break;
        case '2':
            input_num = '2';
			txt.value +=input_num;

            break;
        case '3':
            input_num = '3';
						txt.value +=input_num;

            break;
        case '4':
            input_num = '4';
			txt.value +=input_num;

            break;
        case '5':
            input_num = '5';
			txt.value +=input_num;

            break;
        case '6':
            input_num= '6';
			txt.value +=input_num;

            break;
        case '7':
            input_num= '7';
			txt.value +=input_num;

            break;
        case '8':
            input_num= '8';
			txt.value +=input_num;

            break;
        case '9':
            input_num= '9';
			txt.value +=input_num;
            break;
			
		 case '*':
            input_num= '*';
			txt.value +=input_num;
            break;
        case '/':
            input_num= '/';
			txt.value +=input_num;
            break;
        case '+':
            input_num= '+';
			txt.value +=input_num;
            break;
        case '-':
           input_num= '-';
			txt.value +=input_num;
            break;
        case '.':
            input_num= '.';
			txt.value +=input_num;
            break;	
    }
}
function EnterEqual() {
    var input = document.getElementById('Formula');
    ans = Math.floor(+eval(input.value));
    document.getElementById('Answer').value = '=' + ans;
}

function EnterClear() {
    var clear = document.getElementById("Answer").value = "0";
    var eq = document.getElementById("Formula").value = "0";

}
function EnterOperator(op) {
    var operation = document.getElementsById('Formula');
    switch (op) {
        case '*':
            operation += '+';
			//document.getElementsById('Formula').value += '*';
            break;
        case '+':
            operation.value += '+';
            break;
        case '-':
            operation.value += '-';
            break;
        case '/':
            operation.value += '/';
            break;
        case '.':
            operation.value += '.';
            break;
    }
}

function setLocalStorage()
{
    if(typeof(Storage) !== "undefined") 
	{
		localStorage.user = document.getElementById("user").value;
	
		localStorage.pass = document.getElementById("pass").value;
		alert("Data saved");
	}
	 else 
	{
		alert("Sorry! No Web Storage support..");
	}
}


function getLocalStorage() 
{
    if (localStorage.user) 
	{
		document.getElementById("user").value=localStorage.user;
	} 
	if (localStorage.pass) 
	{
		document.getElementById("pass").value=localStorage["pass"];
	} 
}
