const randomCard = () => {
    const card = ['Jack', 'Queen', 'King', 'Ace'];
    const randomValue = Math.floor(Math.random() * 4);
    return card[randomValue]; 
}

module.exports = randomCard;