# Firebase: Accessing Document Snapshot Property Before Data Load

This repository demonstrates a common error when using the Firebase SDK: attempting to access a property of a document snapshot before it has fully loaded.  This can result in undefined errors.

## Problem:

The code attempts to access the `name` property of a document snapshot immediately after fetching it. Because the data retrieval is asynchronous, the `name` property might be undefined at that moment, causing errors.

## Solution:

The solution uses `.then()` to ensure that the data is fully loaded before accessing the `name` property.  Alternatively, async/await can be used for cleaner asynchronous handling.

## Setup:

1. Install Firebase:
   ```bash
   npm install firebase
   ```

2. Configure your Firebase project (replace with your project details).

3. Run the code using `node bug.js` and then `node bugSolution.js`.