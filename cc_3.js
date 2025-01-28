//Task 1: Declare array with at least five numerical vallues

let price = [20, 30, 40, 50, 55, 60];
price.push(70);
prices.shift();
console.log(prices);

//Task 2: Modifying Customer Orders

let orders = [5, 10, 15, 20, 25];
orders[2] +=5; // The third element is at index 2
let totalOrders = orders.reduce((total, order) => total + order, 0);
console.log('Update orders:', orders);
console.log('Total number of orders:' totalOrders);

//Task 3: Employee Performance Tracking
let employee = {
    name: 'Drake Routh',
    role: 'Software Developer',
    performanceScore: 85,
    isActive: true
};
employee.performanceScore = 90;
employee.promotionEligible = true;
console.log(employee);

//Task 4: Customer Feedback Records
let Feedback = [
    { customerName: 'Alice', feedbackText: 'Great service!', rating: 5},
    { customerName: 'bob', feedbackText: 'Good wuality products.', rating: 4},
    { customerName: 'Charlie', feedbackText: 'Fast delivery.', rating: 5}
];
Feedback.push({ customerName: 'Diana', feedbackText: 'Excellent customer support.', rating: 5});
console.log(feedback);

