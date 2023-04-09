const day = prompt("What day is it today? ");

switch(day) {
    case 'monday':
        console.log("Red dresscode");
        break;
    case 'tuesday':
        console.log("Orange dresscode");
        break;
    case 'wednesday':
        console.log("Yellow dresscode");
        break;
    case 'thursday':
        console.log("Green dresscode");
        break;
    case 'friday':
        console.log("Blue dresscode");
        break;
    case 'saturday':
        console.log("Purple or Pink dresscode");
        break;
    case 'sunday':
        console.log("Violet dresscode");
        break;
    default:
        console.log("Not a valid day!");
}