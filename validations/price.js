let schema = {
  'barang': {
    notEmpty: true,
    errorMessage: 'Barang harus diisi',
  },
  'harga.pokok': {
    notEmpty: true,
    errorMessage: 'Harga pokok harus diisi',
    isInt: {
      options: [{min: 1}],
      errorMessage: 'Harga pokok tidak boleh nol'
    },
  },
  'harga.jual': {
    notEmpty: true,
    errorMessage: 'Harga jual harus diisi',
    isInt: {
      options: [{min: 1}],
      errorMessage: 'Harga jual tidak boleh nol'
    },
  }
};

let validation = {
  check: function(request) {
    return request.checkBody(schema);
  } 
}

module.exports = validation;