/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  transactions is an array where each
  Transaction - an object like 
        {
    id: 1,
    timestamp: 1656076800000,
    price: 10,
    category: 'Food',
    itemName: 'Pizza',
  }
  Output - [{ category: 'Food', totalSpent: 10 }] // Can have multiple categories, only one example is mentioned here
*/

// complexity O(n^2)
// function calculateTotalSpentByCategory(transactions) {
//   let ansArr = [];
//   for (let i = 0; i < transactions.length; i++) {
//     let checkCategory = transactions[i].category;
//     let totalCategorySpent = 0;
//     const foundTransaction = ansArr.find(ansArr => ansArr.category === checkCategory);
//     if (!foundTransaction) {
//       for (let j = 0; j < transactions.length; j++) {
//         if (transactions[j].category === checkCategory) {
//           totalCategorySpent += transactions[j].price;
//         }
//       }
//       let ansObj = { category: checkCategory, totalSpent: totalCategorySpent }
//       ansArr.push(ansObj);
//     }
//   };
//   return ansArr;
// }


// complexity == O(n)
function calculateTotalSpentByCategory(transactions) {
  const ansMap = new Map();
  for (const transaction of transactions) {
    const { category, price } = transaction;
    const totalCategorySpent = ansMap.get(category) || 0;
    ansMap.set(category, totalCategorySpent + price);
  }
  return Array.from(ansMap, ([category, totalSpent]) => ({ category, totalSpent }));
}

module.exports = calculateTotalSpentByCategory;
