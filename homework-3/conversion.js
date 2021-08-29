class Convert {
   fromCelcius(degree2, num1) {
      if (degree2 == "Celcius") {
         return num1;
      }
      if (degree2 == "Réaumur") {
         return (4 / 5) * num1;
      }
      if (degree2 == "Farenheit") {
         return (9 / 5) * num1 + 32;
      }
      if (degree2 == "Kelvin") {
         return parseInt(num1) + parseInt(273.15);
      }
   }
   fromFarenheit(degree2, num1) {
      if (degree2 == "Farenheit") {
         return num1;
      }
      if (degree2 == "Celcius") {
         return (5 / 9) * (num1 - 32);
      }
      if (degree2 == "Réaumur") {
         return (4 / 9) * (num1 - 32);
      }
      if (degree2 == "Kelvin") {
         return parseInt((5 / 9) * (num1 - 32)) + parseInt(273.15);
      }
   }
   fromRéaumur(degree2, num1) {
      if (degree2 == "Réaumur") {
         return num1;
      }
      if (degree2 == "Celcius") {
         return (5 / 4) * num1;
      }
      if (degree2 == "Farenheit") {
         return (9 / 4) * num1 + 32;
      }
      if (degree2 == "Kelvin") {
         return parseInt((5 / 4) * num1) + parseInt(273.15);
      }
   }
   fromKelvin(degree2, num1) {
      if (degree2 == "Kelvin") {
         return num1;
      }
      if (degree2 == "Celcius") {
         return num1 - 273.15;
      }
      if (degree2 == "Farenheit") {
         return (9 / 5) * (num1 - 273.15) + 32;
      }
      if (degree2 == "Réaumur") {
         return (num1 - 273.15) * 0.8;
      }
   }
}
