const categories = [
        'A la une',
        'Sport',
        'Politique',
        'Effets diverts',
        'Santé',
        'Technologie'
    ];
const validate = (cat) => {
return categories.includes(cat)
    
}


module.exports = {
    validate,
    categories
};


