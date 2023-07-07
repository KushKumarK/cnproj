import Link from 'next/link';
import React from 'react';
import { Poppins, Raleway } from "next/font/google";

const rale = Raleway({subsets:['latin']});
const poppins = Poppins({weight: ['100','200','400','800'], subsets: ['latin']});

class FTPUpload extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      imageURL: '',
    };

    this.handleUploadImage = this.handleUploadImage.bind(this);
  }

  handleUploadImage(ev) {
    ev.preventDefault();

    const data = new FormData();
    data.append('file', this.uploadInput.files[0]);
    data.append('filename', this.fileName.value);

    fetch('http://localhost:5000/upload', {
      method: 'POST',
      body: data,
    }).then((response) => {
      response.text().then((body) => {
        this.setState({ imageURL: `http://localhost:5000/${body}` });
      });
    });
  }

  render() {
    return (
      <div className=' items-center '>
      <form onSubmit={this.handleUploadImage} className=' bg-black grid justify-center m-5 align-middle rounded-lg drop-shadow-[0_3px_3px_rgba(25,25,25,0.30)] border-spacing-4 p-2 justify-evenly'>
        <div className=' m-4 w-full'>
          <input ref={(ref) => { this.fileName = ref; }} type="text" placeholder="Enter the desired name of file" className={`${rale.className} text-lg rounded-full p-2 h-8 w-full text-black`}/>
        </div>
        <div className=' m-4 mr-0 w-full h-7 items-center'>
          <label className={`${poppins.className} font-semibold block mb-4 text-gray-900 text-4xl dark:text-white`}>UPLOAD FILE</label>
          <div className=' items-center grid'>
          <input ref={(ref) => { this.uploadInput = ref; }} type="file" className={`${rale.className} file:${rale.className} file:bg-sky-900 file:rounded-full file:border-0 file:p-9 w-screen file:text-2xl file:text-slate-300 text-sm text-gray-900 border border-gray-300 rounded-full cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400`} />
          <button className={`${poppins.className} mt-12 bg-slate-400 p-3 hover:bg-slate-800 hover:shadow-sm hover:shadow-slate-400 rounded-full w-screen mr-0 `}>Upload</button></div>
        </div>
      </form></div>
    );
  }
}

export default FTPUpload;