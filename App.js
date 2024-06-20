import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import * as MediaLibrary from "expo-media-library";
import { useEffect, useState } from "react";


export default function App() {

  const [deletedAssets, setDeletedAssets] = useState([]);
  const [insertedAssets, setInsertedAssets] = useState([]);
  const [updatedAssets, setUpdatedAssets] = useState([]);
  const [hasIncrementalChanges, setHasIncrementalChanges] = useState(false);
  useEffect(() => {
    const listener = (event) => {
      if (event.hasIncrementalChanges) {
        setHasIncrementalChanges(event.hasIncrementalChanges);
        setDeletedAssets(event?.deletedAssets);
        setInsertedAssets(event?.insertedAssets);
        setUpdatedAssets(event?.updatedAssets);
        console.log(" ------------------- ");
        console.log("hasIncrementalChanges: " + event.hasIncrementalChanges);
        console.log("deletedAssets: ", event?.deletedAssets);
        console.log("insertedAssets: ", event?.insertedAssets);
        console.log("updatedAssets: ", event?.updatedAssets);
      }
    }
    const sub = MediaLibrary.addListener(listener);
    return () => {
      MediaLibrary.removeSubscription(sub);
    };
  }, []
  );

  return (
    <View style={styles.container}>
      <Text>Has Incremental Changes: {JSON.stringify(hasIncrementalChanges)}</Text>
      <Text>Deleted Assets: {JSON.stringify(deletedAssets)}</Text>
      <Text>Inserted Assets: {JSON.stringify(insertedAssets)}</Text>
      <Text>Updated Assets: {JSON.stringify(updatedAssets)}</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
