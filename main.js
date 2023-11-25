function myFunction() {
  var input, filter, div, card, p, i, txtValue;
  input = document.getElementById("myInput");
  filter = input.value.toUpperCase();
  div = document.getElementById("myUl");
  card = div.getElementsByClassName("card");
  
  if (filter === "") {
    for (i = 0; i < card.length; i++) {
      card[i].style.display = "";
    }
  } else {
    for (i = 0; i < card.length; i++) {
      p = card[i].getElementsByTagName("p")[0];
      txtValue = p.textContent || p.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        card[i].style.display = "";
      } else {
        card[i].style.display = "none";
      }
    }
  }
}

// Clear the search input and show all cards when the input is empty
document.getElementById("myInput").addEventListener("input", function() {
  if (this.value === "") {
    myFunction();
  }
});

let methodbuy = '';
  let info1 = '';
  let info2 = '';
  let info3 = '';
  let info4 = '';
  let info5 = '';
  let info6 = '';
  let info7 = '';
  let info8 = ''
  let info9 = '';
  let info10 = '';
  let info11 = '';
  let info12 = '';

  let barangDipilih = false;

  //Untuk Menyembunyikan Card
  $("#dis1").hide();
  $("#dis2").hide();
  $("#dis3").hide();
  $("#dis4").hide();
  $("#dis5").hide();
  $("#dis6").hide();
  $("#dis7").hide();
  $("#dis8").hide();
  $("#dis9").hide();
  $("#dis10").hide();
  $("#dis11").hide();
  $("#dis12").hide();

  // Fungsi untuk menangani peristiwa saat tombol "Print Recipe" ditekan
  $("#exportToTxt").click(function () {
    if (!barangDipilih) {
      showNoItemsSelectedMessage();
    } else {
      changeText($("#dropdownButton").text());
      exportToTxt();
    }
  });
  // Fungsi untuk menangani peristiwa saat tombol CTRL + P ditekan
  $(document).keydown(function (e) {
    if ((e.key === "p" || e.key === "P") && (e.ctrlKey || e.metaKey)) {
      e.preventDefault();
      if (!barangDipilih) {
        showNoItemsSelectedMessage();
      } else {
        exportToTxt();
      }
    }
  });  

  // Untuk Menambahkan Quantity pada card
  let taxValue = 0;
  let quantity1 = 0;
  let quantity2 = 0;
  let quantity3 = 0;
  let quantity4 = 0;
  let quantity5 = 0;
  let quantity6 = 0;
  let quantity7 = 0;
  let quantity8 = 0;
  let quantity9 = 0;
  let quantity10 = 0;
  let quantity11 = 0;
  let quantity12 = 0;
  let pajak = 0.1;

  // Fungsi untuk menghapus semua pesanan
function clearAllOrders() {
  // Reset semua nilai quantity dan menyembunyikan card
  quantity1 = 0; $("#dis1").hide();
  quantity2 = 0; $("#dis2").hide();
  quantity3 = 0; $("#dis3").hide();
  quantity4 = 0; $("#dis4").hide();
  quantity5 = 0; $("#dis5").hide();
  quantity6 = 0; $("#dis6").hide();
  quantity7 = 0; $("#dis7").hide();
  quantity8 = 0; $("#dis8").hide();
  quantity9 = 0; $("#dis9").hide();
  quantity10 = 0; $("#dis10").hide();
  quantity11 = 0; $("#dis11").hide();
  quantity12 = 0; $("#dis12").hide();

  // Reset nilai pajak dan tampilkan kembali card pembayaran
  taxValue = 0;
  pajakTotal = 0;
  $("#tax").text(pajakTotal);
  
  // Tampilkan card pembayaran
  $("#successCard").hide();

  // Reset nilai quantity dan tampilkan card pembayaran
  $("#quantity").text(quantity1);
  $("#quantity2").text(quantity2);
  $("#quantity3").text(quantity3);
  $("#quantity4").text(quantity4);
  $("#quantity5").text(quantity5);
  $("#quantity6").text(quantity6);
  $("#quantity7").text(quantity7);
  $("#quantity8").text(quantity8);
  $("#quantity9").text(quantity9);
  $("#quantity10").text(quantity10);
  $("#quantity11").text(quantity11);
  $("#quantity12").text(quantity12);
}

function showNoItemsSelectedMessage() {
  // Hanya tampilkan pesan jika tidak ada barang yang dipilih
  if (!(quantity1 > 0 || quantity2 > 0 || quantity3 > 0 || quantity4 > 0 || quantity5 > 0 || quantity6 > 0 || quantity7 > 0 || quantity8 > 0 || quantity9 > 0 || quantity10 > 0 || quantity11 > 0 || quantity12 > 0)) {
    const noItemsMessage = document.createElement("div");
    noItemsMessage.innerText = "Tidak Ada Barang Yang Dipilih, Silahkan Pilih Barang!";
    noItemsMessage.style.position = "fixed";
    noItemsMessage.style.top = "50%";
    noItemsMessage.style.left = "50%";
    noItemsMessage.style.transform = "translate(-50%, -50%)";
    noItemsMessage.style.backgroundColor = "rgba(255, 0, 0, 0.8)";
    noItemsMessage.style.padding = "10px";
    noItemsMessage.style.color = "#fff";
    noItemsMessage.style.zIndex = "5";
    document.body.appendChild(noItemsMessage);

    setTimeout(() => {
      document.body.removeChild(noItemsMessage);
    }, 3000);
  }
}

  $(document).ready(function () {
    $(".card").on("click", ".add-btn", function () {
      var cardInfo = $(this).closest('.card').find('.card-text').text();
      var cardPriceId = $(this).closest('.card').find('.card-title span').attr('id');
      var cardPrice = $('#' + cardPriceId).text();

      console.log("Item: " + cardInfo + ", Price: " + cardPrice);
    });

    // Kode untuk card pertama
    $("#clickableImage").click(function () {
      $("#dis1").show();
      var hargaText = $('#harga').text();
      info1 = $('#infoItm').text();
      let integerValue = parseInt(hargaText);

      if (!isNaN(integerValue)) {
        $("#displayInfo").text(info1);
        $("#displayValue").text("Price: Rp." + integerValue);
        taxValue += integerValue;

        pajakTotal = pajak * taxValue + taxValue;
        quantity1++;
        $("#tax").text(pajakTotal);
        $("#quantity").text(quantity1);
      } else {
        console.log("Conversion to Integer Failed");
      }
    });

  // Kode untuk card kedua
  $("#clickableImage2").click(function () {
    $("#dis2").show();
    var hargaText = $('#harga2').text();
    info2 = $('#infoItm2').text();
    let integerValue = parseInt(hargaText);

    if (!isNaN(integerValue)) {
      $("#displayInfo2").text(info2);
      $("#displayValue2").text("Price: Rp." + integerValue);

      taxValue += integerValue;
      pajakTotal = pajak * taxValue + taxValue;
      quantity2++;
      $("#tax").text(pajakTotal);
      $("#quantity2").text(quantity2);
    } else {
      console.log("Conversion to Integer Failed");
    }
  });

  // Kode untuk card ketiga
  $("#clickableImage3").click(function () {
    $("#dis3").show();
    var hargaText = $('#harga3').text();
    info3 = $('#infoItm3').text();
    let integerValue = parseInt(hargaText);

    if (!isNaN(integerValue)) {
        $("#displayInfo3").text(info3);
        $("#displayValue3").text("Price: Rp." + integerValue);

        taxValue += integerValue;
        pajakTotal = pajak * taxValue + taxValue;
        quantity3++;
        $("#tax").text(pajakTotal);
        $("#quantity3").text(quantity3);
      } else {
        console.log("Conversion to Integer Failed");
      }
  });

  // Kode untuk card keempat
  $("#clickableImage4").click(function () {
    $("#dis4").show();
    var hargaText = $('#harga4').text();
    info4 = $('#infoItm4').text();
    let integerValue = parseInt(hargaText);

    if (!isNaN(integerValue)) {
      $("#displayInfo4").text(info4);
      $("#displayValue4").text("Price: Rp." + integerValue);

      taxValue += integerValue;
      pajakTotal = pajak * taxValue + taxValue;
      quantity4++;
      $("#tax").text(pajakTotal);
      $("#quantity4").text(quantity4);
    } else {
      console.log("Conversion to Integer Failed");
    }
  });

  // Kode untuk card kelima
  $("#clickableImage5").click(function () {
    $("#dis5").show();
    var hargaText = $('#harga5').text();
    info5 = $('#infoItm5').text();
    let integerValue = parseInt(hargaText);

    if (!isNaN(integerValue)) {
        $("#displayInfo5").text(info5);
        $("#displayValue5").text("Price: Rp." + integerValue);

        taxValue += integerValue;
        pajakTotal = pajak * taxValue + taxValue;
        quantity5++;
        $("#tax").text(pajakTotal);
        $("#quantity5").text(quantity5);
    } else {
        console.log("Conversion to Integer Failed");
    }
  });

  //Kode untuk card keenam
  $("#clickableImage6").click(function () {
    $("#dis6").show();
    var hargaText = $('#harga6').text();
    info6 = $('#infoItm6').text();
    let integerValue = parseInt(hargaText);
  
    if (!isNaN(integerValue)) {
      $("#displayInfo6").text(info6);
      $("#displayValue6").text("Price: Rp." + integerValue);
  
      taxValue += integerValue;
      pajakTotal = pajak * taxValue + taxValue;
      quantity6++;
      $("#tax").text(pajakTotal);
      $("#quantity6").text(quantity6);
    } else {
      console.log("Conversion to Integer Failed");
    }
  });  

  //Kode untuk card ketujuh
  $("#clickableImage7").click(function () {
    $("#dis7").show();
    var hargaText = $('#harga7').text();
    info7 = $('#infoItm7').text();
    let integerValue = parseInt(hargaText);

    if (!isNaN(integerValue)) {
        $("#displayInfo7").text(info7);
        $("#displayValue7").text("Price: Rp." + integerValue);

        taxValue += integerValue;
        pajakTotal = pajak * taxValue + taxValue;
        quantity7++;
        $("#tax").text(pajakTotal);
        $("#quantity7").text(quantity7);
    } else {
        console.log("Conversion to Integer Failed");
    }
  });

  //Kode untuk card kedelapan
  $("#clickableImage8").click(function () {
    $("#dis8").show();
    var hargaText = $('#harga8').text();
    info8 = $('#infoItm8').text();
    let integerValue = parseInt(hargaText);

    if (!isNaN(integerValue)) {
        $("#displayInfo8").text(info8);
        $("#displayValue8").text("Price: Rp." + integerValue);

        taxValue += integerValue;
        pajakTotal = pajak * taxValue + taxValue;
        quantity8++;
        $("#tax").text(pajakTotal);
        $("#quantity8").text(quantity8);
    } else {
        console.log("Conversion to Integer Failed");
    }
  });

  //Kode untuk card kesembilan
  $("#clickableImage9").click(function () {
    $("#dis9").show();
    var hargaText = $('#harga9').text();
    info9 = $('#infoItm9').text();
    let integerValue = parseInt(hargaText);

    if (!isNaN(integerValue)) {
        $("#displayInfo9").text(info9);
        $("#displayValue9").text("Price: Rp." + integerValue);

        taxValue += integerValue;
        pajakTotal = pajak * taxValue + taxValue;
        quantity9++;
        $("#tax").text(pajakTotal);
        $("#quantity9").text(quantity9);
    } else {
        console.log("Conversion to Integer Failed");
    }
  });

  //Kode untuk card kesepuluh
  $("#clickableImage10").click(function () {
    $("#dis10").show();
    var hargaText = $('#harga10').text();
    info10 = $('#infoItm10').text();
    let integerValue = parseInt(hargaText);

    if (!isNaN(integerValue)) {
        $("#displayInfo10").text(info10);
        $("#displayValue10").text("Price: Rp." + integerValue);

        taxValue += integerValue;
        pajakTotal = pajak * taxValue + taxValue;
        quantity10++;
        $("#tax").text(pajakTotal);
        $("#quantity10").text(quantity10);
    } else {
        console.log("Conversion to Integer Failed");
    }
  });

  //Kode untuk card kesebelas
  $("#clickableImage11").click(function () {
    $("#dis11").show();
    var hargaText = $('#harga11').text();
    info11 = $('#infoItm11').text();
    let integerValue = parseInt(hargaText);

    if (!isNaN(integerValue)) {
        $("#displayInfo11").text(info11);
        $("#displayValue11").text("Price: Rp." + integerValue);

        taxValue += integerValue;
        pajakTotal = pajak * taxValue + taxValue;
        quantity11++;
        $("#tax").text(pajakTotal);
        $("#quantity11").text(quantity11);
    } else {
        console.log("Conversion to Integer Failed");
    }
  });

  //Kode untuk card keduabelas
  $("#clickableImage12").click(function () {
    $("#dis12").show();
    var hargaText = $('#harga12').text();
    info12 = $('#infoItm12').text();
    let integerValue = parseInt(hargaText);

    if (!isNaN(integerValue)) {
        $("#displayInfo12").text(info12);
        $("#displayValue12").text("Price: Rp." + integerValue);

        taxValue += integerValue;
        pajakTotal = pajak * taxValue + taxValue;
        quantity12++;
        $("#tax").text(pajakTotal);
        $("#quantity12").text(quantity12);
    } else {
        console.log("Conversion to Integer Failed");
    }
  });
    
    $("#rem1").click(function () {
      let itemPrice = parseInt($('#harga').text());
      taxValue -= itemPrice;
      quantity1--;
      if (quantity1 === 0) {
        $("#dis1").hide();
      }
      pajakTotal = pajak * taxValue + taxValue;
      $("#tax").text(pajakTotal);
      $("#quantity").text(quantity1);
    });

    $("#rem2").click(function () {
      let itemPrice = parseInt($('#harga2').text());
      taxValue -= itemPrice;
      quantity2--;
      if (quantity2 === 0) {
        $("#dis2").hide();
      }
      pajakTotal = pajak * taxValue + taxValue;
      $("#tax").text(pajakTotal);
      $("#quantity2").text(quantity2);
    });

    $("#rem3").click(function () {
      let itemPrice = parseInt($('#harga3').text());
      taxValue -= itemPrice;
      quantity3--;
      if (quantity3 === 0) {
          $("#dis3").hide();
      }
      pajakTotal = pajak * taxValue + taxValue;
      $("#tax").text(pajakTotal);
      $("#quantity3").text(quantity3);
    });

    $("#rem4").click(function () {
      let itemPrice = parseInt($('#harga4').text());
      taxValue -= itemPrice;
      quantity4--;
  
      if (quantity4 === 0) {
        $("#dis4").hide();
      }
      pajakTotal = pajak * taxValue + taxValue;
      $("#tax").text(pajakTotal);
      $("#quantity4").text(quantity4);
    });

    $("#rem5").click(function () {
      let itemPrice = parseInt($('#harga5').text());
      taxValue -= itemPrice;
      quantity5--;
      if (quantity5 === 0) {
          $("#dis5").hide();
      }
      pajakTotal = pajak * taxValue + taxValue;
      $("#tax").text(pajakTotal);
      $("#quantity5").text(quantity5);
    });

    $("#rem6").click(function () {
      let itemPrice = parseInt($('#harga6').text());
      taxValue -= itemPrice;
      quantity6--;
      if (quantity6 === 0) {
          $("#dis6").hide();
      }
      pajakTotal = pajak * taxValue + taxValue;
      $("#tax").text(pajakTotal);
      $("#quantity6").text(quantity6);
    });

    $("#rem7").click(function () {
      let itemPrice = parseInt($('#harga7').text());
      taxValue -= itemPrice;
      quantity7--;
      if (quantity7 === 0) {
          $("#dis7").hide();
      }
      pajakTotal = pajak * taxValue + taxValue;
      $("#tax").text(pajakTotal);
      $("#quantity7").text(quantity7);
    });

    $("#rem8").click(function () {
      let itemPrice = parseInt($('#harga8').text());
      taxValue -= itemPrice;
      quantity8--;
      if (quantity8 === 0) {
          $("#dis8").hide();
      }
      pajakTotal = pajak * taxValue + taxValue;
      $("#tax").text(pajakTotal);
      $("#quantity8").text(quantity8);
    });

    $("#rem9").click(function () {
      let itemPrice = parseInt($('#harga9').text());
      taxValue -= itemPrice;
      quantity9--;
      if (quantity9 === 0) {
          $("#dis9").hide();
      }
      pajakTotal = pajak * taxValue + taxValue;
      $("#tax").text(pajakTotal);
      $("#quantity9").text(quantity9);
    });

    $("#rem10").click(function () {
      let itemPrice = parseInt($('#harga10').text());
      taxValue -= itemPrice;
      quantity10--;
      if (quantity10 === 0) {
          $("#dis10").hide();
      }
      pajakTotal = pajak * taxValue + taxValue;
      $("#tax").text(pajakTotal);
      $("#quantity10").text(quantity10);
    });

    $("#rem11").click(function () {
      let itemPrice = parseInt($('#harga11').text());
      taxValue -= itemPrice;
      quantity11--;
      if (quantity11 === 0) {
          $("#dis11").hide();
      }
      pajakTotal = pajak * taxValue + taxValue;
      $("#tax").text(pajakTotal);
      $("#quantity11").text(quantity11);
    });

    $("#rem12").click(function () {
      let itemPrice = parseInt($('#harga12').text());
      taxValue -= itemPrice;
      quantity12--;
      if (quantity12 === 0) {
          $("#dis12").hide();
      }
      pajakTotal = pajak * taxValue + taxValue;
      $("#tax").text(pajakTotal);
      $("#quantity12").text(quantity12);
    });
  });

    
  function changeText(option) {
    $("#dropdownButton").text(option);
    methodbuy = option;
  }

  function showSuccessCard() {
    var successCard = document.getElementById('successCard');
    successCard.style.display = 'block';

    // Tambahkan timeout untuk menyembunyikan card setelah beberapa detik
    setTimeout(function () {
      successCard.style.display = 'none';
    }, 3000); // Menyembunyikan card setelah 3 detik (3000 milidetik)
  }

  function exportToTxt() {
    if (methodbuy == 'Select Buy Method') {
      alert("Pilih Metode pembelian");
    } else {
      let txtContent = 'STARBHAK-MARKET\n---------------\n';

      if (quantity1 > 0) {
        txtContent += `${info1}: ${quantity1}\n`;
      }

      if (quantity2 > 0) {
        txtContent += `${info2}: ${quantity2}\n`;
      }
      
      if (quantity3 > 0) {
        txtContent += `${info3}: ${quantity3}\n`;
      }

      if (quantity4 > 0) {
        txtContent += `${info4}: ${quantity4}\n`;
      }

      if (quantity5 > 0) {
        txtContent += `${info5}: ${quantity5}\n`;
      }

      if (quantity6 > 0) {
        txtContent += `${info6}: ${quantity6}\n`;
      }

      if (quantity7 > 0) {
        txtContent += `${info7}: ${quantity7}\n`;
      }

      if (quantity8 > 0) {
        txtContent += `${info8}: ${quantity8}\n`;
      }

      if (quantity9 > 0) {
        txtContent += `${info9}: ${quantity9}\n`;
      }

      if (quantity10 > 0) {
        txtContent += `${info10}: ${quantity10}\n`;
      }

      if (quantity11 > 0) {
        txtContent += `${info11}: ${quantity11}\n`;
      }

      if (quantity12 > 0) {
        txtContent += `${info12}: ${quantity12}\n`;
      }

      if (quantity1 > 0 || quantity2 > 0|| quantity3 > 0 || quantity4 > 0 || quantity5 > 0 || quantity6 > 0 || quantity7 > 0 || quantity8 > 0 || quantity9 > 0 || quantity10 > 0 || quantity11 > 0 || quantity12 > 0) {
        txtContent += `Tax: 10%\nTotal Amount: Rp.${pajak * taxValue + taxValue}\nMethod: ${methodbuy}\n\nCashier: Bang Adrian\n--------------\nEnjoy Your Meal`;

        showSuccessCard();// Untuk Menunjukkan Pembayaran

        const blob = new Blob([txtContent], { type: 'text/plain' });
        const downloadLink = document.getElementById('downloadTxtLink');
        downloadLink.href = window.URL.createObjectURL(blob);
        downloadLink.download = 'invoice.txt';
        downloadLink.click();
      }
    }
  }