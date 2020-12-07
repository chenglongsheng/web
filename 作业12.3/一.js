function City(cityName, cityArea, cityPostcode, cityRegions) {
    this.cityName = cityName;
    this.cityArea = cityArea;
    this.cityPostcode = cityPostcode;
    this.cityRegions = cityRegions;
}
City.prototype.printCityName = function () {
    console.log(this.cityName)
}
City.prototype.printCityArea = function () {
    console.log(this.cityArea)
}
City.prototype.printCityPostcode = function () {
    console.log(this.cityPostcode)
}
City.prototype.printCityRegions = function () {
    for(var i=0;i<this.cityRegions.length;i++){
        console.log(this.cityRegions[i])
    }
}
var city = new City("南昌市",7402000,"330000",["东湖区","西湖区","青云谱区","青山湖区","新建区","红谷滩区"])

city.printCityName()
city.printCityArea()
city.printCityPostcode()
city.printCityRegions()
