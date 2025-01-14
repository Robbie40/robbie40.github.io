
export default [
    //Resources
    {
        name: 'Wood',
        on: true,
        numOfResource: 0,
        requirements: 'None',
        requiredWood: 0,
        requiredStone: 0,
        requiredFood: 0,
        requiredPopulation: 0,
        hasRequiredWood: true,
        hasRequiredStone: true,
        hasRequiredFood: true,
        hasRequiredPopulation: true
    },
    {
        name: 'Stone',
        on: false,
        numOfResource: 0,
        requirements: 'Stone Mine',
        requiredWood: 0,
        requiredStone: 0,
        requiredFood: 0,
        requiredPopulation: 0,
        hasRequiredWood: true,
        hasRequiredStone: true,
        hasRequiredFood: true,
        hasRequiredPopulation: true
    },
    {
        name: 'Food',
        on: false,
        numOfResource: 0,
        requirements: 'Field',
        requiredWood: 0,
        requiredStone: 0,
        requiredFood: 0,
        requiredPopulation: 0,
        hasRequiredWood: true,
        hasRequiredStone: true,
        hasRequiredFood: true,
        hasRequiredPopulation: true
    },
    {
        name: 'Population',
        on: false,
        numOfResource: 0,
        requirements: 'House',
        requiredWood: 0,
        requiredStone: 0,
        requiredFood: 0,
        requiredPopulation: 0,
        hasRequiredWood: true,
        hasRequiredStone: true,
        hasRequiredFood: true,
        hasRequiredPopulation: true
    },
    //Buildings
    {
        name: 'House',
        on: false,
        numOfResource: 0,
        requirements: '10 Wood',
        requiredWood: 10,
        requiredStone: 0,
        requiredFood: 0,
        requiredPopulation: 0,
        hasRequiredWood: false,
        hasRequiredStone: false,
        hasRequiredFood: false,
        hasRequiredPopulation: false
    },
    {
        name: 'Sawmill',
        on: false,
        numOfResource: 0,
        requirements: '15 Wood 5 Population',
        requiredWood: 15,
        requiredStone: 0,
        requiredFood: 0,
        requiredPopulation: 5,
        hasRequiredWood: false,
        hasRequiredStone: false,
        hasRequiredFood: false,
        hasRequiredPopulation: false
    },
    {
        name: 'Field',
        on: false,
        numOfResource: 0,
        requirements: '20 Wood 5 Population',
        requiredWood: 20,
        requiredStone: 0,
        requiredFood: 0,
        requiredPopulation: 5,
        hasRequiredWood: false,
        hasRequiredStone: false,
        hasRequiredFood: false,
        hasRequiredPopulation: false
    },
    {
        name: 'Stone Mine',
        on: false,
        numOfResource: 0,
        requirements: '25 Wood 5 Population',
        requiredWood: 25,
        requiredStone: 0,
        requiredFood: 0,
        requiredPopulation: 5,
        hasRequiredWood: false,
        hasRequiredStone: false,
        hasRequiredFood: false,
        hasRequiredPopulation: false
    },
]