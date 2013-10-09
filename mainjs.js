var app=angular.module('myApp',[]);

//function myController($scope, $http)
//{
//$scope.custSort="name";
//$http.get('data.json').success(function(dat)
//{
//$scope.data = dat;	
//});}

function myController($scope)
{
$scope.custSort="name";
$scope.data={message:[
{name:'besharam',
review:"Remote control Ranbir is here. He can change your mood with a flick of an emotion. Laughter, tears, joy and palang tod romeo-giri."+ 
"Bedazzling the eyes with baubles, goggles and padded crotches. Yes, he packs in this 'bulge' with besharmi and fearlessness.",
image:'besharam.jpg',
rating:'3.5'},
{name:'grand masti',
review:"Mark this moment. This is the moment when Bollywood breaks free. 'Grand Masti' is unabashedly gross, vulgar, crass, shameless and "+
"fearlessly adult. But for a moment one has to step back from the noise of dissent - from the guardians of Indian culture and their"+
" histrionic fatwas - and ask yourself one simple question: Who are we to choose for others?", 
image:'grand masti.jpg',
rating:'2.5'},
{name:'hata poster nikla hero',
review:"This movie is a mix of comedy & drama. Shahid did justice to such a role- charismatic switching from comedy to drama. Immaculate job there."+
" But the story line lacks humor though it will make you laugh in-between. Loved watching it. But do not keep high expectations.", 
image:'hata poster.jpg',
rating:'3.5'},
{name:'john day',
review:"Inspired by 'Box 507' (Spain, 2002), 'John Day' is a slow, cumbersome watch that takes too much time to tell too little."+
" The story is of two diametrically different men, one an honest bank manager John Day ( Naseeruddin Shah) and the other a depraved cop (Randeep Hooda)"+
" with intense backstories that bring them head-to-head in an unforeseen clash that consumes their individualities.", 
image:'john day.jpg',
rating:'3.5'},
{name:'the lunchbox',
review:"Like a tiffin carrier, The Lunchbox has levels - it is the story of a man so lonely, he's forgotten what any companionship means."
+" It is the story of a suburban housewife, deeply alone. It is the story of meeting via eating. It is a love-story - and a love-letter to Mumbai,"+
" to trains that go dhak-dhak, to dabbawalas and rain, to love and life, sugar and spice, the despair and hope that mark every heart.", 
image:'lunchbox.jpg',
rating:'4.5'}]};

}// JavaScript Document