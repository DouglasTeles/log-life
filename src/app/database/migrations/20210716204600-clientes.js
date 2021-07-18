'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    
    await queryInterface.createTable('clientes', { 
      id:{
        type: Sequelize.INTEGER,
        primaryKey:true,
        autoIncrement:true,
        allowNull:false
      }, 
      tipocliente:{
        type: Sequelize.TEXT,
        allowNull:false,
      }, 
      situacaocliente:{
        type: Sequelize.TEXT,
        allowNull:false
      },      
      nomecliente:{
        type: Sequelize.TEXT,
        allowNull:false
      },
      razaosobrenome:{
        type: Sequelize.TEXT,
        allowNull:false
      },
      cnpjcpf:{
        type: Sequelize.TEXT,
        allowNull:false
      },
      email:{
        type: Sequelize.TEXT,
        allowNull:false
      },
      telefone:{
        type: Sequelize.TEXT,
        allowNull:false
      },
      cep:{
        type: Sequelize.TEXT,
        allowNull:false
      },
      rua:{
        type: Sequelize.TEXT,
        allowNull:false
      },
      numero:{
        type: Sequelize.TEXT,
        allowNull:true
      },
      cidade:{
        type: Sequelize.TEXT,
        allowNull:false
      },
      estado:{
        type: Sequelize.TEXT,
        allowNull:false
      },
      diahoraatt:{
        type: Sequelize.DATE,
        allowNull:false
      },
      veiculoutilizado:{
        type: Sequelize.TEXT,
        allowNull:false
      },
      created_at:{
        type: Sequelize.DATE,
        allowNull:false
      },
      updated_at:{
        type: Sequelize.DATE,
        allowNull:false
      }
           
    });
     
  },

  down: async (queryInterface, Sequelize) => {
   
    await queryInterface.dropTable('clientes');
    
  }
};
