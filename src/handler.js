'use strict';
const { PrismaClient }  = require("@prisma/client");


exports.create = async (event) => {
  const prisma = new PrismaClient();
  try{
    
    const { first_name, last_name, age, email } = JSON.parse(event.body);

    const result = await prisma.user.create({
      data: { first_name, last_name, age, email }
    })

    return {
      statusCode: 200,
      body: JSON.stringify(result)
    };
  }
  catch(e){
    console.log(e);
    return {
      statusCode: 400,
      body: JSON.stringify({ message: e })
    };
  }
  finally{
    prisma.$disconnect();
  }
};

exports.update = async (event) => {
  const prisma = new PrismaClient();
  try{
    
    const { first_name, last_name, age, user_id } = JSON.parse(event.body);

    const result = await prisma.user.update({
      where: { id: user_id },
      data: { first_name, last_name, age }
    })

    return {
      statusCode: 200,
      body: JSON.stringify(result)
    };
  }
  catch(e){
    console.log(e);
    return {
      statusCode: 400,
      body: JSON.stringify({ message: e })
    };
  }
  finally{
    prisma.$disconnect();
  }
};

exports.delete = async (event) => {
  const prisma = new PrismaClient();
  try{
    
    const { user_id } = JSON.parse(event.body);

    const result = await prisma.user.delete({ where: { id: user_id } });


    return {
      statusCode: 200,
      body: JSON.stringify(result)
    };
  }
  catch(e){
    console.log(e);
    return {
      statusCode: 400,
      body: JSON.stringify({ message: e })
    };
  }
  finally{
    prisma.$disconnect();
  }
};

exports.all = async (event) => {
  const prisma = new PrismaClient();
  try{
    
    //const { } = JSON.parse(event.body);
    const result = await prisma.user.findMany();

    return {
      statusCode: 200,
      body: JSON.stringify(result)
    };
  }
  catch(e){
    console.log(e);
    return {
      statusCode: 400,
      body: JSON.stringify({ message: e })
    };
  }
  finally{
    prisma.$disconnect();
  }
};

exports.getUserById = async (event) => {
  const prisma = new PrismaClient();
  try{
    
    const { user_id } = JSON.parse(event.body);

    const result = await prisma.user.findUnique({ where:{ id: user_id } });

    return {
      statusCode: 200,
      body: JSON.stringify(result)
    };
  }
  catch(e){
    console.log(e);
    return {
      statusCode: 400,
      body: JSON.stringify({ message: e })
    };
  }
  finally{
    prisma.$disconnect();
  }
};

/*
async (event) => {
  const prisma = new PrismaClient();
  try{
    
    const { } = JSON.parse(event.body);
    return {
      statusCode: 200,
      body: JSON.stringify({})
    };
  }
  catch(e){
    return {
      statusCode: 400,
      body: JSON.stringify({ message: e })
    };
  }
  finally{
    prisma.$disconnect();
  }
};
*/