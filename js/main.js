let passengers = [
	{
		id:1,
		passangerName:"Freddie Mercury",
		isVegetarianOrVegan:false,
		connectedFlights:2,
	},
	{
		id:2,
		passangerName:"Amy Winehouse",
		isVegetarianOrVegan:true,
		connectedFlights:4,
	},
	{
		id:3,
		passangerName:"Kurt Cobain",
		isVegetarianOrVegan:true,
		connectedFlights:3,
	},
	{
		id:3,
		passangerName:"Michael Jackson",
		isVegetarianOrVegan:true,
		connectedFlights:1,
	},
];

let name =[];
for(i=0;i<passengers.length;i++){
	name.push(passengers[i].passangerName)
}
console.log(name);

let vname = [];
for(i=0;i<passengers.length;i++){
	if(passengers[i].isVegetarianOrVegan){
		vname.push(passengers[i].passangerName)	
	}
}
console.log(vname);

let des = passengers.sort((p1,p2)=>
	p2.connectedFlights - p1.connectedFlights
);
console.log(des)