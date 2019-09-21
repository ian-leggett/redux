const createPolicy = (name, amount) => {
  return {
    type: 'CREATE_POLICY',
    payload: {
      name,
      amount
    }
  }
}

const createClaim = (name, amountOfMoneyToCollect) =>{
  return {
    type: 'CREATE_CLAIM',
    payload: {
      name,
      amountOfMoneyToCollect
    }
  }
}

const deletePolicy = (name) =>{
  return {
    type: 'DELETE_POLICY',
    payload: {
      name,
    }
  }
}

module.exports = {
  createPolicy,
  deletePolicy,
  createClaim,
}