function Validador(form = "") {
    this.form = form;
    this.validar = () => {
        if (this.form.nome.value == "" || this.form.senha.value == "") {
            return false;
        }
        return true;
    }
}