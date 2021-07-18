const Cliente = require("../models/Cliente");

module.exports = {
  async store(req, res) {
    const bodyData = req.body;
    const {
      tipocliente,
      situacaocliente,
      nomecliente,
      razaosobrenome,
      cnpjcpf,
      email,
      telefone,
      cep,
      rua,
      numero,
      cidade,
      estado,
      diahoraatt,
      veiculoutilizado,
    } = bodyData;

    try {
      const newCliente = await Cliente.create({
        tipocliente,
        situacaocliente,
        nomecliente,
        razaosobrenome,
        cnpjcpf,
        email,
        telefone,
        cep,
        rua,
        numero,
        cidade,
        estado,
        diahoraatt,
        veiculoutilizado
      });

      return res.status(200).json(newCliente);
    } catch (error) {
      return res.status(400).json(error);
    }
  },

  async index(req, res) {
    const {id} = req.params
    
    try {
      if(!id){
        const listCliente = await Cliente.findAll();
          
        return res.status(200).json(listCliente);
        
      }
        const hasclient = await Cliente.findByPk(id);
        
        if(!hasclient){
          return res.status(200).json({ message: "Cliente não encontrado!" });
        }

        const oneCliente = ({
          id: hasclient.id,
          nome: hasclient.nomecliente,
          razao: hasclient.razaosobrenome,
          tipo: hasclient.tipocliente
        })

        return res.status(200).json(oneCliente);
      
    } catch (error) {
      return res.status(400).json(error);
    }
  },

  

  async update(req, res) {
    const { id } = req.params;
    console.log(id);
    const {
      tipocliente,
      situacaocliente,
      nomecliente,
      razaosobrenome,
      cnpjcpf,
      email,
      telefone,
      cep,
      rua,
      numero,
      cidade,
      estado,
      diahoraatt,
      veiculoutilizado,
    } = req.body;

    try {
      const hasclient = await Cliente.findByPk(id);
      if (!hasclient) {
        return res.status(200).json({ message: "Cliente não encontrado!" });
      }

      const updateClient = await Cliente.update(
        {
          tipocliente,
          situacaocliente,
          nomecliente,
          razaosobrenome,
          cnpjcpf,
          email,
          telefone,
          cep,
          rua,
          numero,
          cidade,
          estado,
          diahoraatt,
          veiculoutilizado,
        },
        {
          where: {
            id: id,
          },
        }
      );
      return res.status(200).json({ message: "Cliente atualizado!", 
      tipocliente,
      situacaocliente,
      nomecliente,
      razaosobrenome,
      cnpjcpf,
      email,
      telefone,
      cep,
      rua,
      numero,
      cidade,
      estado,
      diahoraatt,
      veiculoutilizado,
    });
    } catch (error) {
      return res.status(400).json({ message: "Erro ao atualizar!", error });
    }
  },

  async delete(req, res) {
    const {id} = req.params;

    try {

      const hasclient = await Cliente.findByPk(id);
      if (!hasclient) {
        return res.status(200).json({ message: "Cliente não encontrado!" });
      }

      const deleteClient = await Cliente.destroy({ where: { id: id } })
      return res.status(200).json({ message: "Cliente deletado com sucesso!", hasclient});

    } catch (error) {
      return res.status(400).json(error)
    }
    

  }
};
