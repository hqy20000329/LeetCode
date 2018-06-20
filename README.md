
# LeetCode
Notes of LeetCode
/*
No.1
[Two Sum]
Given an array of integers, return indices of the two numbers such that they add up to a specific target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

Example:

Given nums = [2, 7, 11, 15], target = 9,

Because nums[0] + nums[1] = 2 + 7 = 9,
return [0, 1].
*/
C:
粗暴解决。执行用时：104 ms。
int* twoSum(int* nums, int numsSize, int target) {
int i,j;
int* a = (int*)malloc(2*sizeof(int));
for(i=0;i<(numsSize-1);i++)
{
for(j=i+1;d<numsSize;j++)
{
if((nums[i]+nums[j])==target) {a[0]=i;a[1]=j;}
}
}
return a;
