// operações assíncronas com promises

obj.funcaoAssincrona(function(response) {
    response.funcaoAssincrona(function(response2) {
      response2.funcaoAssincrona(function(response3) {
        response3.funcaoAssincrona(function(response4) {
          return response4;
        });
      });
    });
  });