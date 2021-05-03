function displayAddress() {

	var name=document.getElementById("name").value;

	var street =document.getElementById("street").value;// Fill your code to get the street element - by id "street" and store it in the variable "street"
 // Fill your code to get the city element - by id "city" and store it in the variable "city"
  var digits = /^[0-9]+$/;
    if(name.length===0 && street.length===0)
    {
        document.getElementById("msg").innerHTML = "All fields are empty";
    }
		else if(name.length===0)
		{
			document.getElementById("msg").innerHTML = "Name field is empty";
		}
		else if(street.length===0)
		{
			document.getElementById("msg").innerHTML = "Number field is empty";
		}
		else {
			if(street.match(digits))
	    {
				if(street>0)
				{
					var ans=1;
		      for(var i=1;i<=street;i++)
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

    // HINT: use the above "name" as sample to get "street" and "city"

    // Fill your code here

    // if 'name' or 'street' or 'city' is empty then display error message using => document.getElementById("msg").innerHTML = "Address cannot be empty";

    // if 'name' or 'street' or 'city' is not empty then display the address using => document.getElementById("msg").innerHTML = name +" "+street+ " "+city;


}
