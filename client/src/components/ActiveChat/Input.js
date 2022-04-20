import React, { useState, useRef } from "react";
import { FormControl, FilledInput, Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import FileCopyTwoTone from "@material-ui/icons/FileCopyTwoTone";
import axios from "axios";
import CancelOutlined from "@material-ui/icons/CancelOutlined";

const url = process.env.REACT_APP_URL;
const instance = axios.create();

const useStyles = makeStyles(() => ({
  root: {
    justifySelf: "flex-end",
    marginTop: 15,
  },
  input: {
    height: 70,
    backgroundColor: "#F4F6FA",
    borderRadius: 8,
    marginBottom: 20,
    position: "relative",
  },
  dialog: {
    position: "absolute",
    right: "10%",
    bottom: "35%",
  },
  color: {
    color: "gray",
    cursor: "pointer",
  },
  selected: {
    display: "flex",
    gap: 50,
  },
  cancel: {
    position: "absolute",
    cursor: "pointer",
  },
}));

const Input = ({ otherUser, conversationId, user, postMessage }) => {
  const classes = useStyles();
  const [text, setText] = useState("");
  const [file, setFile] = useState([]);

  const imageRef = useRef();

  const showOpenFileDialog = () => {
    imageRef.current.click();
  };

  const handleChange = (event) => {
    setText(event.target.value);
  };

  const cancel = (i) => {
    setFile(file.filter((item, index) => index !== i));
  };

  const upload = async (selectFile) => {
    var fd = new FormData();
    fd.append("upload_preset", "message_app");
    fd.append("file", selectFile);

    const headers = {
      "Content-Type": "test/plain",
    };

    const { data } = await instance.post(url, fd, { headers });
    setFile((files) => [...files, data.url]);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const form = event.currentTarget;

    const formElements = form.elements;
    // add sender user info if posting to a brand new convo, so that the other user will have access to username, profile pic, etc.
    if ((text !== "" && file !== []) || text || file) {
      const reqBody = {
        text: formElements.text.value,
        recipientId: otherUser.id,
        conversationId,
        sender: conversationId ? null : user,
        attachments: file,
      };

      await postMessage(reqBody);
    }
    setText("");
    setFile([]);
  };

  return (
    <form className={classes.root} onSubmit={handleSubmit}>
      <Box className={classes.selected}>
        {file &&
          file.map((img, index) => {
            return (
              <Box key={img}>
                <img
                  height={70}
                  src={img}
                  alt="selectedImgs"
                  style={{ position: "relative" }}
                />
                <CancelOutlined
                  className={classes.cancel}
                  onClick={() => cancel(index)}
                />
              </Box>
            );
          })}
      </Box>
      <FormControl fullWidth hiddenLabel>
        <FilledInput
          classes={{ root: classes.input }}
          disableUnderline
          placeholder="Type something..."
          value={text}
          name="text"
          onChange={handleChange}
        />
        <Box className={classes.dialog}>
          <FileCopyTwoTone
            className={classes.color}
            onClick={showOpenFileDialog}
          />
          <input
            type="file"
            id="file"
            ref={imageRef}
            style={{ display: "none" }}
            multiple
            onChange={(e) => upload(e.target.files[0])}
            onClick={(e) => (e.target.value = "")}
          />
        </Box>
      </FormControl>
    </form>
  );
};

export default Input;
