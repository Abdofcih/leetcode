/*
35. Search Insert Position
 Given a sorted array of distinct integers and a target value,
 return the index if the target is found.
 If not, return the index where it would be if it were inserted in order.

*/
/*
Time Complexity
    Best case O(1)
    Worst case O(logn)
*/
var searchInsert = function(nums, target) {
 
    var start=0 , end = nums.length-1;
    
    while(start<=end){
    var middle = start + Math.floor((end-start)/2);
    if(target == nums[middle])
    return middle;
    else if(target >= nums[middle])
    start = middle +1; 
    else //(target <= nums[middle]) 
    end = middle-1; 
    }
    // target not found and we can put it here end+1
    return end+1;
}

console.log(searchInsert([1,2,6,8,9,10,22],10));//5
console.log(searchInsert([1,2,6,8,9,10,22],1));//0
console.log(searchInsert([1,2,6,8,9,10,22],22));//6
console.log(searchInsert([1,3,5,6],2));//1
console.log(searchInsert([1,3,5,6],0));//0