function buildYourOwnTransport(transport){
    var passengerNumber = 0;
    function closeTransport(name){
        passengerNumber++;
        alert("This is your transportation ticket using :: "+ transport + " Welcome to using closure :: "+ name + 
        "You are passenger number "+passengerNumber);
    }
    return closeTransport;
}


var getMyFirstTicket = buildYourOwnTransport("Airlines");

getMyFirstTicket("Vikrant");
getMyFirstTicket("John");
