export default function imageHasBeenEdited(images, selectedCollectionId) {
  for (let i = 0; i < images.allIds.length; i += 1) {
    console.log(images.byId[images.allIds[i]]);
    if (images.byId[images.allIds[i]].edited) {
      console.log(images.byId[images.allIds[i]].edited);
      console.log(images.byId[images.allIds[i]].edited[selectedCollectionId]);
      if (images.byId[images.allIds[i]].edited[selectedCollectionId]) {
        return true;
      }
    }
  }
  return false;
}
