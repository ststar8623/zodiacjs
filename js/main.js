var zodiac = [
	{
		sign: "aquarius",
		fortune: "Knowledge, Humanitarian, Serious, Insightful, Duplicitous",
		image: "img/aquarius.jpg"
	},
	{
		sign: "aries",
		fortune: "Active, Demanding, Determined, Effective, Ambitious",
		image: "img/aries.jpg"
	},
	{
		sign: "cancer",
		fortune: "Emotion, Diplomatic, Intensity, Impulsive, Selective",
		image: "img/cancer.jpg"
	},
	{
		sign: "capricorn",
		fortune: "Determination, Dominance, Perservering, Practical, Willful",
		image: "img/capricorn.jpg"
	},
	{
		sign: "gemini",
		fortune: "Communication, Indecision, Inquisitive, Intelligent, Changeable",
		image: "img/gemini.jpg"
	},
	{
		sign: "leo",
		fortune: "Ruling, Warmth, Generosity, Faithful, Initiative",
		image: "img/leo.jpg"
	},
	{
		sign: "libra",
		fortune: "Balance, Justice, Truth, Beauty, Perfection",
		image: "img/libra.jpg"
	},
	{
		sign: "pisces",
		fortune: "Fluctuation, Depth, Imagination, Reactive, Indecisive",
		image: "img/pisces.jpg"
	},
	{
		sign: "sagittarius",
		fortune: "Philosophical, Motion, Experimentation, Optimism",
		image: "img/sagittarius.jpg"
	},
	{
		sign: "scorpio",
		fortune: "Transient, Self-Willed, Purposeful, Unyielding",
		image: "img/scorpio.jpg"
	},
	{
		sign: "taurus",
		fortune: "	Security, Subtle strength, Appreciation, Instruction, Patience",
		image: "img/taurus.jpg"
	},
	{
		sign: "virgo",
		fortune: "Analyzing, Practical, Reflective, Observation, Thoughtful",
		image: "img/virgo.jpg"
	}
]

function horoscope(){
	var sign = document.getElementById("sign").value.toLowerCase()

	for(i=0; i < zodiac.length; i++){
		if(sign === zodiac[i].sign){
			document.getElementById("yourSign").innerHTML = zodiac[i].sign.toUpperCase()
			document.getElementById("icon").src = zodiac[i].image
			return
		} else {
			document.getElementById("yourSign").innerHTML = sign + " is not one of the signs. Try again!"
			document.getElementById("icon").src = ""
			document.getElementById("yourHoroscope").innerHTML = ""
		}
	}
}

// set functions for id="icon"
document.getElementById("icon").onmouseover = function() {mouseOver()};
document.getElementById("icon").onmouseout = function() {mouseOut()};

// fortune display when mouse move over on the zodiac picture
function mouseOver(){
	document.getElementById("yourSign").innerHTML = "You're best attributes are: " + zodiac[i].fortune
	
}

// zodiac picture and fortune disappear when mouse move out from the picture
function mouseOut(){
	document.getElementById("yourSign").innerHTML = "Try another one!"
	document.getElementById("icon").src = ""
}