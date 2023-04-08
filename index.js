// Destructuring Array
const lahSidia = ["boneka", "sepatu", "sendal", "baju", "celana", "tas"];
const [barang1, barang2, barang3, ...baranglainnya] = lahSidia;
console.log(barang1, barang2, barang3, baranglainnya);

// Destructuring Object
const data = {
  name: 'Jaya',
  store: 'Maju Jaya',
  lantai: 2,
  products: {
    dewasa: 'Baju Koko Batik',
    anak: 'Baju Anak Batik',
    balita: 'Baju Bunga Bunga',
    sepatu: 'Sepatu Putih'
  }
}

const { name, store, lantai, products: {dewasa, anak} } = data;
console.log(name, store, lantai, dewasa, anak);

// Function Parameter
const cooltes = {
  name: 'Makmur',
  store: 'Jaya Makmur',
  alamat: 'Jl. terus nikah kagak No.007',
  products: {
    dewasa: 'Baju Koko Batik',
    anak: 'Baju Anak Batik',
    balita: 'Baju Bunga Bunga',
    sepatu: 'Sepatu Putih'
  }
}

function productSearch({name, store, alamat}) {
  console.log(name, store, alamat);
}
productSearch(cooltes);

// Default Value dan Alias
const hjs = {
  name: 'Makmur',
  store: 'Jaya Makmur',
  alamat: 'Jl. terus nikah kagak No.007',
  products: {
    dewasa: 'Baju Koko Batik',
    anak: 'Baju Anak Batik',
    balita: 'Baju Bunga Bunga',
    sepatu: 'Sepatu Putih'
  }
}
function searchProduct({name, store : toko, alamat, namaPT = "Halusinasi Jomblo Sejahtera"}) {
  console.log(name, toko, alamat, namaPT);
}
searchProduct(hjs);