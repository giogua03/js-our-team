
const gruppo = [
	{
		img:'wayne-barnett-founder-ceo.jpg',
        name:'Wayne Barnett',
		professione:'Founder & CEO',
	},
	{
        img:'angela-caroll-chief-editor.jpg',
		name: 'Angela Carroll',
		professione:'Chief Editor',
	},
	{
        img:'walter-gordon-office-manager.jpg',
		name: 'Walter Gordon',
		professione: 'Office Manager',
	},
    {
        img:'angela-lopez-social-media-manager.jpg',
		name: 'Angela Lopez',
		professione:'Social Media Manager' ,
	},
	{
        img:'scott-estrada-developer.jpg',
		name: 'Scott Estrada',
		professione:'Developer',
	},
	{
        img:'barbara-ramos-graphic-designer.jpg',
		name: 'Barbara Ramos',
		professione:'Graphic Designer' ,
	}
]
console.log(gruppo);

const eleSquares = document.querySelector('.squares');
for (let i = 0; i<gruppo.length; i++){
    eleSquares.innerHTML += `<div class="sq"><img src="img/${gruppo[i].img}"><h4>${gruppo[i].name}</h4> <span>${gruppo[i].professione}</span>  </div>`
    
}
