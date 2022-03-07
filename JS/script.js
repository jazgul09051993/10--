// class Cars {

//     constructor(model, year, power, color) {
//       this.model = model;
//       this.year = year;
//       this.power = power + "kvt";
//       this.color = color;
//     }

  
//     showInfo() {
//         document.write(`
//             Модель: ${this.model}<br>
//             Год выпуска: ${this.year}<br>
//             Мощность: ${this.power}<br>
//             Цвет: ${this.color}<br>
//         `)
//     }
// }

// class ElectroCars extends Cars {
//     constructor(model, year, power, color, battery) {
//       super(model, year, power, color);
//       this.battery = battery;
//     }

//     showInfo() {
//         super.showInfo();
//         document.write(`
//             Батарея: ${this.battery}<br>   
//         `);
//     }

//     promote() {
//         document.write(`
//             Покупай  ${this.model} и путишествуй по миру!
//         `)
//     }

//   }
  
// const LEXUS = new Cars('LEXUS', 2022, 134, 'Белый <br> <hr>');
// LEXUS.showInfo();

// const electro= new ElectroCars("Tesla", 2022, 100, 'Белый', 4000);
// electro.showInfo();
// electro.promote();

class restaurant {
    constructor(name, cusineType, served=0){
    this.name = name;
    this.cusineType = cusineType;
    this.served = served;
    }

    showInfo() {
        document.write(`
        Название : ${this.name} <br>
        Кухня : ${this.cusineType}<br>
        `);
    }
    
    setStatus(status) {
        this.isOpen = status;
    }
   
    serve() {
     return this.served++;
    }

    setServed (numberOfServed) {
     document.write(`Число обслуженных: ${this.served += numberOfServed}`);
    }

    isOpen() {
        let currentHour = new Date(). getHours();
        if (currentHour > 9 && currentHour < 22) {
            document.write (`${this.name} открыто <br>`);
      }else{
          document.write(`${this.name} закрыто <br>`);
      }
    }

    showTotalServed() {
        document.write (`Гости ${this.served}<br>`);
    }
}

const Romantic = new restaurant('Romanmtic', 'national');
Romantic.showInfo();
Romantic.isOpen();
Romantic.setStatus();
Romantic.serve();
Romantic.showTotalServed();
Romantic.setServed(20);
