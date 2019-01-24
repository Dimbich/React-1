let employers = ['Alex', '', 'ludmila', 'Viktor', '', 'oleg', 'iNna', 'Ivan', 'Alex', 'Olga', ' Ann'];

let employersNames = employers.filter( (name) => {
    return (name.length > 0 && name.length != '')
}).map(item => item.toLowerCase().trim());


//employersNames = employersNames.map((item) => item.toLowerCase().trim())



let sponsors = {
    cash: [40000, 5000, 30400, 12000],
    eu: ['SRL', 'PLO', 'J&K'],
    rus: ['RusAuto', 'SBO']
};

const {cash, eu, rus} = sponsors

function calcCash(own,everyCash) {
    console.log(everyCash);
    let total = everyCash.reduce(function(sum,current){
        console.log(sum+current);
        
        return sum + current;
    }, own);
    return total;
}

let money = calcCash(null,cash);
console.log(money)

makeBusiness = ({
    owner = 'Sam', 
    director = 'Victor', 
    money = 0, 
    emp}) => {
    
    let sumSponsors = [...eu, ...rus, 'unexpected sponsor'];
    
    console.log(`We have a business. Owner: ${owner}, director: ${director}. Our budget: ${money}. And our employers: ${emp}`);
    console.log('And we have a sponsors: ');
    console.log(...sumSponsors);
    console.log(`Note. Be careful with ${eu[0]}. It's a huge risk.`);
}
makeBusiness({
    owner: 'Sam', 
    money,
    emp: employersNames});