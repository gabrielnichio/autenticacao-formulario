document.addEventListener("submit", e => {
    e.preventDefault();

    new Login();

})


class Login {
    constructor() {
        this.email = document.querySelector("#email");
        this.senha = document.querySelector("#senha");
        this.validaCampos();
    }

    validaCampos() {
        const form = document.querySelector("#formulario");
        if (this.validaEmail() && this.validaSenha()) {
            localStorage.setItem("auth", 1);
            form.submit();
        }
    }

    validaEmail() {
        if (this.verificaVazio(this.email)) {
            return this.verificaArroba();
        }
    }

    validaSenha() {
        return this.verificaVazio(this.senha);
    }


    verificaVazio(elemento) {
        const errorMessage = elemento.parentElement.querySelector(".error-message");
        if (stringTest(elemento.value)) {
            elemento.classList.remove("input-error")
            errorMessage.innerHTML = ""
            return true;
        } else {
            elemento.classList.add("input-error")
            errorMessage.innerHTML = `Preencha o campo`;
            return false;
        }
    }

    verificaArroba() {
        const errorMessage = this.email.parentElement.querySelector(".error-message");
        if (!this.email.value.includes("@")) {
            this.email.classList.add("input-error")
            errorMessage.innerHTML = `Email inválido`;
            return false;
        } else {
            this.email.classList.remove("input-error")
            errorMessage.innerHTML = ""
            return true;
        }
    }
}


function stringTest(string) {
    if (string === undefined) {
        return false
    } else if (string === null) {
        return false
    } else if (string === "") {
        return false
    }

    return true
}






