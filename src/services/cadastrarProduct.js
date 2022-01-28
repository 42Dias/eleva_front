/*
Função usada no cadastro
*/

import {api} from './api'
import handleLocalStorageEmailAndPassword from '../utils/handleLocalStorageEmailAndPassword'
import responseHandler from '../utils/responseHandler'
import loadUser from './loadUser'
import servidorErrorMessage from '../utils/servidorErrorMessage'


export default async function cadastro(data) {
    return api.post('produto', {
      codigo: data.codigo,
      nome: data.nome,
      descricao: data.descricao,
      unidadeMedida: data.unidadeMedida,
      tipoMaterial: data.tipoMaterial,
      precoVenda: data.precoVenda,
      referenciaTec: data.referenciaTec,
      demandaDiaria: data.demandaDiaria,
      estoque: data.estoque,
      estoqueFornecedor: data.estoqueFornecedor,
      leadTime: data.leadTime,
      ativo: data.ativo,
      dataInatividade: data.dataInatividade,
      redeSKU: data.redeSKU,
      pedidoMinimo: data.pedidoMinimo,
      entregaMinima: data.entregaMinima,
      qtdEmbalagem: data.qtdEmbalagem,
      moduloMinimo: data.moduloMinimo,
      moduloMaster: data.moduloMaster,
      comprimento_cm: data.comprimento_cm,
      largura_cm: data.largura_cm,
      altura_cm: data.altura_cm,
      cubagemEmbalagem: data.cubagemEmbalagem,
      pesoLiq: data.pesoLiq,
      pesoBruto: data.pesoBruto,
      estoqueMinimo: data.estoqueMinimo,
      estoqueMaximo: data.estoqueMaximo,
      curva: data.curva,
      mediaDeVendaA: data.mediaDeVendaA,
      mediaDeVendaB: data.mediaDeVendaB,
      dtUltimaVenda: data.dtUltimaVenda,
      departamentoCategoria: data.departamentoCategoria,
      ncm: data.ncm,
      descricaoNCM: data.descricaoNCM,
      marca: data.marca,
      custoUltimaCompra: data.custoUltimaCompra,
      dataPrimeiraVenda: data.dataPrimeiraVenda,
      statusProduto: data.statusProduto,
      origem: data.origem,
      departamentoId: data.departamentoId,
      empresaId: data.empresaId,
      })
      .then((response) => {
        let mensagemOk = 'Recebemos seu produto, ele será revisado e logo estará na plataforma :)'
        let mensagemNaoOK = 'Revise os dados do produto :('
        responseHandler(response.status, mensagemOk, mensagemNaoOK)
        if (response.status == 200) {
          //first check the http response, returning the result to user
          handleLocalStorageEmailAndPassword(email, senha)
          loadUser(response.data)
          return 'ok'
        }

      })
      .catch(() => {
        servidorErrorMessage()
      })
  }