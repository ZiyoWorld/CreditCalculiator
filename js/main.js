document.getElementById("footer").style.display = "none";

function  calc() {
    let kreditSum = document.getElementById("kredit-sum").value;
    let yearPercent = document.getElementById("year-percent").value;
    let year = document.getElementById("year").value;
    let startPercent = document.getElementById("start-percent").value;
    let deadline = document.getElementById("deadline").value;

    let month = document.getElementById("month").value;

    let startPayment = kreditSum * startPercent / 100;
    document.getElementById("start-payment").innerHTML = startPayment + " so'm";

    let givenSum  = kreditSum - startPayment;
    document.getElementById("given-sum").innerHTML = givenSum + " so'm";

    let monthlyPayment = givenSum / (deadline * 12);
    document.getElementById("month-payment").innerHTML = monthlyPayment.toFixed(2) + " so'm";


    let result = "";

    let jamii = "";

    let array = ["Yanvar", "Fevral", "Mart", "Aprel", "May", "Iyun", "Iyul", "Avgust", "Sentabr", "Oktabr", "Noyabr", "Dekabr"];

    let percentPayment = givenSum * (yearPercent / 1200);

    let monthLy = month;

    let yearLy = year;

    let s1 = 0;
    let s2 = 0;
    let s3 = 0;
    let s4 = 0;

    for(let i = 0; i < deadline * 12; i++){
        let k = (parseInt(monthLy) + parseInt(i)) % 12;
            result +=
            "<tr>" +
            "<td>"+ (i + 1) +"</td>" +
            "<td>"+ yearLy +"</td>" +
            "<td>"+ array[k] +"</td>" +
            "<td>"+ givenSum.toFixed(1)+"</td>" +
            "<td>"+ monthlyPayment.toFixed(1)+"</td>" +
            "<td>"+percentPayment.toFixed(1)+"</td>" +
            "<td>"+  (monthlyPayment + percentPayment).toFixed(1) +"</td>" +
            "</tr>"
        if(k == 11){
            parseInt(yearLy++);
        }
        givenSum -= monthlyPayment;
        percentPayment = givenSum * (yearPercent / 1200);

        s1 += parseFloat(givenSum.toFixed(1));
        s2 += parseFloat(monthlyPayment.toFixed(1));
        s3 += parseFloat(percentPayment.toFixed(1));


    }
    document.getElementById("result").innerHTML = result;
    document.getElementById("footer").style.display = "block";

        jamii =
            "<tr>" +
            "<td></td>" +
            "<td></td>" +
            "<td></td>" +
            "<td>"+ s1.toFixed(1) +"</td>" +
            "<td>"+ s2.toFixed(1) +"</td>" +
            "<td>"+ s3.toFixed(1) +"</td>" +
            "<td>"+ parseFloat(s2 + s3).toFixed(1) +"</td>" +
            "</tr>"
    document.getElementById("jami").innerHTML = jamii;
}

