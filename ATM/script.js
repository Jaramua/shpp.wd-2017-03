var ATM = {
    is_auth: false,
    current_user:false,
    current_type:false,
    // all cash of ATM
    cash: 2000,
    // all available users
    users: [
        {number: "0000", pin: "000", debet: 0, type: "admin"}, // EXTENDED
        {number: "0025", pin: "123", debet: 675, type: "user"}
    ],
    // authorization
    auth: function(number, pin) {
        if (this.users[1]['number'] !== "0025" && this.users[1]['pin'] !== "123") {
            this.current_user == false;
            console.log('Could not authorizate');
        } else {
            this.current_type == "user";
            this.current_user == true;
            this.is_auth == true;
            console.log('welcome');
        }

        if (this.users[0]['number'] !== "0000" && this.users[0]['pin'] !== "000") {
            this.current_user == false;
            console.log('Could not authorizate');
        } else {
            this.current_type == "admin";
            this.current_user == true;
            this.is_auth == true;
            console.log('welcome');
        }

    },
    // check current debet
    check: function() {
        if (this.is_auth){
          console.log(users['debet']);
        }
    },
    // get cash - available for user only
    getCash: function(amount) {
        if (this.is_auth){
            users['debet'] = users['debet'] - amount;
            if (cash < amount) {
               console.log("Sorry, ATM has only " + cash + " deneg");
            }
            if (users['debet'] < amount) {
               console.log("Sorry, you have only " + users['debet'] + " deneg");
            }
        }
    },
    // load cash - available for user only
    loadCash: function(amount){
        if(this.is_auth) {
            users['debet'] = users['debet'] + amount;
            console.log("Cash in amount of " + amount + "id added to your account");
        }
    },
    // load cash to ATM - available for admin only - EXTENDED
    load_cash: function(addition) {

    },
    // get report about cash actions - available for admin only - EXTENDED
    getReport: function() {

    },
    // log out
    logout: function() {
    this.is_auth == false;
    this.current_user == false;
    this.current_type == false;
    }
}

