function geekshubs(index) {
    
    let item = "";

    for (let i = 1;  i <= index; i ++) {
        
        if ( i % 15 == 0) {
            item += "GeeksHubs\n";
        } 
        else if ( i % 5 == 0) {
            item += "Hubs\n";
        } 
        else if ( i % 3 == 0) {
            item += "Geeks\n";
        } 
        else {
            item += i + "\n";
        }
        
    }

    return item;
}

module.exports = geekshubs;
