/*
Given an array of integers , Find the minimum sum which is obtained from summing each Two integers product .
*/

//Answer

function minSum(arr) {
    const greatestToLeastArr = arr.sort((a,b) => a-b)
    return  greatestToLeastArr.map((num, index) => num * greatestToLeastArr.reverse()[index]).slice(0, arr.length/2).reduce((acc, c) => acc+c, 0)
}