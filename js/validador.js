// function Validador(form = "") {
//     this.form = form;
//     this.campos = [];
//     this.validar = () => {
//         if (this.form.nome.value == "" ||
//             this.form.senha.value == "" ||
//             this.form.estados.value == ""
//         ) {
//             return false;
//         }
//         return true;
//     }
// }

function Validador(form = "") {

    this.form = form;
    this.campos = [];
    this.validar = () => {
        for (let i = 0; i < this.form.length; i++) {
            let attribData = this.form[i].getAttribute("data");

            if (this.form[i].type === "checkbox" || this.form[i].type === "radio") {
                if (this.form[i].checked == false) {
                    this.campos.push(attribData);
                }
                continue;
            } else {
                if (this.form[i].value == "") {
                    this.campos.push(attribData);
                }
            }
        }
        if (this.campos.length == 0) {
            return true;
        }
        return this.campos;
    }
}
