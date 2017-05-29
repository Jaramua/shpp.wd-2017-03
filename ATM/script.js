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
        if (number == this.users[0]["number"] && pin == this.users[0]["pin"]) {
            this.current_type == "admin";
            this.current_user == this.users[0];
            this.is_auth == true;
            console.log('welcome, admin');
        } else if (number == this.users[1]["number"] && pin == this.users[1]["pin"]) {
            this.current_type == "user";
            this.current_user == this.users[1];
            this.is_auth == true;
            console.log('welcome');
        } else {
            console.log("Authorization is denied. Wrong data" );
            return false;
        }
    },
    // check current debet
    check: function() {
        if (this.is_auth){
          console.log(this.current_user['debet']);
        }
    },
    // get cash - available for user only
    getCash: function(amount) {
        if (this.is_auth) {
            if (this.is_auth && this.current_type == "users") {
                if ((this.current_user['debet'] - amount) >= 0
                    && (this.cash - amount) >= 0) {
                    this.current_user['debet'] -= amount;
                    this.cash -= amount;
                    console.log("operation is successful");
                } else {
                    console.log("error");
                }
            } else {
                console.log("this function is allowed only for users");
            }
        } else {
            console.log("Error. Authorization first");
        }
    },
    // load cash - available for user only
    loadCash: function(amount){
        if(this.is_auth) {
            if(this.current_type == "user"){
                this.current_user['debet'] += amount;
                console.log("Cash in amount of " + amount + "id added to your account");
            } else {
                console.log("this function is allowed only for users");
            }

        } else {
            console.log("Error. Authorization first");
        }
    },
    // load cash to ATM - available for admin only - EXTENDED
    load_cash: function(addition) {
        if(this.is_auth) {
            if (this.current_type == "admin") {
                this.cash += addition;
                console.log("Cash in amount of " + addition + "id added to your ATM");
            } else {
                console.log("this function is allowed only for admin");
            }
        } else {
            console.log("Error. Authorization first");
        }
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
};

