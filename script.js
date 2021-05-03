function displayAddress() {

	var name=document.getElementById("name").value;

	var st =document.getElementById("street").value;
  var digits = /^[0-9]+$/;
    if(name.length===0 && st.length===0)
    {
        document.getElementById("msg").innerHTML = "All fields are empty";
    }
		else if(name.length===0)
		{
			document.getElementById("msg").innerHTML = "Name field is empty";
		}
		else if(st.length===0)
		{
			document.getElementById("msg").innerHTML = "Number field is empty";
		}
		else {
			if(st.match(digits))
	    {
				if(st>=0)
				{
					var ans=1;
		      for(var i=1;i<=st;i++)
		      {
		        ans=ans*i;
		      }
		        document.getElementById("msg").innerHTML = "Hello "+name +" the answer is : "+ans;
				}
	      else {
	      	document.getElementById("msg").innerHTML = "Hello "+name +" factorial cannot be done for negative value";
	      }
	    }
			else {
				document.getElementById("msg").innerHTML = "Hello "+name +" enter a number ";
			}
		}

   

}
