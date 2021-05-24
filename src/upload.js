import firebase from "./config";
const Upload = () => {
  const onChange = (e) => {
    const file = e.target.files[0];
    console.log(file);
    const storageRef = firebase.storage().ref("Resume/");
    const fileRef = storageRef.child(file.name);
    fileRef.put(file).then(() => {
      console.log("Uploaded a file");
    });
  };

  return <input type="file" onChange={onChange} />;
};

export default Upload;
