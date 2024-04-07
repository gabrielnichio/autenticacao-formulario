class Auth{
    constructor(){
        const auth = localStorage.getItem("auth");
        console.log(auth)
        this.validateAuth(auth);
    }

    validateAuth(auth){
        console.log(auth)
        if (auth != 1){
            window.location.replace("/");
        }else{

        }
    }

    logOut(){
        localStorage.removeItem("auth");
        window.location.replace("/")
    }
}

const auth = new Auth();

document.querySelector("#logout").addEventListener("click", (e) => {
    auth.logOut();
})


