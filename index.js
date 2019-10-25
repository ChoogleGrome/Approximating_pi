function main () {
    var n = document.getElementById("n").value 

    var i_p = n * ((1/2) * (Math.sin((360/n) * (Math.PI/180))))
    var o_p = n * ((1/2) * (2/(Math.cos(2* ((180/n) * (Math.PI/180))) + 1) * (Math.sin((360/n) * (Math.PI/180)))))

    console.log ("Number of Sides: " + n)
    console.log(i_p + " < " + Math.PI + " < " + o_p)

    document.getElementById("num_p").innerHTML = "Number of Sides: " + n
    document.getElementById("ineq").innerHTML = i_p + " < " + Math.PI + " < " + o_p
}