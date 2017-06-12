var ATM = {
    is_auth: false,
    current_user: false,
    current_type: false,
    // all cash of ATM
    cash: 2000,
    // all available users
    users: [
        {number: "0000", pin: "000", debet: 0, type: "admin"}, // EXTENDED
        {number: "0025", pin: "123", debet: 675, type: "user"}
    ],
    // authorization
    auth: function (number, pin) {

        if (number == undefined && pin == undefined) {
            console.log("Authorization is denied. Wrong data");
            return false;
        } else {
            for (var i = 0; i < this.users.length; i++) {
                if (this.users[i].number == number && this.users[i].pin == pin) {
                    this.is_auth = true;
                    this.current_user = i;
                    this.current_type = this.users[i].type;
                    console.log('welcome');
                }
            }
        }
    },
    // check current debet
    check: function () {
        if (this.is_auth) {
            console.log(this.users[this.current_user].debet);
        }
    },
    // get cash - available for user only
    getCash: function (amount) {
        if (this.is_auth) {
            if ((this.is_auth) && (this.current_type == "user")) {
                if ((this.users[this.current_user].debet- amount) >= 0) {
                    if ((this.cash - amount) >= 0) {
                        this.users[this.current_user].debet-= amount;
                        this.cash -= amount;
                        console.log("operation is successful");
                        console.log("ATM has: " + ATM.cash);
                    } else {
                        console.log("Error. ATM don`t have enough money");
                    }
                } else {
                    console.log("Error. You don`t have enough money");
                }
            } else {
                console.log("this function is allowed only for users");
            }
        } else {
            console.log("Error. Authorization first");
        }
    },
    // load cash - available for user only
    loadCash: function (amount) {
        if (this.is_auth) {
            if (this.current_type == "user") {
                this.users[this.current_user].debet += amount;
                this.cash += amount;
                console.log("Cash in amount of " + amount + " is added to your account");
            } else {
                console.log("this function is allowed only for users");
            }

        } else {
            console.log("Error. Authorization first");
        }
    },
    // load cash to ATM - available for admin only - EXTENDED
    load_cash: function (addition) {
        if (this.is_auth) {
            if (this.current_type == "admin") {
                this.cash += addition;
                console.log("Cash in amount of " + addition + " is added to ATM");
            } else {
                console.log("this function is allowed only for admin");
            }
        } else {
            console.log("Error. Authorization first");
        }
    },
    // get report about cash actions - available for admin only - EXTENDED
    getReport: function () {

    },
    // log out
    logout: function () {
        this.is_auth = false;
        this.current_user = false;
        this.current_type = false;
        console.log("Thank you for choosing our ATM");
    }
};

