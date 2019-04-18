// List of References--
	// https://stackoverflow.com/questions/21813122/changing-content-of-class-using-javascript
	// https://stackoverflow.com/questions/19745034/javascript-how-to-change-a-button-to-another-button
	// https://stackoverflow.com/questions/5303899/change-onclick-action-with-a-javascript-function
	// https://stackoverflow.com/questions/13266746/scroll-jump-to-id-without-jquery


// SCROLLING: https://stackoverflow.com/questions/13266746/scroll-jump-to-id-without-jquery
// homepage
function readMore()
{
	document.getElementById("first-game").scrollIntoView({behavior: 'smooth'});
}
// startGame page 
function toInstructions()
{
	document.getElementById("instructions").scrollIntoView({behavior: 'smooth'});
}

// INITIAL BUTTON FUNCTIONS -- option_1() & option_2()
// OPTION 1
function option_1()
{
	// scrolling to top when user clicks an option
	document.getElementById("navbar").scrollIntoView({behavior: 'smooth'});

	// changing the functions of the buttons to child functions
			// https://stackoverflow.com/questions/19745034/javascript-how-to-change-a-button-to-another-button
	document.getElementById("option_1").onclick = option_1_1;
	document.getElementById("option_2").onclick = option_1_2;

	// REPLACING CONTENT OF CLASSES
		// https://stackoverflow.com/questions/21813122/changing-content-of-class-using-javascript
	// h1
	x = document.getElementsByClassName("h1_scenario");
    for(var i = 0; i < x.length; i++)
    {
    	x[i].innerText="Justo liberavisse nam cu...";   
    }
    // p1
    x = document.getElementsByClassName("p1_scenario");
    for(var i = 0; i < x.length; i++)
    {
    	x[i].innerText="Justo liberavisse nam cu, quo nonumy similique ea. Eum et corpora invidunt, mollis nominati qualisque duo in, eos exerci virtute patrioque ex. Ei mel commodo denique, id eam illud affert aliquip. Denique ullamcorper in vel, laudem timeam vel et. Duo no hinc tamquam, ne his aeterno adipisci. Harum labore platonem vim ea, ex duo soluta lucilius sententiae.";   
    }
    // p2
    x = document.getElementsByClassName("p2_scenario");
    for(var i = 0; i < x.length; i++)
    {
    	x[i].innerText="No zril vocibus vix. Ipsum recteque constituam mei ad. Sit deserunt accusata repudiare id. Porro assum ne est. Cu his alia virtute inciderint, in eam platonem iracundia.";   
    }
    // p3
    x = document.getElementsByClassName("p3_scenario");
    for(var i = 0; i < x.length; i++)
    {
    	x[i].innerText="Usu an modus accumsan, vero vulputate nec an. Nam affert tacimates dissentiet ad. Eu nec graece audire sensibus, dolore putant intellegat vim eu, appetere ponderum interesset vim ut. Cum in melius appetere, pro minimum placerat democritum ei. Ei labore mnesarchum sea. Ne aeque audiam prompta usu, nec ne aliquid habemus....";   
    }
}
// OPTION 2
function option_2()
{
	x = document.getElementsByClassName("result-h1");
    for(var i = 0; i < x.length; i++)
    {
    	x[i].innerText="Hmm, Id qui repudiandae delicatissimi...";   
    }
    // p1
    x = document.getElementsByClassName("result-p1");
    for(var i = 0; i < x.length; i++)
    {
    	x[i].innerText="Id qui repudiandae delicatissimi, nominati petentium assentior vel id, has detracto concludaturque ne. Vim probatus antiopam neglegentur ea. Duo te autem ignota vulputate. ";   
    }
    // removing the buttons
    document.getElementById("option_1").style.display = 'none';
    document.getElementById("option_2").style.display = 'none';
    // removing the scenario
    document.getElementById("scenario").style.display = 'none';
    // displaying the result
    document.getElementById("user-result").style.display = 'flex';
}

// CHILDREN OF OPTION 1
// OPTION 1.1
function option_1_1()
{
	// REPLACING CONTENT OF RESULT 
	// h1
	x = document.getElementsByClassName("result-h1");
    for(var i = 0; i < x.length; i++)
    {
    	x[i].innerText="Te aliquam mentitum sapientem per...";   
    }
    // p1
    x = document.getElementsByClassName("result-p1");
    for(var i = 0; i < x.length; i++)
    {
    	x[i].innerText="Te aliquam mentitum sapientem per, vel vero labitur assentior at. Eligendi constituam te duo. An cetero eleifend mel. Quando admodum apeirian cum ne, malorum propriae et mel.";   
    }
    // removing the buttons
    document.getElementById("option_1").style.display = 'none';
    document.getElementById("option_2").style.display = 'none';
    // removing the scenario
    document.getElementById("scenario").style.display = 'none';
    // displaying the result
    document.getElementById("user-result").style.display = 'flex';	
}
// OPTION 1.2
function option_1_2()
{
	document.getElementById("navbar").scrollIntoView({behavior: 'smooth'});

	// changing the functions of the buttons to child functions
	document.getElementById("option_1").setAttribute( "onClick", "javascript: option_1_2_1();" );
	document.getElementById("option_2").setAttribute( "onClick", "javascript: option_1_2_2();" );

	// REPLACING CONTENT OF CLASSES
	// h1
	x = document.getElementsByClassName("h1_scenario");  
    for(var i = 0; i < x.length; i++)
    {
    	x[i].innerText="Error recusabo et vim...";   
    }
    // p1
    x = document.getElementsByClassName("p1_scenario");  
    for(var i = 0; i < x.length; i++)
    {
    	x[i].innerText="Error recusabo et vim, eam ad alia nostro tacimates. Pro id putant moderatius delicatissimi, pro cu quot nostrum, libris integre recteque in qui. Vix volutpat expetenda comprehensam ex, eu vix omnis facete antiopam, impetus nusquam te nam. Sea id meis legere, vocibus iudicabit te nam.'";   
    }
    // p2
    x = document.getElementsByClassName("p2_scenario");  
    for(var i = 0; i < x.length; i++)
    {
    	x[i].innerText="Debet necessitatibus ea qui, latine facilis partiendo pro cu. Sit ei ponderum philosophia, quas graeci ut eos, quis oporteat quo ea. Vim an wisi salutandi concludaturque, sit at suas denique. Ut cum illud inciderint. Ut nec electram comprehensam. Nihil oblique has ei, duo ei ignota expetendis contentiones.";   
    }
    // p3
    x = document.getElementsByClassName("p3_scenario");  
    for(var i = 0; i < x.length; i++)
    {
    	x[i].innerText="Pro verear epicuri sapientem ad, sed mucius mollis voluptatibus ad. His ei elitr eleifend accusamus, et vix nulla meliore iudicabit, mel congue luptatum ut. Noster tibique concludaturque ne vix, utamur salutandi ad pri. Vis in ludus concludaturque. Saperet definitiones ea mei, et nostrum fabellas aliquando vel. Eu error feugait necessitatibus eum, duo verear platonem te...";   
    }
}

// CHILDREN OF OPTION 1.2
// OPTION 1.2.1
function option_1_2_1()
{
	// REPLACING CONTENT OF RESULT 
	// h1
	x = document.getElementsByClassName("result-h1");
    for(var i = 0; i < x.length; i++)
    {
    	x[i].innerText="Vis eu oblique indoctum...";   
    }
    // p1
    x = document.getElementsByClassName("result-p1");
    for(var i = 0; i < x.length; i++)
    {
    	x[i].innerText="Vis eu oblique indoctum. Brute legere signiferumque te nam, ad dicat facilis pri. Mel te natum ridens molestiae. Brute munere expetenda pro ad. Ad zril conceptam qui, vix an corpora sensibus.";   
    }
    // removing the buttons
    document.getElementById("option_1").style.display = 'none';
    document.getElementById("option_2").style.display = 'none';
    // removing the scenario
    document.getElementById("scenario").style.display = 'none';
    // displaying the result
    document.getElementById("user-result").style.display = 'flex';
}
// OPTION 1.2.2
function option_1_2_2()
{
	// REPLACING CONTENT OF RESULT 
	// h1
	x = document.getElementsByClassName("result-h1");
    for(var i = 0; i < x.length; i++)
    {
    	x[i].innerText="Per modo hendrerit democritum ad!";   
    }
    // p1
    x = document.getElementsByClassName("result-p1");
    for(var i = 0; i < x.length; i++)
    {
    	x[i].innerText="Per modo hendrerit democritum ad, pro purto error semper ad. Ei mel nulla scaevola maiestatis. Eum ne diam quidam phaedrum. Eam eu tation scripta inermis, debet graece equidem his id, quo tollit dignissim at.";   
    }
    // removing the buttons
    document.getElementById("option_1").style.display = 'none';
    document.getElementById("option_2").style.display = 'none';
    // removing the scenario
    document.getElementById("scenario").style.display = 'none';
    // displaying the result
    document.getElementById("user-result").style.display = 'flex';	
}