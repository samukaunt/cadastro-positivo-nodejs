/**
 * Created by bruno on 02/11/17.
 */
module.exports = function (app) {
    var pessoasModel = app.models.pessoasModel;

    var pessoaServices = {};

    pessoaServices.buscarPorCpf = function(cpf) {
        var pessoaProcurada = pessoasModel.findByCpf(cpf);
        return pessoaProcurada;
    };

    pessoaServices.salvarNova = function (pessoa) {
        if(pessoaServices.buscarPorCpf(pessoa.cpf) === undefined) {
            var pessoaSalva = pessoasModel.save(pessoa);
            return pessoaSalva
        }
        return null;
    };

    return pessoaServices;
};