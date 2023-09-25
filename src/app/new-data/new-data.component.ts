import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-data',
  templateUrl: './new-data.component.html',
  styleUrls: ['./new-data.component.css']
})
export class NewDataComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    console.log(this.TotalData)
  }
  TotalData={
    "Data":{
      "data":[
        {
          "Folio":1000010598,
          "NumberAccounts":5,
          "NumberDistributor":2,
          "NumberAMC":1,
          "NumberTransaction":15,
          "Centricity":{
            "company":{
              "TransactionDate":"02-05-2023",
              "InstrumentName":"Kotak Small Cap Growth",
              "TransactionType":"Purchase",
              "NAV":110.20,
              "Quantity":100,
              "TotalAmount":1102,
              "AccountName":"Kanchan Shinde",
              "ClientName":"Kanchan Digamber Shinde",
              "DistributorName":"Centricity",
            },
            "company1":{
              "TransactionDate":"02-05-2023",
              "InstrumentName":"Kotak Small Cap Growth",
              "TransactionType":"Purchase",
              "NAV":110.20,
              "Quantity":100,
              "TotalAmount":1102,
              "AccountName":"Kanchan Shinde",
              "ClientName":"Kanchan Digamber Shinde",
              "DistributorName":"Centricity",
            },
          },
          "IIFL":{
            "company":{
              "TransactionDate":"02-05-2023",
              "InstrumentName":"Kotak Small Cap Growth",
              "TransactionType":"Purchase",
              "NAV":110.20,
              "Quantity":100,
              "TotalAmount":1102,
              "AccountName":"Kanchan Shinde",
              "ClientName":"Kanchan Digamber Shinde",
              "DistributorName":"Centricity",
            },
            "company1":{
              "TransactionDate":"02-05-2023",
              "InstrumentName":"Kotak Small Cap Growth",
              "TransactionType":"Purchase",
              "NAV":110.20,
              "Quantity":100,
              "TotalAmount":1102,
              "AccountName":"Kanchan Shinde",
              "ClientName":"Kanchan Digamber Shinde",
              "DistributorName":"Centricity",
            },
          },
          "KanchanShinde":{
            "company":{
              "TransactionDate":"02-05-2023",
              "InstrumentName":"Kotak Small Cap Growth",
              "TransactionType":"Purchase",
              "NAV":110.20,
              "Quantity":100,
              "TotalAmount":1102,
              "AccountName":"Kanchan Shinde",
              "ClientName":"Kanchan Digamber Shinde",
              "DistributorName":"Centricity",
            },
            "company1":{
              "TransactionDate":"02-05-2023",
              "InstrumentName":"Kotak Small Cap Growth",
              "TransactionType":"Purchase",
              "NAV":110.20,
              "Quantity":100,
              "TotalAmount":1102,
              "AccountName":"Kanchan Shinde",
              "ClientName":"Kanchan Digamber Shinde",
              "DistributorName":"Centricity",
            },
          },
        }
      ]
     }
  }
}


