//this function creates  random habilities and returns an array of results
function randomHabilities()
{
	
	const hard_skills = ['Billigual','Stadistics analisys','Storage systems and management','Network security'];
	const soft_skills = ['Integrity','Creativity','Empathy','Critical thinking'];
	
	const result = [];
	
	 result[0] = hard_skills[Math.floor(Math.random() * 3)];
	 result[1] =  soft_skills[Math.floor(Math.random() * 3)];
	
	return result;
	
	
}
//this function creates random exps and returns an array of results
function randomExp()
{
	
	const exp = ['Junior developer on Static Studios','Senior account manager on Joseph Brothers','Junior data scientist on Zoologic'];
	
	const result = [];
	
	result[0] = exp[Math.floor(Math.random() * 2)];
	
	return result;
	
	
}
//this function saves the cv on localstorage
function saveCV(data)
{
	
	localStorage.setItem('first_name', data.results[0].name.first);
	
	localStorage.setItem('last_name', data.results[0].name.last);
	
	localStorage.setItem('age', data.results[0].dob.age);
	
	localStorage.setItem('phone', data.results[0].phone);
	
	localStorage.setItem('email', data.results[0].email);
	
	localStorage.setItem('country', data.results[0].location.country);
	
	localStorage.setItem('Nationality', data.results[0].nat);
	
	localStorage.setItem('hard', document.getElementById('hard').innerHTML);
	
	localStorage.setItem('soft', document.getElementById('soft').innerHTML);
	
	localStorage.setItem('exp', document.getElementById('exp').innerHTML);
	
	localStorage.setItem('picture', data.results[0].picture.large);
	
	
	
	
	
	
}

function getData()
{
	
	$.ajax({
	type: 'GET',
	  url: 'https://randomuser.me/api/?exc=login,registered',
	  dataType: 'json',
	  success: function(data) {
		
			//profile picture
			$('#img_profile').attr('src',data.results[0].picture.large);
		
			
			//assign personal data
			document.getElementById('phone').innerHTML = "Phone: " + data.results[0].phone;
			document.getElementById('age').innerHTML = "Age: " + data.results[0].dob.age;
			document.getElementById('name').innerHTML = "Name: " + data.results[0].name.first +" "+ data.results[0].name.last;
			document.getElementById('set_email').innerHTML =  data.results[0].email;
			document.getElementById('country').innerHTML = "Country: " + data.results[0].location.country;
			document.getElementById('nat').innerHTML = "Nationality: " + data.results[0].nat;
			
			
			var skills =  randomHabilities(); 
			//assign skills
			document.getElementById('hard').innerHTML =  skills[0];
			document.getElementById('soft').innerHTML =  skills[1];
			
			var exp  = randomExp();
			//assign exp
			document.getElementById('exp').innerHTML =  exp[0];
			
			
				
			//save CV
			
			$('#save').click(function(e)
			{
				
				saveCV(data);
				location.reload();
				
				
				
			});
			
			
	
		}
		
	});





}



 //load animation
$(window).on('load', function () {
      $( "#main_container" ).fadeOut( 0);
 });

 

$(document).ready(function()
{
	//on load index
	 if(screen.width>600)
			{
				$('#img_profile').attr('class','img-thumbnail  ms-3 me-3 shadow-lg p-3 mb-5 bg-body rounded  float-end');
			}
			 if(screen.width<=600)
				$('#img_profile').attr('class','img-thumbnail ms-3 me-3 shadow-lg p-3 mb-5 bg-body rounded  float-start');
	
	//if user resize
	$( window ).bind("resize", function(){
		   if(screen.width>600)
			{
				$('#img_profile').attr('class','img-thumbnail  ms-3 me-3 shadow-lg p-3 mb-5 bg-body rounded  float-end');
			}
			 if(screen.width<=600)
				$('#img_profile').attr('class','img-thumbnail ms-3 me-3 shadow-lg p-3 mb-5 bg-body rounded  float-start');
   
	});
	
	
	//show body when document ready
	 $( "#main_container" ).fadeIn( 1000);

	
	//initialize tooltips
	var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
	var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
	return new bootstrap.Tooltip(tooltipTriggerEl)
	})
	
		//if cv are not saved, save button arent disabled and user can keep changing the cv's
		if(localStorage.getItem('first_name')==null)
		{
			$('#reload').attr('disabled');
			$('#save').removeAttr('disabled');
		}
			
			
		
			
		//if cv are saved, we ask for data on localstorage
		if(localStorage.getItem('first_name')!=null)
		{
			$('#reload').attr('disabled',true);
			
			
			
			$('#img_profile').attr('src',localStorage.getItem('picture'));
			
			document.getElementById('phone').innerHTML = "Phone: " + localStorage.getItem('phone');
			document.getElementById('age').innerHTML = "Age: " + localStorage.getItem('age');
			document.getElementById('name').innerHTML = "Name: " + localStorage.getItem('first_name'); +" "+ localStorage.getItem('last_name');
			document.getElementById('set_email').innerHTML = localStorage.getItem('email');
			document.getElementById('country').innerHTML = "Country: " + localStorage.getItem('country');
			document.getElementById('nat').innerHTML = "Nationality: " + localStorage.getItem('Nationality');
			
			
			
			//assign education
			document.getElementById('hard').innerHTML = localStorage.getItem('hard');
			document.getElementById('soft').innerHTML =  localStorage.getItem('soft');
			
			
			//assign exp
			document.getElementById('exp').innerHTML =  localStorage.getItem('exp');
			
			
			
		}
		//we get data from server, because there is no local data
		else
			getData();
	
	
	
	
			//new CV
			$('#reload').click(function(e)
			{
				
				location.reload();
				
				
			});
		
			
			
			//erase localdata
			if(localStorage.getItem('first_name')!=null)
			{
					
					$('#erase').removeAttr('disabled');
				
					$('#erase').click(function(e)
					{
						
						
						localStorage.clear();
						location.reload();
				
						
						
					});
			
				
			}
			
			
			
		
		
			
			
});
			
			
		
		
	  
	
	

	
	
	
	
	
	
	
