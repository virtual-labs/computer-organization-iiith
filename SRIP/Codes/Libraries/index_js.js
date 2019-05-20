//Java script part for dropdown of sub menu
//****************************************************************************************************
var lockDropDown=-1;
function mydropdownFunction(x) {
	var status=0;
	if(lockDropDown!=-1)
	{
		if(lockDropDown==x){
			status=1;
		}
		if(lockDropDown==0){
			document.getElementById("myDropdown_file").classList.toggle("show");
	   }
	   else if(lockDropDown==1){
			document.getElementById("myDropdown_edit").classList.toggle("show");
	   }
	   else if(lockDropDown==2 ){
			document.getElementById("myDropdown_run").classList.toggle("show");
	   }
	   else if(lockDropDown==3){
			document.getElementById("myDropdown_help").classList.toggle("show");
	   }
	   lockDropDown=-1;
	}
	if(status!=1)
	{
		if(x==0 && lockDropDown==-1){
			document.getElementById("myDropdown_file").classList.toggle("show");
			lockDropDown=0;
	   }
	   else if(x==1  && lockDropDown==-1){
			document.getElementById("myDropdown_edit").classList.toggle("show");
			lockDropDown=1;
	   }
	   else if(x==2  && lockDropDown==-1){
			document.getElementById("myDropdown_run").classList.toggle("show");
			lockDropDown=2;
	   }
	   else if(x==3  && lockDropDown==-1){
			document.getElementById("myDropdown_help").classList.toggle("show");
			lockDropDown=3;
	   }
	}
	
}


//Java script part for the enabling and disbling the options of Run menu tab
//****************************************************************************************************
function assemblerlistner()
{
	document.getElementById("Run_run").setAttribute("style", "cursor: pointer; opacity: 1;");
	document.getElementById("Run_step").setAttribute("style", "cursor: pointer; opacity: 1;");
	document.getElementById("Run_reset").setAttribute("style", "cursor: pointer; opacity: 1;");
	document.getElementById("Run_clearBreakPoints").setAttribute("style", "cursor: pointer; opacity: 1;");
	document.getElementById("Run_toggleBreakPoints").setAttribute("style", "cursor: pointer; opacity: 1;");
	document.getElementById("execute_step").setAttribute("style", "cursor: pointer; opacity: 1;");
	document.getElementById("execute_run").setAttribute("style", "cursor: pointer; opacity: 1;");
	document.getElementById("data_table").setAttribute("style", "visibility:visible;width:100%; background-color: white;");
	document.getElementById("text_table").setAttribute("style", "visibility:visible;width:100%; background-color: white;");
	
	
}



//Java script part for the new file creation and text filed
//****************************************************************************************************
var names=[];
var count=1;
var last_button_id=-1;
var user_file_counter=0;
var user_file_index=-101;

function fileonload()
{
	// var while_counter=parseInt(getCookie("-1"));
	// var user_files=parseInt(getCookie("-100"));
	var while_counter=parseInt(sessionStorage.getItem("-1"));
	var user_files=parseInt(sessionStorage.getItem("-100"));
	
		// if(getCookie("-2")=="1"){
			if(sessionStorage.getItem("-2")=="1"){
			copy_text_buffer="#Program to add two numbers"+"\n\n\t"+".data"+"\n\t"+"sum: .word 0"+"\n\n\t"+".text"+"\n\t"+"main:"+"\n\t"	+"li $t0, 10"+"\n\t"+"li $t1, 15"+"\n\t"+"add $t2, $t0, $t1 	# compute the sum"	+"\n\t"+"sw $t2, sum"
		}
		//else if(getCookie("-2")=="2"){
			else if(sessionStorage.getItem("-2")=="2"){
			copy_text_buffer="#Program to convert a string to int"+"\n\n"+".data"+"\n"+'string: .asciiz "13245"'+"\n"+"newline: .word 10"+"\n"+".text"+"\n"+"main:"+"\n\n"+"la $t0, string 				# Initialize S."+"\n"+"li $t2, 0 				# Initialize sum = 0."+"\n"+"lw $t5, newline"+"\n"+ "sum_loop:"+"\n\t"+"lb $t1, ($t0) 			# load the byte at addr S into $t1,"+"\n\t"+ "addu $t0, $t0, 1 		# and increment S."+"\n\t"+"beq $t1, $t5, end_sum_loop"+"\n\n\t"+"mul $t2, $t2, 10 		# t2 *= 10."+"\n\n\t"+"sub $t1, $t1, 48	 	# t1 -= '0'."+"\n\t"+"add $t2, $t2, $t1 		# t2 += t1."+"\n\n\t"+"b sum_loop # and repeat the loop."+"\n"+"end_sum_loop:"
		}
		else if(sessionStorage.getItem("-2")=="3"){
			copy_text_buffer="#compute length of a string"+"\n\n"+".data"+"\n"+'string: .asciiz "This is a string"'+"\n"+"length: .word 0"+"\n\n"+".text"+"\n"+"la $t1, string"+"\n"+"li $t2, 0"+"\n"+"length_loop:"+"\n\t"+"lb $t3, ($t1)"+"\n\t"+"beqz $t3, endloop"+"\n\t"+"addu $t2, $t2, 1"+"\n\t"+"addu $t1, $t1, 1"+"\n\t"+"b length_loop"+"\n"+"endloop:"+"\n\t"+"sub $t2, $t2, 1		#subtract 1 to ignore \\0 "+"\n\t"+"sw $t2, length"
		}
	var i=0;
	var user_entry=-101;
	while(while_counter>=1)
	{
		
		var text=sessionStorage.getItem((i).toString());
		var temp=parseInt(sessionStorage.getItem((user_entry).toString()));
		//alert("temp->"+temp+" i->"+i);
		if((user_files>=1) && (i==temp))
		{
			user_entry--;
			var nam=sessionStorage.getItem((user_entry).toString());
			user_entry--;
			myfunctionlist(text,nam);
			alert("name-:"+nam);
			user_files--;
		}
		else{
			myfunctionlist(text,'');
		}
		while_counter--;
		i++;
	}
}
function Constructer(name) {
  this.name = name;
  this.text = "Add your code here!";
}

function init(text_node)
{
	var str="mips";
	var app=count.toString();
	str=str.concat(app);
	str=str.concat(".asm");
	count++;
	var name1=new Constructer(str);
	if(text_node!==""){
		name1.text=text_node;
	}
	names.push(name1);
	//setCookie("-1",(count-1).toString(), 0.015625);
	sessionStorage.setItem("-1",(count-1).toString());
	return names;
}
function myfunctionlist(text_node,btn_name)
{
	if(count<10)
	{
		names=init(text_node);
		var btn = document.createElement("BUTTON");
		if(btn_name!=="")
		{
			btn.innerHTML=btn_name;
			names[count-2].name=btn_name;
		}
		else{
			btn.innerHTML=names[count-2].name;
		}
		
		btn.id=(count-2).toString();
		btn.addEventListener("click",function(){clicklistner(btn.id)});
		document.getElementById("mydiv").appendChild(btn);
	}
	else{
		alert('File capacity Full');
	}
}

function clicklistner(y)
{
	var x=parseInt(y);
	var node=document.getElementById("mytext");
	last_button_id=x;
	node.value=names[x].text;
	//setCookie((x).toString(), names[x].text, 0.015625);
	sessionStorage.setItem((x).toString(),names[x].text);
}
function textareachanged()
{
	var node=document.getElementById("mytext");
	names[last_button_id].text=node.value;
//	setCookie((last_button_id).toString(), names[last_button_id].text, 0.015625);
	sessionStorage.setItem((last_button_id).toString(),names[last_button_id].text);
}
// //******************************************************************************************************
function about_popup(){
	var cls =document.getElementsByClassName("close")[0];
	var cls2 =document.getElementsByClassName("close_btn")[0];
	cls.addEventListener("click",function(){close_popup()});
	cls2.addEventListener("click",function(){close_popup()});
	var mymodl=document.getElementById("my-modal");
	mymodl.setAttribute("style", "display:block;");
}
function close_popup()
{
	var mymodl=document.getElementById("my-modal");
	mymodl.setAttribute("style", "display:none;");
}
// Java script part for the codes display
//********************************************************************************************************
var codes=[]
function Code()
{
    this.text=""
}
function init_codes()
{
	var code1=new Code();
	var code2=new Code();
	var code3=new Code();
	code1.text="#Program to add two numbers"+"\n\n\t"+".data"+"\n\t"+"sum: .word 0"+"\n\n\t"+".text"+"\n\t"+"main:"+"\n\t"	+"li $t0, 10"+"\n\t"+"li $t1, 15"+"\n\t"+"add $t2, $t0, $t1 	# compute the sum"	+"\n\t"+"sw $t2, sum"
	code2.text="#Program to convert a string to int"+"\n\n"+".data"+"\n"+'string: .asciiz "13245"'+"\n"+"newline: .word 10"+"\n"+".text"+"\n"+"main:"+"\n\n"+"la $t0, string 				# Initialize S."+"\n"+"li $t2, 0 				# Initialize sum = 0."+"\n"+"lw $t5, newline"+"\n"+ "sum_loop:"+"\n\t"+"lb $t1, ($t0) 			# load the byte at addr S into $t1,"+"\n\t"+ "addu $t0, $t0, 1 		# and increment S."+"\n\t"+"beq $t1, $t5, end_sum_loop"+"\n\n\t"+"mul $t2, $t2, 10 		# t2 *= 10."+"\n\n\t"+"sub $t1, $t1, 48	 	# t1 -= '0'."+"\n\t"+"add $t2, $t2, $t1 		# t2 += t1."+"\n\n\t"+"b sum_loop # and repeat the loop."+"\n"+"end_sum_loop:"
	code3.text="#compute length of a string"+"\n\n"+".data"+"\n"+'string: .asciiz "This is a string"'+"\n"+"length: .word 0"+"\n\n"+".text"+"\n"+"la $t1, string"+"\n"+"li $t2, 0"+"\n"+"length_loop:"+"\n\t"+"lb $t3, ($t1)"+"\n\t"+"beqz $t3, endloop"+"\n\t"+"addu $t2, $t2, 1"+"\n\t"+"addu $t1, $t1, 1"+"\n\t"+"b length_loop"+"\n"+"endloop:"+"\n\t"+"sub $t2, $t2, 1		#subtract 1 to ignore \\0 "+"\n\t"+"sw $t2, length"
	codes.push(code1);
	codes.push(code2);
	codes.push(code3);
	return codes;
}
function codes_show(x){
	codes=init_codes();
	var node=document.getElementById("code_mytext");
	node.value=codes[x-1].text;
}

//Java script part for the codes copy to clipboard
//********************************************************************************************************
var copy_text_buffer="You haven't copy anything.This is default text";
function copy_code()
{
	var node=document.getElementById("code_mytext");
	node.select();
	copy_text_buffer=node.value;
	if(copy_text_buffer=="#Program to add two numbers"+"\n\n\t"+".data"+"\n\t"+"sum: .word 0"+"\n\n\t"+".text"+"\n\t"+"main:"+"\n\t"	+"li $t0, 10"+"\n\t"+"li $t1, 15"+"\n\t"+"add $t2, $t0, $t1 	# compute the sum"	+"\n\t"+"sw $t2, sum"
	){
		//setCookie("-2","1", 0.015625);
		sessionStorage.setItem("-2","1");
	}
	else if(copy_text_buffer=="#Program to convert a string to int"+"\n\n"+".data"+"\n"+'string: .asciiz "13245"'+"\n"+"newline: .word 10"+"\n"+".text"+"\n"+"main:"+"\n\n"+"la $t0, string 				# Initialize S."+"\n"+"li $t2, 0 				# Initialize sum = 0."+"\n"+"lw $t5, newline"+"\n"+ "sum_loop:"+"\n\t"+"lb $t1, ($t0) 			# load the byte at addr S into $t1,"+"\n\t"+ "addu $t0, $t0, 1 		# and increment S."+"\n\t"+"beq $t1, $t5, end_sum_loop"+"\n\n\t"+"mul $t2, $t2, 10 		# t2 *= 10."+"\n\n\t"+"sub $t1, $t1, 48	 	# t1 -= '0'."+"\n\t"+"add $t2, $t2, $t1 		# t2 += t1."+"\n\n\t"+"b sum_loop # and repeat the loop."+"\n"+"end_sum_loop:"
	){
		//setCookie("-2","2", 0.015625);
		sessionStorage.setItem("-2","2");
	}
	else if(copy_text_buffer="#compute length of a string"+"\n\n"+".data"+"\n"+'string: .asciiz "This is a string"'+"\n"+"length: .word 0"+"\n\n"+".text"+"\n"+"la $t1, string"+"\n"+"li $t2, 0"+"\n"+"length_loop:"+"\n\t"+"lb $t3, ($t1)"+"\n\t"+"beqz $t3, endloop"+"\n\t"+"addu $t2, $t2, 1"+"\n\t"+"addu $t1, $t1, 1"+"\n\t"+"b length_loop"+"\n"+"endloop:"+"\n\t"+"sub $t2, $t2, 1		#subtract 1 to ignore \\0 "+"\n\t"+"sw $t2, length"
	){
		//setCookie("-2","3", 0.015625);
		sessionStorage.setItem("-2","3");
	}
	document.execCommand("copy");

}
function selectAll()
{
	var node=document.getElementById("mytext");
	node.select();
	document.execCommand("copy");
	alert("Text Copied");
}


function getSelectedText(el) {
    if (typeof el.selectionStart == "number") {
        return el.value.slice(el.selectionStart, el.selectionEnd);
    } else if (typeof document.selection != "undefined") {
        var range = document.selection.createRange();
        if (range.parentElement() == el) {
            return range.text;
        }
    }
    return "";
}
function paste()
{
	var el=document.getElementById("mytext");
	typeInTextarea(el,copy_text_buffer);
	textareachanged();
}
function typeInTextarea(el, newText) {
	var start = el.selectionStart
	var end = el.selectionEnd
	var text = el.value
	var before = text.substring(0, start)
	var after  = text.substring(end, text.length)
	el.value = (before + newText + after)
	el.selectionStart = el.selectionEnd = start + newText.length
	el.focus()
  }
function copy()
{
	var el=document.getElementById("mytext");
	copy_text_buffer=getSelectedText(el);

}
function cut()
{
	var el=document.getElementById("mytext");
	copy_text_buffer=getSelectedText(el);
	removeOutTextarea(el,copy_text_buffer);
}
function removeOutTextarea(el, removeText) {
	var start = el.selectionStart
	var end = el.selectionEnd
	var text = el.value
	var before = text.substring(0, start)
	var after  = text.substring(end, text.length)
	el.value = (before + after)
	el.focus()
  }
function saveAs_function()
{
	var node=document.getElementById("mytext");
	var txt=node.value;
	var filename=names[last_button_id].name;
	var blob=new Blob([txt], {type: "text/x-asm;charset=utf-8"});
	saveAs(blob,filename);
}
function close_fun() {
	if(last_button_id!==-1)
	{
		var node=document.getElementById((last_button_id).toString());
		var parent=node.parentNode;
		parent.removeChild(node);
		alert("Closed file will gets restoredn\nOnce you refresh the page or reload it!");
	}
	else{
		alert("No file to close!");
	}
	
}
function closeAll_fun()
{
	if(count!==1)
	{
		var node=document.getElementById("mydiv");
		while (node.hasChildNodes()) {  
			node.removeChild(node.firstChild);
		  } 
		alert("Closed files will gets restored\n Once you refresh the page or reload it!");
	}
	else{
		alert("No file to close!");
	}
}

function open_window()
{
	var fileinp=document.getElementById("inp_file");
	if(fileinp)
	{
		fileinp.click();
	}
}
function setinputfileintextarea()
{
		var fileinp=document.getElementById("inp_file");
		var files=fileinp.files;
	 	var file=files.item(0);
		var reader = new FileReader();
		var contents;
		reader.onload=function (event)
		{
			contents=event.target.result;
			myfunctionlist(contents,file.name);
			user_file_counter++;
			//setCookie("-100",(user_file_counter).toString(), 0.015625);
			//setCookie((user_file_index).toString(),(count-2).toString(), 0.015625);//storing the cout at which user has opened a local file
			sessionStorage.setItem("-100",(user_file_counter).toString());
			sessionStorage.setItem((user_file_index).toString(),(count-2).toString());
			user_file_index--;
			//setCookie((user_file_index).toString(),file.name, 0.015625); //storing the name of user file to load again properly
			sessionStorage.setItem((user_file_index).toString(),file.name);
			user_file_index--;
		};
		reader.onerror = function(event) {
			alert("File could not be read! Code " + event.target.error.code);
		};
		reader.readAsText(file);
	
}  


function exit_Window() {
	alert("Functionality not implemented\nWe can only close that window which was opened by javascript");
  }
//********************************************************************************************* */
//Undo and Redo fucntionality
// var stack=[]
// var stacktop=-1;	//current index of stack
// var undo_redo_counter=0;
// //adding the inital entry
// var node_init=document.createElement("TEXTAREA");
// var text_init = document.createTextNode("");
// node_init.appendChild(text_init);
// stack.push(node);
// stacktop++;

// function addInStack()
// {
// 	var el=document.getElementById("mytext");
// 	stacktop+=1;
// 	stack.push(el);
// }
function undo_fun()
{
	alert("Functionality not implemented");
}
function redo_fun()
{
	alert("Functionality not implemented");
}
//******************************************************************************************************** */
//Using cokkie to retrive the data of file

// function setCookie(cname,cvalue,exdays) {
// 	var d = new Date();
// 	d.setTime(d.getTime() + (exdays*24*60*60*1000));
// 	var expires = "expires=" + d.toGMTString();
// 	document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
// }
  
// function getCookie(cname) {
// 	var name = cname + "=";
// 	var decodedCookie = decodeURIComponent(document.cookie);
// 	var ca = decodedCookie.split(';');
// 	for(var i = 0; i < ca.length; i++) {
// 	  var c = ca[i];
// 	  // alert("String stored is-:"+c);
// 	  while (c.charAt(0) == ' ') {
// 		c = c.substring(1);
// 	  }
// 	  if (c.indexOf(name) == 0) {
// 		return c.substring(name.length, c.length);
// 	  }
// 	}
// 	return "";
// }