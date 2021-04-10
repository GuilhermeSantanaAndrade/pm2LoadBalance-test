class controllerTeste {
    async teste(req, res)  {
      const delay = function(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
      }
	  
	  await delay(9000);
	  res.json({});
	  console.log(`teste - ${new Date().toISOString()}`);
    }
}


module.exports = new controllerTeste();