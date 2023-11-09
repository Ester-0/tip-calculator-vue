import {
    createApp,
    ref,
  } from "https://unpkg.com/vue@3/dist/vue.esm-browser.js";
  
  createApp({
    setup() {
          
          const billAmount = ref();
          const percentageTip = ref();
          const tipAmount = ref();
          const total = ref();
          
          const calculate = () => {
              tipAmount.value = billAmount.value*percentageTip.value/100; 

              total.value = billAmount.value + tipAmount.value;

              console.log("propina: ", tipAmount.value);
              console.log("total: ", total.value);
          };              
          

      return {
          billAmount,
          percentageTip,
          calculate,
          tipAmount,
          total,  
      };
    },
  }).mount("#app");