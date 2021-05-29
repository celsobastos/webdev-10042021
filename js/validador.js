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
            //this.campos[i] = this.form[i].name;
            if (this.form[i].name == "") {
                this.campos[i] = this.form[i].name;
            }
        }
        if (this.campos.length == 0) {
            return true;
        }
        return this.campos[i];

    }
}
