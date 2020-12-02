import React from 'react';
import { useEffect } from 'react';
import Chart from 'chart.js';



const TenttiChart=()=> {

useEffect(() => {
    const ctx = document.getElementById("myChart");
    new Chart(ctx, {
      type: "bar",
      options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }],
            
        }
      },
      data: {
        labels: ["Suhteellisuusteoria", "Kvanttimekaniikka", "Termodynamiikka", "Klassinen Fysiikka", "Tieteenfilosofia", "Hiukkasfysiikka"],
        datasets: [
          {
            label: "Osaamisen taso",
            data: [12, 19, 11, 7, 15, 6],
            backgroundColor: [
              "#a4dbb3",
              "#dbda97",
              "#88d5e3",
              "#c8abde",
              "#eda6a4",
              "#e6cba5"
            ],
            borderColor: ["#6dc986", "#c9c865", "#58a7c7", "#924fc4", "#cf7270", "#c9a065"],
            borderWidth: 2
          }
        ]
      }
    });
  });
  return (
    <div className="App">
      <canvas id="myChart" width="100" height="100" />
    </div>
  );

  }
export default TenttiChart