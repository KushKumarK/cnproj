import React, { useState, useEffect } from "react";

function saveAsFile({ blob, filename }) {
  // Step 1: Create Blob Object URL for that blob
  const url = URL.createObjectURL(blob);

  // Step 2: Trigger downloading the object using that URL
  const a = document.createElement("a");
  a.href = url;
  a.download = filename;
  a.click(); // triggering it manually
}

function getFile({ filename }) {
  fetch(`http://localhost:5000/getItem/${filename}`)
    .then((response) => response.blob())
    .then((blob) => {
      saveAsFile({ blob, filename });
    });
}

export default function FileList() {
  const [fileList, setList] = useState({});

  useEffect(() => {
    fetch("http://localhost:5000/getList", { method: "GET" })
      .then((response) => response.json())
      .then((fileList) => setList(fileList));
  }, []);

  return (
    <div>
      <ul>
        <div>
          {Object.values(fileList).map((data, idx) => (
            <li key={idx}>
              <a
                href="#"
                onClick={() => {
                  getFile({ filename: data });
                }}
              >
                {JSON.stringify(data)}
              </a>
            </li>
          ))}
        </div>
      </ul>
    </div>
  );
}
