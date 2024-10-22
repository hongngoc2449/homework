function tinh(){
    const perimeter = (width,height) => 2 * (width + height);
    const area = (width,height) => width * height;
    
    const width = parseFloat(document.getElementById("width").value);
    const height = parseFloat(document.getElementById("height").value);
    
    document.getElementById("chuvi").innerHTML = perimeter(width,height);
    document.getElementById("dientich").innerHTML = area(width,height);
}
