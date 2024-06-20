## Get started

1. Install dependencies

   ```bash
   npm install
   ```

2. Start the app

   ```bash
    npx expo start --ios
   ```

## Replicating the Issue

1. Open up the app on IOS. The below display should appear.
   ![alt text](./images/expo-issue.png)
2. Add a picture to the device's photos library (save a photo using Safari etc.)
3. The app would refresh and the following change should be observed:

> Has Incremental Changes: true

The issue is that "Inserted Assets" would not be updated.

4. Repeat steps 2-3 but with deleting an image or updating an image (editing it etc.)
