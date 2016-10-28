 function provinceController(Province) {
     Province.getData()
     .then (function (response) {
       this.provinces = response.data;
       this.Name = response.data[0].name;
      console.log(this.Name)
     })
     .catch (function(error) {
       console.error(error);
     })
}
