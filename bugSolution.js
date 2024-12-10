```javascript
const pipeline = [
  {
    $addFields: {
      parsedPrice: {
        $toDouble: "$price"
      }
    }
  },
  {
    $match: {
      parsedPrice: { $gt: 100 }
    }
  }
];

const result = await collection.aggregate(pipeline).toArray();
```