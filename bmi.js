function getBmi(height, weight, Point = 2) {
    bmi = weight / (height / 100) ** 2
    return bmi.toFixed(2)
}